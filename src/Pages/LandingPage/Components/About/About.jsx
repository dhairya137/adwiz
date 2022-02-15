import React from 'react'
import classes from './about.module.css';
import about from '../../../../Assets/aboutImg.svg';
const About = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.gridItem1}><img src={about} alt="" width="100%" /></div>
                <div className={classes.gridItem2}>
                    <p>
                        You will stop at nothing to grow your business and
                        now it is more effortless and affordable than ever.
                    </p>
                    <button>Start free trial</button>
                </div>
            </div>
        </div>
    )
}

export default About
