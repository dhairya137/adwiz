import React from 'react'
import classes from './input.module.css';
import mail from '../../../../Assets/AuthPage/mail.svg';
const Input = ({ img, placeholder }) => {
    return (
        <div className={classes.container}>
            <div>
                <img src={img} alt="" />
            </div>
            <input type="text" placeholder={placeholder} />
        </div>
    )
}

export default Input
