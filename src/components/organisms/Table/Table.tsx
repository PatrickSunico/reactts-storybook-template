import React, { useState } from "react";
import { Space, Table, Popconfirm } from "antd";
import { Button } from "../../atoms/atomIndex";

const { Column, ColumnGroup } = Table;

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

export const TableComponent = () => {
  //   const [dataSource, setDataSource] = useState<TableProps[]>(data);
  const [dataSource, setDataSource] = useState(data);

  const handleDelete = (key: React.Key): void => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
    // console.log(e.target.value);
  };

  //   render: (text, record) => (
  //     <Button onClick={() => handleDelete(r ecord)}>Delete</Button>
  //   ),

  return (
    <Table dataSource={data} pagination={false}>
      <Column title="#" dataIndex="id" />
      <Column title="CFSResponderId" dataIndex="CFSResponderId" />
      <Column
        title="Action"
        dataIndex="key"
        render={(_, record: { key: React.Key }) =>
          data.length >= 1 ? (
            <Popconfirm
              title="Are you sure you want to delete"
              onConfirm={() => handleDelete(record.key)}
            >
              <Button variant="btn-danger" className="mx-2 my-2">
                Delete
              </Button>
            </Popconfirm>
          ) : null
        }
      />
    </Table>
  );
};
