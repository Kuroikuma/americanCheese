import axios from "axios";
const apiUrl = "https://localhost:44323/api/producto";

export const selecProductoPorNombre = (id) => {
  const baseUrl = `${apiUrl}/Seleccionar/PorNombre/${id}`;
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((response) => {
      const data = response;
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const ServicesCategoryProduct = (id) => {
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
};

export const searchproducto = (id) => {
  const baseUrl = `${apiUrl}/Selecionar/Producto/${id}`;
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
};

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
  try {
    const result = await axios.post(baseUrl, product);
    console.log(result.data);
    return result.data;
  } catch (error) {
    return "error";
  }
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
  try {
    const result = await axios.put(baseUrl, product);
    console.log(result.data);
    return result.data;
  } catch (error) {
    return "error";
  }
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
  searchproducto,
  selecProductoPorNombre,
};
