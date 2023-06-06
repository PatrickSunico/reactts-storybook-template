// Mock Service Integration
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

if (import.meta.env.MODE === "development") {
  // When development, setup the MSW.
  // import the worker (under the browser.ts file)
  import("./mocks/browser.ts")
    .then(({ worker }) => {
      // Start the worker.
      worker.start();
    })
    .then(() => {
      // Render the application.
      root.render(
        <StrictMode>
          <RecoilRoot>
            <App />
          </RecoilRoot>
        </StrictMode>,
      );
    });
} else {
  // Render the application in production without the MSW.
  root.render(
    <StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </StrictMode>,
  );
}

// Default React Vite
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
