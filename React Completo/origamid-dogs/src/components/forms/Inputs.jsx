// Libs:
import React from 'react'

// Styles:
import styles from '../../assets/styles/components/forms/inputs.module.css';

export const Inputs = ({ label, type, name }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input id={name} type={type} name={name} className={styles.input} />
            <p className={styles.error}>Error</p>
        </div>
    )
}

export default Inputs;