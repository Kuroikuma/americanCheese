import React from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  MenuItem,
} from "@material-ui/core";

import { loginStyles } from "./login.styles";

const LoginView = (props) => {
  const classes = loginStyles();
  const {
    contentLoginForm,
    contentRegisterForm,
    handleLoginViewOpen,
    handleRegisterViewOpen,
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
    passwordLoginError,
    handleSubmitRegister,
    handleChange,
  } = props;

  return (
    <>
      <div className={classes.root}>
        <section className={classes.contentAll}>
          <Grid xs={12} className={classes.backBox}>
            <Grid
              className={contentLoginForm ? classes.boxOpen : classes.boxClose}
            >
              <Typography className={classes.spaceTitle}>
                ¿Ya tienes una cuenta?
              </Typography>
              <Typography className={classes.spaceTop}>
                Inicia sesión para entrar en la página
              </Typography>
              <Button
                className={classes.button}
                variant="outlined"
                color="white"
                onClick={handleLoginViewOpen}
              >
                Iniciar Sesion
              </Button>
            </Grid>
            <Grid
              className={
                contentRegisterForm ? classes.boxOpen : classes.boxClose
              }
            >
              <Typography className={classes.spaceTitle}>
                ¿Aun no tienes cuenta?{" "}
              </Typography>
              <Typography className={classes.spaceTop}>
                Registrarse para iniciar sesión
              </Typography>
              <Button
                className={classes.button}
                variant="outlined"
                color="white"
                onClick={handleRegisterViewOpen}
              >
                Registrarse
              </Button>
            </Grid>
          </Grid>
          {/* formulario login y Registrarse*/}
          <Grid
            className={
              contentLoginForm ? classes.openRegister : classes.closeRegister
            }
          >
            <Grid className={contentLoginForm ? classes.open : classes.close}>
              <Grid className={classes.contentLoginForm}>
                <Typography className={classes.title}>
                  Inicio de sesión
                </Typography>
                <TextField
                  className={classes.inputLogin}
                  variant="outlined"
                  label="Correo Electronico"
                  name="emailLoginPatient"
                  error={emailLoginError === 0 ? false : true}
                  helperText={
                    emailLoginError === 1
                      ? "Campo obligatorio"
                      : emailLoginError === 2
                      ? "Introduzca una dirección de correo válida"
                      : null
                  }
                  value={emailLoginPatient}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  SelectProps={{
                    native: true,
                  }}
                />
                <TextField
                  className={classes.inputLogin}
                  variant="outlined"
                  label="Contraseña"
                  type="password"
                  name="passwordLoginPatient"
                  error={passwordLoginError === 0 ? false : true}
                  helperText={
                    passwordLoginError === 1
                      ? "Campo obligatorio"
                      : passwordLoginError === 2
                      ? "La contraseña debe contener al menos 6 caracteres"
                      : null
                  }
                  value={passwordLoginPatient}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  SelectProps={{
                    native: true,
                  }}
                />
                <Grid className={classes.centerButton}>
                  <Button
                    variant="outlined"
                    className={classes.buttonLogin}
                    style={{
                      backgroundColor: "#46A2FD",
                      borderColor: "#fff",
                      color: "#fff",
                    }}
                  >
                    iniciar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              className={contentRegisterForm ? classes.open : classes.close}
            >
              <div className={classes.contentRegisterForm}>
                <Typography className={classes.titleRegister}>
                  Registro de usuario
                </Typography>
                <Grid spacing={2} className={classes.register} container>
                  <Grid item lg={6}>
                    <TextField
                      className={classes.inputStyle}
                      label="Nombre"
                      variant="outlined"
                      name="firstName"
                      error={firstNameError}
                      helperText={firstNameError ? "Campo obligatorio" : null}
                      value={firstName}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      SelectProps={{
                        native: true,
                      }}
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <TextField
                      className={classes.inputStyle}
                      label="Apellido"
                      variant="outlined"
                      name="lastName"
                      error={lastNameError}
                      helperText={lastNameError ? "Campo obligatorio" : null}
                      value={lastName}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      SelectProps={{
                        native: true,
                      }}
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <TextField
                      className={classes.inputStyle}
                      label="Teléfono"
                      variant="outlined"
                      name="phone"
                      type="number"
                      error={phoneError}
                      helperText={phoneError ? "Campo obligatorio" : null}
                      value={phone}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      SelectProps={{
                        native: true,
                      }}
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <TextField
                      className={classes.inputStyle}
                      select
                      label="Sexo"
                      variant="outlined"
                      name="gender"
                      error={genderError}
                      helperText={genderError ? "Campo obligatorio" : null}
                      value={gender}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      <MenuItem key={0} value={0}></MenuItem>
                      <MenuItem key={1} value={1}>
                        Masculino
                      </MenuItem>
                      <MenuItem key={2} value={2}>
                        Femenino
                      </MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item lg={6}>
                    <TextField
                      className={classes.inputStyle}
                      label="Correo Electronico"
                      variant="outlined"
                      name="email"
                      error={emailError === 0 ? false : true}
                      helperText={
                        emailError === 1
                          ? "Campo obligatorio"
                          : emailError === 2
                          ? "Introduzca una dirección de correo válida"
                          : null
                      }
                      value={email}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      SelectProps={{
                        native: true,
                      }}
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <TextField
                      className={classes.inputStyle}
                      label="Contraseña"
                      variant="outlined"
                      name="password"
                      helperText={
                        passwordError === 1
                          ? "Campo obligatorio"
                          : passwordError === 2
                          ? "La contraseña debe contener al menos 6 caracteres"
                          : null
                      }
                      error={passwordError === 0 ? false : true}
                      value={password}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      SelectProps={{
                        native: true,
                      }}
                    />
                  </Grid>
                  <div className={classes.centerButton}>
                    <Button
                      variant="outlined"
                      color="Default"
                      className={classes.buttonRegister}
                      onClick={handleSubmitRegister}
                    >
                      Registrarse
                    </Button>
                  </div>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </section>
      </div>
    </>
  );
};

export default LoginView;
