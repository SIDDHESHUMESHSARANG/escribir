import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";


createRoot(document.getElementById("root")!).render(
  // Remove <StrictMode> to avoid React 18's effect double-invocation
  <App />
);
