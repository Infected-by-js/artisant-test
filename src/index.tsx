import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { App } from "./App";
import { GlobalStyles } from "./assets/styles/GlobalStyles";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
const client = new QueryClient();

root.render(
  <QueryClientProvider client={client}>
    <GlobalStyles />
    <App />
  </QueryClientProvider>
);
