import React from 'react'
import classes from './header.module.css';
import header from '../../../../Assets/headerImg.png';
import play from '../../../../Assets/play.svg';
const Header = () => {
    return (
        <div className={classes.container}>
            <div className={classes.gridItem1}>
                <h1>Your road to success is about to get unbelievably easier.</h1>
                <p>With Ad as your personal virtual digital marketer, you can
                    grow your business through professional digital marketing
                    without doing all the hard work and at an affordable rate. Chat with Ad and start growing your business online in
                    minutes.
                </p>

                <div className={classes.buttonDiv}>
                    <button>Start free trial</button>
                    <button><img src={play} alt="" />  Watch the video</button>
                </div>
            </div>
            <div>
                <img src={header} alt="" />
            </div>
        </div>
    )
}

export default Header
