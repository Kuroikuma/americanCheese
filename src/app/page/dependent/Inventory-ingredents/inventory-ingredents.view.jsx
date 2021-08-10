import { React } from "react";
import IntegrationNotistac from "../../../components/card-inventory-ingredient/card-inventory-ingredient";
import IntegrationNotistack from "../../../components/form-add-ingrediente/form-add-ingredients";
import { Modal } from "../../../components/modal/modal";
import { CardSoldOut } from "../../../components/card-sold-out/card-sold-out";
import "./inventory-ingredents.style.css";
import { PersistentDrawerLeft } from "../../../components/sidebar-lateral/sidebar";
import { Helmet } from "react-helmet";

const InventoryIngredentsView = (props) => {
  const {
    isOpen,
    openModal,
    closeModal,
    Ingrediente,
    setID,
    ID,
    setIngrediente,
    decreases,
    setDecreases,
  } = props;

  return (
    <PersistentDrawerLeft
      titulo="Inventario de ingrediente"
      setDecreases={setDecreases}
    >
      <Helmet>
        <title> Inventario De Ingrediente </title>
      </Helmet>
      <div className={decreases ? "Container decreases" : "Container"}>
        <div className="Container__Inventory">
          <div className="Container__Inventory__Header">
            <div className="Container__Inventory__Header__Title">
              <h2>INVENTARIO</h2>
            </div>
            <div className="Container__Inventory__Header__Filter">
              <button>Sucursal: Juigalpa</button>
              <input placeholder="buscar ingrediente" type="text" />
            </div>
            <div className="Container__Inventory__Header__AddIngredient">
              <button
                className="Container__Inventory__Header__AddIngredient-open"
                onClick={openModal}
              >
                Agregar Ingrediente
              </button>
              <Modal isOpen={isOpen} closeModal={closeModal}>
                <IntegrationNotistack setID={setID} ID={ID} />
              </Modal>
            </div>
          </div>
          <div className="Container__Inventory__FilterStockQuantity">
            <h3>Stock Quantity</h3>
          </div>
          <div className="Container__Inventory__Contents">
            <div className="Container__Inventory__Contents__title">
              <div className="Container__Inventory__ContentsGrid__item">
                <h3>SKU</h3>
              </div>
              <div className="Container__Inventory__ContentsGrid__item">
                <h3>Nombre</h3>
              </div>
              <div className="Container__Inventory__ContentsGrid__item">
                <h3>Precio</h3>
              </div>
              <div className="Container__Inventory__ContentsGrid__item">
                <h3>Cantidad</h3>
              </div>
              <div className="Container__Inventory__ContentsGrid__item">
                <h3></h3>
              </div>
            </div>
            {Ingrediente
              ? Ingrediente.map((ingredientes) => (
                  <IntegrationNotistac
                    nombre={ingredientes.nombre}
                    stock={ingredientes.stock}
                    precio={ingredientes.precio}
                    imagen={ingredientes.imagen}
                    sku={ingredientes.ingredienteID}
                    unidadMedida={ingredientes.unidadMedida}
                    setIngrediente={setIngrediente}
                    ID={ID}
                    setID={setID}
                  />
                ))
              : null}
            <div className="Spacing"></div>
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
export default InventoryIngredentsView;
