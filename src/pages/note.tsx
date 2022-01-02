import React from "react";
import { useNavigate } from "react-router-dom";

import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "@src/store/store";
import { actions as NoteActions } from "@src/store/duck/notes.duck";

import { ReactComponent as ChevronLeftSVG } from "@src/assets/icons/chevron-left.svg";
import { ReactComponent as PlusSVG } from "@src/assets/icons/plus.svg";
import { ReactComponent as TrashSVG } from "@src/assets/icons/trash.svg";
import { useCurrentNote } from "../hooks/useCurrentNote.hook";

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createLine: (documentIndex: number) =>
    dispatch(
      NoteActions.addDocumentLine([
        documentIndex,
        "Düzenlemek için tıklayınız...",
      ])
    ),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & {};

/* ----------------------------- */

const NotePage = (props: Props) => {
  const navigate = useNavigate();
  const noteDocument = useCurrentNote();

  function goBack() {
    navigate("/");
  }

  if (noteDocument === null) {
    goBack();
    return null;
  }

  function createNewLine() {
    props.createLine(noteDocument.documentIndex);
  }

  return (
    <div id="note-view" className="view">
      <button id="go-back" onClick={goBack}>
        <ChevronLeftSVG />
      </button>
      <div className="note-line-list">
        {noteDocument.document?.noteLines.map((line, i) => (
          <div className="card note-line" key={i}>
            <div className="content">{line}</div>
            <div className="line-id">{i + 1}</div>
          </div>
        ))}
      </div>

      <footer className="note-actions">
        <button id="create-new" className="text-button" onClick={createNewLine}>
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

export default connector(NotePage);
