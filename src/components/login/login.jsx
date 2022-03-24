import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({authService}) => {
    const navigator = useNavigate();
    const goToMaker = (userId)=>{
        navigator('/maker',{state:{id:userId}});
    };
    const onLogin = (event)=>{
        authService
        .login(event.currentTarget.textContent)
        .then(data => goToMaker(data.user.uid));
    }

    useEffect(()=>{
        authService
        .onAuthChange(user=>{
            user && goToMaker(user.uid);
        });
    });

    return(
        <section className={styles.login}>
            <Header/>
            <section>
                <h1>LOG-IN</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button onClick={onLogin} className={styles.button}>Google</button>
                    </li>

                    <li className={styles.item}>
                        <button onClick={onLogin} className={styles.button}>Github</button>
                    </li>
                </ul>
            </section>
            <Footer/>
        </section>
    );
};

export default Login;