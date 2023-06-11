import React from "react";
import { atom } from "recoil";

// Table Columns Type
export interface TableColumnProps {
  title: string;
  dataIndex: string;
  key: React.Key;
}

export const tableColumnAtomState = atom<TableColumnProps[]>({
  key: "tableColumnAtomState",
  default: [
    { title: "Id", dataIndex: "id", key: "id" },
    { title: "CFSResponderId", dataIndex: "CFSResponderId", key: "id" },
    { title: "status", dataIndex: "status", key: "id" },
    { title: "Action", dataIndex: "Action", key: "id" },
  ],
});

// Table Data Type
export interface TableDataProps {
  id: number;
  CFSResponderId: number;
  status: boolean;
  key: number;
}

export const tableAtomState = atom<TableDataProps[]>({
  key: "tableAtomState",
  default: [],
});
