import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  // State to store the list of notes
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "21/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "28/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "30/04/2021",
    },
  ]);
  // State to store the current search text

  const [searchText, setSearchText] = useState("");
  // State to manage dark mode preference

  const [darkMode, setDarkMode] = useState(false);
  // Fetch notes from local storage on initial render

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  // Save notes to local storage whenever the notes state changes

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);
  // Function to add a new note

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  // Function to delete a note by its ID
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
