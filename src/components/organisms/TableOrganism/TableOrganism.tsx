import React from "react";
import { Table } from "antd";
import { Button } from "../../atoms/atomIndex";

const { Column } = Table;

import "./TableOrganism.css";

export interface TableProps {
  key: number;
  id: number;
  CFSResponderId: number;
}

type Props = {
  dataSource: TableProps[];
};

export const TableOrganism = ({ dataSource: { data } }: Props) => {
  const handleDelete = (key: React.Key) => {
    // Handle Delete
  };

  // colorizedRow
  const colorizedRow = (_: unknown, index: number) => {
    return index % 2 === 0 ? "table-row-odd" : "table-row-even";
  };

  return (
    <Table dataSource={data} pagination={false} rowClassName={colorizedRow}>
      <Column title="#" dataIndex="id" />
      <Column title="CFSResponderId" dataIndex="CFSResponderId" />
      <Column
        title="Action"
        dataIndex="key"
        render={(_: unknown, record: { key: React.Key }) =>
          data.length >= 1 ? (
            <Button
              variant="btn-danger"
              className="mx-2 my-2"
              onClick={() => handleDelete(record.key)}
            >
              Delete
            </Button>
          ) : null
        }
      />
    </Table>
  );
};
