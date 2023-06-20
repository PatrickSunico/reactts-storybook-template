// Ant Design
import { ColumnType } from "antd/lib/table/interface";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
// DataGridTypes
import { DataSourceItem } from "../types/DataGridTypes";

// Filter Components
import { DataGridSearchFilter } from "../molecules/DataGridSearchFilter/DataGridSearchFilter";

import { CustomPopConfirm } from "../../CustomPopConfirm/CustomPopConfirm";
import { DataGridDepartments } from "../molecules/DataGridDepartments/DataGridDepartments";
import { DataGridCategoryFilter } from "../molecules/DataGridCategoryFilter/DataGridCategoryFilter";

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
    filterDropdown: (props) => (
      <DataGridSearchFilter
        setSelectedKeys={props.setSelectedKeys}
        selectedKeys={props.selectedKeys}
        confirm={props.confirm}
        clearFilters={props.clearFilters}
      />
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
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
    filterDropdown: (props) => (
      <DataGridCategoryFilter
        setSelectedKeys={props.setSelectedKeys}
        selectedKeys={props.selectedKeys}
        confirm={props.confirm}
        clearFilters={props.clearFilters}
      />
    ),
    // onFilter: (value, record) => record.departments.includes(value),
    onFilter: (value, record) => {
      const departmentIds = record.departments.map(
        (department) => department.id,
      );

      if (isNaN(Number(value))) {
        return false;
      }

      return departmentIds.includes(Number(value));
    },
    filterIcon: (filtered) => (
      <FilterOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
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
    // render: (_, groups) => groups,
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
