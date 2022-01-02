import { useState } from "react";
import { useParams } from "react-router";

import { ReactComponent as ChevronLeftSVG } from "@src/assets/icons/chevron-left.svg";
import { ReactComponent as PlusSVG } from "@src/assets/icons/plus.svg";
import { ReactComponent as TrashSVG } from "@src/assets/icons/trash.svg";

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
    <div id="note-view" className="view">
      <div className="note-line-list">
        {noteLines.map((line, i) => (
          <div className="card note-line" key={i}>
            <div className="content">{line}</div>
            <div className="line-id">{i + 1}</div>
          </div>
        ))}
      </div>
      <footer className="note-actions">
        <button id="create-new" className="text-button">
          <PlusSVG />
          Yeni bir kart ekle
        </button>
        <div className="spacer"></div>
        <button id="remove-document" className="text-button">
          <TrashSVG />
        </button>
      </footer>
    </div>
  );
};

export default NoteView;
