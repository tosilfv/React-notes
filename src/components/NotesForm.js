import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import { Box, Button, Paper, Typography, useTheme } from "@mui/material";
import { DispatchContext } from "../contexts/NotesContext";
import SaveIcon from "@mui/icons-material/Save";
import NotesInput from "./NotesInput";
import useInputForm from "../hooks/useInputForm";

export default function NotesForm() {
  const [message, handleMessageChange, resetMessage, messageError] =
    useInputForm();
  const [title, handleTitleChange, resetTitle, titleError] = useInputForm();
  const { dispatch } = useContext(DispatchContext);
  const theme = useTheme();
  const handleSaveNote = (evt) => {
    evt.preventDefault();
    if (!messageError && !titleError) {
      dispatch({ type: "ADD-NOTE", message, title, id: uuid() });
      resetMessage();
      resetTitle();
    }
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        style={theme.notesform.box}
      >
        <Paper elevation={3} style={theme.notesform.paper}>
          <Typography variant="h4" style={theme.notesform.typography}>
            Add Note
          </Typography>
          <NotesInput
            htmlFor="title"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            error={messageError}
            style={theme.notesform.notesinput}
          />
          <NotesInput
            htmlFor="message"
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            error={titleError}
            style={theme.notesform.notesinput}
          />
          <Button
            type="submit"
            onClick={handleSaveNote}
            variant="outlined"
            startIcon={<SaveIcon />}
            disabled={messageError || titleError}
          >
            Save Note
          </Button>
        </Paper>
      </Box>
    </>
  );
}
