import "./App.css";
import "antd/dist/reset.css";

// Atoms
import { MainParent, Container, Button } from "./components/atoms/atomIndex";
import { DataGrid } from "./components/ant-design/Datagrid/organisms/DataGrid";

const App = () => {
  return (
    <MainParent className="max-h-screen">
      <Container className="container grid px-6 mx-auto">
        <Container className="flex flex-row justify-between px-4 py-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Close Active CFS
          </h2>
          <Button className="px-2 py-1" variant="btn-danger">
            Close All
          </Button>
        </Container>

        <Container className="w-full overflow-hidden rounded-lg shadow-xs">
          <DataGrid cfsType="pendingCFS" />
        </Container>
      </Container>
    </MainParent>
  );
};

export default App;
