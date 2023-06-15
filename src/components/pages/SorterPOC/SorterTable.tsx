import React, { useEffect, useState } from "react";

// Recoil
import { useRecoilValue, useRecoilState } from "recoil";

// Ant Design Table
import { ColumnProps } from "antd/es/table";
import { Tag } from "antd";
import { Table, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

// Types
import { tableDataState, filterState, sorterState } from "./SorterTableState";
import { TableDataProps, FilterProps, SorterProps } from "./SorterTypes";
import DataService from "../../../core/services/data.service";

// Custom Storybook Components
import { Button } from "../../atoms/atomIndex";

interface SorterTableProps {
  cfsType: string;
}

const TableSorter: React.FC<SorterTableProps> = ({ cfsType }) => {
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
        console.error("Error Fetching Data:", error);
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

  // if (sorter.columnKey && sorter.order) {
  //   filteredData = filteredData.sort((a, b) => {
  //     const aValue = a[sorter.columnKey as keyof TableDataProps] as string;
  //     const bValue = b[sorter.columnKey as keyof TableDataProps] as string;
  //     if (aValue < bValue) {
  //       return sorter.order === "ascend" ? -1 : 1;
  //     }
  //     if (aValue > bValue) {
  //       return sorter.order === "ascend" ? 1 : -1;
  //     }
  //     return 0;
  //   });
  // }

  interface FilterDropdownProps {
    setSelectedKeys: (selectedKeys: [] | []) => void;
    selectedKeys: string[];
    confirm: () => void;
    clearFilters: () => void;
  }

  interface FilterIcon {
    filtered: boolean;
  }

  const filterDropdownMethod = ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }: FilterDropdownProps) => (
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
          variant="btn-primary"
          size="xs"
          onClick={() => confirm()}
          style={{ width: 90 }}
        >
          Search
        </Button>
        <Button
          variant="btn-danger"
          size="xs"
          onClick={() => clearFilters()}
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </Space>
    </div>
  );

  const renderFilterIcon = ({ filtered }: FilterIcon) => (
    <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
  );

  const onFilter = (value: string, record: TableDataProps) =>
    record.CFSResponderId.toString().includes(value);

  const columns: Array<ColumnProps<TableDataProps>> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "CFS Responder Id",
      dataIndex: "CFSResponderId",
      key: "CFSResponderId",
      filterDropdown: filterDropdownMethod,
      filterIcon: renderFilterIcon,
      onFilter: onFilter,
    },
    {
      title: "Departments",
      dataIndex: "departments",
      key: "departments",
      render: (departments: string[]) => (
        <span>
          {departments.map((department) => {
            let color = department.length > 5 ? "geekblue" : "green";
            if (department === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={department}>
                {department.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: boolean) => (status ? "Done" : "In Progress"),
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => <Button variant="btn-danger">Close CFS</Button>,
    },
  ];

  return (
    <Table
      dataSource={filteredData}
      loading={tableLoading}
      columns={columns}
      // pagination={true}
      // Set the sorter state when the table column header is clicked
      // onChange={(_, __, sorter) => {
      //   const { columnKey, order } = sorter;
      //   console.log(columnKey, order);
      //   // const { columnKey, order } = sorter as {
      //   //   columnKey: string;
      //   //   order: "ascend" | "descend" | null;
      //   // };
      //   // Update the sorter state
      // }}
    />
  );
};

export default TableSorter;
