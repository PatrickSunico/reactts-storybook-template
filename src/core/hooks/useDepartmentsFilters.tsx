import { useEffect, useState } from "react";
import { getDepartmentsList } from "../services/data.service";

// Data Types
import { Department } from "../../components/ant-design/Datagrid/types/DataGridTypes";

export const useDepartmentsFilter = () => {
  const [departmentsFilter, setDepartmentsFilter] = useState<Department[]>([]);
  //   const [isLoading, setIsLoading] = useState<boolean>(false);
  //   const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDepartmentFilters = async () => {
      try {
        // Fetch the filters from the API
        const response = await getDepartmentsList();
        setDepartmentsFilter(response);
      } catch (error) {
        console.error("Error fetching filters:", error);
      }
    };

    if (departmentsFilter.length === 0) {
      fetchDepartmentFilters();
    }
  }, [setDepartmentsFilter, departmentsFilter.length]);

  return departmentsFilter;
};
