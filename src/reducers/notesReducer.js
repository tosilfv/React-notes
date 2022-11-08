export default function notesReducer(state, action) {
  switch (action.type) {
    case "ADD-NOTE":
      return [
        ...state,
        {
          title: action.title,
          message: action.message,
          due: null,
          important: false,
          id: action.id,
        },
      ];
    case "EDIT-NOTE":
      return state.map((note) =>
        note.id === action.id
          ? {
              ...note,
              title: action.title,
              message: action.message,
              due: null,
              important: false,
            }
          : note
      );
    case "REMOVE-NOTE":
      return state.filter((note) => note.id !== action.id);
    default:
      return state;
  }
}
