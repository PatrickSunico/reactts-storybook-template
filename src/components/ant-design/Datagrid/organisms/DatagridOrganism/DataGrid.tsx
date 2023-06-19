// React
import { memo } from "react";
import { useEffect } from "react";

// Ant Design
import { Table } from "antd";
// Services
import { getAllData } from "../../../../../core/services/data.service";

// Recoil
import { useRecoilState } from "recoil";

// Data Types
import { ServiceType } from "../../types/DataGridTypes";
import { DataGridColumns } from "../DataGridColumns";
import { dataGridAtomState } from "../../../../../core/recoil/atomState/DataGridTableState";

// DataGrid Methods
import { getRowClassName } from "../../dataGridMethods/dataGridMethods";

// CSS
import "./DataGrid.css";

export const DataGrid = memo((cfsType: ServiceType) => {
  const [dataSource, setDataSource] = useRecoilState(dataGridAtomState);

  useEffect(() => {
    const fetchData = async ({ cfsType }: ServiceType) => {
      try {
        const response = await getAllData(cfsType);
        setDataSource(response);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData(cfsType);
  }, [cfsType, setDataSource]);

  return (
    <Table
      className="cfsTable"
      dataSource={dataSource}
      columns={DataGridColumns}
      rowClassName={getRowClassName}
    />
  );
});
