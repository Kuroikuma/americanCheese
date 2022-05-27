import { React, useState, Suspense, lazy, Fragments } from "react";
import "./card-inventory.css";
import { useProduct } from "../../hooks/useProducto";
import { fetchProduct } from "../../../services/services-product";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
const EditProduct = lazy(() => import("./edit-product"));

export const CardInventory = (props) => {
  const {
    Nombre,
    Stock,
    Category,
    Tamaño,
    categoriaID,
    Price,
    cost,
    Description,
    Image,
    Sku,
    isCompound,
    Ingredients,
    handlerProductDelete,
  } = props;
  console.log(props);
  const {
    NombreR,
    StockR,
    TamañoR,
    CategoryR,
    PriceR,
    costR,
    DescriptionR,
    ImageR,
    SkuR,
    IngredientsR,
    updateProductField,
  } = useProduct({
    Nombre,
    Stock,
    Category,
    Tamaño,
    Price,
    Description,
    Image,
    Sku,
    Ingredients,
  });

  const [increase, setIncrease] = useState(false);
  const [ingredientsList, setIngredientsList] = useState(Ingredients);
  const product = {
    Nombre: NombreR,
    Stock: parseInt(StockR),
    categoriaID,
    Tamaño: TamañoR,
    precio: parseInt(PriceR),
    Imagen: ImageR,
    costo: 0,
    isCompound,
    ProductoID: SkuR,
    crearProductosNav: IngredientsR,
  };
  console.log(product);
  const handlerEditProductChange = (e) => {
    const { name, value } = e.target;
    updateProductField(`${name}R`, value);
  };

  const handlerSaveProduct = () => {
    fetchProduct
      .putProduct(product, product.ProductoID)
      .then((response) => console.log(response));
    console.log(product);
  };

  const handlerHidenEdit = (e) => {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      setIncrease(false);
    }
    if (e.target.checked === false) {
      setIncrease(true);
    }
  };
  return (
    <Fragments>
      <div className={increase ? "Spacing increase" : "Spacing"}></div>
      <div className={increase ? "container-card increase" : "container-card"}>
        <div className="container-card__ContentsGrid">
          <div className="container-card__ContentsGrid__item delete">
            <input
              onMouseUp={(e) => handlerProductDelete(e, Sku)}
              type="checkbox"
            />
            <div className="container-card__ContentsGrid__img"></div>
          </div>
          <div title={Sku} className="container-card__ContentsGrid__item Sku">
            <h4>{Sku}</h4>
          </div>
          <div
            title={Nombre}
            className="container-card__ContentsGrid__item Nombre"
          >
            <h4>{Nombre}</h4>
          </div>
          <div className="container-card__ContentsGrid__item">
            <p>
              {Category ||
              categoriaID === "48c8c50d-5b40-45a0-9e85-77255f559ade"
                ? "Pizza"
                : "Bebida"}
            </p>
          </div>
          <div className="container-card__ContentsGrid__item">
            <p>{Price}</p>
          </div>
          <div className="container-card__ContentsGrid__item">
            <p>{Stock}</p>
          </div>
          <div className="container-card__ContentsGrid__item">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setIncrease(!increase)}
            >
              {increase ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </div>
        </div>
        <div
          className={increase ? "Spacing-card" : "Spacing-card increase"}
        ></div>
        <Suspense fallback={"Cargando...."}>
          {increase ? (
            <EditProduct
              ingredientsList={ingredientsList}
              setIngredientsList={setIngredientsList}
              handlerEditProductChange={handlerEditProductChange}
            />
          ) : null}
        </Suspense>
        <div
          className={increase ? "Spacing-card" : "Spacing-card increase"}
        ></div>
        <div className="container-card__button">
          <button onClick={handlerSaveProduct}>Guardar Cambios</button>
        </div>
      </div>
    </Fragments>
  );
};
