import { useEffect, useState, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import DataService from "../../../core/services/data.service";
import { TableOrganism } from "../../organisms/organismIndex";

// Recoil
import {
  tableAtomState,
  tableColumnAtomState,
} from "../../../core/recoil/atomState/tableState";

import { Button } from "../../atoms/atomIndex";

// Types
import { ServiceType } from "../../../types/Table/TableTypes";
import { TableDataProps } from "../../../types/Table/TableTypes";

// Ant Design
import { SearchOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
import { Input, Space } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type {
  FilterConfirmProps,
  FilterDropdownProps,
} from "antd/es/table/interface";
import Highlighter from "react-highlight-words";

export interface FilterMethods extends FilterDropdownProps {
  setSelectedKeys: (e: React.Key[]) => void;
  selectedKeys: React.Key[];
  confirm: () => void;
  clearFilters: () => void;
  dataIndex: string;
  columnName: string;
}

export interface Record {
  key: string;
  columnName: string;
  [key: string]: string; //index signature
}

export const TablePage = (cfsType: ServiceType) => {
  // Main Atom State
  const [dataSource, setDataSource] = useRecoilState(tableAtomState);
  // Column Atom
  const tableColumns = useRecoilValue(tableColumnAtomState);

  // Skeleton Loader
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  useEffect(() => {
    const fetchData = async ({ cfsType }: ServiceType) => {
      try {
        setSkeletonLoading(true);
        const response = await DataService.getAllData(cfsType);
        setDataSource({ data: response });
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchData(cfsType);
  }, [cfsType, setDataSource]);

  // Search Method
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState<string>("");

  const handleSearch = (
    selectedKeys: React.Key[],
    confirm: () => void,
    dataIndex: string,
  ) => {
    confirm();
    setSearchText(selectedKeys[0] as string);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
    setSearchedColumn("");
  };

  // Passed Methods to Table Organism Columns
  const filterDropDown = ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
    dataIndex,
    columnName,
  }: FilterMethods) => (
    <div className="px-8 py-8">
      {console.log(columnName)}
      <Input
        placeholder={`Search ${columnName}`}
        value={selectedKeys[0]}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
        style={{ width: 188, marginBottom: 8, display: "block" }}
      />

      <Space>
        <Button
          variant="btn-primary"
          onClick={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
        >
          Search
        </Button>
        <Button
          onClick={() => clearFilters && handleReset(clearFilters)}
          variant="btn-primary"
        >
          Reset
        </Button>
        <Button
          variant="btn-primary"
          onClick={() => {
            confirm({ closeDropdown: false });
            setSearchText((selectedKeys as string[])[0]);
            setSearchedColumn(dataIndex);
          }}
        >
          Filter
        </Button>
        <Button
          variant="btn-primary"
          onClick={() => {
            close();
          }}
        >
          close
        </Button>
      </Space>
    </div>
  );

  const filterIcon = (filtered: boolean) => (
    <div style={{ marginTop: 5 }}>
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    </div>
  );

  const onFilter = (value: string, record: Record, dataIndex: string) => {
    return record[dataIndex]
      .toString()
      .toLowerCase()
      .includes(value.toLowerCase());
  };

  const filteredValue = (dataIndex: string) =>
    searchedColumn === dataIndex ? [searchText] : null;

  const onFilterDropdownOpenChange = (visible: boolean) => {
    if (visible) {
      setTimeout(() => {
        const input = document.querySelector(
          ".ant-table-filter-dropdown input",
        ) as HTMLInputElement;
        if (input) {
          input.focus();
        }
      });
    }
  };

  // End Search Method

  // Passed functions
  const colorizedRow = (_: unknown, index: number) => {
    return index % 2 === 0
      ? "table-row-odd no-hover"
      : "table-row-even no-hover";
  };

  const renderStatus = (status: boolean): JSX.Element => {
    return <>{status ? "Done" : "In Progress"}</>;
  };

  const renderStatusButton = (id: number, rowProp: TableDataProps) => {
    return dataSource?.data.length ?? 0 >= 1 ? (
      <Button
        variant="btn-accept"
        className="mx-2 my-2"
        onClick={() => markAsDone(id, rowProp.CFSResponderId)}
      >
        Mark as Done
      </Button>
    ) : (
      <></>
    );
  };

  const renderDeleteButton = (id: number, rowProp: TableDataProps) => {
    return dataSource?.data.length ?? 0 >= 1 ? (
      <Button
        variant="btn-danger"
        className="mx-2 my-2"
        onClick={() => closeCFS(id, rowProp.CFSResponderId)}
      >
        Close CFS
      </Button>
    ) : (
      <></>
    );
  };

  // Sort
  const renderSort = (a: TableDataProps, b: TableDataProps) => {
    return a.id - b.id;
  };

  // Internal Methods
  const markAsDone = (key: React.Key, CFSResponderId: number) => {
    setDataSource((prevDataSource) => ({
      // Spread Data source to retreive data and add TableDataProps as the Type
      ...(prevDataSource as { data: TableDataProps[] }),
      // Map the data to get the row
      data: (prevDataSource as { data: TableDataProps[] }).data.map((row) =>
        // Apply the status if the responderId mathces the selected Responder Id
        row.CFSResponderId === CFSResponderId ? { ...row, status: true } : row,
      ),
    }));
  };

  const closeCFS = (key: React.Key, CFSResponderId: number) => {
    setDataSource((prevDataSource) => ({
      ...(prevDataSource as { data: TableDataProps[] }),
      data: (prevDataSource as { data: TableDataProps[] }).data.filter(
        (row) => row.CFSResponderId !== CFSResponderId,
      ),
    }));
  };

  return (
    <TableOrganism
      dataSource={dataSource}
      loading={skeletonLoading}
      columns={tableColumns}
      renderSort={renderSort}
      colorizedRow={colorizedRow}
      renderStatus={renderStatus}
      renderActionButton={renderDeleteButton}
      filterDropDown={filterDropDown}
      filterIcon={filterIcon}
      onFilter={onFilter}
      filteredValue={filteredValue}
      onFilterDropdownOpenChange={onFilterDropdownOpenChange}
    />
  );
};
