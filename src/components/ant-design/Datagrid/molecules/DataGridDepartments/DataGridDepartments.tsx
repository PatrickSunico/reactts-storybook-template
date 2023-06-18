import { Tag } from "antd";

interface DataGridDepartmentsProps {
  status: boolean;
  departments: [{ id: number; department: string }];
}

// "departments" : [
//     {"id": 1, department: "System Admins" },
//     {"id": 2, department: "EMS" },
//     {"id": 3, department: "Traffic Police" },
//     {"id": 4, department: "Civil Defense" },
//     {"id": 5, department: "Fazaa" },
//     {"id": 6, department: "Central Operations" },
// ]

export const DataGridDepartments = ({
  status,
  departments,
}: DataGridDepartmentsProps) => {
  const renderDepartments = departments.map(({ id, department }) => {
    console.log(department);
    return (
      <Tag color="green" key={id}>
        {department}
      </Tag>
    );
  });

  return <>{renderDepartments}</>;
};
