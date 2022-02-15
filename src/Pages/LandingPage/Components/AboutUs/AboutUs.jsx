import React from 'react'
import classes from './aboutus.module.css';
import group from '../../../../Assets/group.png';
const AboutUs = () => {
    return (
        <div className={classes.container}>
            <div className={classes.gridItem1}>
                <p>
                    about us
                </p>
                <p>
                    THE Ad WIZ  Was carefully designed to help you grow your small business by giving you the freedom to grow online effortlessly and affordably
                </p>
                <p>
                    THE AD WIZ was born a few years back out of the experience of helping a friend promote her small home business online without hiring professional help. This experience, followed by many others, revealed the glass ceiling microbusinesses encounter when trying to market their business online in today's continually evolving digital marketing landscape.      See more
                </p>
                <p>
                    Accelerating your business online is just one chat away!
                </p>
                <button>Get Started</button>
            </div>
            <div className={classes.gridItem2}>
                <div className={classes.groupBackground}>
                    <img src={group} alt="" width="100%" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
