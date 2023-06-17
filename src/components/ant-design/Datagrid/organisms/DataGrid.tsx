import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

// Ant Design
import { Table, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ColumnType } from "antd/lib/table/interface";
import ReactDOM from "react-dom";

// Recoil

// Services
import DataService from "../../../../core/services/data.service";

// Data Types
import {
  DataSourceItem,
  FilterProps,
  ServiceType,
} from "../types/DataGridTypes";
import { DataGridColumns } from "../molecules/DataGridColumns";
import { dataGridAtomState } from "../../../../core/recoil/atomState/DataGridTableState";

export const DataGrid: React.FC<ServiceType> = (cfsType) => {
  const [dataSource, setDataSource] = useRecoilState(dataGridAtomState);

  useEffect(() => {
    const fetchData = async ({ cfsType }: ServiceType) => {
      try {
        const response = await DataService.getAllData(cfsType);
        setDataSource(response);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchData(cfsType);
  }, [cfsType, setDataSource]);

  return (
    <Table<DataSourceItem>
      dataSource={dataSource}
      columns={DataGridColumns}
      // onChange={(pagination, filters, sorter) => onSort(sorter.order)}
    />
  );
};
