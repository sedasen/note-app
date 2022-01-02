import { useState } from "react";
import { useParams } from "react-router";

const NoteView = () => {
  const { id } = useParams();

  const [noteLines, setNoteLines] = useState([
    "Line 1",
    "Line 2",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed finibus dictum fermentum.",
    "Cras molestie lorem in felis tempus, id fringilla est mattis."
  ]);

  return (
    <div className="view">
      <div className="card">Single Note ( {id} )</div>
      {noteLines.map((line, i) => (
        <div className="card" key={i}>
          {line}
        </div>
      ))}
    </div>
  );
};

export default NoteView;
