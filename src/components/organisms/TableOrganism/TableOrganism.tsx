import { Table, Skeleton } from "antd";
const { Column } = Table;

// Recoil
import {
  TableDataProps,
  TableColumnProps,
  DataSource,
} from "../../../types/Table/TableTypes";

export interface Props {
  dataSource?: DataSource<TableDataProps>;
  loading: boolean;
  columns: TableColumnProps[];
  // renderSort: (a: TableDataProps, b: TableDataProps) => number;
  // colorizedRow: (_: unknown, index: number) => string;
  // renderStatus: (status: boolean) => JSX.Element;
  // renderActionButton: (id: number, rowProp: TableDataProps) => JSX.Element;
}

export const TableOrganism = ({ dataSource, loading, columns }: Props) => {
  return (
    <Table
      loading={loading}
      dataSource={dataSource?.data}
      pagination={false}
      columns={columns}
    />
  );
};
