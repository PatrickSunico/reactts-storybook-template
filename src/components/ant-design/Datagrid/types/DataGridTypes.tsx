import React from "react";

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

// Filter Types

// Departments List
export interface Department {
  id: number;
  department: string;
}

export interface Status {
  id: number;
  currentStatus: string;
}

export interface Groups {
  id: number;
  group: string;
}

// Filter Methods
export interface FilterProps {
  selectedKeys: React.Key[];
  setSelectedKeys: (selectedKeys: React.Key[]) => void;
  confirm: () => void;
  clearFilters?: () => void;
}

// Datasource Prop Destructured
export interface DataSource<T> {
  data: T[];
}
