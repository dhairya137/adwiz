import React from 'react'
import classes from './business.module.css';
import search from '../../../../../Assets/BusinessSettings/search.svg'
import { Badge, Grid } from '@material-ui/core';
import notificationTop from '../../../../../Assets/BusinessSettings/notificationTop.svg';
import settings from '../../../../../Assets/BusinessSettings/settingsBlue.svg';
import userOval from '../../../../../Assets/BusinessSettings/userOval.svg';
import back from '../../../../../Assets/BusinessSettings/back.svg';
import save from '../../../../../Assets/BusinessSettings/save.svg';
import arrowDown from '../../../../../Assets/chat/arrowDown.svg';
import AdminSidebar from './Components/AdminSidebar/AdminSidebar';
import AdminContent from './Components/AdminContent/AdminContent';

const Business = () => {
    return (
        <div className={classes.container}>
            <div className={classes.topDiv}>
                <div className={classes.searchDiv}>
                    <img src={search} alt="" />
                    <input type="text" placeholder="Search with name ,compaign name, etc..." />
                </div>

                <div className={classes.flexItem2}>
                    <div className="cursor-pointer">
                        <Badge badgeContent={12} color="secondary">
                            <img src={notificationTop} alt="" />
                        </Badge>
                    </div>

                    <img className="cursor-pointer" src={settings} alt="" />


                    <div className={classes.userDiv}>
                        <img src={userOval} alt="" />
                        <span>Haroid </span>
                        <img src={arrowDown} alt="" />
                    </div>
                </div>
            </div>

            <div className={classes.youAreHere}>
                <span>You are here: <span>Business Setting» Business ID</span></span>
            </div>

            <div className={classes.budinessSettingsDiv}>
                <div className={classes.businessFlexItem1}>
                    <div className={classes.backDiv}>
                        <img src={back} alt="" />
                        <span>Back</span>
                    </div>
                    <span className={classes.businessHeading}>Business Setting</span>
                </div>

                <div className={classes.businessflexItem2}>
                    <button>
                        <img src={save} alt="" />
                        <span>Save Changes to Brand kit</span>
                    </button>
                </div>
            </div>


            <div className="mt-8 ml-8">
                <div className={classes.gridContainer}  >


                    <AdminSidebar />



                    <AdminContent />

                </div>
            </div>
        </div>
    )
}

export default Business
