import axios from "axios";
const apiUrl = "https://localhost:44323/api/producto";

export const ServicesCategoryProduct=(id)=> {
  const baseUrl = `${apiUrl}/Seleccionar/${id}`;
  console.log(baseUrl);
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((response) => {
      const data = ([] = [...response]);
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export const getProduct = () => {
  const baseUrl = apiUrl;
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
function request(product, method) {
  const requestOptions = {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  };
  return requestOptions;
}
export async function postProduct(product) {
  const baseUrl = apiUrl;
  console.log(product);
  await axios
    .post(baseUrl, product)
    .then((response) => console.log("success full"))
    .catch((error) => console.log(error));
  /* console.log(product);
  return await fetch(baseUrl, request(product, "POST"))
    .then((res) => res.json())
    .then((response) => {
      return console.log("success full");
    })
    .catch((error) => console.log(error));*/
  /* const response = await fetch(baseUrl, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(product),
  });
  return response.json();*/
}
export async function putProduct(product = {}, ID) {
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
    body: JSON.stringify(product),
  });
  return response.json();
}
export async function deleteProduct(ID) {
  const baseUrl = `${apiUrl}/${ID}`;
  const response = await fetch(baseUrl, {
    method: "DELETE",
  });
  return response.json();
}

export const fetchProduct = {
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
};
