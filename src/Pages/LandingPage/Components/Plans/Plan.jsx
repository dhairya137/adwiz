import React from 'react'
import classes from './plan.module.css';
const Plan = () => {
    return (
        <div className={classes.container}>
            <p>
                Simple and affordable plan
                Saving you precious<br /> time to do what you do best!
            </p>
            <div className={classes.plansDiv}>
                <div className={classes.plan1}>
                    <p>
                        Unlimited Monthly
                    </p>
                    <p>
                        Get going. No limits from day one
                    </p>
                    <div className={classes.prizeDiv}>

                        <div>
                            <span>
                                <sup>
                                    $
                                </sup>39</span>
                            <span>per month</span>
                        </div>
                    </div>

                    <button>Start Free Trial</button>
                </div>
                <div className={classes.plan2}>
                    <p>
                        Unlimited Annual
                    </p>
                    <p>
                        Get the best value from the start
                    </p>
                    <div className={classes.prizeDiv}>

                        <div>
                            <span>
                                <sup>
                                    $
                                </sup>390</span>
                            <span>per year(17% saving)</span>
                        </div>
                    </div>

                    <button>Start Free Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Plan
