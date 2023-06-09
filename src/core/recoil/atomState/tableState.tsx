import { atom } from "recoil";

// Table Columns Type
export interface TableColumnProps {
  title: string;
  dataIndex: string;
}

export const tableColumnAtomState = atom<TableColumnProps[]>({
  key: "tableColumnAtomState",
  default: [
    { title: "id", dataIndex: "id" },
    { title: "CFSResponderId", dataIndex: "CFSResponderId" },
    { title: "Action", dataIndex: "Action" },
  ],
});

// Table Data Type
export interface TableDataProps {
  key: number;
  id: number;
  CFSResponderId: number;
  data: [];
}

export const tableAtomState = atom<TableDataProps[]>({
  key: "tableAtomState",
  default: [],
});
