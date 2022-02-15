import React from 'react';
import logo from '../../../../Assets/logo.svg';
import dashboard from '../../../../Assets/BusinessSettings/dashboard.svg';
import personal from '../../../../Assets/BusinessSettings/user.svg';
import business from '../../../../Assets/BusinessSettings/business.svg';
import payment from '../../../../Assets/BusinessSettings/payment.svg';
import social from '../../../../Assets/BusinessSettings/social.svg';
import notification from '../../../../Assets/BusinessSettings/notification.svg';
import logout from '../../../../Assets/BusinessSettings/logout.svg';
import authImg from '../../../../Assets/authImg.svg'

import { Divider } from '@material-ui/core';
import { NavLink } from 'react-router-dom'
import classes from './sidebar.module.css';

const Sidebar = ({ activeClass, setActiveClass }) => {


    let navElements = [{ name: 'Dashboard', img: dashboard, link: '/dashboard' }, { name: 'Personal Profile', img: personal, link: '/personal-profile' }, { name: 'Business Setting', img: business, link: "/business" }, { name: 'Payment and Billing', img: payment, link: '/payment' }, { name: 'Social Profile', img: social, link: "/social-profile" }, { name: 'Notification', img: notification, link: '/notification' }, { name: 'Logout', img: logout, link: '/login' }]
    return (
        <div className={classes.container}>
            <div className={classes.logoDiv}>
               <NavLink to="/"> <img className={'ml-32'} src={logo} alt="" width="160px" /></NavLink>
            </div>

            <div className={classes.navOptions}>
                {navElements.map((element, index) => {
                    return (
                        <>
                            <NavLink to={`/admin-page${element.link}`} activeClassName={classes.activeClass} >
                                <div >
                                    <img src={element.img} alt="" width={"18px"} />
                                    <span className="ml-8">{element.name}</span>
                                </div>
                            </NavLink>

                            {index === 4 && <div className="mt-16 mb-16"><Divider /></div>}
                        </>
                    )
                })}


            </div>
            <div className={classes.authSideImg}>
                <img src={authImg} alt="" width="200px" />
            </div>

        </div>
    )
}

export default Sidebar
