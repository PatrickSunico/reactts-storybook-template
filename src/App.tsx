import "./App.css";
import "antd/dist/reset.css";

// Atoms
import { MainParent, Container } from "./components/atoms/atomIndex";
import { DataGrid } from "./components/ant-design/Datagrid/organisms/DatagridOrganism/DataGrid";
import { DataGridHeader } from "./components/ant-design/Datagrid/molecules/DataGridHeader/DataGridHeader";

const App = () => {
  return (
    <MainParent className="max-h-screen">
      <Container className="container grid px-6 mx-auto">
        <Container className="w-full overflow-hidden rounded-lg shadow-xs">
          <DataGridHeader />
          <DataGrid cfsType="pendingCFS" />
        </Container>
      </Container>
    </MainParent>
  );
};

export default App;
