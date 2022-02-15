import React, { useState, useEffect } from 'react'
import searchIcon from '../../../Assets/chat/search.svg'
import edit from '../../../Assets/chat/edit.svg';
import chatData, { defaultMessages, chatOfUsers } from '../../../data/chat/chat';
import classes from '../chat.module.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import createChat from '../../../Assets/chat/createChat.svg'
import greyTick from '../../../Assets/chat/greyTick.svg'
import pinkTick from '../../../Assets/chat/pinkTick.svg';
import arrowDown from '../../../Assets/chat/arrowDown.svg'
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
const Inbox = ({ handleSelectedUser, selectedUser, currentUser }) => {
    const [isInputEnabled, setInputEnabled] = useState(false);
    const [isEditTrue, setIsEditTrue] = useState(false);
    const [chatDataState, setChatDataState] = useState(chatData);
    const isTabletOrMobile = useMediaQuery('(max-width: 760px)');

    const editHandler = () => {
        setIsEditTrue(!isEditTrue)
    }
    const searchHandler = () => {
        setInputEnabled(!isInputEnabled);
        setTimeout(() => {
            let searchElement = document.getElementById('inboxSearch');
            searchElement?.focus();
        }, 100)

    }
    const blurHandler = () => {
        setTimeout(() => {
            setInputEnabled(false)
        }, 500)
    }
    useEffect(() => {
        setChatDataState(chatData)
    }, [currentUser])
    return (

        <div className={classes.gridItem1Inbox}>
            <div className={classes.inboxDiv}>
                {!isInputEnabled && <span>Message <span className={classes.messageNumber}>24</span></span>}
                {isInputEnabled && <input type="text" onBlur={blurHandler} name="searchInput" id="inboxSearch" placeholder="search" />}
                <div className={"cursor-pointer"}>
                    {/* <img className="cursor-pointer" onClick={searchHandler} src={searchIcon} alt="" /> */}
                    {/* <img className="cursor-pointer" onClick={editHandler} src={edit} alt="" /> */}
                    <img src={createChat} alt="" />
                    <span className={classes.createChat}>Create New Chat</span>
                </div>
            </div>
            <div className={classes.serachDiv}>
                <img src={searchIcon} alt="" /> <input type="text" onBlur={blurHandler} id="inboxSearch" placeholder="Type in to search" />
            </div>
            {!isTabletOrMobile && <div className={classes.cardsContainer}>
                {chatDataState.map((element, index) => {
                    return <div key={index} onClick={() => handleSelectedUser(element.name)} className={`${classes.userCard} ${selectedUser === element.name && classes.selectedUser}`}>
                        {/* {!isEditTrue && <div >
                            {index === 0 && <><img src={greyTick} alt="" /> {element.time}</>}
                            {index === 2 && <><img src={pinkTick} style={{ position: "relative", left: "9px" }} alt="" />
                                <img src={pinkTick} alt="" /> {element.time}
                            </>}
                            {index === 1 && <div className={"d-flex flex-column g-6"}>
                                <span>{element.time}</span>
                                <span className={classes.numOfMessages}>2</span>
                            </div>}
                            {(index !== 0 && index !== 2 && index !== 1) && <>{element.time}</>}

                        </div>
                        } */}
                        {isEditTrue && <div ><img className="cursor-pointer" onClick={editHandler} src={edit} alt="" /></div>}
                        <div className={classes.messageInboxDivSingle}>
                            <div className={classes.flexChild2}>
                                <img src={element.image} alt="" width="60px" />
                                <div className="d-flex flex-column g-6">
                                    <span>{element.name}</span>
                                    <span>{element.description}</span>
                                </div>
                            </div>
                            <div >
                                {index === 0 && <div className="d-flex g-6"><img src={greyTick} alt="" /> {element.time}</div>}
                                {index === 2 && <><img src={pinkTick} style={{ position: "relative", left: "9px" }} alt="" />
                                    <img src={pinkTick} alt="" /> <span className="ml-4">{element.time}</span>
                                </>}
                                {index === 1 && <div className={"d-flex flex-column g-6"}>
                                    <span>{element.time}</span>
                                    <span className={classes.numOfMessages}>2</span>
                                </div>}
                                {(index !== 0 && index !== 2 && index !== 1) && <>{element.time}</>}

                            </div>
                        </div>
                    </div>

                })}

            </div>
            }
            {isTabletOrMobile && <div className={classes.cardsContainer}>
                <SwipeableList >
                    {chatData.map((element, index) => {
                        return <SwipeableListItem
                            swipeLeft={{
                                content: <div className={classes.archieveMob}>Archieved</div>,
                                action: () => console.info('swipe Left action triggered')
                            }}
                            key={index}
                            onSwipeProgress={progress => console.info(`Swipe progress: ${progress}%`)}
                        ><div onClick={() => handleSelectedUser(element.name)} className={`${classes.userCard} ${selectedUser === element.name && classes.selectedUser}`}>
                                <div >{element.time}</div>
                                <div >
                                    <img src={element.image} alt="" />
                                    <div className="d-flex flex-column">
                                        <span>{element.name}</span>
                                        <span>{element.description}</span>
                                    </div>
                                </div>
                            </div>
                        </SwipeableListItem>
                    })}
                </SwipeableList>
            </div>
            }
            <div className={classes.archived}>
                <div>
                    <span><span className={classes.archievedText}> Archived Chats</span> &nbsp;7</span>
                </div>
                <img src={arrowDown} alt="" />
            </div>
        </div>
    )
}

export default Inbox
