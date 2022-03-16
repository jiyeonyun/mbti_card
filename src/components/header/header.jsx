import React from 'react';
import { memo } from 'react/cjs/react.production.min';
import styles from './header.module.css';

const Header = memo(
    ({onLogout}) => (
        <header className={styles.header}>
            {onLogout && (<button className={styles.logout} onClick={onLogout}>Logout</button>)}
            <img src="/images/logo.png" alt="" className={styles.logo} />
            <h1 className={styles.title}>Bussiness Card Maker</h1>
        </header>
    ));

export default Header;