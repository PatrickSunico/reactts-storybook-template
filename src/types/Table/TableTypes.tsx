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
  departments: string[];
}

// Table Columns Type

export interface TableColumnProps {
  title: string;
  dataIndex: string;
  key: string;
  filterDropdown?: () => JSX.Element;
  filterIcon?: () => JSX.Element;
  onFilter?: () => boolean;
}

// Datasource Prop Destructured
export interface DataSource<T> {
  data: T[];
}
