import React, {useState} from "react";

export default function NoteForm(props){
    const [textareaValue, setTextareaValue] = useState();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (textareaValue === '') {
            return;
        }
        props.addNewNote(textareaValue);
        setTextareaValue('');
    };

    const onChangeHandler = (event) => {
        setTextareaValue(event.target.value);
    };

    return (
        <form className="newNote__form" onSubmit={onSubmitHandler}>
            <label htmlFor="addNewNote">Новая заметка</label>
            <textarea
                className="newNote__text"
                name="newNoteText"
                id="addNewNote"
                onChange={onChangeHandler}
                value={textareaValue}
            />
            <button type="submit" className="btn form__btn">Добавить</button>
        </form>
    );
}