import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "@src/store/store";
import { accessIndex } from "@src/util/accessor.util";
import { usePathNames } from "./usePathNames.hook";

export function useCurrentNote() {
  const pathNames = usePathNames();

  const id = accessIndex(pathNames, 1);
  const documentIndex = Math.floor(Number(id));

  const store = useSelector((state: RootState) => ({
    noteDocuments: state.notes.documents,
  }));

  return {
    documentIndex,
    document:
      accessIndex(pathNames, 0) !== "notes" || isNaN(documentIndex)
        ? null
        : accessIndex(store.noteDocuments, documentIndex),
  };
}
