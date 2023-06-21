import { useEffect, useCallback, useState, ReactNode } from "react";

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
import { getDepartmentsList } from "../../../../../core/services/data.service";
// import { dataGridFilterRenderer } from "./dataGridFilterRenderer";

const getFilterMethod = (filterSetting: string): (() => Promise<[]>) => {
  switch (filterSetting) {
    case "departmentsFilter":
      return getDepartmentsList;
    default:
      return () => Promise.resolve([]);
  }
};

export const DataGridFilterRenderer = <T extends { id: number; value: string }>(
  props: FilterProps<T>,
): ReactNode => {
  const { selectedKeys, setSelectedKeys, confirm, clearFilters } = props;
  const [filters, setFilters] = useState<T[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the filters from the API
        const response = await getDepartmentsList();
        setFilters(response);
      } catch (error) {
        console.error("Error fetching filters:", error);
      }
    };

    fetchData();
  }, []);

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
        {/* {filters.map(({ id, department }) => (
          <Checkbox
            key={id}
            checked={selectedKeys.includes(id)}
            onChange={(e) => handleCheckboxChange(id, e.target.checked)}
          >
            {department}
          </Checkbox>
        ))} */}

        {filters.map((filter) => {
          const entries = Object.entries(filter);
          return entries.map(([key, value]) => (
            <Checkbox
              key={`${key}-${value}`}
              checked={selectedKeys.includes(value)}
              onChange={(e) =>
                handleCheckboxChange(Number(value), e.target.checked)
              }
            >
              {value}
            </Checkbox>
          ));
        })}
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
// export const DataGridFilterRenderer = (
//   props: FilterProps,
//   filterSetting: string,
// ): ReactNode => {
//   const filters = useFetchFilters(getFilterMethod(filterSetting));

//   //   const filters: [] = [];

//   const { selectedKeys, setSelectedKeys, confirm, clearFilters } = props;

//   const handleApplyFilter = () => {
//     setSelectedKeys(selectedKeys);
//     confirm();
//   };

//   const handleResetFilter = useCallback(() => {
//     setSelectedKeys([]);
//     clearFilters?.();
//     confirm(); // Call confirm without any arguments to reset the filter
//   }, [clearFilters, confirm, setSelectedKeys]);

//   const handleCheckboxChange = (value: number, checked: boolean) => {
//     const newSelectedKeys = checked
//       ? [...selectedKeys, value]
//       : selectedKeys.filter((key) => key !== value);
//     setSelectedKeys(newSelectedKeys);
//   };

//   return (
// <Container className="px-4 py-4">
//   <Container className="flex flex-col justify-between">
//     {filters.map(({ id, department }) => (
//       <Checkbox
//         key={id}
//         checked={selectedKeys.includes(id)}
//         onChange={(e) => handleCheckboxChange(id, e.target.checked)}
//       >
//         {department}
//       </Checkbox>
//     ))}
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
//   );
// };

// export const DataGridCategoryFilter = ({
//   props,
//   categoryOptions,
// }: DataGridCategoryFilterProps) => {
//   const { selectedKeys, setSelectedKeys, confirm, clearFilters } = props;

//   const handleApplyFilter = () => {
//     setSelectedKeys(selectedKeys);
//     confirm();
//   };

//   const handleResetFilter = useCallback(() => {
//     setSelectedKeys([]);
//     clearFilters?.();
//     confirm(); // Call confirm without any arguments to reset the filter
//   }, [clearFilters, confirm, setSelectedKeys]);

//   const handleCheckboxChange = (value: number, checked: boolean) => {
//     const newSelectedKeys = checked
//       ? [...selectedKeys, value]
//       : selectedKeys.filter((key) => key !== value);
//     setSelectedKeys(newSelectedKeys);

//   };

//   return (

//     // <>
//     //   {categoryOptions.map((option) => {
//     //     const [key1, value1] = Object.entries(option)[0];
//     //     const [key2, value2] = Object.entries(option)[1];

//     //     console.log(key1, value1);
//     //     console.log(key2, value2);
//     //   })}
//     // </>
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
//   );
// };
