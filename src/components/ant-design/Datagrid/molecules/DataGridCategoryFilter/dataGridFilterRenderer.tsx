// import { getDepartmentsList } from "../../../../../core/services/data.service";
// import { FilterProps } from "../../types/DataGridTypes";

// // Component Render
// import { DataGridCategoryFilter } from "./DataGridCategoryFilter";

// export const dataGridFilterRenderer = async (props: FilterProps) => {
//   try {
//     const response = await getDepartmentsList();
//     return (
//       <DataGridCategoryFilter
//         categoryOptions={response}
//         setSelectedKeys={props.setSelectedKeys}
//         selectedKeys={props.selectedKeys}
//         confirm={props.confirm}
//         clearFilters={props.clearFilters}
//       />
//     );
//   } catch (error) {
//     console.error("Error fetching category options:", error);
//     return null; // Return null or an error message component if desired
//   }
// };
