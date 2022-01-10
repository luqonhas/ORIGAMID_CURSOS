// Libs:
import React from 'react'

// Styles:
import styles from '../../assets/styles/components/forms/buttons.module.css';

export const Buttons = ({children, ...props}) => {
    return (
        <button {...props} className={styles.button}>{children}</button>
    )
}

export default Buttons;