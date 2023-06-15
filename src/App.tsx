import "./App.css";
import "antd/dist/reset.css";

// Atoms
import { MainParent, Container, Button } from "./components/atoms/atomIndex";
// import { TableOrganism } from "./components/organisms/organismIndex";
import { TablePage } from "./components/pages/TablePage/TablePage";
// import POCTable from "./components/pages/POCTable/POCTable";
import POCTable from "./components/pages/POCTable/POCTable";
import FilterTable from "./components/pages/FilterByDate/FilterByDate";
import SkeletonTable from "./components/pages/POCTable/SkeletonTable";
import SearchPOCTable from "./components/pages/POCTable/SearchPOCTable";
import { DataGrid } from "./components/organisms/Datagrid/DataGrid";
import { POC2Table } from "./components/pages/POCTable/POC2Table";

const App = () => {
  return (
    <MainParent className="max-h-screen">
      <Container className="container grid px-6 mx-auto">
        <Container className="flex flex-row justify-between px-4 py-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Close Active CFS
          </h2>
          <Button variant="btn-danger">Delete All</Button>
        </Container>

        <Container className="w-full overflow-hidden rounded-lg shadow-xs">
          <DataGrid cfsType="pendingCFS" />
          {/* <TablePage cfsType="pendingCFS" /> */}
          {/* <SkeletonTable /> */}
          {/* <SearchPOCTable /> */}
          {/* <POCTable /> */}
          {/* <FilterTable /> */}

          {/* <TablePage type="activeCFS" /> */}

          {/* <TableOrganism /> */}
        </Container>
      </Container>
    </MainParent>
  );
};

export default App;
