import React from "react";

export default function NotesHeader(props){
    return (
        <div className="notesHeader__container">
            <h1 className="main__title">Заметки</h1>
            <button className="btn btn__update" onClick={props.updateNotes}>Обновить</button>
        </div>
    );
}