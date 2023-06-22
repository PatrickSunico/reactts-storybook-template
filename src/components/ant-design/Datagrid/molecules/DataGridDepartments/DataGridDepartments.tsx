import { Tag } from "antd";

interface DataGridDepartmentsProps {
  status: boolean;
  departments: [{ id: number; department: string }];
}

export const DataGridDepartments = ({
  departments,
}: DataGridDepartmentsProps) => {
  return departments.map(({ id, department }) => {
    let color;
    switch (department) {
      case "System Admins":
        color = "geekblue";
        break;
      case "EMS":
        color = "red";
        break;
      case "Traffic Police":
        color = "blue";
        break;
      case "Civil Defense":
        color = "green";
        break;
      case "Fazaa":
        color = "cyan";
        break;
      case "Central Operations":
        color = "yellow";
        break;
      default:
        color = "bermuda";
        break;
    }

    return (
      <Tag color={color} key={id}>
        {department}
      </Tag>
    );
  });
};
