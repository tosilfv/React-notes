import React from "react";
import { Route, Routes } from "react-router-dom";
import Notes from "../components/Notes";

export default function NotesRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Notes />} />
    </Routes>
  );
}
