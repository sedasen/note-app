import { useParams } from "react-router";

const NoteView = () => {
  const { id } = useParams();

  return (
    <div className="view">
      <div className="card">
        Single Note ( { id } )
      </div>
    </div>
  )
}

export default NoteView;