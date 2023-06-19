import { atom } from "recoil";
import {
  DataSourceItem,
  Department,
} from "../../../components/ant-design/Datagrid/types/DataGridTypes";

export const dataGridAtomState = atom<Array<DataSourceItem>>({
  key: "dataGridAtomState",
  default: [],
});

export const dataGridDepartmentsState = atom<Array<Department>>({
  key: "departmentsList",
  default: [],
});
