import { useState, useCallback } from "react";

// Ant Design
import { Input } from "antd";

// DataGridTypes
import { FilterProps } from "../types/DataGridTypes";

// Custom Components
// import { Button, Container } from "../../../atoms/atomIndex";
import { Button, Container } from "../../../atoms/atomIndex";

export const DataGridSearchFilter = ({
  setSelectedKeys,
  confirm,
  clearFilters,
}: FilterProps) => {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = () => {
    setSelectedKeys(searchText ? [searchText] : []);
    confirm();
  };

  const resetSearch = useCallback(() => {
    setSearchText("");
    clearFilters?.();
    confirm(); // Call confirm without any arguments to reset the filter
  }, [clearFilters, confirm]);

  return (
    <div style={{ padding: 8 }}>
      <Input
        placeholder="Search CFSResponderId"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onPressEnter={handleSearch}
        style={{ width: 188, marginBottom: 8, display: "block" }}
      />

      <Container className="grid grid-cols-2 gap-4">
        <Button
          variant="btn-search-filter"
          className="px-2 py-1"
          onClick={handleSearch}
        >
          Search
        </Button>

        <Button variant="btn-link-default" onClick={resetSearch}>
          Reset
        </Button>
      </Container>
    </div>
  );
};
