import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "swiper/css";
import "swiper/css/navigation";
import AppProvider from "./hooksProviders/AppProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </StrictMode>
);
