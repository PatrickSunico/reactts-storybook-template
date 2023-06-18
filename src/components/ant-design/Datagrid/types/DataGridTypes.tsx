import type { FilterDropdownProps } from "antd/es/table/interface";

// CFS Api Service Type
export interface ServiceType {
  cfsType: string;
}

// DataSourceItem
export interface DataSourceItem {
  id: number;
  CFSResponderId: number;
  status: boolean;
  key: string;
  departments: [{ id: number; department: string }];
  groups: [{ id: number; group: string }];
}

// Filter Methods
export interface FilterProps extends FilterDropdownProps {
  setSelectedKeys: (selectedKeys: React.Key[]) => void;
  confirm: () => void;
  clearFilters?: () => void;
}

// Datasource Prop Destructured
export interface DataSource<T> {
  data: T[];
}
