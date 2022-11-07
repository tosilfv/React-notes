import React from "react";
import { Route, Routes } from "react-router-dom";
import NotesForm from "../components/NotesForm";
import Notes from "../components/Notes";

export default function NotesRouter() {
  return (
    <Routes>
      <Route exact path="/notesform" element={<NotesForm />} />
      <Route exact path="/" element={<Notes />} />
    </Routes>
  );
}
