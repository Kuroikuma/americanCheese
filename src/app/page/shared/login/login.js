import React, { useState, useContext, useEffect } from "react";
import LoginView from "./login.view";
import UserContext from "../../../context/UserContext";
import { fetchCliente } from "../../../../services/services.cliente";
import { fetchEmpleado } from "../../../../services/services.empleado";
import { fetchAdministrador } from "../../../../services/services.administrador";
import { fetchRoot } from "../../../../services/services-root";
const Login = () => {
  const userContext = useContext(UserContext);
  useEffect(() => {
    function Cambio() {
      if (currentUser === "SinLogin") {
        userContext.SetCurrent(0);
      }
      if (currentUser === "Cliente") {
        if (userContext.user === undefined || userContext.user === null) {
          userContext.SetCurrent(0);
        } else {
          userContext.SetCurrent(1);
        }
      }
      if (currentUser === "Empleado") {
        if (userContext.user === undefined || userContext.user === null) {
          userContext.SetCurrent(0);
        } else {
          userContext.SetCurrent(2);
        }
      }
      if (currentUser === "Administrador") {
        if (userContext.user === undefined || userContext.user === null) {
          userContext.SetCurrent(0);
        } else {
          userContext.SetCurrent(3);
        }
      }
      if (currentUser === "Root") {
        if (userContext.user === undefined || userContext.user === null) {
          userContext.SetCurrent(0);
        } else {
          userContext.SetCurrent(4);
        }
      }
    }
    Cambio();
  }, [userContext.user]);

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
    showPassword: false,
  });
  const userType = ["SinLogin", "Empleado", "Cliente", "Administrador", "Root"];
  const [currentUser, setCurrentUser] = useState(userType[0]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(name, value);
  };
  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleCurrent = (e) => {
    setCurrentUser(e.target.value, function () {
      console.log(currentUser);
    });
  };

  const handleLoginViewOpen = () => {
    setState({ ...state, contentLoginForm: true, contentRegisterForm: false });
  };

  const handleRegisterViewOpen = () => {
    setState({ ...state, contentLoginForm: false, contentRegisterForm: true });
  };

  const validateLoginFields = async () => {
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
    if (currentUser === "Cliente") {
      let correo = emailLoginPatient;
      let contraseña = passwordLoginPatient;
      fetchCliente.getClienteByID(correo, contraseña).then((response) => {
        userContext.setUser(response);
      });
    }
    if (currentUser === "Empleado") {
      let correo = emailLoginPatient;
      let contraseña = passwordLoginPatient;
      fetchEmpleado.getEmpleadoByID(correo, contraseña).then((response) => {
        userContext.setUser(response);
      });
    }
    if (currentUser === "Administrador") {
      let correo = emailLoginPatient;
      let contraseña = passwordLoginPatient;
      fetchAdministrador
        .getAdministradorByID(correo, contraseña)
        .then((response) => {
          userContext.setUser(response);
        });
    }
    if (currentUser === "Root") {
      let correo = emailLoginPatient;
      let contraseña = passwordLoginPatient;
      fetchRoot.getRootByID(correo, contraseña).then((response) => {
        userContext.setUser(response);
      });
    }

    console.log("user");
    console.log(userContext.user);
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
      handleCurrent={handleCurrent}
      handleClickShowPassword={handleClickShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
      userType={userType}
    />
  );
};

export default Login;
