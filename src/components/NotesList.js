import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  // Renders the list of notes and the AddNote component
  return (
    <div className="notesList">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
