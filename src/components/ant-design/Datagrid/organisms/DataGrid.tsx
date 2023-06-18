import { useEffect } from "react";
import { useRecoilState } from "recoil";

// Ant Design
import { Table } from "antd";
// Services
import DataService from "../../../../core/services/data.service";

// Data Types
import { DataSourceItem, ServiceType } from "../types/DataGridTypes";
import { DataGridColumns } from "./DataGridColumns";
import { dataGridAtomState } from "../../../../core/recoil/atomState/DataGridTableState";

export const DataGrid = (cfsType: ServiceType) => {
  const [dataSource, setDataSource] = useRecoilState(dataGridAtomState);

  useEffect(() => {
    const fetchData = async ({ cfsType }: ServiceType) => {
      try {
        const response = await DataService.getAllData(cfsType);
        setDataSource(response);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData(cfsType);
  }, [cfsType, setDataSource]);

  return <Table dataSource={dataSource} columns={DataGridColumns} />;
};
