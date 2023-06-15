export interface ServiceType {
  cfsType: string;
}

export interface DataSourceItem {
  id: number;
  CFSResponderId: number;
  status: boolean;
  key: string;
  departments: [string];
}

// Filter Methods
export interface CustomFilterDropdownProps {
  setSelectedKeys: (selectedKeys: React.Key[]) => void;
  confirm: () => void;
}

// Datasource Prop Destructured
export interface DataSource<T> {
  data: T[];
}
