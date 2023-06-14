// Api Service Type
export interface ServiceType {
  cfsType: string;
}

// Table Data Type
export interface TableDataProps {
  title: string;
  dataIndex: string;
  key: string;
  id: number;
  CFSResponderId: number;
  status: boolean;
  departments: [string];
}

// Table Columns Type

export interface TableColumnProps {
  title: string;
  dataIndex: string;
  key: string;
  id: number;
  CFSResponderId: number;
  status: boolean;
  departments: [string];
  render?: (
    text: unknown | string,
    record: object,
    index: number,
  ) => JSX.Element | void;
}

// Datasource Prop Destructured
export interface DataSource<T> {
  data: T[];
}
