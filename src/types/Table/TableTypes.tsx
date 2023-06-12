// Api Service Type
export interface ServiceType {
  cfsType: string;
}

// Table Data Type
export interface TableDataProps {
  id: number;
  CFSResponderId: number;
  status: boolean;
  key: number;
}

// Table Columns Type
export interface TableColumnProps {
  title: string;
  dataIndex: string;
  key: React.Key;
}

// Datasource Prop Destructured
export interface DataSource<T> {
  data: T[];
}
