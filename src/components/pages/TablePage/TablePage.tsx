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
import type { InputRef, Input } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import Highlighter from "react-highlight-words";

export const TablePage = (cfsType: ServiceType) => {
  // Main Atom State
  const [dataSource, setDataSource] = useRecoilState(tableAtomState);
  // Column Atom
  const [tableColumns, setTableColumns] = useRecoilState(tableColumnAtomState);

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
  // const [searchText, setSearchText] = useState("");
  // const [searchedColumn, setSearchedColumn] = useState<string>("");
  // const searchInput = useRef<InputRef>(null);

  // type DataIndex = keyof TableDataProps;

  // const handleSearch = (
  //   selectedKeys: string[],
  //   confirm: (param?: FilterConfirmProps) => void,
  //   dataIndex: DataIndex,
  // ) => {
  //   confirm();
  //   setSearchText(selectedKeys[0]);
  //   setSearchedColumn(dataIndex);
  // };

  // const handleReset = (clearFilters: () => void) => {
  //   clearFilters();
  //   setSearchText("");
  // };

  // const [searchText, setSearchText] = useState<string>("");
  // const [searchedColumn, setSearchedColumn] = useState<string>("");

  // const handleSearch = (
  //   selectedKeys: React.Key[],
  //   confirm: () => void,
  //   dataIndex: string,
  // ) => {
  //   confirm();
  //   setSearchText(selectedKeys[0] as string);
  //   setSearchedColumn(dataIndex);
  // };

  // const handleReset = (clearFilters: () => void) => {
  //   clearFilters();
  //   setSearchText("");
  //   setSearchedColumn("");
  // };

  // interface filterMethods {
  //   setSelectedKeys: () => void;
  //   selectedKeys: React.Key[];
  //   confirm: () => void;
  //   clearFilters: () => void;
  // }

  // const filterDropDown = ({
  //   setSelectedKeys,
  //   selectedKeys,
  //   confirm,
  //   clearFilters,
  // }: filterMethods) => {
  //   <div style={{ padding: 8 }}>
  //     <Input
  //       placeholder={`Search ${columnName}`}
  //       value={selectedKeys[0]}
  //       onChange={(e) =>
  //         setSelectedKeys(e.target.value ? [e.target.value] : [])
  //       }
  //       onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //       style={{ width: 188, marginBottom: 8, display: "block" }}
  //     />
  //     <Button
  //       variant="btn-primary"
  //       onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //       size="small"
  //       style={{ width: 90, marginRight: 8 }}
  //     >
  //       Search
  //     </Button>
  //     <Button
  //       variant="btn-primary"
  //       onClick={() => handleReset(clearFilters)}
  //       size="small"
  //       style={{ width: 90 }}
  //     >
  //       Reset
  //     </Button>
  //   </div>;
  // };

  // const getColumnSearchProps = (dataIndex: string, columnName: string) => ({
  //   filterDropdown: ({

  //   })
  // });

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
    />
  );
};
