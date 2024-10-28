import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { MycontextProvider } from "./context/context.tsx";
import { ContextUserProvider } from "./context/context-user.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MycontextProvider>
      <ContextUserProvider>
        <App />
      </ContextUserProvider>
    </MycontextProvider>
  </StrictMode>
);
