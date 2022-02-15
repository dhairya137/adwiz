import React from 'react'
import classes from './need.module.css';
import arrow from '../../../../Assets/arrow.svg';
import linebar from '../../../../Assets/linebar.svg';
const NeedToDo = () => {
    return (
        <div className={classes.container}>
            <div className={classes.gridItem1}>
                <p>
                    What you need to do?
                </p>
                <div>
                    <button>Chat</button>
                    <img src={arrow} alt="" />
                    <button>Choose</button>
                    <img src={arrow} alt="" />
                    <button>Click</button>
                </div>

                <div className={classes.gridLine}>
                    <div>
                        <img src={linebar} alt="" />
                    </div>
                    <div className={classes.gridLineItem2}>
                        <p>Chat</p>
                        <p>Reveiw Ad's deliverables edit <br /> as you wish</p>
                        <p>Approve</p>
                    </div>
                </div>
            </div>
            <div className={classes.gridItem2}>
                <p>What Ad takes off your back</p>
                <ul>
                    <li>Builds your target audience persona’s </li>
                    <li>Builds you campaigns</li>
                    <li>Tailors your media plan and consumer journey </li>
                    <li>Crafts your unique ads</li>
                    <li>Constantly monitor, adapt and optimize to<br />
                        maximize ROI</li>
                    <li>Reached out to you whenever a significant<br />
                        decision is at hand. </li>
                </ul>
            </div>
        </div>
    )
}

export default NeedToDo
