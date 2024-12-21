import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import "./styles/index.css";
import "./styles/index.scss";

import App from "./App.tsx";
import { AntdThemeProvider } from "./layout";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AntdThemeProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AntdThemeProvider>
  </StrictMode>
);
