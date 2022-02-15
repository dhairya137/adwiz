import React, { useState } from 'react'
import classes from '../auth.module.css';
import logo from '../../../Assets/logo.svg';
import authImg from '../../../Assets/authImg.svg';
import google from '../../../Assets/AuthPage/google.svg';
import facebook from '../../../Assets/AuthPage/facebook.svg';
import linkedin from '../../../Assets/AuthPage/linkedin.svg';
import Devider from '.././Components/Devider/Devider';
import Input from '.././Components/Input/Input';
import mail from '../../../Assets/AuthPage/mail.svg';
import password from '../../../Assets/AuthPage/password.svg';
import { NavLink, useHistory } from 'react-router-dom'

const Signup = () => {
    const [stateChecker, setStateChecker] = useState('Sign up');
    const history = useHistory();
    return (
        <div className={classes.container}>
            <div className={classes.gridItem1}>
            <NavLink to="/"><img src={logo} alt="" /></NavLink>
                <p>Empower teams and people to create authentic collaborative Ads content</p>
                <img src={authImg} alt="" />
            </div>
            <div className={classes.gridItem2}>
                <div>
                    <div className={classes.buttonDiv}>
                        <button className={classes.activeClass} onClick={() => history.push('/signup')}>Sign up</button>
                        <button onClick={() => history.push('/login')}>Log in</button>
                    </div>
                    <div className={classes.formDiv}>
                        <p>
                            With your social netwok
                        </p>
                        <div className={classes.buttonDivSocial}>
                            <button><img src={google} alt="" /></button>
                            <button><img src={linkedin} alt="" /></button>
                            <button><img src={facebook} alt="" /></button>
                        </div>

                        <Devider text={"OR"} />
                        <div className={classes.inputDiv}>
                            <Input img={mail} placeholder={'E-mail address'} />
                            <Input img={password} placeholder={'Password'} />
                        </div>

                        <div className={classes.rememberMeDiv}>
                            <div>
                                <input type="checkbox" /> <span className={classes.signUpCheck}>I do not wish to receive news and promotions from
                                    The Ad Wiz by email.</span>
                            </div>


                        </div>

                        <div className={classes.signupButton}>
                        <NavLink to="/admin-page"> Sign up</NavLink>
                        </div>

                        <div className={classes.bottomText}>
                        <NavLink to={'/login'}> <span>Already have an account?? </span><span>Log in</span></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup
