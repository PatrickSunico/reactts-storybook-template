import React from "react";
import { useRecoilValue } from "recoil";
import { Table } from "antd";
const { Column } = Table;
import { Button } from "../../atoms/atomIndex";
// import { Button } from "../../atoms/atomIndex";

// Recoil
import {
  TableColumnProps,
  TableDataProps,
  tableColumnAtomState,
} from "../../../core/recoil/atomState/tableState";

import "./TableColumn.css";

interface Props {
  data: TableDataProps[];
  columns: TableColumnProps[];
}

export const TableColumn = () => {
  const tableColumns = useRecoilValue(tableColumnAtomState);
  // const handleDelete = (key: React.Key) => {};

  return (
    <></>
    // <>
    //   {columns.map((column) => (
    //     <Column
    //       key={column.dataIndex}
    //       title={column.title}
    //       dataIndex={column.dataIndex}
    //       render={(_: unknown, record: { key: React.Key }) =>
    //         data.length >= 1 ? (
    //           <Button
    //             variant="btn-danger"
    //             className="mx-2 my-2"
    //             onClick={() => handleDelete(record.key)}
    //           >
    //             Delete
    //           </Button>
    //         ) : null
    //       }
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
