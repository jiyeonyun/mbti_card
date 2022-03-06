import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const navigator = useNavigate();
    const onLogout = ()=>{
        authService.logout();
    };
    const [cards , setCards] = useState([
        {
            id: '1',
            name: 'jiyeon',
            company:'kakao',
            title:'Software Egineer',
            email: 'ellie@gmail.com',
            message: '얼떨결에 성공한사람',
            theme: 'dark',
            fileName: 'ellie',
            fileURL : null,
        },
        {
            id: '2',
            name: 'jiyeon2',
            company:'kakao',
            title:'Software Egineer',
            email: 'ellie@gmail.com',
            message: '얼떨결에 성공한사람',
            theme: 'light',
            fileName: 'ellie',
            fileURL : null,
        },
        {
            id: '3',
            name: 'jiyeon3',
            company:'kakao',
            title:'Software Egineer',
            email: 'ellie@gmail.com',
            theme: 'colorful',
            message: '얼떨결에 성공한사람',
            fileName: 'ellie',
            fileURL : null,
        }
    ]);

    useEffect(()=>{
        authService.onAuthChange(user=>{
            if(!user){
                navigator('/');
            }
        });
    })
    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    );
};

export default Maker;