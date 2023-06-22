// Ant Design Components
import { Checkbox } from "antd";

// DataGridTypes
import { FilterProps } from "../../../types/DataGridTypes";

// Custom Components
import { Button, Container } from "../../../../../atoms/atomIndex";

export const DataGridStatusFilter = ({
  selectedKeys,
  setSelectedKeys,
  confirm,
  clearFilters,
}: FilterProps) => {
  const handleCheckboxChange = (value: string) => {
    setSelectedKeys([value]);
  };

  const handleApplyFilter = () => {
    confirm();
  };

  const handleResetFilter = () => {
    setSelectedKeys([]);
    clearFilters?.();
  };

  return (
    <Container className="px-4 py-4">
      <Container className="flex flex-col justify-between">
        <Checkbox
          checked={selectedKeys.includes("active")}
          onChange={() => handleCheckboxChange("active")}
        >
          Active
        </Checkbox>
        <Checkbox
          checked={selectedKeys.includes("closed")}
          onChange={() => handleCheckboxChange("closed")}
        >
          Closed
        </Checkbox>
        <Checkbox
          checked={selectedKeys.includes("all")}
          onChange={() => handleCheckboxChange("all")}
        >
          All
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
