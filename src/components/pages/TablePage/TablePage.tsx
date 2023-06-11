import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import DataService from "../../../core/services/data.service";
import { TableOrganism } from "../../organisms/organismIndex";
// Recoil
import {
  tableAtomState,
  tableColumnAtomState,
} from "../../../core/recoil/atomState/tableState";

type serviceType = {
  cfsType: string;
};

export const TablePage = (cfsType: serviceType) => {
  const [dataSource, setDataSource] = useRecoilState(tableAtomState);
  const tableColumns = useRecoilValue(tableColumnAtomState);

  useEffect(() => {
    const fetchData = async ({ cfsType }: serviceType) => {
      console.log(cfsType);
      try {
        const response = await DataService.getAllData(cfsType);
        // setDataSource(response);
        setDataSource((prevState) => ({
          ...prevState,
          data: response,
        }));
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchData(cfsType);
  }, [cfsType, setDataSource]);

  // console.log(defaultTable);

  return <TableOrganism dataSource={dataSource} columns={tableColumns} />;
};
