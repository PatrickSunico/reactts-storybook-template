import { useEffect, useState } from "react";
import { getDepartmentsList } from "../services/data.service";

// Data Types
import { Department } from "../../components/ant-design/Datagrid/types/DataGridTypes";

const useFetchDepartments = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const data
  //         } catch(error) {

  //         }
  //     }
  //   }, []);
};
