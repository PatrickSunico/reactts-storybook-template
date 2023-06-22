// Ant Design
import { ColumnType } from "antd/lib/table/interface";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
// DataGridTypes
import { DataSourceItem } from "../types/DataGridTypes";

// Filter Components
import { CustomPopConfirm } from "../../CustomPopConfirm/CustomPopConfirm";
import { DataGridSearchFilter } from "../molecules/Filters/DataGridSearchFilter/DataGridSearchFilter";
import { DataGridDepartments } from "../molecules/DataGridDepartments/DataGridDepartments";

// Filters
import { DataGridDepartmentsFilter } from "../molecules/Filters/DataGridDepartmentsFilter/DataGridDepartmentsFilter";
import { DataGridStatusFilter } from "../molecules/Filters/DataGridStatusFilter/DataGridDepartmentStatusFilter";
import { Badge } from "antd";

// Data Service
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
      <DataGridDepartmentsFilter
        setSelectedKeys={props.setSelectedKeys}
        selectedKeys={props.selectedKeys}
        confirm={props.confirm}
        clearFilters={props.clearFilters}
      />
    ),
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
    filterDropdown: (props) => (
      <DataGridStatusFilter
        setSelectedKeys={props.setSelectedKeys}
        selectedKeys={props.selectedKeys}
        confirm={props.confirm}
        clearFilters={props.clearFilters}
      />
    ),
    onFilter: (value, record) => {
      switch (value) {
        case "active":
          return record.status === false;
        case "closed":
          return record.status === true;
        default:
          return true;
      }
    },
    shouldCellUpdate: (record, prevRecord) => {
      // Deep Compare
      const rowContentNotChanged =
        JSON.stringify(record) === JSON.stringify(prevRecord);

      return rowContentNotChanged ? false : true;
    },
    filterIcon: (filtered) => (
      <FilterOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    render: (status: boolean) =>
      status ? (
        <Badge status="error" text="Closed" />
      ) : (
        <Badge status="success" text="Active" />
      ),
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
];
