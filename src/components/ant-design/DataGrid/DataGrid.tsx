import { useEffect, useState, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import DataService from "../../../core/services/data.service";

// Recoil
import {
  tableAtomState,
  tableColumnAtomState,
} from "../../../core/recoil/atomState/tableState";

// Ant Design Components
import { Tag } from "antd";

// Custom Buttons
import { Button } from "../../atoms/atomIndex";

// Types
import { ServiceType, TableColumnProps } from "../../../types/Table/TableTypes";
import { TableDataProps } from "../../../types/Table/TableTypes";

import type { ColumnType, ColumnsType } from "antd/es/table";

export const DataGrid = () => {
  const [dataSource, setDataSource] = useRecoilState(tableAtomState);

  const columns: ColumnsType<TableDataProps> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "CFSResponderId",
      dataIndex: "CFSResponderId",
      key: "id",
    },
    {
      title: "Departments",
      dataIndex: "departments",
      key: "id",
      render: (_, { departments }) => (
        <>
          {departments.map((department) => {
            let color = departments.length > 5 ? "geekblue" : "green";
            if (department === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={department}>
                {department.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    { title: "Status", dataIndex: "status", key: "id" },
    { title: "Action", dataIndex: "Action", key: "id" },
  ];

  useEffect(() => {
    const fetchData = async ({ cfsType }: ServiceType) => {
      try {
        setSkeletonLoading(true);
        const response = await DataService.getAllData(cfsType);
        setDataSource({ data: response });
        setSkeletonLoading(false);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchData(cfsType);
  }, [cfsType, setDataSource]);

  // Skeleton Loader
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  return <div>DataGrid</div>;
};
