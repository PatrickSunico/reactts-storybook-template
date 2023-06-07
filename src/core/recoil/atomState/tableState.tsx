import { atom } from "recoil";
import { TableDataProps } from "../../../components/organisms/TableOrganism/TableOrganism";

export const tableStateAtom = atom<TableDataProps[]>({
  key: "tableStateAtom",
  default: [],
});
