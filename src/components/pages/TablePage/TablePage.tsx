import React, { useState } from "react";
import { TableOrganism } from "../../organisms/organismIndex";

export interface TableProps {
  key: React.Key;
  id: number;
  CFSResponderId: number;
}

export interface requestType {
  type: "pendingCFS" | "activeCFS";
}

export interface serviceMethod {
  type: "closeCFS" | "rejectCFS";
}

// Sample Data
// const closedCFSData: TableProps[] = [
//   {
//     key: 1,
//     id: 1,
//     CFSResponderId: 26919889,
//   },
//   {
//     key: 2,
//     id: 2,
//     CFSResponderId: 26919889,
//   },
//   {
//     key: 3,
//     id: 3,
//     CFSResponderId: 26919889,
//   },
// ];

export const TablePage = () => {
  // const [dataSource, setDataSource] = useState<TableProps[]>(closedCFSData);
};
