import { useEffect, useCallback, useState } from "react";

// Ant Design Components
import { Checkbox } from "antd";

// Recoil
import { useRecoilState } from "recoil";
import { dataGridDepartmentsState } from "../../../../../core/recoil/atomState/DataGridTableState";

// DataGridTypes
import { FilterProps } from "../../types/DataGridTypes";

// Custom Components
import { Button, Container } from "../../../../atoms/atomIndex";
import { useFetchFilters } from "../../../../../core/hooks/useFetchFilters";

// type filterRequest = getFiltersPromise: () => Promise<[]> | [];

export const DataGridFilterRenderer = (
  props: FilterProps,
  getFiltersPromise: () => Promise<[]> | [],
) => {
  const filters = useFetchFilters(getFiltersPromise);

  return <DataGridCategoryFilter props={props} categoryOptions={filters} />;
};

interface DataGridCategoryFilterProps {
  props: FilterProps;
  categoryOptions: never[];
}

export const DataGridCategoryFilter = ({
  props,
  categoryOptions,
}: DataGridCategoryFilterProps) => {
  const { selectedKeys, setSelectedKeys, confirm, clearFilters } = props;

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
    <>
      {categoryOptions.map((option) => {
        const [key1, value1] = Object.entries(option)[0];
        const [key2, value2] = Object.entries(option)[1];

        console.log(key1, value1);
        console.log(key2, value2);
      })}
    </>
    // <Container className="px-4 py-4">
    //   <Container className="flex flex-col justify-between">
    // {categoryOptions.map(({ id, department }) => (
    //   <Checkbox
    //     key={id}
    //     checked={selectedKeys.includes(id)}
    //     onChange={(e) => handleCheckboxChange(id, e.target.checked)}
    //   >
    //     {department}
    //   </Checkbox>
    // ))}
    //   </Container>
    //   <Container
    //     style={{
    //       display: "flex",
    //       justifyContent: "space-between",
    //       marginTop: 8,
    //     }}
    //   >
    //     <Button
    //       variant="btn-link"
    //       className="px-2 py-1"
    //       onClick={handleResetFilter}
    //     >
    //       Reset
    //     </Button>

    //     <Button
    //       variant="btn-search-filter"
    //       className="px-2 py-1"
    //       onClick={handleApplyFilter}
    //     >
    //       Search
    //     </Button>
    //   </Container>
    // </Container>
  );
};
