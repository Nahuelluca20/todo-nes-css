import type {Note} from "../types";

type NoteModalProps = {
  note: Partial<Note>;
  onClose: VoidFunction;
  onChange: (field: string, value: string) => void;
  onSave: VoidFunction;
};

export default function NoteModal({note, onClose, onChange, onSave}: NoteModalProps) {
  return (
    <section
      className="nes-dialog"
      id="dialog-default"
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0,0,0,0.2)",
          width: "100%",
          height: "100%",
        }}
      />
      <form
        method="dialog"
        style={{backgroundColor: "white", zIndex: 1, padding: 12, border: "solid 5px black"}}
      >
        <h1 className="title">Create / Edit note</h1>
        <div className="nes-field">
          <label htmlFor="title">Title</label>
          <input
            className="nes-input"
            id="title"
            type="text"
            value={note.title}
            onChange={(e) => onChange("title", e.target.value)}
          />
        </div>
        <div className="nes-field">
          <label htmlFor="content">content</label>
          <textarea
            className="nes-textarea"
            id="content"
            value={note.content}
            onChange={(e) => onChange("content", e.target.value)}
          />
        </div>
        <div
          className="dialog-menu"
          style={{
            marginTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button className="nes-btn" onClick={onClose}>
            Close
          </button>
          <button className="nes-btn is-primary" onClick={onSave}>
            Save
          </button>
        </div>
      </form>
    </section>
  );
}
