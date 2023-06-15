import { atom } from "recoil";
import { DataSource, DataSourceItem } from "./DataGridTypes";

// export const dataGridAtomState = atom<DataSource<DataSourceItem> | undefined>({
//   key: "dataGridAtomState",
//   default: undefined,
// });

export const dataGridAtomState = atom<Array<DataSourceItem>>({
  key: "dataGridAtomState",
  default: [],
});
