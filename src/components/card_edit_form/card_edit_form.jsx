import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';
const CardEditForm = ({card, updateCard , deleteCard ,FileInput}) =>  {
    const {name, mbti, title, instargram, memo, theme, fileName} = card;
    const formRef = useRef();
    const nameRef = useRef();
    const mbtiRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const instargramRef = useRef();
    const memoRef = useRef();

    const onChange = (event)=>{
        if(event.currentTarget == null){
            return;
        }
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value,
        })
    };

    const onFileChange = file =>{
        updateCard({
            ...card,
            fileName: file.name,
            fileURL: file.url,
        })
    }
    const onSubmit = ()=>{
        deleteCard(card);
    };

    return(
        <form className={styles.form}>
            <input ref={nameRef} className={styles.input} type="text" name="name" value={name} onChange={onChange}/>
            <input ref={mbtiRef} className={styles.input} type="text" name="mbti" value={mbti} onChange={onChange} />
            <select ref={themeRef} className={styles.select} name="theme" value={theme} onChange={onChange}>
                <option value="yellow">yellow</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="purple">purple</option>
            </select>
            <input ref={titleRef} className={styles.input} type="text" name="title" value={title} onChange={onChange}/>
            <input ref={instargramRef}className={styles.input} type="text" name="instargram" value={instargram} onChange={onChange}/>
            <textarea ref={memoRef}className={styles.textarea} name="memo" value={memo} onChange={onChange}></textarea>
            <div className={styles.fileInput}>
                <FileInput name={fileName} onFileChange={onFileChange}/>
                </div>
            <Button name='Delete' onClick={onSubmit}/>
        </form>

    );
};

export default CardEditForm;