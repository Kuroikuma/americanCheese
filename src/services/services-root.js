import axios from "axios";
const apiUrl = "https://localhost:44323/api/Root";

export const getRoot = () => {
  const baseUrl = `${apiUrl}`;
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((response) => {
      const data = ([] = [...response]);
      return data;
    })
    .catch((error) => {});
};
export async function getRootByID(correo, contraseña) {
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
export async function postRoot(Root) {
  const baseUrl = apiUrl;
  await axios
    .post(baseUrl, Root)
    .then((response) => console.log("success full"))
    .catch((error) => console.log(error));
}
export async function putRoot(Root = {}, ID) {
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
    body: JSON.stringify(Root),
  });
  return response.json();
}
export async function deleteRoot(ID) {
  const baseUrl = `${apiUrl}/${ID}`;
  const response = await fetch(baseUrl, {
    method: "DELETE",
  });
  return response.json();
}

export const fetchRoot = {
  getRoot,
  postRoot,
  putRoot,
  deleteRoot,
  getRootByID,
};
