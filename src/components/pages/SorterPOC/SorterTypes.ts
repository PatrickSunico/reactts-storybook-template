// ServiceType
export interface ServiceType {
  cfsType: string;
}

// TableDataProps.ts
export interface TableDataProps {
  id: number;
  CFSResponderId: number;
  departments: string[];
  status: boolean;
  action?: () => void;
}

// FilterProps.ts
export interface FilterProps {
  searchText: string;
  status: boolean | null;
}

// SorterProps.ts
export interface SorterProps {
  columnKey: string;
  order: "ascend" | "descend" | null;
}
