import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react/cjs/react.development';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({FileInput,authService,cardRepository}) => {
    const navigatorState = useNavigate().state;
    
    const [cards , setCards] = useState({});
    const [userId, setUserId] = useState(navigatorState && navigatorState.id);

    const navigator = useNavigate();
    const onLogout = useCallback( ()=>{
        authService.logout();
    },[authService]);
    useEffect(()=>{
        if(!userId){
            return;
        }
        const stopSync = cardRepository.syncCards(userId,cards =>{
            setCards(cards);
        })
        return () => stopSync();
    },[userId,cardRepository]);

    useEffect(()=>{
        authService.onAuthChange(user=>{
            if(user){
                setUserId(user.uid);
            }
            else{
                navigator('/');
            }
        });
    },[userId,authService])

    const CreateOrupdateCard = (card)=>{
        setCards(cards =>{
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId, card);
    }

    const deleteCard = (card)=>{
        setCards(cards =>{
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId, card);
    }
    
    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor FileInput={FileInput} cards={cards} addCard={CreateOrupdateCard} updateCard={CreateOrupdateCard} deleteCard={deleteCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    );
};

export default Maker;