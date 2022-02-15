import classes from '../chat.module.css';
import React, { useState, useRef, useEffect } from 'react'

import chatData, { defaultMessages, chatOfUsers } from '../../../data/chat/chat';
import ralph from '../../../Assets/chat/ralph.png';
import gallery from '../../../Assets/chat/gallery.svg';
import send from '../../../Assets/chat/send.svg';
import sendIcon from '../../../Assets/chat/sendIcon.svg';
import user3 from '../../../Assets/chat/user3.png';

import Inbox from './Inbox';
import ChatSide from './ChatSide';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const ChatContainer = ({ currentUser, setCurrentUser }) => {
    const [selectedUser, setSelectedUser] = useState('');
    const [askQuestionMessage, setAskQuestionMessage] = useState('');


    const isTabletOrMobile = useMediaQuery('(max-width: 780px)');
    let userIndex = useRef();
    let amountRef = useRef();

    const handleSelectedUser = (element) => {
        setSelectedUser(element)
        let user = chatOfUsers.find(findUser => {
            return findUser.user === element
        })
        userIndex.current = chatOfUsers.indexOf(user);
        setCurrentUser(user);
        console.log(currentUser);



    }
    const askQuestionHandler = (message) => {
        setAskQuestionMessage(message);
    }
    const messageInputHandler = (e) => {
        setAskQuestionMessage(e.target.value)
    }

    const messageSendHandler = () => {
        if (askQuestionMessage === '') return
        let chat = {
            user: localStorage.getItem('loggedUser'),
            message: askQuestionMessage,
            timestamp: Math.floor(Date.now() / 1000),

        }
        let { current: index } = userIndex;
        setCurrentUser({ ...currentUser, chat: [...chatOfUsers[index].chat, chat] })
        chatOfUsers[index].chat.push(chat);
        setAskQuestionMessage('');

        let messageContainer = document.getElementById("messageDiv");
        setTimeout(() => {
            messageContainer.scrollTop = messageContainer.scrollHeight
        }, 50)
        setTimeout(() => {
            let chatData = {
                user: selectedUser,
                message: 'Yes i want to buy this.',
                timestamp: Math.floor(Date.now() / 1000),
            }
            let { current: index } = userIndex;
            setCurrentUser({ ...currentUser, chat: [...chatOfUsers[index].chat, chatData] })
            chatOfUsers[index].chat.push(chatData);
            messageContainer.scrollTop = messageContainer.scrollHeight
        }, 1500)
    }
    const sendHandler = () => {

        let offerData = {
            user: localStorage.getItem('loggedUser'),
            amount: amountRef.current.value,
            timestamp: Math.floor(Date.now() / 1000),
            offer: true,
            accepted: false
        }
        let { current: index } = userIndex;
        setCurrentUser({ ...currentUser, chat: [...chatOfUsers[index].chat, offerData] })
        chatOfUsers[index].chat.push(offerData);

        let messageContainer = document.getElementById("messageDiv");
        setTimeout(() => {
            messageContainer.scrollTop = messageContainer.scrollHeight
        }, 50)


    }
    const handleAcceptOffer = (chatIndex) => {
        let { current: index } = userIndex;
        chatOfUsers[index].chat[chatIndex].accepted = true;
        setCurrentUser({ ...currentUser, chat: [...chatOfUsers[index].chat] });
        console.log(chatOfUsers[index]);
    }

    useEffect(() => {
        localStorage.setItem('loggedUser', 'loggedUser');
        // handleSelectedUser(chatData[0].name);

    }, [])
    return (
        <div className={classes.chatWrapper}>
            <div className={classes.container}>
                {(isTabletOrMobile && currentUser.length === 0) && <Inbox handleSelectedUser={handleSelectedUser} selectedUser={selectedUser} />}
                {(!isTabletOrMobile) && <Inbox handleSelectedUser={handleSelectedUser} selectedUser={selectedUser} currentUser={currentUser} />}

                {(isTabletOrMobile && currentUser.user !== undefined) && <ChatSide
                    handleAcceptOffer={handleAcceptOffer}
                    messageSendHandler={messageSendHandler}
                    messageInputHandler={messageInputHandler}
                    askQuestionHandler={askQuestionHandler}
                    currentUser={currentUser}
                    askQuestionMessage={askQuestionMessage}


                />
                }
                {(!isTabletOrMobile) && <ChatSide
                    handleAcceptOffer={handleAcceptOffer}
                    messageSendHandler={messageSendHandler}
                    messageInputHandler={messageInputHandler}
                    askQuestionHandler={askQuestionHandler}
                    currentUser={currentUser}
                    askQuestionMessage={askQuestionMessage}


                />
                }
            </div>

        </div>
    )
}

export default ChatContainer
