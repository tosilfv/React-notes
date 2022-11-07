import React from "react";
import { Typography, useTheme } from "@mui/material";
import NotesList from "./NotesList";

export default function Notes() {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h4" style={theme.layout}>
        Notes
      </Typography>
      <NotesList />
    </>
  );
}
