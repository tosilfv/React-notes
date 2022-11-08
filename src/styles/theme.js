import { createTheme } from "@mui/material";

export const theme = createTheme({
  note: {
    avatar: {
      important: {
        backgroundColor: "lightblue",
      },
      notImportant: {
        backgroundColor: "blue",
      },
    },
    button: {
      display: "flex",
      justifyContent: "center",
    },
    card: {
      height: "400px",
      margin: "10px",
      maxWidth: 345,
    },
    cardmedia: {
      objectFit: "contain",
    },
  },
  notes: {
    divInner: {
      display: "flex",
      flexDirection: "row-reverse",
    },
    divOuter: {
      backgroundColor: "black",
    },
    typography: {
      color: "violet",
      fontWeight: "800",
      textAlign: "center",
    },
  },
  notesform: {
    box: {
      alignItems: "flex-end",
      display: "flex",
      flexDirection: "column",
      margin: "40px",
    },
    notesinput: {
      margin: "20px 0",
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      height: "320px",
      marginTop: "10px",
      padding: "40px",
      textAlign: "center",
    },
    typography: {
      color: "darkblue",
      fontWeight: "800",
    },
  },
  noteslist: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: "40px",
  },
});
