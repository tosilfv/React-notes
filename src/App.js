import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import NotesRouter from "./routes/NotesRouter";
import NotesProvider from "./contexts/NotesContext";

export default function App() {
  return (
    <NotesProvider>
      <ThemeProvider theme={theme}>
        <NotesRouter />
      </ThemeProvider>
    </NotesProvider>
  );
}
