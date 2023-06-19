import { useEffect, useCallback, useState } from "react";

// Ant Design Components
import { Checkbox, Select } from "antd";

// Recoil
import { useRecoilState } from "recoil";
import { dataGridDepartmentsState } from "../../../../../core/recoil/atomState/DataGridTableState";

// DataGridTypes
import { FilterProps } from "../../types/DataGridTypes";

import { FilterDropdownProps } from "antd/es/table/interface";
// Custom Components
import { Button, Container } from "../../../../atoms/atomIndex";
// Service
import { getDepartmentsList } from "../../../../../core/services/data.service";

export const DataGridCategoryFilter = ({
  selectedKeys,
  setSelectedKeys,
  confirm,
  clearFilters,
}: FilterProps) => {
  const [departmentList, setDepartmentList] = useRecoilState(
    dataGridDepartmentsState,
  );

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await getDepartmentsList();
        setDepartmentList(response);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchDepartments();
  }, [setDepartmentList]);

  const handleApplyFilter = () => {
    setSelectedKeys(selectedKeys);
    confirm();
  };

  const handleResetFilter = useCallback(() => {
    setSelectedKeys([]);
    clearFilters?.();
    confirm(); // Call confirm without any arguments to reset the filter
  }, [clearFilters, confirm, setSelectedKeys]);

  const handleCheckboxChange = (value: number, checked: boolean) => {
    const newSelectedKeys = checked
      ? [...selectedKeys, value]
      : selectedKeys.filter((key) => key !== value);
    setSelectedKeys(newSelectedKeys);
  };

  return (
    <Container className="px-4 py-4">
      <Container className="flex flex-col justify-between">
        {departmentList.map(({ id, department }) => (
          <Checkbox
            key={id}
            checked={selectedKeys.includes(id)}
            onChange={(e) => handleCheckboxChange(id, e.target.checked)}
          >
            {department}
          </Checkbox>
        ))}
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 8,
        }}
      >
        <Button
          variant="btn-link"
          className="px-2 py-1"
          onClick={handleResetFilter}
        >
          Reset
        </Button>

        <Button
          variant="btn-search-filter"
          className="px-2 py-1"
          onClick={handleApplyFilter}
        >
          Search
        </Button>
      </Container>
    </Container>
  );
};
