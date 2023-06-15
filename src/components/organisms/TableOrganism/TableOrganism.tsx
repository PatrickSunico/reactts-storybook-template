import { Table, Skeleton } from "antd";
const { Column } = Table;

// Recoil
import {
  TableDataProps,
  TableColumnProps,
  DataSource,
} from "../../../types/Table/TableTypes";

import "./TableOrganism.css";

import { FilterMethods, Record } from "../../pages/TablePage/TablePage";

export interface Props {
  dataSource?: DataSource<TableDataProps>;
  loading: boolean;
  columns: TableColumnProps[];
  renderSort: (a: TableDataProps, b: TableDataProps) => number;
  colorizedRow: (_: unknown, index: number) => string;
  renderStatus: (status: boolean) => JSX.Element;
  renderActionButton: (id: number, rowProp: TableDataProps) => JSX.Element;
  filterDropDown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
    dataIndex,
    columnName,
  }: FilterMethods) => JSX.Element;
  filterIcon: (filtered: boolean) => JSX.Element;
  onFilter: (value: string, record: Record, dataIndex: string) => boolean;
  filteredValue: (dataIndex: string) => string[] | null;
  onFilterDropdownOpenChange: (visible: boolean) => void;
}

export const TableOrganism = ({
  dataSource,
  loading,
  columns,
  renderSort,
  renderStatus,
  colorizedRow,
  renderActionButton,
  filterDropDown,
  filterIcon,
  onFilter,
  filteredValue,
  onFilterDropdownOpenChange,
}: Props) => {
  return (
    <Table
      dataSource={dataSource?.data}
      rowClassName={colorizedRow}
      pagination={false}
    >
      <Column
        title="#"
        dataIndex="id"
        sorter={(a: TableDataProps, b: TableDataProps) => renderSort(a, b)}
      />
      <Column
        title="CFSResponderId"
        dataIndex="CFSResponderId"
        filterDropdown={filterDropDown}
        filteredValue={filteredValue}
        filterIcon={filterIcon}
        onFilterDropdownOpenChange={onFilterDropdownOpenChange}
      />
      <Column title="Status" dataIndex="status" render={renderStatus} />
      <Column title="Action" dataIndex="key" render={renderActionButton} />
    </Table>
  );
};
