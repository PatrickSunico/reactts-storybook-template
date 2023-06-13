// Api Service Type
export interface ServiceType {
  cfsType: string;
}

// Table Data Type
export interface TableDataProps {
  key: string;
  id: number;
  CFSResponderId: number;
  status: boolean;
  departments: [string];
}

// Table Columns Type

// dataSource?: DataSource<TableDataProps>;

export interface TableColumnProps {
  title: string;
  dataIndex: string;
  key: string;
  // render?: (_: unknown, record: { departments: [string] }) => JSX.Element;
}

// Datasource Prop Destructured
export interface DataSource<T> {
  data: T[];
}
