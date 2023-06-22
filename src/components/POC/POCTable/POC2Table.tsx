import { Table, Input } from "antd";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ColumnType, SorterResult } from "antd/lib/table/interface";
import { SearchOutlined } from "@ant-design/icons";

interface DataSourceItem {
  key: string;
  name: string;
  age: number;
  id: number;
}

const dataSource: DataSourceItem[] = [
  { key: "1", name: "John Doe", age: 30, id: 1 },
  { key: "2", name: "Jane Smith", age: 28, id: 2 },
  // Additional data objects...
];

interface CustomFilterDropdownProps {
  setSelectedKeys: (selectedKeys: React.Key[]) => void;
  confirm: () => void;
}

const CustomFilterDropdown: React.FC<CustomFilterDropdownProps> = ({
  setSelectedKeys,
  confirm,
}) => {
  const [value, setValue] = useState<string>("");

  const handleSearch = () => {
    setSelectedKeys(value ? [value] : []);
    confirm();
  };

  return (
    <div style={{ padding: 8 }}>
      <Input
        placeholder="Search name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onPressEnter={handleSearch}
        style={{ width: 188, marginBottom: 8, display: "block" }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

interface SortableColumnProps<T> extends ColumnType<T> {
  onSort: (columnKey: string, order: "ascend" | "descend" | undefined) => void;
  sortOrder?: "ascend" | "descend" | undefined;
}

const SortableColumn: React.FC<SortableColumnProps<DataSourceItem>> = ({
  onSort,
  sortOrder,
  ...columnProps
}) => {
  const { dataIndex, sorter } = columnProps;

  const handleSortChange = (
    sorterResult: SorterResult<DataSourceItem> | SorterResult<DataSourceItem>[],
  ) => {
    if (Array.isArray(sorterResult)) {
      // Multiple columns sorting is not supported in this example
      return;
    }

    const { columnKey, order } = sorterResult;

    if (dataIndex === columnKey) {
      onSort(columnKey, order);
    }
  };

  return (
    <Table.Column<DataSourceItem>
      sorter={sorter}
      sortOrder={sortOrder}
      {...columnProps}
      onSort={handleSortChange}
    />
  );
};

const columns: SortableColumnProps<DataSourceItem>[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    filterDropdown: CustomFilterDropdown,
    filterIcon: (filtered) => (
      <div style={{ color: filtered ? "#1890ff" : undefined }}>
        <SearchOutlined />
      </div>
    ),
    onFilter: (value, record) =>
      record.name
        .toString()
        .toLowerCase()
        .includes(value.toString().toLowerCase()),
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: true,
  },
  // Additional columns...
];

export const POC2Table: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<"ascend" | "descend" | undefined>(
    undefined,
  );

  const handleSort = (
    columnKey: string,
    order: "ascend" | "descend" | undefined,
  ) => {
    setSortOrder(order);
  };

  return (
    <Table<DataSourceItem>
      dataSource={dataSource}
      columns={columns.map((column) => ({
        ...column,
        onSort: handleSort,
        sortOrder: column.key === "id" ? sortOrder : undefined,
      }))}
      pagination={false}
    />
  );
};
