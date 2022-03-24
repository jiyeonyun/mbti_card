import React, { useRef, useState } from 'react';
import { memo } from 'react/cjs/react.production.min';
import styles from './image_File_input.module.css';
const ImageFileInput = memo(
    ({imageUploader,name,onFileChange}) => {
        const [loading , setLoading] = useState(false);
        const inputRef = useRef();
        const onButtonClick = (event)=>{
            event.preventDefault();
            inputRef.current.click();
        }
        const onChange = async event=>{
            setLoading(true);
            const uploaded = await imageUploader.upload(event.target.files[0]);
            setLoading(false);
            onFileChange({
                name: uploaded.original_filename,
                url: uploaded.url,
            });
        }
    
        return(
            <div className={styles.container}>
                <input ref={inputRef} type='file' accept='image/*' name='file' onChange={onChange} className={styles.input}/>
                {
                    !loading && <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} onClick={onButtonClick}>
                                    {name || '사진 업로드'}
                                </button>
                }
                {
                    loading && <div className={styles.loading}></div>
                }
                
            </div>
        );
    }
);
export default ImageFileInput;