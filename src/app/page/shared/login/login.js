import React, { useState, useContext } from "react";
import LoginView from "./login.view";
import UserContext from "../../../context/UserContext";

const Login = () => {
  const userContext = useContext(UserContext);
  console.log(userContext);
  const [state, setState] = useState({
    contentLoginForm: true,
    contentRegisterForm: false,
    firstName: "",
    lastName: "",
    phone: "",
    gender: "",
    email: "",
    password: "",
    firstNameError: false,
    lastNameError: false,
    phoneError: false,
    genderError: false,
    emailError: 0,
    passwordError: 0,
    emailLoginPatient: "",
    passwordLoginPatient: "",
    emailLoginError: 0,
    passwordLoginError: 0,
    loginError: false,
    isLogging: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(name, value);
  };

  const handleLoginViewOpen = () => {
    setState({ ...state, contentLoginForm: true, contentRegisterForm: false });
  };

  const handleRegisterViewOpen = () => {
    setState({ ...state, contentLoginForm: false, contentRegisterForm: true });
  };

  const validateLoginFields = () => {
    let { emailLoginPatient, passwordLoginPatient } = state;
    console.log(emailLoginPatient, passwordLoginPatient);
    if (emailLoginPatient === "") setState({ ...state, emailLoginError: 1 });
    else if (
      !emailLoginPatient.includes("@") ||
      !emailLoginPatient.includes(".")
    )
      setState({ ...state, emailLoginError: 2 });
    else setState({ ...state, emailLoginError: 0 });

    if (passwordLoginPatient === "")
      setState({ ...state, passwordLoginError: 1 });
    else if (passwordLoginPatient.length < 6)
      setState({ ...state, passwordLoginError: 2 });
    else setState({ ...state, passwordLoginError: 0 });
  };

  const validateRegisterFields = () => {
    const { firstName, lastName, phone, gender, email, password } = state;

    let band = true;
    if (firstName === "") setState({ ...state, firstNameError: true });
    else setState({ ...state, firstNameError: false });
    band = false;

    if (lastName === "") setState({ ...state, lastNameError: true });
    else {
      setState({ ...state, lastNameError: false });
      band = false;
    }

    if (phone === "") setState({ ...state, phoneError: true });
    else setState({ ...state, phoneError: false });
    band = false;

    if (gender === "") setState({ ...state, genderError: true });
    else setState({ ...state, genderError: false });
    band = false;

    if (email === "") setState({ ...state, emailError: 1 });
    else if (!email.includes("@") || !email.includes("."))
      setState({ ...state, emailError: 2 });
    else setState({ ...state, emailError: 0 });
    band = false;

    if (password === "") setState({ ...state, passwordError: 1 });
    else if (password.length < 6) setState({ ...state, passwordError: 2 });
    else setState({ ...state, passwordError: 0 });
    band = false;

    if (band) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmitRegister = () => {
    console.log(validateRegisterFields());
  };

  return (
    <LoginView
      handleLoginViewOpen={handleLoginViewOpen}
      handleRegisterViewOpen={handleRegisterViewOpen}
      handleChange={handleChange}
      state={state}
      handleSubmitRegister={handleSubmitRegister}
      validateLoginFields={validateLoginFields}
    />
  );
};

export default Login;
