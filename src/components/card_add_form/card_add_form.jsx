import React, { useRef, useState } from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';
import { memo } from 'react/cjs/react.production.min';
const CardAddForm = memo(
    ({FileInput,onAdd}) =>  {
        const formRef = useRef();
        const nameRef = useRef();
        const mbtiRef = useRef();
        const themeRef = useRef();
        const titleRef = useRef();
        const instargramRef = useRef();
        const memoRef = useRef();
        const [file,setFile] = useState({fileName: null, fileURL: null});
    
        const onFileChange = file =>{
            setFile({
                fileName: file.name,
                fileURL: file.url,
            });
        }
        
        const onSubmit = (event)=>{
            if(mbtiRef.current.value !== ''){
            event.preventDefault();
                const card = {
                    id: Date.now(),
                    name:nameRef.current.value  || '',
                    mbti:mbtiRef.current.value || '',
                    theme:themeRef.current.value,
                    title:titleRef.current.value || '',
                    instargram:instargramRef.current.value || '',
                    memo:memoRef. current.value || '',
                    fileName:file.fileName || '',
                    fileURL:file.fileURL || '',
                };
                formRef.current.reset();
                setFile({fileName: null, fileURL: null});
                onAdd(card);
            }
            else{
                event.preventDefault();
                alert('mbti를 입력 해 주세요.')
            }
        };
    
        return(
            <form ref={formRef}className={styles.form}>
                <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="name" />
                <input ref={mbtiRef} className={styles.input} type="text" name="mbti" placeholder="mbti" />
                <select ref={themeRef} className={styles.select} name="theme" placeholder="theme">
                    <option placeholder="yellow">yellow</option>
                    <option placeholder="blue">blue</option>
                    <option placeholder="green">green</option>
                    <option placeholder="purple">purple</option>
                </select>
                <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="message"/>
                <input ref={instargramRef} className={styles.input} type="text" name="instargram" placeholder="instargram" required/>
                <textarea ref={memoRef} className={styles.textarea} name="memo" placeholder="memo"></textarea>
                <div className={styles.fileInput}>
                    <FileInput name={file.fileName} onFileChange={onFileChange}/>
                </div>
                <Button name='Add' onClick={onSubmit}/>
            </form>
    
        );
    }
);

export default CardAddForm;