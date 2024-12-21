import { Provider } from "@/components/ui/provider"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
const rootElement = document.getElementById("root");

if (rootElement) {
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
} else {
  console.error("Root element not found!");
}