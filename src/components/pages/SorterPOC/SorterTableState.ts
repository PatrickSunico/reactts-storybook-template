import { atom } from "recoil";
import { TableDataProps, FilterProps, SorterProps } from "./SorterTypes";

export const tableDataState = atom<TableDataProps[]>({
  key: "tableDataState",
  default: [],
});

export const filterState = atom<FilterProps>({
  key: "filterState",
  default: {
    searchText: "",
    status: null,
  },
});

export const sorterState = atom<SorterProps>({
  key: "sorterState",
  default: {
    columnKey: "",
    order: null,
  },
});
