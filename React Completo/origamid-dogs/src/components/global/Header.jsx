 // Libs:
import React from 'react'
import { Link } from 'react-router-dom';

// Images:
import { ReactComponent as Dogs } from '../../assets/images/dogs.svg';

// Styles:
import styles from '../../assets/styles/components/global/header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link to="/" className={styles.logo} title="Home" aria-label='Dogs - Home'><Dogs /></Link>
                <Link to="/login" className={styles.login}>Login / Criar</Link>
            </nav>
        </header>
    )
}
