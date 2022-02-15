import React from 'react'
import About from './Components/About/About';
import AboutUs from './Components/AboutUs/AboutUs';
import Header from './Components/Header/Header';
import Navbar from '../common/Navbar/Navbar';
import classes from './landing.module.css';
import Plan from './Components/Plans/Plan';
import NeedToDo from './Components/NeedToDo/NeedToDo';
import BottomGetStarted from './Components/BottomGetStarted/BottomGetStarted';
import Footer from './Components/Footer/Footer';

const LandingPage = () => {
    return (
        <div className={classes.container}>
            <Navbar />
            <Header />
            <About />
            <AboutUs />
            <Plan />
            <NeedToDo />
            <BottomGetStarted />
            <Footer />
        </div>
    )
}

export default LandingPage
