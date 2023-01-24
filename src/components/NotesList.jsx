import React from "react";
import Note from "./Note";

export default function NotesList(props){
    return (
        <div className="notes__list">
            {props.notes.map(note =>
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.content}
                    deleteNote={props.deleteNote}
                />
            )}
        </div>
    );
}