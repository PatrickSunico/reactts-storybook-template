import { atom } from "recoil";

interface TableState {
  CFSResponderId: number;
  index: number;
}

interface CFSState {
  cfs: TableState[]; // Type that is a union
}

export const tableStateAtom = atom<CFSState>({
  key: "tableStateAtom",
  default: {
    cfs: [],
  },
});
