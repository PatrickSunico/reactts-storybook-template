import React, { useState } from "react";
import { Table } from "antd";
import { Button } from "../../atoms/atomIndex";

const { Column } = Table;

import "./TableOrganism.css";

export interface TableProps {
  key: React.Key;
  id: number;
  CFSResponderId: number;
}

// Sample Data
const data: TableProps[] = [
  {
    key: 1,
    id: 1,
    CFSResponderId: 26919889,
  },
  {
    key: 2,
    id: 2,
    CFSResponderId: 26919889,
  },
  {
    key: 3,
    id: 3,
    CFSResponderId: 26919889,
  },
];

export const TableOrganism = () => {
  const [dataSource, setDataSource] = useState<TableProps[]>(data);

  const handleDelete = (key: React.Key): void => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  // colorizedRow
  const colorizedRow = (_: unknown, index: number) => {
    return index % 2 === 0 ? "table-row-odd" : "table-row-even";
  };

  return (
    <Table
      dataSource={dataSource}
      pagination={false}
      rowClassName={colorizedRow}
    >
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
