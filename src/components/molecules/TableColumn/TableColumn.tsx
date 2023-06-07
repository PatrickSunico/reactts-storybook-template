import React from "react";
import { Table } from "antd";
const { Column } = Table;

import "./TableColumn.css";

interface TableColumnProps {
  columns: Array<Column>;
}

interface Column {
  title: string;
  dataIndex: number;
  key: number;
}

export const TableColumn: React.FC<TableColumnProps> = ({ columns }) => {
  return (
    <>
      {columns.map((column) => (
        <Column
          key={column.dataIndex}
          title={column.title}
          dataIndex={column.dataIndex}
        />
      ))}
    </>
  );
};
