import React, { useState } from "react";

// Ant Design
import { Input, Tag } from "antd";
import { ColumnType } from "antd/lib/table/interface";
import { SearchOutlined } from "@ant-design/icons";

// DataGridTypes
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
    title: "Departments",
    dataIndex: "departments",
    key: "departments",

    render: (_, { departments }) => (
      <>
        {departments.map((department) => {
          let color = department.length > 5 ? "geekblue" : "green";
          if (department === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={department}>
              {department.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },

  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    // render: () => <Button variant="btn-danger">Close CFS</Button>,
  },
  {},
  // Additional columns...
];
