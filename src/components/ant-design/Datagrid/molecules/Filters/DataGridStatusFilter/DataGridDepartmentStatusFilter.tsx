import { useCallback } from "react";

// Ant Design Components
import { Checkbox } from "antd";

// DataGridTypes
import { FilterProps } from "../../../types/DataGridTypes";

// Custom Components
import { Button, Container } from "../../../../../atoms/atomIndex";

export const DataGridStatusFilter = (props: FilterProps<boolean>) => {
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

  const handleCheckboxChange = (value: boolean, checked: boolean) => {
    if (checked) {
      setSelectedKeys([value]);
    } else {
      setSelectedKeys([]);
    }
  };

  return (
    <Container className="px-4 py-4">
      <Container className="flex flex-col justify-between">
        <Checkbox
          checked={selectedKeys.includes(true)}
          onChange={(e) => handleCheckboxChange(true, e.target.checked)}
        >
          Active
        </Checkbox>
        <Checkbox
          checked={selectedKeys.includes(false)}
          onChange={(e) => handleCheckboxChange(false, e.target.checked)}
        >
          Close
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
