// Ant Design
import { Tag } from "antd";
import { ColumnType } from "antd/lib/table/interface";
import { SearchOutlined } from "@ant-design/icons";

// DataGridTypes
import { DataSourceItem } from "../types/DataGridTypes";

// Filter Components
import { DataGridSearchFilter } from "../molecules/DataGirdSearchFilter/DataGridSearchFilter";

import { CustomPopConfirm } from "../../CustomPopConfirm/CustomPopConfirm";
import { DataGridDepartments } from "../molecules/DataGridDepartments/DataGridDepartments";

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
    filterDropdown: DataGridSearchFilter,
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
    render: (_, { status, departments }) => (
      <DataGridDepartments status={status} departments={departments} />
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    shouldCellUpdate: (record, prevRecord) => {
      // Deep Compare
      const rowContentNotChanged =
        JSON.stringify(record) === JSON.stringify(prevRecord);
      return rowContentNotChanged ? false : true;
    },
    render: (status: boolean) => (status ? "Closed" : "Active"),
  },
  {
    title: "Group",
    dataIndex: "group",
    key: "group",
    // render: (_, groups) => groips,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (_, record) => (
      <CustomPopConfirm
        title="Are you sure you want to close this CFS?"
        type="primary"
        danger={true}
        buttonMsg="Close CFS"
        record={record}
      />
    ),
  },
  // Additional columns...
];
