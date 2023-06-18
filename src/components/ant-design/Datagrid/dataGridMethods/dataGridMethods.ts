//  import { DataSourceItem } from "../Datagrid/types/DataGridTypes";
import { DataSourceItem } from "../types/DataGridTypes";

// Highlights the row if the row is either active or closed
export const getRowClassName = (record: DataSourceItem, index: number) => {
  //   console.log(index);
  if (record.status === true) {
    return "closed-cfs";
  }
  return "active-cfs";
};
