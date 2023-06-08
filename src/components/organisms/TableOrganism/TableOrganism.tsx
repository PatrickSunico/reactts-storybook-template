import React from "react";
import { Table } from "antd";
const { Column } = Table;

import { TableColumn } from "../../molecules/TableColumn/TableColumn";
import { Button } from "../../atoms/atomIndex";

import "./TableOrganism.css";

export interface TableDataProps {
  key: number;
  id: number;
  CFSResponderId: number;
  dataSource: {
    data: [];
  };
}

type Props = {
  dataSource: {
    data: TableDataProps[];
  };
};

export const TableOrganism = ({ dataSource: { data } }: Props) => {
  console.log(data);
  const handleDelete = (key: React.Key) => {
    // Handle Delete
  };

  // colorizedRow
  const colorizedRow = (_: unknown, index: number) => {
    return index % 2 === 0 ? "table-row-odd" : "table-row-even";
  };

  return (
    data && (
      <Table dataSource={data}>
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
    )

    // <Table dataSource={data}></Table>
    // <Table dataSource={data} pagination={false} rowClassName={colorizedRow}>
    // <Column title="#" dataIndex="id" />
    // <Column title="CFSResponderId" dataIndex="CFSResponderId" />
    // <Column
    //   title="Action"
    //   dataIndex="key"
    //   render={(_: unknown, record: { key: React.Key }) =>
    //     data.length >= 1 ? (
    //       <Button
    //         variant="btn-danger"
    //         className="mx-2 my-2"
    //         onClick={() => handleDelete(record.key)}
    //       >
    //         Delete
    //       </Button>
    //     ) : null
    //   }
    // />
    // </Table>
  );
};
