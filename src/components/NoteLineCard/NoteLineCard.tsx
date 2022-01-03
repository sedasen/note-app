import React from "react";
import { ReactComponent as CopySVG } from "@src/assets/icons/copy.svg";
import { ReactComponent as TrashSVG } from "@src/assets/icons/trash.svg";
import { classes } from "@src/util/classes.util";
import "./note-line-card.scss";

interface Props {
  text?: string;
  index: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const NoteLineCard = (props: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [editing, setEditing] = React.useState(false);

  function onContentClick() {
    setEditing(true);
  }

  function onContentBlur() {
    setEditing(false);
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
        <button id="duplicate-button" className="action">
          <CopySVG />
        </button>
        <button id="remove-button" className="action is-red">
          <TrashSVG />
        </button>
      </div>

      <div className="line-id">{props.index + 1}</div>
    </div>
  );
};

export default NoteLineCard;
