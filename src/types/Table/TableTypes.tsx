// Api Service Type
export interface ServiceType {
  cfsType: string;
}

// Table Data Type
export interface TableDataProps {
  id: number;
  CFSResponderId: number;
  status: boolean;
  key: string;
}

// Table Columns Type
export interface TableColumnProps {
  title: string;
  dataIndex: string;
  key: string;
}

// Datasource Prop Destructured
export interface DataSource<T> {
  data: T[];
}
