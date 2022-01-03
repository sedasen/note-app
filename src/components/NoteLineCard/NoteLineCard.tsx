import React from "react";
import { ReactComponent as CopySVG } from "@src/assets/icons/copy.svg";
import { ReactComponent as TrashSVG } from "@src/assets/icons/trash.svg";
import { classes } from "@src/util/classes.util";

import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "@src/store/store";
import { actions as NoteActions } from "@src/store/duck/notes.duck";

import "./note-line-card.scss";

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeLine: (documentIndex: number, lineIndex: number) =>
    dispatch(NoteActions.removeDocumentLine([documentIndex, lineIndex])),
  cloneLine: (documentIndex: number, lineIndex: number) =>
    dispatch(NoteActions.cloneDocumentLine([documentIndex, lineIndex])),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & {
  text?: string;
  documentIndex: number;
  lineIndex: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

/* --------------------------- */

const NoteLineCard = (props: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [editing, setEditing] = React.useState(false);

  function onContentClick() {
    setEditing(true);
  }

  function onContentBlur() {
    setEditing(false);
  }

  function onLineClone() {
    props.cloneLine(props.documentIndex, props.lineIndex);
  }

  function onLineDelete() {
    props.removeLine(props.documentIndex, props.lineIndex);
  }

  React.useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  return (
    <div className="card note-line">
      <input
        type="text"
        ref={inputRef}
        style={!editing ? { display: "none" } : undefined}
        className={classes("content", !props.text && "content--empty")}
        value={props.text || ""}
        onBlur={onContentBlur}
        onChange={props.onChange}
      />

      <div
        style={editing ? { display: "none" } : undefined}
        className={classes("content", !props.text && "content--empty")}
        onClick={onContentClick}
      >
        {props.text || "Düzenlemek için tıklayınız..."}
      </div>

      <div className="actions">
        <button id="duplicate-button" className="action" onClick={onLineClone}>
          <CopySVG />
        </button>
        <button
          id="remove-button"
          className="action is-red"
          onClick={onLineDelete}
        >
          <TrashSVG />
        </button>
      </div>

      <div className="line-id">{props.lineIndex + 1}</div>
    </div>
  );
};

export default connector(NoteLineCard);
