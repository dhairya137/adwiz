import React from 'react'
import classes from './ads.module.css';
import sponsored from '../../Assets/Ads/sponsored.svg';
import optionsbar from '../../Assets/Ads/optionsbar.svg';
import logo from '../../Assets/Ads/ads.svg'
import header from '../../Assets/Ads/header.svg'
import like from '../../Assets/Ads/like.svg'
import comment from '../../Assets/Ads/comment.svg'
import share from '../../Assets/Ads/share.svg'
const Ads = () => {
    return (
        <div className={classes.container}>
            <h1>Ready Rifat? Here are your ads!</h1>
            <p>Select your two favorite ads, edit as you please and press next when you’re done.</p>

            <div className={classes.cardsContainer}>
                {[1, 2, 3].map(element => {
                    return <div>
                        <div className={classes.flexItem1}>
                            <p> Image Ad</p>
                            <div className={classes.devider}></div>

                            <div className={classes.adheader}>
                                <div>
                                    <img src={logo} alt="" />
                                    <div className={classes.flexColumn}>
                                        <span>The ad wiz</span>
                                        <span>Sponsored <img src={sponsored} alt="" /></span>
                                    </div>
                                </div>

                                <div>
                                    <img src={optionsbar} alt="" />
                                </div>
                            </div>
                            <div>
                                <p className={classes.description}>
                                    AD(THE Ad Wiz) is a virtual digital marketer fitted for small & local businesses, helping themgrow their business by providing them with anend-to-end professional and effortless digital marketing solution for an affordable monthly fee.
                                </p>
                                <img src={header} alt="" />
                            </div>

                            <div className={classes.adheader}>
                                <div className={classes.flexColumn2}>
                                    <span>
                                        THEASWIZ.COM
                                    </span>
                                    <span>
                                        The Ad Wiz
                                    </span>
                                </div>

                                <div>
                                    <button className={classes.learnMoreBtn}>Learn More</button>
                                </div>
                            </div>

                            <div className={classes.socialButtonDiv}>
                                <button><img src={like} alt="" /> Like</button>
                                <button><img src={comment} alt="" /> Comment</button>
                                <button><img src={share} alt="" /> Share</button>
                            </div>
                        </div>

                        <div className={classes.editButtons}>
                            <button>Select</button>
                            <button>Edit</button>
                        </div>
                    </div>
                })}


            </div>

            <div className={classes.bottomButtons}>
                <button>See all Previews</button>
                <button>Next</button>
            </div>
        </div>
    )
}

export default Ads
