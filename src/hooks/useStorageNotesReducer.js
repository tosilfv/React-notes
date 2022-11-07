import { useEffect, useReducer } from "react";
import { NOTES } from "../constants/storageKeys";
import { noteseed } from "../seeds/noteseed";
import notesReducer from "../reducers/notesReducer";

export default function useStorageNotesReducer() {
  const [storage, dispatch] = useReducer(notesReducer, noteseed, () => {
    let storageNotes;
    try {
      storageNotes = JSON.parse(window.localStorage.getItem(NOTES)) || noteseed;
    } catch (error) {
      throw new Error(`useStorageNotesReducer() error: ${error}`);
    }
    return storageNotes;
  });
  useEffect(() => {
    window.localStorage.setItem(NOTES, JSON.stringify(storage));
  }, [storage]);
  return [storage, dispatch];
}
