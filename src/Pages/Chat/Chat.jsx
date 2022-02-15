import React, { useState } from 'react'
import ChatContainer from './Components/ChatContainer';
import classes from './chat.module.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Navbar from '../common/Navbar/Navbar';
const Chat = () => {
    const isTabletOrMobile = useMediaQuery('(max-width: 768px)')
    const [currentUser, setCurrentUser] = useState([]);
    return (<>
        <div className={classes.wrapper}>
            {/* <Navbar arrowLeft={true} currentUser={currentUser} setCurrentUser={setCurrentUser} /> */}
            {/* <Navbar /> */}
            <ChatContainer currentUser={currentUser} setCurrentUser={setCurrentUser} />
            {/* <Footer /> */}

        </div>
    </>
    )
}

export default Chat
