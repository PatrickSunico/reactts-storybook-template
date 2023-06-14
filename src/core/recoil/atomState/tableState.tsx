import { atom } from "recoil";
import { Tag } from "antd";

import { DataSource } from "../../../types/Table/TableTypes";
import {
  TableDataProps,
  TableColumnProps,
} from "../../../types/Table/TableTypes";

import type { ColumnsType } from "antd/es/table";

import { Button } from "../../../components/atoms/atomIndex";

const columns: ColumnsType<TableColumnProps> = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "CFSResponderId",
    dataIndex: "CFSResponderId",
    key: "id",
  },
  {
    title: "Departments",
    dataIndex: "departments",
    key: "id",
    render: (_, { departments }) => (
      <>
        {departments.map((department) => {
          let color = departments.length > 5 ? "geekblue" : "green";
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
    title: "Status",
    dataIndex: "status",
    key: "id",
    render: (_: unknown, { status }) => (status ? "Done" : "In Progress"),
    // <Button variant="btn-danger" onClick={()=>}>Close CFS</Button>
  },
  {
    title: "Action",
    dataIndex: "Action",
    key: "id",
    render: (_: unknown, record, index) => (
      <Button variant="btn-danger" onClick={() => closeCFS(record.id)}>
        Close CFS
      </Button>
    ),
  },
];

export const tableColumnAtomState = atom<ColumnsType<TableColumnProps>>({
  key: "tableColumnAtomState",
  default: columns,
});

export const tableAtomState = atom<DataSource<TableDataProps> | undefined>({
  key: "tableAtomState",
  default: undefined,
});
