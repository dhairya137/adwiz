import React from 'react'
import chatData, { defaultMessages, chatOfUsers } from '../../../data/chat/chat';
import ralph from '../../../Assets/chat/ralph.png';
import smiley from '../../../Assets/chat/smiley.svg';
import send from '../../../Assets/chat/send.svg';
import sendIcon from '../../../Assets/chat/sendIcon.svg';
import user3 from '../../../Assets/chat/user3.png';
import boxes from '../../../Assets/chat/boxes.svg';
import linking from '../../../Assets/chat/linking.svg';
import like from '../../../Assets/chat/like.svg';
import classes from '../chat.module.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import searchIcon from '../../../Assets/chat/search.svg';
import categoryOptions from '../../../Assets/chat/categoryOptions.svg'

const ChatSide = ({ handleAcceptOffer,
    messageSendHandler,
    messageInputHandler,
    askQuestionHandler,
    currentUser,
    askQuestionMessage,
    openModal
}) => {
    const isTabletOrMobile = useMediaQuery('(max-width: 760px)');
    const messageDevision = (message) => {
        let count = Math.ceil(message.length / 40);
        let index = 0;
        let combinedString = '';
        for (let i = 1; i <= count; i++) {
            combinedString = combinedString + message.substring(index, index + 40) + '\n'
            index = index + 40;

        }

        return combinedString
    }
    return (
        <div className={classes.gridItem2}>



            {/* {isTabletOrMobile && <div className={classes.mobDefaultQuestions}>
                {currentUser.chat?.length === 0 && <>
                    <p >Ask question</p>
                    <div>
                        {defaultMessages.map(element => {
                            return <span key={element} className="cursor-pointer" onClick={() => askQuestionHandler(element)}>{element.substring(0, 40)}</span>
                        })}

                    </div>
                </>
                }
            </div>
            } */}
            <div>
                <div className={classes.todayDiv}>
                    <div>
                        <img src={currentUser.image} alt="" width="50px" />
                        <span>Rifat Bin Jahan</span>
                    </div>
                    <div className={classes.topOptions}>
                        <div>
                            <img src={searchIcon} alt="" />
                            <input type="text" placeholder="Type into search" />
                        </div>
                        <img src={categoryOptions} className="cursor-pointer" alt="" />
                    </div>
                </div>
            </div>

            <div id="messageDiv" className={classes.messageContainer}>

                {currentUser.chat?.map((element, index) => {
                    return <>
                        {element.offer === undefined ? <><div key={index} style={element.user !== 'loggedUser' ? { flexDirection: 'row-reverse' } : { flexDirection: "row" }} className={classes.userMessageDiv}>
                            <div style={element.user === 'loggedUser' ? { background: "#4B8CEB", borderRadius: '6px 6px 6px 0px', color: "white", width: element.message.length > 40 ? '337px' : 'auto' } : { width: element.message.length > 40 ? '337px' : 'auto' }}>
                                <span style={element.user === 'loggedUser' ? { color: "white" } : null}> {messageDevision(element.message)}</span>
                                <span style={element.user === 'loggedUser' ? { color: "white" } : null}>&nbsp;</span>
                            </div>
                            <img src={element.user !== 'loggedUser' ? currentUser.image : user3} alt="" width="50px" />

                        </div>
                            {/* <div style={{ flexDirection: element.user !== 'loggedUser' ? 'row-reverse' : 'row' }} onClick={() => handleAcceptOffer(index)} className={classes.offerDiv}>
                                <div style={{ background: element.accepted ? '#44D7B6' : '#FECE32' }}>
                                    <span>Your Offer</span>
                                    <span>£{element.amount}</span>
                                    <span>Just Now</span>
                                    <span>Edit Offer</span>
                                </div>
                                <img src={element.user !== 'loggedUser' ? currentUser.image : user3} alt="" />
                            </div> */}
                        </>
                            :
                            <>
                                <div onClick={() => handleAcceptOffer(index)} className={classes.offerDiv}>
                                    <div style={{ background: element.accepted ? '#44D7B6' : '#FECE32' }}>
                                        <span>Your Offer</span>
                                        <span>£{element.amount}</span>
                                        <span>Just Now</span>
                                        <span>Edit Offer</span>
                                    </div>
                                    <img src={element.user !== 'loggedUser' ? currentUser.image : user3} alt="" />
                                </div>
                                {element.accepted && <div className={classes.offerText}>{currentUser.user} accepted your offer</div>}

                            </>

                        }
                    </>
                })}

            </div>
            {/* <div style={{ height: "auto", position: 'absolute', bottom: '64px' }} className={classes.messageDiv}>
                {(currentUser.chat?.length === 0 && !isTabletOrMobile) && <>
                    <p >Ask question</p>
                    <div>
                        {defaultMessages.map(element => {
                            return <span key={element} className="cursor-pointer" onClick={() => askQuestionHandler(element)}>{element}</span>
                        })}

                    </div>
                </>
                }
            </div> */}
            <div className={classes.messageDiv}>

                <div className={classes.messageFlex}>

                    <div className={classes.boxCategoryDiv}>
                        <img src={boxes} alt="" />
                        <img src={linking} alt="" />
                    </div>
                    <div>
                        <input type="text"
                            onKeyDown={(e) => (e.key === "Enter" ? messageSendHandler() : null)}
                            onChange={messageInputHandler}
                            placeholder={"Enter your message here"}
                            value={askQuestionMessage}
                            spellCheck="false"
                            disabled={currentUser.length === 0 ? true : false}
                        />
                        <img className="cursor-pointer" src={smiley} alt="" />

                    </div>
                    <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", width: '80px' }}>
                        <div>
                            <img src={like} alt="" />
                        </div>
                        <div className={classes.sendBtnDiv} onClick={messageSendHandler}>
                            {/* <img src={send} alt="" /> */}
                            <img src={sendIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ChatSide
