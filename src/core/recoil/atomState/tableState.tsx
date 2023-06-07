import { atom } from "recoil";
import { TableProps } from "../../../components/organisms/TableOrganism/TableOrganism";

export const tableStateAtom = atom<TableProps[]>({
  key: "tableStateAtom",
  default: [],
});
