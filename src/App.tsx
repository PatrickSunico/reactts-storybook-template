import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "antd/dist/reset.css";

// Ant Design
import { Layout, ConfigProvider } from "antd";

// Atoms
import { MainParent, Container } from "./components/atoms/atomIndex";
import { TableComponent } from "./components/organisms/organismIndex";

const App = () => {
  return (
    <Layout>
      <MainParent className="h-full overflow-y-auto">
        <Container className="container grid px-6 mx-auto">
          <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Close Active CFS
          </h2>

          <Container className="w-full overflow-hidden rounded-lg shadow-xs">
            <TableComponent />
          </Container>
        </Container>
      </MainParent>
    </Layout>
  );
};

export default App;
