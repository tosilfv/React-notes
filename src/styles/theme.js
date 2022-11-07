import { createTheme } from "@mui/material";

export const theme = createTheme({
  layout: {
    avatar: {
      important: {
        backgroundColor: "red",
      },
      notImportant: {
        backgroundColor: "blue",
      },
    },
    card: {
      maxWidth: 345,
    },
    cardmedia: {
      objectFit: "contain",
    },
  },
});
