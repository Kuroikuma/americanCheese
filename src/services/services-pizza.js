const apiUrl = process.env.REACT_APP_API_URL || "https://localhost:44389/api";
function ServicesPizza(id) {
  const baseUrl = `${apiUrl}/productocategoria/${id}`;
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
export default ServicesPizza;
