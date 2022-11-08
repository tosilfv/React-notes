import React from "react";
import { TextField } from "@mui/material";

export default function NotesInput({
  htmlFor,
  id,
  name,
  value,
  onChange,
  error,
  style,
}) {
  return (
    <TextField
      label={htmlFor}
      variant="outlined"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={error && `${name} cannot be empty`}
      style={style}
    />
  );
}
