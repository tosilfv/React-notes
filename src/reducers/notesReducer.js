export default function notesReducer(state, action) {
  switch (action.type) {
    case "ADD-NOTE":
      return [
        ...state,
        {
          title: action.title,
          message: action.message,
          id: action.id,
        },
      ];
    case "REMOVE-NOTE":
      return state.filter((note) => note.id !== action.id);
    default:
      return state;
  }
}
