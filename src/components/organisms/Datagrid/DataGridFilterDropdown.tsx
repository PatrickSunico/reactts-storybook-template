import { useState } from "react";

// Ant Design
import { Input } from "antd";

// DataGridTypes
import { CustomFilterDropdownProps } from "./DataGridTypes";

export const DataGridFilterDropdown = ({
  setSelectedKeys,
  confirm,
}: CustomFilterDropdownProps) => {
  const [value, setValue] = useState<string>("");

  const handleSearch = () => {
    setSelectedKeys(value ? [value] : []);
    confirm();
  };

  return (
    <div style={{ padding: 8 }}>
      <Input
        placeholder="Search name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onPressEnter={handleSearch}
        style={{ width: 188, marginBottom: 8, display: "block" }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
