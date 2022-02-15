import React from 'react'
import classes from './content.module.css';

import Business from './Business/Business';
import { Redirect, Route } from 'react-router';
import Payment from './Payment/Payment';
import Dashboard from './Dashboard/Dashboard';
import PersonalProfile from './PersonalProfile/PersonalProfile';
import SocialProfile from './SocialProfile/SocialProfile';
import Notification from './Notification/Notification';
const Content = () => {
    return (
        <div>
            <Redirect to="/admin-page/business" />
            <Route path="/admin-page/dashboard" component={Dashboard} />
            <Route path="/admin-page/personal-profile" component={PersonalProfile} />
            <Route path="/admin-page/social-profile" component={SocialProfile} />
            <Route path="/admin-page/notification" component={Notification} />
            <Route path="/admin-page/business" component={Business} />
            <Route path="/admin-page/payment" component={Payment} />
        </div>
    )
}

export default Content
