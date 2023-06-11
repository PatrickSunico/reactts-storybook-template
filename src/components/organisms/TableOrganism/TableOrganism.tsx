import React from "react";
import { Table } from "antd";
const { Column } = Table;

import { TableColumn } from "../../molecules/TableColumn/TableColumn";
import { Button } from "../../atoms/atomIndex";

// Recoil
import {
  TableDataProps,
  TableColumnProps,
} from "../../../core/recoil/atomState/tableState";

import "./TableOrganism.css";

type Props = {
  dataSource: {
    data: TableDataProps[];
  };

  columns: TableColumnProps[];
};

// dataSource: Props,
// columns: TableColumnProps[],

export const TableOrganism = ({ dataSource: { data }, columns }: Props) => {
  const handleDelete = (key: React.Key) => {
    // Handle Delete
  };

  // colorizedRow
  const colorizedRow = (_: unknown, index: number) => {
    return index % 2 === 0
      ? "table-row-odd no-hover"
      : "table-row-even no-hover";
  };

  return (
    data && (
      <Table dataSource={data} rowClassName={colorizedRow}>
        <TableColumn columns={columns} />
        {/* <Column title="#" dataIndex="id" />
        <Column title="CFSResponderId" dataIndex="CFSResponderId" />
        <Column
          title="Action"
          dataIndex="key"
          render={(_: unknown, record: { key: React.Key }) =>
            dataSource.data.length >= 1 ? (
              <Button
                variant="btn-danger"
                className="mx-2 my-2"
                onClick={() => handleDelete(record.key)}
              >
                Delete
              </Button>
            ) : null
          }
        /> */}
      </Table>
    )
  );
};
