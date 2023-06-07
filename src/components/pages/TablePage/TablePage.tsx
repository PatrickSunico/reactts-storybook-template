import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import DataService from "../../../core/services/data.service";
import { tableStateAtom } from "../../../core/recoil/atomState/tableState";
import { TableOrganism } from "../../organisms/organismIndex";

import { formatDataToObject } from "../../../core/utils/dataMapper";

export interface TableProps {
  key: React.Key;
  id: number;
  CFSResponderId: number;
}

export interface serviceType {
  type: "pendingCFS" | "activeCFS";
}

export interface serviceMethod {
  type: "closeCFS" | "rejectCFS";
}

export const TablePage = ({ type }: serviceType) => {
  const [defaultTable, setDefaultTable] = useRecoilState(tableStateAtom);

  // const fetchData = async (type: serviceType) => {
  //   try {
  //     const response = await DataService.getAllData(type);
  //     // const formattedArray = formatDataToObject(response.data);

  //     // Set Data Table
  //     setDefaultTable((prevState) => ({
  //       ...prevState,
  //       data: response,
  //     }));

  //     return response;
  //   } catch (error) {
  //     console.error("Error fetching todos:", error);
  //   }
  // };

  useEffect(() => {
    const fetchData = async (type: string) => {
      try {
        const response = await DataService.getAllData(type);
        // const formattedArray = formatDataToObject(response.data);

        // Set Data Table
        setDefaultTable((prevState) => ({
          ...prevState,
          data: response,
        }));
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchData(type);
  }, [type, setDefaultTable]);

  // Render Skeleton on Load
  return <TableOrganism dataSource={defaultTable} />;

  // const fetchData = (type: "pendingCFS" | type: "activeCFS") => {
  //   // DataService.getAllPosts(type);
  // }
  // const [dataSource, setDataSource] = useRecoilState()
  // const [dataSource, setDataSource] = useState<TableProps[]>(closedCFSData);
};
