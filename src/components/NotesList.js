import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";
import Note from "./Note";

export default function NotesList() {
  const { notes } = useContext(NotesContext);
  const notesList = notes.map((note) => {
    return <Note key={note.id} note={note} />;
  });
  return <>{notesList}</>;
}
