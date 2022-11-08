import React from "react";
import { Typography, useTheme } from "@mui/material";
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";

export default function Notes() {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h4" style={{ textAlign: theme.notes.textAlign }}>
        Notes
      </Typography>
      <div style={theme.notes.div}>
        <NotesForm />
        <NotesList />
      </div>
    </>
  );
}
