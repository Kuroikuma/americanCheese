import axios from "axios";
const apiUrl = "https://localhost:44323/api";

export const getIngredient = () => {
  const baseUrl = `${apiUrl}/ingrediente`;
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
export const getSelectIngredientName = (name) => {
  const baseUrl = `https://localhost:44323/api/ingrediente/Selecionar/${name}`;
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
function request(ingredient, method) {
  const requestOptions = {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ingredient),
  };
  return requestOptions;
}
export async function postIngredient(ingredient) {
  const baseUrl = `${apiUrl}/ingrediente`;
  console.log(ingredient);
  try {
    const result = await axios.post(baseUrl, ingredient);
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
export async function putIngredient(ingredient = {}, ID) {
  const baseUrl = `${apiUrl}/ingrediente/${ID}`;
  try {
    const result = await axios.put(baseUrl, ingredient);
    console.log(result.data);
    return result.data;
  } catch (error) {
    return "error";
  }
}
export async function deleteIngredient(ID) {
  const baseUrl = `${apiUrl}/ingrediente/${ID}`;
  const response = await fetch(baseUrl, {
    method: "DELETE",
  });
  return response.json();
}

export const fetchIngredient = {
  getIngredient,
  getSelectIngredientName,
  postIngredient,
  putIngredient,
  deleteIngredient,
};
