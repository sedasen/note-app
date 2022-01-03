import "./note-shortcut.scss";
import NoteShortcutElement from "./NoteShortcutElement";

interface Props {
  notes: NoteApp.Document[];
}

const NoteShortcutList = (props: Props) => {
  if (props.notes.length === 0) {
    return <div>Henüz hiçbir dosya yok.</div>;
  }

  return (
    <div className="note-shortcut-list">
      {props.notes.map((note, i) => (
        <NoteShortcutElement key={i} documentIndex={i} document={note} />
      ))}
    </div>
  );
};

export default NoteShortcutList;
