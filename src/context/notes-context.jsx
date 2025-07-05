import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducers/notesReducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const initialState = {
    title: "",
    text: "",
    notes: [],
    archive: [],
    important:[],
    bin:[]
  };

  const [{ title, text, notes, archive ,important,bin}, notesDispatch] = useReducer(
    notesReducer,
    initialState
  );

  return (
    <NotesContext.Provider value={{ title, text, notes, archive,important,bin, notesDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};

export  { NotesProvider, useNotes };
