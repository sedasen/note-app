import React from "react";
import NoteShortcutList from "@src/components/NoteShortcutList/NoteShortcutList";
import { ColorName } from "@src/util/colors.util";

import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "@src/store/store";
import { actions as NoteActions } from "@src/store/duck/notes.duck";

const mapStateToProps = (state: RootState) => ({
  theme: state.theme.type,
  noteDocuments: state.notes.documents,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  insertDocument: (noteDocument: NoteApp.Document) =>
    dispatch(NoteActions.createDocument(noteDocument)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & {};

/* ------------ */

const HomePage = (props: Props) => {
  function createBlankDocument() {
    props.insertDocument({
      title: "İsimsiz Not Kağıdı",
      color: ColorName.WHITE,
      noteLines: [],
    });
  }

  return (
    <div className="view">
      <NoteShortcutList notes={props.noteDocuments} />

      {/* @TODO: @Yasin; Create note button, with a blank white note document */}
      <button onClick={createBlankDocument}>Yeni Bir Dosya Ekle</button>
    </div>
  );
};

export default connector(HomePage);
