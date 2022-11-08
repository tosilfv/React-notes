import React from "react";
import { Typography, useTheme } from "@mui/material";
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";

export default function Notes() {
  const theme = useTheme();
  return (
    <div style={theme.notes.divOuter}>
      <Typography variant="h2" style={theme.notes.typography}>
        My Notes
      </Typography>
      <div style={theme.notes.divInner}>
        <NotesForm />
        <NotesList />
      </div>
    </div>
  );
}
