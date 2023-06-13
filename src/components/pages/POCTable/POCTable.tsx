import React, { useState } from "react";
import { Table, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

interface Column {
  title: string;
  dataIndex: string;
  key: string;
  method?: () => void;
}

const dataSource: Person[] = [
  {
    key: "1",
    name: "John",
    age: 32,
    address: "New York",
  },
  {
    key: "2",
    name: "Jane",
    age: 28,
    address: "California",
  },
];

const columns: Column[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const POCTable = () => {
  const [searchText, setSearchText] = useState("");

  const [columnMethod, setColumnMethod] = useState([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredData = dataSource.filter((person) =>
    person.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleFilter = (value: string, record: any) => {
    // Implement your filter logic here
    return record.columnName === value;
  };
  const handleAddColumn = () => {
    const newColumn = {
      title: "Column Title",
      dataIndex: "columnName",
      onFilter: handleFilter,
    };

    setColumns((prevColumns) => [...prevColumns, newColumn]);
  };

  // onFilter: (value: string, record) => record.name.startsWith(value),

  // setColumnMethod((prevState) => (...prevState, )
  // setColumnMethod((prevDataSource) => ({
  //   ...prevDataSource,

  //   // // Spread Data source to retreive data and add TableDataProps as the Type
  //   // ...(prevDataSource as { data: TableDataProps[] }),
  //   // // Map the data to get the row
  //   // data: (prevDataSource as { data: TableDataProps[] }).data.map((row) =>
  //   //   // Apply the status if the responderId mathces the selected Responder Id
  //   //   row.CFSResponderId === CFSResponderId ? { ...row, status: true } : row,
  //   // ),
  // }));

  return (
    <>
      <Input
        placeholder="Search"
        prefix={<SearchOutlined />}
        value={searchText}
        onChange={handleSearch}
      />
      <Table dataSource={filteredData} columns={columns} />
    </>
  );
};

export default POCTable;
