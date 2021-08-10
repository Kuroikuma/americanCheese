import React, { useState } from "react";
import { CardInventory } from "../../../components/card-inventory/card-inventory";
import IntegrationNotistack from "../../../components/form-add-product/form-add-product";
import { Modal } from "../../../components/modal-material/modal/modal";
import { CardSoldOut } from "../../../components/card-sold-out/card-sold-out";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Helmet } from "react-helmet";
import { PersistentDrawerLeft } from "../../../components/sidebar-lateral/sidebar";
import "./inventory.style.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const InventoryView = (props) => {
  const {
    open,
    handleClose,
    handleClickOpen,
    handlerProductDelete,
    Producto,
    ID,
    setID,
    setProducto,
    decreases,
    setDecreases,
    handleSearch,
  } = props;
  const classes = useStyles();

  const handleChangeCategoria = (event) => {
    console.log(event.target.value);

    setID(event.target.value);
    console.log(ID);
  };

  console.log(Producto);
  return (
    <PersistentDrawerLeft
      titulo="Inventario de Producto"
      setDecreases={setDecreases}
    >
      <Helmet>
        <title> Inventario</title>
      </Helmet>
      <div className={decreases ? "Container decreases" : "Container"}>
        <div className="Container__Inventory">
          <div className="Container__Inventory__Header">
            <div className="Container__Inventory__Header__Title">
              <h2>INVENTARIO</h2>
            </div>
            <div className="Container__Inventory__Header__Filter">
              <FormControl className={classes.formControl}>
                <Select
                  value={ID}
                  onChange={handleChangeCategoria}
                  displayEmpty
                  className={classes.selectEmpty}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="" disabled>
                    Categoria
                  </MenuItem>
                  <MenuItem value="Pizza">Pizza</MenuItem>
                  <MenuItem value="bebidas">bebidas</MenuItem>
                </Select>
                <FormHelperText>Seleccionar</FormHelperText>
              </FormControl>
              <button>Sucursal:Juigalpa</button>
              <input
                onChange={handleSearch}
                placeholder="buscar producto"
                type="text"
              />
            </div>
            <div className="Container__Inventory__Header__AddProduct">
              <button
                className="Container__Inventory__Header__AddProduct-open"
                onClick={handleClickOpen}
              >
                Agregar Producto
              </button>
              <Modal
                titulo="Agregar Producto"
                open={open}
                handleClose={handleClose}
              >
                <IntegrationNotistack setID={setID} ID={ID} />
              </Modal>
            </div>
          </div>
          <div className="Container__Inventory__Contents">
            <div className="Container__Inventory__Contents__title">
              <div className="Container__Inventory__ContentsGrid__item">
                <h3>#</h3>
              </div>
              <div className="Container__Inventory__ContentsGrid__item">
                <h3>SKU</h3>
              </div>
              <div className="Container__Inventory__ContentsGrid__item">
                <h3>Nombre</h3>
              </div>
              <div className="Container__Inventory__ContentsGrid__item">
                <h3>Categoria</h3>
              </div>
              <div className="Container__Inventory__ContentsGrid__item">
                <h3>Precio</h3>
              </div>
              <div className="Container__Inventory__ContentsGrid__item">
                <h3>Catidad</h3>
              </div>
              <div className="Container__Inventory__ContentsGrid__item">
                <h4></h4>
              </div>
            </div>
            {Producto
              ? Producto.map((producto) => (
                  <CardInventory
                    Nombre={producto.nombre}
                    Stock={producto.stock}
                    Category={producto.categoria}
                    categoriaID={producto.categoriaID}
                    Price={producto.precio}
                    Tamaño={producto.tamaño}
                    Image={producto.imagen}
                    Sku={producto.productoID}
                    Ingredients={producto.ingrediente}
                    isCompound={producto.isCompound}
                    handlerProductDelete={handlerProductDelete}
                  />
                ))
              : null}
            <div className="Spacing"></div>

            <div className="Container__Inventory__Contents__delete">
              <div className="eli"></div>
              <button>ELIMINAR</button>
            </div>
            <div className="Spacing"></div>
          </div>
        </div>
        <div className="Container__AlmostExhausted">
          <div className="Container__AlmostExhausted__Urgent">
            <div className="Container__AlmostExhausted__Urgent__Title">
              <h3>URGENTE</h3>
            </div>
            <CardSoldOut red="red" />
          </div>
          <div className="Container__AlmostExhausted__LittleUrgent">
            <div className="Container__AlmostExhausted__LittleUrgent__Title">
              <h3> MENOS URGENTE</h3>
            </div>
            <CardSoldOut yellow="yellow" />
          </div>
        </div>
      </div>
    </PersistentDrawerLeft>
  );
};
export default InventoryView;
