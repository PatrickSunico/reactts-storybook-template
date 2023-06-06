import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import DataService from "../../../core/services/data.service";
import { activeCFS } from "../../../core/recoil/atomState/activeCFS";
import { pendingCFS } from "../../../core/recoil/atomState/pendingCFS";
import { tableStateAtom } from "../../../core/recoil/atomState/tableState";
import { TableOrganism } from "../../organisms/organismIndex";

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

// const fetchPosts = async (type: 'notice' | 'freeboard' | 'discuss') => {
//   const res = await fetch(`http://localhost:4000/${type}`);
//   return await res.json();
// };

// const fetchData = async (type: "pendingCFS" | "activeCFS") => {
//   // const res = await fetch(`http://localhost:4000/${type}`);
//   // return await res.json();
// };

// const fetchData = DataService.getAllPosts(type: 'pendingCFS'| type: 'activeCFS');

// const fetchData = DataService.getAllPosts(type: 'pendingCFS' | type: 'activeCFS');

// Sample Data
// const closedCFSData: TableProps[] = [
//   {
//     key: 1,
//     id: 1,
//     CFSResponderId: 26919889,
//   },
//   {
//     key: 2,
//     id: 2,
//     CFSResponderId: 26919889,
//   },
//   {
//     key: 3,
//     id: 3,
//     CFSResponderId: 26919889,
//   },
// ];

export const TablePage = ({ type }: serviceType) => {
  const [defaultTable, setDefaultTable] = useRecoilState(tableStateAtom);

  useEffect(() => {
    const fetchData = async (type: string) => {
      try {
        const response = await DataService.getAllData(type);
        setDefaultTable((prevState) => ({
          ...prevState,
          cfs: response.data,
        }));
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchData(type);
  }, [type, setDefaultTable]);

  console.log(defaultTable);
  // const [dataSource, setDataSource] = useRecoilState(type);

  // const getData = async (type) => {
  //   const result = await DataService.getAllPosts(type);
  // };

  // const result = getData(type);
  // console.log(result);
  return <TableOrganism />;

  // const fetchData = (type: "pendingCFS" | type: "activeCFS") => {
  //   // DataService.getAllPosts(type);
  // }
  // const [dataSource, setDataSource] = useRecoilState()
  // const [dataSource, setDataSource] = useState<TableProps[]>(closedCFSData);
};
