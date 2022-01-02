import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "@src/store/store";
import { accessIndex } from "@src/util/accessor.util";

export function useCurrentNote() {
  const { id } = useParams();
  const documentIndex = Math.floor(Number(id));

  const store = useSelector((state: RootState) => ({
    noteDocuments: state.notes.documents,
  }));

  const noteDocument = React.useMemo(
    () => accessIndex(store.noteDocuments, documentIndex),
    [store.noteDocuments.length]
  );

  return isNaN(documentIndex) ? null : noteDocument;
}
