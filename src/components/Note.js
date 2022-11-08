import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { searchImage } from "../utils/helper";
import { DispatchContext } from "../contexts/NotesContext";
const API_BASE = "https://api.tvmaze.com/singlesearch/shows?q=";

export default function Note({ note }) {
  const [image, setImage] = useState("");
  const { dispatch } = useContext(DispatchContext);
  const theme = useTheme();

  const handleRemove = () => {
    dispatch({ type: "REMOVE-NOTE", id: note.id });
  };

  useEffect(() => {
    const searchWord = searchImage(note.title);
    const url = `${API_BASE}${searchWord}`;
    async function getImage() {
      const response = await axios.get(url);
      response.data.image.medium === null
        ? setImage("")
        : setImage(response.data.image.medium);
    }
    getImage();
  }, [image, note.title]);

  return (
    <Card style={theme.note.card}>
      <CardHeader
        avatar={
          <Avatar style={theme.note.avatar.important} aria-label="note title">
            {note.title}
          </Avatar>
        }
        title={note.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="tv maze image"
        style={theme.note.cardmedia}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {note.message}
        </Typography>
      </CardContent>
      <CardContent style={theme.note.button}>
        <Button type="submit" onClick={handleRemove} variant="outlined">
          Remove
        </Button>
      </CardContent>
    </Card>
  );
}
