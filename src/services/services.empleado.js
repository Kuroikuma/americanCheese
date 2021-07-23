import axios from "axios";

const apiUrl = "https://localhost:44323/api/empleado";

export const getEmpleado = () => {
  const baseUrl = `${apiUrl}`;
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((response) => {
      const data = ([] = [...response]);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getEmpleadoByID = (correo, contraseña) => {
  const baseUrl = `${apiUrl}/Seleccionar/${correo}/${contraseña}`;
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((response) => {
      const data = response;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
function request(product, method) {
  const requestOptions = {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  };
  return requestOptions;
}
export async function postEmpleado(Empleado) {
  const baseUrl = apiUrl;
  await axios
    .post(baseUrl, Empleado)
    .then((response) => console.log("success full"))
    .catch((error) => console.log(error));
}
export async function putEmpleado(Empleado = {}, ID) {
  const baseUrl = `${apiUrl}/${ID}`;
  const response = await fetch(baseUrl, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(Empleado),
  });
  return response.json();
}
export async function deleteEmpleado(ID) {
  const baseUrl = `${apiUrl}/${ID}`;
  const response = await fetch(baseUrl, {
    method: "DELETE",
  });
  return response.json();
}

export const fetchEmpleado = {
  getEmpleado,
  postEmpleado,
  putEmpleado,
  deleteEmpleado,
  getEmpleadoByID,
};
