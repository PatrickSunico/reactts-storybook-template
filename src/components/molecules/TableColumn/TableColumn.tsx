import React from "react";
import { Table } from "antd";
const { Column } = Table;

// Recoil
import { TableColumnProps } from "../../../core/recoil/atomState/tableState";

import "./TableColumn.css";

// interface ColumnType {
//   title: string;
//   dataIndex: number;
// }

// interface TableColumnProps {
//   columns: ColumnType[];
// }

export const TableColumn = (columns: TableColumnProps[]) => {
  console.log(columns);
  return (
    <></>
    // <>
    //   {columns.map((column) => (
    //     <Column
    //       key={column.dataIndex}
    //       title={column.title}
    //       dataIndex={column.dataIndex}
    //     />
    //   ))}
    // </>
  );
};

// export const TableColumn: React.FC<TableColumnProps> = (columns) => {
//   console.log(columns);
// return (
//   <></>
//   // <>
//   //   {columns.map((column) => (
//   //     <Column
//   //       key={column.dataIndex}
//   //       title={column.title}
//   //       dataIndex={column.dataIndex}
//   //     />
//   //   ))}
//   // </>
// );
// };
