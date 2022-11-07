import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { searchImage } from "../utils/helper";
const API_BASE = "https://api.tvmaze.com/singlesearch/shows?q=";

export default function Note({ note }) {
  const [image, setImage] = useState("");
  const theme = useTheme();

  useEffect(() => {
    const searchWord = searchImage(note.title);
    const url = `${API_BASE}${searchWord}`;
    async function getImage() {
      const response = await axios.get(url);
      setImage(response.data.image.medium);
    }
    getImage();
  }, [image, note.title]);

  return (
    <Card style={theme.layout.card}>
      <CardHeader
        avatar={
          <Avatar style={theme.layout.avatar.important} aria-label="note title">
            important
          </Avatar>
        }
        title={note.title}
        subheader={note.due}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="tv maze image"
        style={theme.layout.cardmedia}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {note.message}
        </Typography>
      </CardContent>
    </Card>
  );
}
