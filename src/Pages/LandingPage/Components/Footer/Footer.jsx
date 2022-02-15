import React from 'react'
import classes from './footer.module.css';
import facebookLogo from '../../../../Assets/facebookLogo.svg';
import twitterLogo from '../../../../Assets/twitterLogo.svg';
import linkedinLogo from '../../../../Assets/linkedinLogo.svg';
const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.flexItem1}>
                <p>Subscribe to our newsletter for the latest <br /> news & information</p>
                <input type="email" placeholder="Email*" />
                <button>SUBMIT</button>
            </div>

            <div className={classes.flexItem2}>
                <ul>
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Help</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Policy</a></li>
                    <li><a href=""><img src={facebookLogo} alt="" /></a></li>
                    <li><a href=""><img src={twitterLogo} alt="" /></a></li>
                    <li><a href=""><img src={linkedinLogo} alt="" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
