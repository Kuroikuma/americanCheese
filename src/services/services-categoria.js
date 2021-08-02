const apiUrl = "https://localhost:44323/api/categoria";

export const ServicesGetNameCategory = (id) => {
  const baseUrl = `${apiUrl}/Selecionar/${id}`;
  console.log(baseUrl);
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
