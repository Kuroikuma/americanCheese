import { React, useEffect, useState } from "react";
import { useModal } from "../../../hooks/useModal-material";
import { useHistory } from "react-router-dom";
import { ServicesCategoryProduct } from "../../../../services/services-product";
import InventoryView from "./inventory.view";
import { Spinner } from "../../../components/spinner/spinner";
import { fetchProduct } from "../../../../services/services-product";

export default function Inventory(params) {
  useEffect(() => {
    history.push("/");
  }, []);
  const history = useHistory();
  const [open, handleClose, handleClickOpen] = useModal(false);

  const [ID, setID] = useState("Pizza");
  const [decreases, setDecreases] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [Producto, setProducto] = useState([]);

  useEffect(() => {
    fetchProduct
      .searchproducto(search)
      .then((response) => (response ? setProducto(response) : null));
  }, [search]);

  console.log(Producto);
  useEffect(() => {
    setIsLoading(true);
    ServicesCategoryProduct(ID).then(
      (response) => setProducto(response),
      setIsLoading(false)
    );
  }, [ID]);

  const handlerProductDelete = (e) => {
    console.log(e.target.checked);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  if (isLoading) return <Spinner />;
  return (
    <>
      <InventoryView
        handlerProductDelete={handlerProductDelete}
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        Producto={Producto}
        ID={ID}
        setID={setID}
        setProducto={setProducto}
        handleSearch={handleSearch}
        decreases={decreases}
        setDecreases={setDecreases}
      />
    </>
  );
}
