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
  dataSource: TableDataProps[];
  columns: TableColumnProps[];
};

export const TableOrganism = ({ dataSource, columns }: Props) => {
  const { data } = dataSource;
  const markAsDone = (CFSResponderId: number, key: React.Key) => {
    console.log(CFSResponderId);
    console.log(key);
  };

  // colorizedRow
  const colorizedRow = (_: unknown, index: number) => {
    return index % 2 === 0
      ? "table-row-odd no-hover"
      : "table-row-even no-hover";
  };

  return (
    <Table dataSource={data} rowClassName={colorizedRow} pagination={false}>
      <Column title="#" dataIndex="id" />
      <Column title="CFSResponderId" dataIndex="CFSResponderId" />
      <Column
        title="Status"
        dataIndex="status"
        render={(_: unknown, record: { status: boolean; key: React.Key }) => (
          <>{status ? "Done" : "Not Done"}</>
        )}
      />
      <Column
        title="Action"
        dataIndex="key"
        render={(
          _: unknown,
          record: { CFSResponderId: number; key: React.Key },
        ) =>
          data.length >= 1 ? (
            <Button
              variant="btn-accept"
              className="mx-2 my-2"
              onClick={() => markAsDone(record.CFSResponderId, record.key)}
            >
              Mark as Done
            </Button>
          ) : null
        }
      />
    </Table>
  );
};
