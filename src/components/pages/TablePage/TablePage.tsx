import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import DataService from "../../../core/services/data.service";
import { TableOrganism } from "../../organisms/organismIndex";
// Recoil
import {
  tableAtomState,
  tableColumnAtomState,
} from "../../../core/recoil/atomState/tableState";

// export interface TableProps {
//   key: React.Key;
//   id: number;
//   CFSResponderId: number;
//   data: [];
// }

export interface serviceType {
  type: "pendingCFS" | "activeCFS";
}

export const TablePage = ({ type }: serviceType) => {
  const [data, setData] = useRecoilState(tableAtomState);
  const tableColumns = useRecoilValue(tableColumnAtomState);

  useEffect(() => {
    const fetchData = async (type: string) => {
      try {
        const response = await DataService.getAllData(type);
        setData((prevState) => ({
          ...prevState,
          data: response,
        }));
        // setDefaultTable((prevState) => ({
        //   ...prevState,
        //   data: response,
        // }));
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchData(type);
  }, [type, setData]);

  // console.log(defaultTable);

  return <TableOrganism dataSource={data} columns={tableColumns} />;
};
