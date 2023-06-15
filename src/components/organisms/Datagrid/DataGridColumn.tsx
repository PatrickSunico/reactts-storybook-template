import { Input } from "antd";
import React, { useState } from "react";
import { ColumnType } from "antd/lib/table/interface";
import { SearchOutlined } from "@ant-design/icons";

import { DataSourceItem, CustomFilterDropdownProps } from "./DataGridTypes";

export const CustomFilterDropdown: React.FC<CustomFilterDropdownProps> = ({
  setSelectedKeys,
  confirm,
}) => {
  const [value, setValue] = useState<string>("");

  const handleSearch = () => {
    setSelectedKeys(value ? [value] : []);
    confirm();
  };
  console.log(value);

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

// export const onSort = () => {
//   setSortOrder(order);
// }
export const columns: ColumnType<DataSourceItem>[] = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "CFSResponderId",
    dataIndex: "CFSResponderId",
    key: "CFSResponderId",
    sorter: (a, b) => a.CFSResponderId - b.CFSResponderId,
    filterDropdown: CustomFilterDropdown,
    filterIcon: (filtered) => (
      <div style={{ color: filtered ? "#1890ff" : undefined }}>
        <SearchOutlined />
      </div>
    ),
    onFilter: (value, record) =>
      record.CFSResponderId.toString()
        .toLowerCase()
        .includes(value.toString().toLowerCase()),
  },

  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },

  // Additional columns...
];
