import { useEffect } from "react";
// Recoil
import { useRecoilState } from "recoil";
import { dataGridFiltersState } from "../recoil/atomState/DataGridTableState";

// Data Types
import { FilterType } from "../../components/ant-design/Datagrid/types/DataGridTypes";
import { ColumnFilterItem } from "antd/es/table/interface";

export const useFetchFilters = (
  getFiltersPromise: () => Promise<FilterType[]>,
): FilterType[] => {
  const [filters, setFilters] = useRecoilState(dataGridFiltersState);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await getFiltersPromise();
        setFilters(response);
      } catch (error) {
        console.error("Error fetching filters:", error);
      }
    };

    // if filters.length === make a new api request if not just return what is currently available via the filters state
    if (filters.length === 0) {
      console.log(filters.length);
      fetchFilters();
    }
  }, [getFiltersPromise, setFilters, filters.length]);

  return filters;
};
