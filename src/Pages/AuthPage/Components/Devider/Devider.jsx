import React from 'react'
import classes from './devider.module.css';
const Devider = ({ text }) => {
    return (
        <div className={classes.container}>
            <span className="cursor-pointer"> {text}</span>
        </div>
    )
}

export default Devider