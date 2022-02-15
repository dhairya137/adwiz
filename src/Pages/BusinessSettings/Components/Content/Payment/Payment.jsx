import React from 'react';
import classesContent from '../Business/business.module.css';
import classes from './payment.module.css';
import search from '../../../../../Assets/BusinessSettings/search.svg'
import { Badge, Grid } from '@material-ui/core';
import notificationTop from '../../../../../Assets/BusinessSettings/notificationTop.svg';
import settings from '../../../../../Assets/BusinessSettings/settingsBlue.svg';
import userOval from '../../../../../Assets/BusinessSettings/userOval.svg';
import back from '../../../../../Assets/BusinessSettings/back.svg';
import save from '../../../../../Assets/BusinessSettings/save.svg';
import arrowDown from '../../../../../Assets/chat/arrowDown.svg';
import questionMark from '../../../../../Assets/Payment/questionMark.svg';
import card1Stat from '../../../../../Assets/Payment/card1Stat.svg';
import card2Stat from '../../../../../Assets/Payment/card2Stat.svg';
import card3Stat from '../../../../../Assets/Payment/card3Stat.svg';
import card4Stat from '../../../../../Assets/Payment/card4Stat.svg';
import compaign from '../../../../../Assets/Payment/compaign.svg';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import EnhancedTable from './Components/EnhancedTable';
import support from '../../../../../Assets/Payment/support.svg'
const Payment = () => {
    const [social, setSocial] = React.useState('');
    const [sortDate, setSortDate] = React.useState('');
    const [alphabet, setAlphabet] = React.useState('');
    const [activeElement, setActiveElement] = React.useState('Invoices');
    const handleChangeSocial = (event) => {
        setSocial(event.target.value);
    };

    const handleChangeDate = (event) => {
        setSortDate(event.target.value);
    };

    const handleChangeAlphabet = (event) => {
        setAlphabet(event.target.value);
    };

    return (
        <div className={classes.container}>
            <div className={classes.container}>
                <div className={classesContent.topDiv}>
                    <div className={classesContent.searchDiv}>
                        <img src={search} alt="" />
                        <input type="text" placeholder="Search with name ,compaign name, etc..." />
                    </div>

                    <div className={classesContent.flexItem2}>
                        <div className="cursor-pointer">
                            <Badge badgeContent={12} color="secondary">
                                <img src={notificationTop} alt="" />
                            </Badge>
                        </div>

                        <img className="cursor-pointer" src={settings} alt="" />


                        <div className={classesContent.userDiv}>
                            <img src={userOval} alt="" />
                            <span>Haroid </span>
                            <img src={arrowDown} alt="" />
                        </div>
                    </div>
                </div>

                <div className={classesContent.youAreHere}>
                    <span>You are here: <span>Payment & Billing</span></span>
                </div>

                <div className={classes.cardsContainer}>
                    <div className={classes.cardItem}>
                        <div className={classes.cardHeading}>
                            <div className="d-flex flex-column g-6">
                                <span className={classes.heading}>$14,064</span>
                                <span className={classes.subHeading}>Total invoiced</span>
                            </div>
                            <img src={questionMark} alt="" />
                        </div>
                        <div className={classes.statImg}>
                            <img src={card1Stat} alt="" />
                        </div>
                    </div>
                    <div className={classes.cardItem}>
                        <div className={classes.cardHeading}>
                            <div className="d-flex flex-column g-6">
                                <span className={classes.heading}>$14,064</span>
                                <span className={classes.subHeading}>Total invoiced</span>
                            </div>
                            <img src={questionMark} alt="" />
                        </div>
                        <div className={classes.statImg}>
                            <img src={card2Stat} alt="" />
                        </div>
                    </div>
                    <div className={classes.cardItem}>
                        <div className={classes.cardHeading}>
                            <div className="d-flex flex-column g-6">
                                <span className={classes.heading}>$14,064</span>
                                <span className={classes.subHeading}>Total invoiced</span>
                            </div>
                            <img src={questionMark} alt="" />
                        </div>
                        <div className={classes.statImg}>
                            <img src={card3Stat} alt="" />
                        </div>
                    </div>
                    <div className={classes.cardItem}>
                        <div className={classes.cardHeading}>
                            <div className="d-flex flex-column g-6">
                                <span className={classes.heading}>$14,064</span>
                                <span className={classes.subHeading}>Total invoiced</span>
                            </div>
                            <img src={questionMark} alt="" />
                        </div>
                        <div className={classes.statImg}>
                            <img src={card4Stat} alt="" />
                        </div>
                    </div>
                </div>

                <div className={classes.tableContainer}>
                    <div className={classes.tableHeaderBar}>
                        <div className={classesContent.businessFlexItem1}>
                            <div className={classesContent.backDiv}>
                                <img src={back} alt="" />
                                <span>Back</span>
                            </div>
                            <span className={classesContent.businessHeading}>Invoices</span>
                        </div>
                        <div className={classes.tableFlexItem2}>
                            <ul>
                                {['Invoices', 'Draft', 'Received', 'Cance'].map(element => {
                                    return <li onClick={() => setActiveElement(element)} className={activeElement === element && classes.activeLi}>{element}</li>
                                })}

                            </ul>
                        </div>
                        <div className={classes.tableFlexItem3}>
                            <button><img src={compaign} alt="" /> New Campaign</button>
                        </div>
                    </div>

                    <div className={classes.tableSearchBar}>
                        <div className={classes.searchDiv}>
                            <img src={search} alt="" width="20px" />
                            <input type="text" placeholder="Type in to search" />
                        </div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <div className={classes.tableSearchFlexItem2}>
                            <FormControl fullWidth size="small" style={{ width: "100%", background: "white", }}>
                                <InputLabel style={{ position: 'absolute', top: '-8px', left: '4px', display: social && 'none', fontSize: "12px" }} id="demo-simple-select-label">Sort by: Facebook</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={social}
                                    style={{ width: "100%", }}
                                    onChange={handleChangeSocial}
                                    variant="outlined"

                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth size="small" style={{ width: "100%", background: "white" }}>
                                <InputLabel style={{ position: 'absolute', top: '-8px', left: '4px', display: sortDate && 'none', fontSize: "12px" }} id="demo-simple-select-label">Sort by: Date</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={sortDate}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeDate}
                                    variant="outlined"

                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth size="small" style={{ width: "100%", background: "white" }}>
                                <InputLabel style={{ position: 'absolute', top: '-8px', left: '4px', display: alphabet && 'none', fontSize: "12px" }} id="demo-simple-select-label">Sort by: A-Z</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={alphabet}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeAlphabet}
                                    variant="outlined"

                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                    </div>

                    <div>
                        <EnhancedTable />
                    </div>

                    <div className={classes.supportDiv}>
                        <button><img src={support} alt="" /> Support</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Payment
