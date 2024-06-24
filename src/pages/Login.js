import React, { useState } from 'react';
import '../css/Register.css';
import '../css/Login.css';
import { images } from './Images';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from './Context/ThemeContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase/Firebase';

const Login = (props) => {
    const { showLogin, setShowLogin} = useContext(ThemeContext);
    const [error, setError] = useState(null);
    // const [loginDisplay, setLoginDisplay] = useState("dontdisplaylogin");
    let loginDisplay = "dontdisplaylogin";

    if (showLogin) {
        // setLoginDisplay("display-login");
        loginDisplay = "display-login";
    } else {
        // setLoginDisplay("dontdisplaylogin");
        loginDisplay = "dontdisplaylogin";
    }
    

    const removeLogin = () => {
        setShowLogin(false);
        // setLoginDisplay("dontdisplaylogin");
        console.log("just remove");
    }

    // console.log(showLogin);
    const [newEmail, setNewEmail] = useState();
    const [newPassword, setNewPassword] = useState();
    const [openThePassword, setOpenPassword] = useState({ openPass: false, inputType: 'password' });
    const [newUserCredentials, setNewUserCredentials] = useState({ email: '', password: '' });


    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(newEmail, newPassword);
        handleSubmit({ newEmail, newPassword });
    };

    const handleSubmit = async (theUser) => {
        const user = theUser;
        console.log(theUser);
        console.log(user.newEmail, user.newPassword);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, newEmail, newPassword);
            console.log('Logged in user:', userCredential.user);
            setShowLogin(false)
        } catch (error) {
            console.error('Error during login:', error);
            setError('Invalid credentials. Please check your email and password.');
        }
    };

    const onEmailChange = (evt) => {
        setNewEmail(evt.target.value);
        const fields = newUserCredentials;
        fields[evt.target.name] = evt.target.value;
        setNewUserCredentials(fields);
    };

    const onPasswordChange = (evt) => {
        setNewPassword(evt.target.value);
        const fields = newUserCredentials;
        fields[evt.target.name] = evt.target.value;
        setNewUserCredentials(fields);
    };

    const openPassword = () => {
        setOpenPassword({ openPass: true, inputType: 'text' });
    };

    const closePassword = () => {
        setOpenPassword({ openPass: false, inputType: 'password' });
    };




    return (
        <div className={`register-page ${loginDisplay}`}>
            <div className="grad">
                <form onSubmit={onFormSubmit} className="register-form login-form" action="">
                    <p>Login</p>
                    <div className='theInput'>
                        <input
                            placeholder="Email Address"
                            type="text" name="email" id=""
                            value={newEmail}
                            onChange={onEmailChange}
                        />
                        <span className='pop'></span>
                    </div>
                    <div className='theInput'>
                        <div className={"inputTag"}>
                            <input placeholder='Password'
                                value={newPassword}
                                onChange={onPasswordChange}
                                type={openThePassword.inputType}
                                name="password"
                            />
                            {openThePassword.openPass ?
                                (<img src={images.theeyeopen} alt='open password' onClick={closePassword} />) :
                                (<img src={images.theeyeclose} alt='close password' onClick={openPassword} />)
                            }
                        </div>
                    </div>
                    <button type="submit">Login</button>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    <Link className="myLink" to="/signup">Dont have an account</Link>
                </form>
                <div className="media1">
                    <p>Or sign up with</p>
                    <img className="withgoogle1" src={images.googleIconImg} alt="" />
                </div>
            </div>
            <div onClick={removeLogin} className='remove-background'></div>
        </div>

    );
};

export default Login;
