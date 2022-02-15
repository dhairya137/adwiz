import React from 'react'
import classes from './admincontent.module.css';
import classesContent from '../../business.module.css';
import back from '../../../../../../../Assets/BusinessSettings/back.svg';
import user from '../../../../../../../Assets/BusinessSettings/defaultImg.png';
import cross from '../../../../../../../Assets/BusinessSettings/cross.svg';
import { TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const AdminContent = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className={classes.container}>
            <div style={{ marginTop: '1px', paddingTop: "15px" }} >
                <div className={classesContent.businessFlexItem1}>
                    <div className={classesContent.backDiv}>
                        <img src={back} alt="" />
                        <span>Back</span>
                    </div>
                    <span className={classesContent.businessHeading}>Business ID</span>
                </div>
            </div>

            <div className={classes.businessAccountForm}>
                <h3>Create your business account</h3>
                <div className={classes.formRow}>
                    <div className="d-flex flex-column flexGrow">
                        <label className="ml-8">Business name</label>
                        <TextField id="outlined-basic" size="small" variant="outlined" />
                    </div>
                    <div style={{ flexGrow: 1.2 }} className="d-flex flex-column flexGrow">
                        <label className="ml-16">Business Category</label>
                        <FormControl fullWidth size="small" style={{ width: "100%", background: "white" }}>
                            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                style={{ width: "100%" }}
                                onChange={handleChange}
                                variant="outlined"

                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className={classes.formRow}>
                    <div className="d-flex flex-column flexGrow">
                        <label className="ml-8">Address</label>
                        <TextField id="outlined-basic" size="small" variant="outlined" />
                    </div>
                    <div className="d-flex flex-column flexGrow">
                        <label className="ml-16">Service Area</label>
                        <TextField id="outlined-basic" size="small" variant="outlined" />
                    </div>
                </div>
                <div className={classes.formRow}>
                    <div className="d-flex flex-column flexGrow">
                        <label className="ml-8">WhatsApp Business number</label>
                        <TextField id="outlined-basic" size="small" variant="outlined" />
                    </div>
                    <div className="d-flex flex-column flexGrow">
                        <label className="ml-16">Phone number</label>
                        <TextField id="outlined-basic" size="small" variant="outlined" />
                    </div>
                </div>
                <div className={classes.formRow}>
                    <div className="d-flex flex-column flexGrow">
                        <label className="ml-8">Email Address</label>
                        <TextField id="outlined-basic" size="small" variant="outlined" />
                    </div>
                    <div className="d-flex flex-column flexGrow">
                        <label className="ml-16">Website url</label>
                        <TextField id="outlined-basic" size="small" variant="outlined" />
                    </div>
                </div>
                <h3 className="mt-32">Business Social Page</h3>

                <div className={classes.formRow}>
                    <div className="d-flex flex-column flexGrow">
                        <label className="ml-8">Facebook URL</label>
                        <TextField id="outlined-basic" size="small" variant="outlined" />
                    </div>
                    <div className="d-flex flex-column flexGrow">
                        <label className="ml-16">Instagram URL</label>
                        <TextField id="outlined-basic" size="small" variant="outlined" />
                    </div>

                </div>
                <div className={classes.formRow}>
                    <div className="d-flex flex-column flexGrow">
                        <label className="ml-8">Google Business URL</label>
                        <TextField id="outlined-basic" size="small" variant="outlined" />
                    </div>
                    <div className="d-flex flex-column flexGrow">
                        <label className="ml-16">Twitter URL</label>
                        <TextField id="outlined-basic" size="small" variant="outlined" />
                    </div>
                </div>
                <div className={classes.formRow}>
                    <div className="d-flex flex-column flexGrow">
                        <label className="ml-8">Painterest URL</label>
                        <TextField id="outlined-basic" size="small" variant="outlined" />
                    </div>
                    <div className="d-flex flex-column flexGrow">
                        <label className="ml-16">Linkedin URL</label>
                        <TextField id="outlined-basic" size="small" variant="outlined" />
                    </div>
                </div>
                <h3 className="mt-32">Opening Hours</h3>

                <div className={classes.openingHourDiv}>
                    <div className={classes.weekDiv}>
                        <div>SATURDAY</div>
                        <div>SUNDAY</div>
                        <div>MUNDAY</div>
                        <div>TUESDAY</div>
                        <div>WEDNESDAY</div>
                        <div>THURSDAY</div>
                        <div>FRIDAY</div>
                    </div>
                    <div className={classes.openingSavingButtonDiv}>
                        <button>Opening</button>
                        <button>Closing</button>
                        <button>+</button>
                    </div>
                    <div className={classes.saveDiv}>
                        <button>Save</button>
                    </div>
                </div>

                <h3 className="mt-32">User image</h3>

                <div className={classes.userImageDiv}>
                    <div>
                        <p>Drag a Image <br /> here</p>
                    </div>

                    <div className={classes.uploadImgDiv}>
                        <img src={user} alt="" />
                        <div className={classes.crossDiv}>
                            <img src={cross} alt="" />
                        </div>
                    </div>
                    <p>profile_Name.pr</p>
                </div>
                <h3 className="mt-32">Team Photo</h3>

            </div>
        </div>
    )
}

export default AdminContent
