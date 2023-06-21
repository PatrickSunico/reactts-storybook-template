<<<<<<< HEAD:src/components/ant-design/Datagrid/molecules/DataGridCategoryFilter/DataGridCategoryFilter.tsx
import { useEffect, useCallback } from "react";

// Ant Design Components
import { Checkbox } from "antd";

// Recoil
import { useRecoilState } from "recoil";
import { dataGridDepartmentsState } from "../../../../../core/recoil/atomState/DataGridTableState";
=======
import { useCallback } from "react";

// Ant Design Components
import { Checkbox } from "antd";
>>>>>>> 40e1311f8c8f3ea79f39bda5d6913e0307cf11cf:src/components/ant-design/Datagrid/molecules/Filters/DataGridDepartmentsFilter/DataGridDepartmentsFilter.tsx

// DataGridTypes
import { FilterProps } from "../../../types/DataGridTypes";

// Custom Components
import { Button, Container } from "../../../../../atoms/atomIndex";
import { useDepartmentsFilter } from "../../../../../../core/hooks/useDepartmentsFilters";

export const DataGridDepartmentsFilter = (props: FilterProps<number>) => {
  const { selectedKeys, setSelectedKeys, confirm, clearFilters } = props;

  const departmentFilters = useDepartmentsFilter();

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
        {departmentFilters.map(({ id, department }) => (
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
