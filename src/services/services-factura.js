import axios from "axios";
const apiUrl = "https://localhost:44323/api/factura";
export async function postFactura(Factura) {
  const baseUrl = apiUrl;
  console.log(Factura);
  await axios
    .post(baseUrl, Factura)
    .then((response) => console.log("success full"))
    .catch((error) => console.log(error));
}
