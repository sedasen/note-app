import NoteShortcutList from "@src/components/NoteShortcutList/NoteShortcutList";
import { useState } from "react";

const HomeView = () => {
  const [notes, setNotes] = useState([
    {
      iconColor: "red",
      title: "Note Document",
      noteLines: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec justo odio, laoreet id imperdiet eu, hendrerit sed urna."
      ]
    },
    {
      iconColor: "blue",
      title: "Note Document 1",
      noteLines: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec justo odio, laoreet id imperdiet eu, hendrerit sed urna."
      ]
    },
    {
      iconColor: "green",
      title: "Note Document 2",
      noteLines: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec justo odio, laoreet id imperdiet eu, hendrerit sed urna."
      ]
    },
    {
      iconColor: "orange",
      title: "Note Document 3",
      noteLines: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec justo odio, laoreet id imperdiet eu, hendrerit sed urna."
      ]
    }
  ]);

  return (
    <div className="view">
      <NoteShortcutList notes={notes} />
    </div>
  );
};

export default HomeView;
