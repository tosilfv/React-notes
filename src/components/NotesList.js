import { useTheme } from "@mui/material";
import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";
import Note from "./Note";

export default function NotesList() {
  const { notes } = useContext(NotesContext);
  const theme = useTheme();
  const notesList = notes.map((note) => {
    return <Note key={note.id} note={note} />;
  });
  return <div style={theme.noteslist}>{notesList}</div>;
}
