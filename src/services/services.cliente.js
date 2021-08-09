import axios from "axios";
const apiUrl = "https://localhost:44323/api/cliente";

export const getCliente = () => {
  const baseUrl = `${apiUrl}`;
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((response) => {
      const data = ([] = [...response]);
      return data;
    })
    .catch((error) => {});
};
export async function getClienteByID(correo, contraseña) {
  const baseUrl = `${apiUrl}/Seleccionar/${correo}/${contraseña}`;
  return await fetch(baseUrl)
    .then((res) => res.json())
    .then((response) => {
      const data = response;
      return data;
    })
    .catch((error) => {
      return undefined;
    });
}
function request(product, method) {
  const requestOptions = {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  };
  return requestOptions;
}
export async function postCliente(cliente) {
  const baseUrl = apiUrl;
  await axios
    .post(baseUrl, cliente)
    .then((response) => console.log("success full"))
    .catch((error) => console.log(error));
}
export async function putCliente(Cliente = {}, ID) {
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
    body: JSON.stringify(Cliente),
  });
  return response.json();
}
export async function deleteCliente(ID) {
  const baseUrl = `${apiUrl}/${ID}`;
  const response = await fetch(baseUrl, {
    method: "DELETE",
  });
  return response.json();
}

export const fetchCliente = {
  getCliente,
  postCliente,
  putCliente,
  deleteCliente,
  getClienteByID,
};
