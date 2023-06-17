// Ant Design
import { Input, Tag } from "antd";
import { ColumnType } from "antd/lib/table/interface";

// DataGridTypes
import { DataSourceItem, CustomFilterDropdownProps } from "./DataGridTypes";

import { DataGridFilterDropdown } from "./DataGridFilterDropdown";
import { SearchOutlined } from "@ant-design/icons";

export const DataGridColumns: ColumnType<DataSourceItem>[] = [
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
    filterDropdown: DataGridFilterDropdown,
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
  // Additional columns...
];
