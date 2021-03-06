import React from "react";
import { ReactComponent as CheckSVG } from "@src/assets/icons/check.svg";
import { Link } from "react-router-dom";
import { RootState } from "@src/store/store";
import { Dispatch } from "@reduxjs/toolkit";
import { actions as NoteActions } from "@src/store/duck/notes.duck";
import { connect, ConnectedProps } from "react-redux";
import { ColorName } from "../../util/colors.util";

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTitle: (documentIndex: number, title: string) =>
    dispatch(NoteActions.setDocumentTitle([documentIndex, title])),
  setColor: (documentIndex: number, color: ColorName) =>
    dispatch(NoteActions.setDocumentColor([documentIndex, color])),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & {
  documentIndex: number;
  document: NoteApp.Document;
};

/* ------------------- */

const NoteShortcutElement = (props: Props) => {
  const [editing, setEditing] = React.useState(false);

  function onRightClick(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    setEditing(true);
  }

  function onEditAccept() {
    setEditing(false);
  }

  function onTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.setTitle(props.documentIndex, event.target.value);
  }

  function onColorPick(color: ColorName) {
    return function () {
      props.setColor(props.documentIndex, color);
    };
  }

  return (
    <div className="note-shortcut" onContextMenu={onRightClick}>
      <div
        className="color-picker"
        style={!editing ? { display: "none" } : undefined}
      >
        <div className="color blue" onClick={onColorPick(ColorName.BLUE)} />
        <div className="color green" onClick={onColorPick(ColorName.GREEN)} />
        <div className="color red" onClick={onColorPick(ColorName.RED)} />
        <div className="color orange" onClick={onColorPick(ColorName.ORANGE)} />
        <div className="color yellow" onClick={onColorPick(ColorName.YELLOW)} />
        <div className="color purple" onClick={onColorPick(ColorName.PURPLE)} />
      </div>
      <Link to={`/notes/${props.documentIndex}`}>
        <div className="icon-wrapper">
          <svg
            className={`icon ${props.document.color}`}
            viewBox="0 0 142 142"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M115.375 142H26.625C11.9191 142 0 130.081 0 115.375V26.625C0 11.9191 11.9191 0 26.625 0H115.375C130.081 0 142 11.9191 142 26.625V115.375C142 130.081 130.081 142 115.375 142Z"
              fillOpacity="0.05"
            />
            <path d="M100.489 62.8661C100.489 55.8848 100.489 55.491 100.489 49.3672V43.2657V43.2657C100.489 38.9768 97.013 35.5 92.7241 35.5C91.1558 35.5 89.5265 35.5001 87.9757 35.5001H49.4582C44.963 35.5001 41.3242 39.1388 41.3242 43.634V98.3617C41.3242 102.861 44.963 106.5 49.4582 106.5H92.3555C96.8507 106.5 100.489 102.861 100.489 98.3661V73.9599V62.8661ZM59.8153 87.2724H58.3376V98.3661C58.3376 99.5909 57.3436 100.585 56.1188 100.585C54.8941 100.585 53.9001 99.5909 53.9001 98.3661V87.2724H52.418C51.1932 87.2724 50.1992 86.2784 50.1992 85.0536C50.1992 83.8289 51.1932 82.8349 52.418 82.8349H59.8153C61.04 82.8349 62.034 83.8289 62.034 85.0536C62.034 86.2784 61.04 87.2724 59.8153 87.2724ZM76.5447 97.2878C77.1393 98.3617 76.7532 99.7107 75.6838 100.305C75.3421 100.496 74.9738 100.585 74.6055 100.585C73.8289 100.585 73.0701 100.172 72.6618 99.4444L70.9046 96.2805L69.1473 99.4444C68.7435 100.172 67.9847 100.585 67.2037 100.585C66.8398 100.585 66.4671 100.496 66.1254 100.305C65.0515 99.7107 64.6699 98.3617 65.2645 97.2878L68.3619 91.7099L65.2645 86.1319C64.6699 85.0581 65.056 83.7091 66.1254 83.1144C67.1948 82.5198 68.5483 82.9059 69.1429 83.9753L70.9002 87.1392L72.6574 83.9753C73.252 82.9014 74.6055 82.5154 75.6749 83.1144C76.7488 83.7091 77.1304 85.0581 76.5358 86.1319L73.4384 91.7099L76.5447 97.2878ZM89.3957 87.2724H87.918V98.3661C87.918 99.5909 86.924 100.585 85.6992 100.585C84.4745 100.585 83.4805 99.5909 83.4805 98.3661V87.2724H82.0028C80.778 87.2724 79.784 86.2784 79.784 85.0536C79.784 83.8289 80.778 82.8349 82.0028 82.8349H89.4001C90.6248 82.8349 91.6188 83.8289 91.6188 85.0536C91.6188 86.2784 90.6204 87.2724 89.3957 87.2724Z" />
          </svg>
        </div>
      </Link>
      <div className="input-wrapper">
        <input
          type="text"
          style={!editing ? { display: "none" } : undefined}
          value={props.document.title}
          onChange={onTitleChange}
        />
        <button
          id="save-button"
          style={!editing ? { display: "none" } : undefined}
          onClick={onEditAccept}
        >
          <CheckSVG />
        </button>
      </div>
      <div className="title" style={editing ? { display: "none" } : undefined}>
        {props.document.title}
      </div>
    </div>
  );
};

export default connector(NoteShortcutElement);
