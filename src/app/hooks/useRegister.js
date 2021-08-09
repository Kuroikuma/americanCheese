import { useReducer } from "react";

const ACTION = {
  Add_Field_Register: "Add_Field_Register",
};

const ACTION_REDUCERD = {
  [ACTION.Add_Field_Register]: (state, action) => ({
    ...state,
    [action.field]: action.payload,
  }),
};

const REDUCER = (state, action) => {
  console.log(action);
  const actionReducer = ACTION_REDUCERD[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

export const useRegister = ({
  nombre,
  apellido,
  telefono,
  genero,
  correo,
  tipo,
  contraseña,
}) => {
  const initialRegisterState = {
    nombreR: nombre,
    telefonoR: telefono,
    generoR: genero,
    apellidoR: apellido,
    correoR: correo,
    tipoR: tipo,
    contraseñaR: contraseña,
  };
  const [state, dispatch] = useReducer(REDUCER, initialRegisterState);
  const {
    nombreR,
    apellidoR,
    correoR,
    tipoR,
    contraseñaR,
    telefonoR,
    generoR,
  } = state;
  return {
    nombreR,
    apellidoR,
    correoR,
    tipoR,
    telefonoR,
    contraseñaR,
    generoR,
    AddRegisterField: (name, value) => {
      dispatch({
        type: ACTION.Add_Field_Register,
        payload: value,
        field: name,
      });
    },
  };
};
