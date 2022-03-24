import React from 'react';
import { memo } from 'react/cjs/react.production.min';
import styles from './card.module.css';

let DEFAULT_IMAGE = '';

function defaultimg(mbti){
    switch(mbti){

        case 'enfj':
        return  DEFAULT_IMAGE = '/images/enfj.png';

        case 'enfp':
        return DEFAULT_IMAGE = '/images/enfp.png';

        case 'entj':
        return DEFAULT_IMAGE = '/images/entj.png';

        case 'entp':
        return DEFAULT_IMAGE = '/images/entp.png';

        case 'esfj':
        return DEFAULT_IMAGE = '/images/esfj.png';

        case 'esfp':
        return DEFAULT_IMAGE = '/images/esfp.png';

        case 'estj':
        return DEFAULT_IMAGE = '/images/estj.png';

        case 'estp':
        return DEFAULT_IMAGE = '/images/estp.png';

        case 'infj':
        return DEFAULT_IMAGE = '/images/infj.png';

        case 'infp':
        return DEFAULT_IMAGE = '/images/infp.png';

        case 'intj':
        return DEFAULT_IMAGE = '/images/intj.png';

        case 'intp':
        return DEFAULT_IMAGE = '/images/intp.png';

        case 'isfj':
        return DEFAULT_IMAGE = '/images/isfj.png';

        case 'isfp':
        return DEFAULT_IMAGE = '/images/isfp.jpeg';

        case 'istj':
        return DEFAULT_IMAGE = '/images/istj.png';

        case 'istp':
        return DEFAULT_IMAGE = '/images/istp.png';

        default:
            return DEFAULT_IMAGE = '/images/default_img.jpeg';
    }
}

const Card = memo(
    ({card}) =>  {
        const {name, mbti, title, instargram, memo, theme ,fileURL} = card;
        const url = fileURL || defaultimg(mbti);
        
        return(
            <li className={`${styles.card} ${getStyles(theme)}`}>
                <img className={styles.avatar} src={url} alt="profile" />
                <div className={styles.info}>
                    <h1 className={styles.name}>{name}</h1>
                    <p className={styles.mbti}>{mbti}</p>
                    <p className={styles.instargram}>{`@${instargram}`}</p>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.memo}>{memo}</p>
                </div>
            </li>
        );
    }
);

function getStyles(theme){
    switch(theme){
        case 'yellow':
        return styles.yellow;

        case 'blue':
        return styles.blue;

        case 'purple':
        return styles.purple;

        case 'green':
        return styles.green;

        default:
            throw new Error(`unknown them: ${theme}`);
    }
}
export default Card;