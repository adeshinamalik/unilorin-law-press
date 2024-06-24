// import React, { useState } from 'react';
// import '../css/Register.css';
// import {images} from './Images';
// import isEmail from 'validator/lib/isEmail';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import '../css/Register.css';
import { images } from './Images';
import isEmail from 'validator/lib/isEmail';
import { useNavigate, Link } from 'react-router-dom';
import { setPersistence, browserSessionPersistence, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './Firebase/Firebase';
import { useContext } from 'react';
import UserContext from './Context/UserContext';
import ThemeContext from './Context/ThemeContext';


const Register = () => {

  const { isLoggedIn } = useContext(UserContext);
  const { setShowLogin } = useContext(ThemeContext);

  console.log(isLoggedIn);
  const [newUserCredentials, setNewUserCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [fieldErrors2, setFieldErrors2] = useState({ isValid: false, failedRules: [] });
  const [openThePassword, setOpenPassword] = useState({ openPass: false, inputType: 'password' });
  const [openThePassword2, setOpenPassword2] = useState({ openPass: false, inputType: 'password', test: "sucessfull" });
  const navigate = useNavigate();


  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setIsLoggedIn(true)
  //       // navigate('/');
  //     }
  //   });
  //   return unsubscribe;
  // }, [navigate, setIsLoggedIn, theUser])

  const validate = (person) => {
    const errors = {};
    if (!person.email) errors.email = 'Email Required';
    if (!person.password) errors.password = 'Password Required';
    if (!person.name) errors.name = 'Name Required';
    if (!person.confirmPassword) errors.confirmPassword = 'Confirm Password Required';
    if (person.email && !isEmail(person.email)) errors.email = 'Invalid Email';
    return errors;
  };

  const validatePassword = (password, confirmPassword) => {
    const validation = {
      hasMinimumLength: password.length >= 8,
      hasLowercase: /[a-z]/.test(password),
      hasUppercase: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSymbol: /[^\w\s]/.test(password),
      passwordsMatch: password === confirmPassword
    };

    const failedRules = [];
    if (!validation.hasMinimumLength) failedRules.push('Password should have a minimum length of 8 characters.');
    if (!validation.hasLowercase) failedRules.push('Password should contain at least one lowercase letter.');
    if (!validation.hasUppercase) failedRules.push('Password should contain at least one uppercase letter.');
    if (!validation.hasNumber) failedRules.push('Password should contain at least one number.');
    if (!validation.hasSymbol) failedRules.push('Password should contain at least one special character.');
    if (!validation.passwordsMatch) failedRules.push('Passwords do not match.');

    return {
      isValid: failedRules.length === 0,
      failedRules: failedRules
    };
  };

  const handleSubmit = async (newUser) => {
    const { email, password, name } = newUser;

    try {
      await setPersistence(auth, browserSessionPersistence);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Update the user's profile with their full name
      await updateProfile(userCredential.user, {
        displayName: name
      });

      console.log(userCredential);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const theFieldErrors = validate(newUserCredentials);
    const theFieldErrors2 = validatePassword(newUserCredentials.password, newUserCredentials.confirmPassword);

    setFieldErrors(theFieldErrors);
    setFieldErrors2(theFieldErrors2);

    if (Object.keys(theFieldErrors).length === 0 && theFieldErrors2.isValid) {
      handleSubmit(newUserCredentials);
    }
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    setNewUserCredentials({ ...newUserCredentials, [name]: value });
  };

  const togglePasswordVisibility = (openPassState, setOpenPassState) => {
    if (openPassState.test) {
      console.log("successful");
    }
    setOpenPassState((prevState) => ({
      openPass: !prevState.openPass,
      inputType: prevState.openPass ? 'password' : 'text',
    }));
  };


  const toLogin = () => {
    setShowLogin(true);
    console.log("why now");
  }

  return (
    <div className="container register-container">
      <div className="register-page">
        <div className='theErrors'>
          {fieldErrors2.failedRules.length > 0 && (
            <div className='theErrors'>
              <img src={images.errorIcon} alt='cancel' />
              <div>
                <ul>
                  {fieldErrors2.failedRules.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
              <img src={images.cancelIcon} alt='cancel' />
            </div>
          )}
        </div>

        <div className="grad">
          <form onSubmit={onFormSubmit} className="register-form">
            <p>Register</p>
            <div className='theInput'>
              <input
                className={fieldErrors.name ? "error" : "noerror"}
                placeholder="Full Name"
                type="text"
                name="name"
                value={newUserCredentials.name}
                onChange={onInputChange}
              />
              <span className='pop'>{fieldErrors.name && <div>{fieldErrors.name}</div>}</span>
            </div>
            <div className='theInput'>
              <input
                className={fieldErrors.email ? "error" : "noerror"}
                placeholder="Email Address"
                type="text"
                name="email"
                value={newUserCredentials.email}
                onChange={onInputChange}
              />
              <span className='pop'>{fieldErrors.email && <div>{fieldErrors.email}</div>}</span>
            </div>
            <div className='theInput'>
              <div className={"inputTag " + (fieldErrors.password ? "error" : "noerror")}>
                <input
                  placeholder='Password'
                  value={newUserCredentials.password}
                  onChange={onInputChange}
                  type={openThePassword.inputType}
                  name="password"
                />
                <img
                  src={openThePassword.openPass ? images.theeyeopen : images.theeyeclose}
                  alt='toggle password visibility'
                  onClick={() => togglePasswordVisibility(openThePassword, setOpenPassword)}
                />
              </div>
              <span className='pop'>{fieldErrors.password && <div>{fieldErrors.password}</div>}</span>
            </div>
            <div className='theInput'>
              <div className={"inputTag " + (fieldErrors.password ? "error" : "noerror")}>
                <input
                  placeholder="Re-type Password"
                  name="confirmPassword"
                  value={newUserCredentials.confirmPassword}
                  onChange={onInputChange}
                  type={openThePassword2.inputType}
                />
                <img
                  src={openThePassword2.openPass ? images.theeyeopen : images.theeyeclose}
                  alt='toggle password visibility'
                  onClick={() => togglePasswordVisibility(openThePassword2, setOpenPassword2)}
                />
              </div>
            </div>
            <button type="submit">Register</button>
            <Link className="myLink" to="/" onClick={toLogin()}>Already have an account</Link>
          </form>
          <div className="media1">
            <p>Or sign up with</p>
            <img className="withgoogle1" src={images.googleIconImg} alt="" />
          </div>
        </div>
        <Link to="/" className="iconimg main-icon" onClick={()=>{setShowLogin(false)}}>icon</Link>
      </div>
    </div>
  );
}

export default Register;
