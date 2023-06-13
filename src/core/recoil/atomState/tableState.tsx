import { atom } from "recoil";
import { DataSource } from "../../../types/Table/TableTypes";
import {
  TableDataProps,
  TableColumnProps,
} from "../../../types/Table/TableTypes";

export const tableColumnAtomState = atom<TableColumnProps[]>({
  key: "tableColumnAtomState",
  default: [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    { title: "CFSResponderId", dataIndex: "CFSResponderId", key: "id" },
    { title: "status", dataIndex: "status", key: "id" },
    { title: "Action", dataIndex: "Action", key: "id" },
  ],
});

export const tableAtomState = atom<DataSource<TableDataProps> | undefined>({
  key: "tableAtomState",
  default: undefined,
});
