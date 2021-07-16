import React from "react";
import LoginView from './login.view';


const initialState = {
  contentLoginForm: true,
  contentRegisterForm: false,
  firstName: "",
  lastName: "",
  phone:"",
  gender:"",
  email: "",
  password: "",
  firstNameError: false,
  lastNameError: false,
  phoneError: false,
  genderError:false,
  emailError: 0,
  passwordError: 0,
  emailLoginPatient: "",
  passwordLoginPatient: "",
  emailLoginError: 0,
  passwordLoginError: 0,
  loginError: false,
  isLogging: false
};

class login extends React.Component{
  constructor(props) {
    super(props);
    this.state=initialState;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleLoginViewOpen = () => {
    this.setState({
      contentLoginForm: true,
      contentRegisterForm: false,
    });
  }

  handleRegisterViewOpen = () => {
    this.setState({
      contentLoginForm: false,
      contentRegisterForm: true,
    });
  }

  validateLoginFields = () => {
    const {
      emailLoginPatient,
      passwordLoginPatient
    } = this.state;

    let emailLoginError = 0;
    let passwordLoginError = 0;

    if (emailLoginPatient === '') emailLoginError = 1;
    else if (!emailLoginPatient.includes('@') || !emailLoginPatient.includes('.')) emailLoginError = 2;
    else emailLoginError = 0;

    if (passwordLoginPatient === '') passwordLoginError = 1;
    else if (passwordLoginPatient.length < 6) passwordLoginError = 2;
    else passwordLoginError = 0;

    if (emailLoginError === 0 && passwordLoginError === 0) {
      this.setState({emailLoginError, passwordLoginError});
      return false;
    }
    else {
      this.setState({emailLoginError, passwordLoginError});
      return true;
    }
  }

  validateRegisterFields = () => {
    const {
      firstName,
      lastName,
      phone,
      gender,
      email,
      password,
    } = this.state;

    let firstNameError = false;
    let lastNameError = false;
    let phoneError = false;
    let genderError = false;
    let emailError = 0;
    let passwordError = 0;

    if (firstName === '') firstNameError = true;
    else firstNameError = false;

    if (lastName === '') lastNameError = true;
    else lastNameError = false;

    if (phone === '') phoneError = true;
    else phoneError = false;

    if (gender === '') genderError = true;
    else genderError = false;

    if (email === '') emailError = 1;
    else if (!email.includes('@') || !email.includes('.')) emailError = 2;
    else emailError = 0;

    if (password === '') passwordError = 1;
    else if (password.length < 6) passwordError = 2;
    else passwordError = 0;

    if (firstNameError && lastNameError && phoneError &&
      emailError === 0 && passwordError === 0 ) {
      this.setState({
        firstNameError,
        lastNameError,
        phoneError,
        genderError,
        emailError,
        passwordError
      });
      return false;
    }
    else {
      this.setState({
        firstNameError,
        lastNameError,
        phoneError,
        emailError,
        genderError,
        passwordError
      });
      return true;
    }
  }

  handleSubmitRegister = () => {
    this.validateRegisterFields();
  }

  render(){
    const {
      contentLoginForm,
      contentRegisterForm,
      firstName,
      lastName,
      phone,
      gender,
      email,
      password,
      firstNameError,
      lastNameError,
      phoneError,
      genderError,
      emailError,
      passwordError,
      emailLoginPatient,
      passwordLoginPatient,
      emailLoginError,
      passwordLoginError
    }= this.state;

    return(
      <LoginView
        contentLoginForm={contentLoginForm}
        contentRegisterForm={contentRegisterForm}
        handleLoginViewOpen={this.handleLoginViewOpen}
        handleRegisterViewOpen={this.handleRegisterViewOpen}
        handleChange={this.handleChange}
        firstName={firstName}
        lastName={lastName}
        phone={phone}
        email={email}
        gender={gender}
        password={password}
        firstNameError={firstNameError}
        lastNameError={lastNameError}
        phoneError={phoneError}
        genderError={genderError}
        emailError={emailError}
        passwordError={passwordError}
        handleSubmitRegister={this.handleSubmitRegister}
        emailLoginError={emailLoginError}
        passwordLoginError={passwordLoginError}
        emailLoginPatient={emailLoginPatient}
        passwordLoginPatient={passwordLoginPatient}   
      />
    );
  }
}

export default login;
