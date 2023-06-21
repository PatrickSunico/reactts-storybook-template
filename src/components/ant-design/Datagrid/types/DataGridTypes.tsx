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

export interface Groups {
  id: number;
  group: string;
}

// Filter Types

export interface FilterItem<T> {
  id: number;
  value: T;
}

// Filter Methods
export interface FilterProps<T> {
  selectedKeys: React.Key[];
  setSelectedKeys: (selectedKeys: React.Key[]) => void;
  confirm: () => void;
  clearFilters?: () => void;
  filters: FilterItem<T>[];
}

// Datasource Prop Destructured
export interface DataSource<T> {
  data: T[];
}
