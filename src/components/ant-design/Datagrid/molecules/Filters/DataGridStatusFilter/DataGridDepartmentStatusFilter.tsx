import { useCallback } from "react";

// Ant Design Components
import { Checkbox } from "antd";

// DataGridTypes
import { FilterProps } from "../../../types/DataGridTypes";

// Custom Components
import { Button, Container } from "../../../../../atoms/atomIndex";

export const DataGridStatusFilter: React.FC<FilterProps> = ({
  selectedKeys,
  setSelectedKeys,
  confirm,
  clearFilters,
}) => {
  const handleApplyFilter = useCallback(() => {
    confirm();
  }, [confirm]);

  const handleResetFilter = useCallback(() => {
    setSelectedKeys([]);
    clearFilters?.();
    confirm(); // Call confirm without any arguments to reset the filter
  }, [clearFilters, confirm, setSelectedKeys]);

  const handleCheckboxChange = useCallback(
    (value: boolean, checked: boolean) => {
      if (checked) {
        setSelectedKeys([value.toString()]);

        console.log([value.toString()]);
      } else {
        setSelectedKeys([]);
      }
    },
    [setSelectedKeys],
  );

  return (
    <Container className="px-4 py-4">
      <Container className="flex flex-col justify-between">
        <Checkbox
          checked={selectedKeys.includes("true")}
          onChange={(e) => handleCheckboxChange(true, e.target.checked)}
        >
          Active
        </Checkbox>
        <Checkbox
          checked={selectedKeys.includes("false")}
          onChange={(e) => handleCheckboxChange(false, e.target.checked)}
        >
          Closed
        </Checkbox>
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