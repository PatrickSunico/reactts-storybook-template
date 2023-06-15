import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

// Ant Design
import { Table, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ColumnType } from "antd/lib/table/interface";
import ReactDOM from "react-dom";

// Recoil

// Services
import DataService from "../../../core/services/data.service";

// Data Types
import {
  DataSourceItem,
  CustomFilterDropdownProps,
  ServiceType,
} from "./DataGridTypes";
import { columns } from "./DataGridColumn";
import { dataGridAtomState } from "./DataGridTableState";

export const DataGrid: React.FC<ServiceType> = (cfsType) => {
  const [dataSource, setDataSource] = useRecoilState(dataGridAtomState);

  useEffect(() => {
    const fetchData = async ({ cfsType }: ServiceType) => {
      try {
        // setSkeletonLoading(true);
        const response = await DataService.getAllData(cfsType);
        console.log(response);
        setDataSource(response);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchData(cfsType);
  }, [cfsType, setDataSource]);

  // const [sortOrder, setSortOrder] = useState<"ascend" | "descend" | undefined>(
  //   undefined,
  // );

  return (
    <Table<DataSourceItem>
      dataSource={dataSource}
      columns={columns}
      // onChange={(pagination, filters, sorter) => onSort(sorter.order)}
    />
  );
};
