import React, { useState } from "react";
import { Table, Input } from "antd";
import { useRecoilState } from "recoil";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "../../atoms/atomIndex";

// import { columnsState } from "./recoilAtoms";

import { atom } from "recoil";

interface Column {
  title: string;
  dataIndex: string;
  key: string;
}

interface DataItem {
  key: string;
  column1: string;
  column2: string;
}

export const columnsState = atom<Column[]>({
  key: "columnsState",
  default: [
    {
      title: "Column 1",
      dataIndex: "column1",
      key: "column1",
    },
    {
      title: "Column 2",
      dataIndex: "column2",
      key: "column2",
    },
    // Add more columns as needed
  ],
});

interface Record {
  key: string;
  columnName: string;
}

const dataSource: DataItem[] = [
  { key: "1", column1: "Value 1", column2: "Value 2" },
  { key: "2", column1: "Value 3", column2: "Value 4" },
];

const SearchPOCTable: React.FC = () => {
  const [columns, setColumns] = useRecoilState(columnsState);
  const [searchText, setSearchText] = useState<string>("");
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

  const getColumnSearchProps = (dataIndex: string, columnName: string) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${columnName}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          variant="btn-primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          variant="btn-primary"
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <div style={{ marginTop: 5 }}>
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      </div>
    ),
    onFilter: (value: string, record: Record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    filteredValue: searchedColumn === dataIndex ? [searchText] : null,
    onFilterDropdownOpenChange: (visible: boolean) => {
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
    },
  });

  //   const columnsConfig = columns.map((column) => ({
  //     ...column,
  //     ...getColumnSearchProps(column.dataIndex, column.title),
  //   }));

  const columnsConfig = columns.map((column) =>
    column.dataIndex === "column1"
      ? {
          ...column,
        }
      : {
          ...column,
          ...getColumnSearchProps(column.dataIndex, column.title),
        },
  );

  return (
    <div>
      <Table dataSource={dataSource} columns={columnsConfig} />
    </div>
  );
};

export default SearchPOCTable;
