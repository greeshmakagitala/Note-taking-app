import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  // Renders an individual note component

  return (
    <div className="note">
      <span>{text}</span>
      <div className="noteFooter">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
