import { Table } from "antd";
const { Column } = Table;

// Recoil
import {
  TableDataProps,
  TableColumnProps,
  DataSource,
} from "../../../types/Table/TableTypes";

import "./TableOrganism.css";

export interface Props {
  dataSource?: DataSource<TableDataProps>;
  columns: TableColumnProps[];
  renderSort: (a: TableDataProps, b: TableDataProps) => number;
  colorizedRow: (_: unknown, index: number) => string;
  renderStatus: (status: boolean) => JSX.Element;
  renderActionButton: (id: number, rowProp: TableDataProps) => JSX.Element;
}

export const TableOrganism = ({
  dataSource,
  columns,
  renderSort,
  renderStatus,
  colorizedRow,
  renderActionButton,
}: Props) => {
  // const handleSort = (a: any, b: any) => {
  //   // Implement your sorting logic here
  //   return a.id - b.id;
  // };

  return (
    <Table
      dataSource={dataSource?.data}
      rowClassName={colorizedRow}
      pagination={false}
    >
      <Column
        title="#"
        dataIndex="id"
        sorter={(a: TableDataProps, b: TableDataProps) => renderSort(a, b)}
      />
      <Column title="CFSResponderId" dataIndex="CFSResponderId" />
      <Column title="Status" dataIndex="status" render={renderStatus} />
      <Column title="Action" dataIndex="key" render={renderActionButton} />
    </Table>
  );
};
