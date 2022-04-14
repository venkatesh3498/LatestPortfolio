import { createRoot } from "react-dom/client";
import theme from "./theme";
import "./index.css";
import App from "./App";
import { ThemeProvider,CssBaseline } from "@mui/material";
const container = document.getElementById("root");
console.log("theme",theme);
const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App tab="home" />
  </ThemeProvider>
);
