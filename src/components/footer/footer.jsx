import React from 'react';
import { memo } from 'react/cjs/react.production.min';
import styles from './footer.module.css';
const Footer = memo(
    () => (
        <footer className={styles.footer}>
            <p className={styles.title}>Code your Dream</p>
        </footer>
));

export default Footer;