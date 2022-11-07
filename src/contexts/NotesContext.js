import React, { createContext } from "react";
import useStorageNotesReducer from "../hooks/useStorageNotesReducer";

export const DispatchContext = createContext();
export const NotesContext = createContext();

export default function NotesProvider(props) {
  const [notes, dispatch] = useStorageNotesReducer();
  return (
    <DispatchContext.Provider value={{ dispatch }}>
      <NotesContext.Provider value={{ notes }}>
        {props.children}
      </NotesContext.Provider>
    </DispatchContext.Provider>
  );
}
