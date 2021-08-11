import React, { useState, useContext, useEffect } from "react";
import LoginView from "./login.view";
import { useRegister } from "../../../hooks/useRegister";
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
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [genero, setGenero] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [tipo, setTipo] = useState(0);
  const [file, setFile] = useState();
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [emailError, setEmailError] = useState(0);
  const [passwordError, setPasswordError] = useState(0);
  const {
    nombreR,
    apellidoR,
    correoR,
    tipoR,
    telefonoR,
    contraseñaR,
    generoR,
    AddRegisterField,
  } = useRegister({
    nombre,
    apellido,
    telefono,
    genero,
    correo,
    tipo,
    contraseña,
  });

  const [state, setState] = useState({
    contentLoginForm: true,
    contentRegisterForm: false,
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
  };

  const covertirabase64 = (archivos) => {
    Array.from(archivos).forEach((archivo) => {
      var reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = function () {
        var arrayAuxiliar = [];
        var base64 = reader.result;
        arrayAuxiliar = base64.split(",");
        setFile(arrayAuxiliar[1]);
      };
    });
  };

  const handlefile = (e) => {
    covertirabase64(e.target.files);
  };

  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    console.log(value);
    AddRegisterField(`${name}R`, value);
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
        response ? userContext.setUser(response) : userContext.setUser(null);
      });
    }
    if (currentUser === "Empleado") {
      let correo = emailLoginPatient;
      let contraseña = passwordLoginPatient;
      fetchEmpleado.getEmpleadoByID(correo, contraseña).then((response) => {
        response ? userContext.setUser(response) : userContext.setUser(null);
      });
    }
    if (currentUser === "Administrador") {
      let correo = emailLoginPatient;
      let contraseña = passwordLoginPatient;
      fetchAdministrador
        .getAdministradorByID(correo, contraseña)
        .then((response) => {
          response ? userContext.setUser(response) : userContext.setUser(null);
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
    let band = true;
    if (nombreR === "") {
      setFirstNameError(true);
      console.log("bdvj");
    } else {
      setFirstNameError(false);
      band = false;
    }

    if (apellidoR === "") setLastNameError(true);
    else {
      setLastNameError(false);
      band = false;
    }
    if (telefonoR === 0) setPhoneError(true);
    else setPhoneError(false);
    band = false;

    if (generoR === "") setGenderError(true);
    else setGenderError(false);
    band = false;

    if (correoR === "") setEmailError(1);
    else if (!correoR.includes("@") || !correoR.includes(".")) setEmailError(2);
    else setEmailError(0);
    band = false;

    if (contraseñaR === "") setPasswordError(1);
    else if (contraseñaR.length < 6) setPasswordError(2);
    else setPasswordError(0);
    band = false;

    if (band) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmitRegister = () => {
    const userLogin = {
      nombre: nombreR,
      apellido: apellidoR,
      correo: correoR,
      imagen: file,
      tipo:
        tipoR === "Cliente"
          ? 1
          : tipoR === "Empleado"
          ? 2
          : tipoR === "Administrador"
          ? 3
          : tipoR === "Root"
          ? 4
          : null,
      telefono: parseInt(telefonoR),
      contraseña: contraseñaR,
      genero: generoR,
    };
    console.log(userLogin);
    switch (userLogin.tipo) {
      case 1:
        fetchCliente.postCliente(userLogin);
        break;
      case 2:
        fetchEmpleado.postEmpleado(userLogin);
        break;
      case 3:
        fetchAdministrador.postAdministrador(userLogin);
        break;
      case 4:
        fetchRoot.postRoot(userLogin);
        break;

      default:
        console.log("Error");
        break;
    }

    validateRegisterFields();
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
      handleChangeRegister={handleChangeRegister}
      userType={userType}
      firstNameError={firstNameError}
      lastNameError={lastNameError}
      emailError={emailError}
      phoneError={phoneError}
      genderError={genderError}
      passwordError={passwordError}
      handlefile={handlefile}
    />
  );
};

export default Login;
