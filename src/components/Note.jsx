import React from "react";
import { useRef } from "react";

export default function Note(props){
    const ref = useRef();
    const onDeleteBtnClickHandler = () => {
        props.deleteNote(props.id);
    };

    return (
        <div ref={ref} className="note" data-id={props.id}>
            <p className="note__text">{props.text}</p>
            <div className="delete__btn" onClick={onDeleteBtnClickHandler}>x</div>
        </div>
    );
}