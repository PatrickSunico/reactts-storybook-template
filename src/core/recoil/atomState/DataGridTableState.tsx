import { atom } from "recoil";
import { DataSourceItem } from "../../../components/ant-design/Datagrid/types/DataGridTypes";

export const dataGridAtomState = atom<Array<DataSourceItem>>({
  key: "dataGridAtomState",
  default: [],
});
