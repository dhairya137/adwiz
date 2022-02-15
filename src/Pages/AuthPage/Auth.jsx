import React, { useState } from 'react'
import classes from './auth.module.css';
import logo from '../../Assets/logo.svg';
import authImg from '../../Assets/authImg.svg';
import google from '../../Assets/AuthPage/google.svg';
import facebook from '../../Assets/AuthPage/facebook.svg';
import linkedin from '../../Assets/AuthPage/linkedin.svg';
import Devider from './Components/Devider/Devider';
import Input from './Components/Input/Input';
import mail from '../../Assets/AuthPage/mail.svg';
import password from '../../Assets/AuthPage/password.svg';


const Auth = () => {
    const [stateChecker, setStateChecker] = useState('Sign up');
    return (
        <div className={classes.container}>
            <div className={classes.gridItem1}>
                <img src={logo} alt="" />
                <p>Empower teams and people to create authentic collaborative Ads content</p>
                <img className="mt-32" src={authImg} alt="" />
            </div>
            <div className={classes.gridItem2}>
                <div>
                    <div className={classes.buttonDiv}>
                        <button className={stateChecker === 'Sign up' ? classes.activeClass : null} onClick={() => setStateChecker('Sign up')}>Sign up</button>
                        <button className={stateChecker === 'Login' ? classes.activeClass : null} onClick={() => setStateChecker('Login')}>Log in</button>
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
                            <button>Sign up</button>
                        </div>

                        <div className={classes.bottomText}>
                            <span>Not a member? </span><span>Sign up</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Auth
