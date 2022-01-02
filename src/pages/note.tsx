import React from "react";

import { ReactComponent as ChevronLeftSVG } from "@src/assets/icons/chevron-left.svg";
import { ReactComponent as PlusSVG } from "@src/assets/icons/plus.svg";
import { ReactComponent as TrashSVG } from "@src/assets/icons/trash.svg";
import { useCurrentNote } from "../hooks/useCurrentNote.hook";

const NotePage = () => {
  const noteDocument = useCurrentNote();

  function goBack() {
    location.replace("/");
  }

  if (noteDocument === null) {
    goBack();
    return null;
  }

  function createNewLine() {}

  return (
    <div id="note-view" className="view">
      <button id="go-back" onClick={goBack}>
        <ChevronLeftSVG />
      </button>
      <div className="note-line-list">
        {noteDocument?.noteLines.map((line, i) => (
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

export default NotePage;
