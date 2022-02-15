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

const Login = () => {
    const history = useHistory();
    return (
        <div className={classes.container}>
            <div className={classes.gridItem1}>
                <NavLink to="/"><img src={logo} alt="" /></NavLink>
                <p>Empower teams and people to create authentic collaborative Ads content</p>
                <img  src={authImg} alt="" />
            </div>
            <div className={classes.gridItem2}>
                <div>
                    <div className={classes.buttonDiv}>
                        <button onClick={() => history.push('/signup')}>Sign up</button>
                        <button className={classes.activeClass} onClick={() => history.push('/login')}>Log in</button>
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
                                <input type="checkbox" /> <span> Remember me</span>
                            </div>

                            <div>
                                <span>Forgot your password?</span>
                            </div>
                        </div>

                        <div className={classes.signupButton}>
                        <NavLink to="/admin-page"> Login</NavLink>

                        </div>

                        <div className={classes.bottomText}>
                        <NavLink to={'/signup'}><span>Not a member? </span><span>Sign up</span></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login
