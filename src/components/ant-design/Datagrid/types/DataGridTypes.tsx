import React from "react";
import type { ColumnFilterItem } from "antd/es/table/interface";

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

// Departments List
export interface Department {
  id: number;
  department: string;
}

// export interface FilterType {
//   id: number;
//   name: string;
// }

// Filter Methods
export interface FilterProps {
  setSelectedKeys: (selectedKeys: React.Key[]) => void;
  selectedKeys: React.Key[];
  confirm: () => void;
  clearFilters?: () => void;
}

// Datasource Prop Destructured
export interface DataSource<T> {
  data: T[];
}
