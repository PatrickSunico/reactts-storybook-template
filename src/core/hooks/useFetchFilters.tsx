import { useEffect, useState } from "react";
// Recoil
import { useRecoilState } from "recoil";
import { dataGridFiltersState } from "../recoil/atomState/DataGridTableState";

// Data Types
export const useFetchFilters = (getFiltersPromise: () => Promise<[]>) => {
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
      fetchFilters();
    }
  }, [getFiltersPromise, setFilters, filters.length]);

  return filters;
};
