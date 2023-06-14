import React, { useEffect, useState } from "react";
import { Table, Input, Space, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRecoilValue, useRecoilState } from "recoil";
// import {
//   tableDataState,
//   filterState,
//   sorterState,
// } from "../recoil/atomState/tableState";

import { tableDataState, filterState, sorterState } from "./SorterTableState";
import {
  TableDataProps,
  FilterProps,
  SorterProps,
  ServiceType,
} from "./SorterTypes";
import DataService from "../../../core/services/data.service";

interface SorterTableProps {
  title: string;
  showPagination: boolean;
  cfsType: string;
}

const TableSorter: React.FC<SorterTableProps> = ({ cfsType }: ServiceType) => {
  console.log(cfsType);
  const [tableData, setTableData] = useRecoilState(tableDataState);
  const filter = useRecoilValue(filterState);
  const sorter = useRecoilValue(sorterState);

  const [tableLoading, setTableLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (cfsType: string) => {
      try {
        setTableLoading(true);
        const response = await DataService.getAllData(cfsType);
        setTableData(response);
        setTableLoading(false);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchData(cfsType);
  }, [cfsType, setTableData]);

  // Apply filters and sorters to the data
  let filteredData = tableData;
  if (filter.searchText) {
    filteredData = filteredData.filter((item) =>
      item.departments.some((department) =>
        department.includes(filter.searchText),
      ),
    );
  }
  if (filter.status !== null) {
    filteredData = filteredData.filter((item) => item.status === filter.status);
  }
  if (sorter.columnKey && sorter.order) {
    filteredData = filteredData.sort((a, b) => {
      const aValue = a[sorter.columnKey as keyof TableDataProps] as string;
      const bValue = b[sorter.columnKey as keyof TableDataProps] as string;
      if (aValue < bValue) {
        return sorter.order === "ascend" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sorter.order === "ascend" ? 1 : -1;
      }
      return 0;
    });
  }

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "CFS Responder Id",
      dataIndex: "CFSResponderId",
      key: "CFSResponderId",
      sorter: true,
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search CFS Responder Id"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => confirm()}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button
              onClick={() => clearFilters()}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
      onFilter: (value, record) =>
        record.CFSResponderId.toString().includes(value),
    },
    {
      title: "Departments",
      dataIndex: "departments",
      key: "departments",
      render: (departments: string[]) => departments.join(", "),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: boolean) => (status ? "Done" : "In Progress"),
    },
  ];

  return (
    <Table
      dataSource={filteredData}
      loading={tableLoading}
      columns={columns}
      pagination={false}
      // Set the sorter state when the table column header is clicked
      onChange={(_, __, sorter) => {
        const { columnKey, order } = sorter as {
          columnKey: string;
          order: "ascend" | "descend" | null;
        };
        // Update the sorter state
      }}
    />
  );
};

export default TableSorter;
