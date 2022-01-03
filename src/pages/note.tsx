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
import NoteLineCard from "../components/NoteLineCard/NoteLineCard";

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createLine: (documentIndex: number) =>
    dispatch(NoteActions.addDocumentLine([documentIndex, ""])),
  editLine: (documentIndex: number, lineIndex: number, line: string) =>
    dispatch(NoteActions.editDocumentLine([documentIndex, lineIndex, line]))
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
      <main className="main">
        <button id="go-back" onClick={goBack}>
          <ChevronLeftSVG />
        </button>
        <div className="note-line-list">
          {React.Children.map(noteDocument.document?.noteLines, (line, i) => (
            <NoteLineCard
              text={line}
              index={i}
              onChange={e => {
                props.editLine(noteDocument.documentIndex, i, e.target.value);
              }}
            />
          ))}
        </div>
      </main>
      <footer className="actions note-actions">
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
