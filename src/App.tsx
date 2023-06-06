import "./App.css";
import "antd/dist/reset.css";

// Atoms
import { MainParent, Container, Button } from "./components/atoms/atomIndex";
import { TableOrganism } from "./components/organisms/organismIndex";
import { TablePage } from "./components/pages/TablePage/TablePage";

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
          <TablePage type="pendingCFS" />
          {/* <TableOrganism /> */}
        </Container>
      </Container>
    </MainParent>
  );
};

export default App;
