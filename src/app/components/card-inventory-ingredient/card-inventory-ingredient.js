import { React, useState, Suspense, lazy, useEffect, Fragments } from "react";
import "./card-inventory-ingredient.css";
import { useIngredient } from "../../hooks/useIngredient";
import { fetchIngredient } from "../../../services/services-ingredient";
import { makeStyles } from "@material-ui/core/styles";
import { SnackbarProvider, useSnackbar } from "notistack";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const EditIngredient = lazy(() => import("./edit-ingredient"));

export const CardInventoryIngredient = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const Solida = ["Quintal", "Kilogramo", "Libra"];
  const Liquida = ["Galón", "Litro"];
  const Unidad = ["Unidad"];
  const {
    nombre,
    stock,
    precio,
    imagen,
    sku,
    unidadMedida,
    setIngrediente,
    ID,
    setID,
  } = props;
  const [stocki, setStock] = useState(stock);
  const [recorrido, setRecorrido] = useState([]);
  const [Abreviatura, setAbreviatura] = useState(" " + unidadMedida);
  const {
    NombreR,
    StockR,
    PriceR,
    ImageR,
    SkuR,
    unidadMedidaR,
    updateIngredientField,
  } = useIngredient({
    nombre,
    stock,
    precio,
    imagen,
    sku,
    unidadMedida,
  });

  const [increase, setIncrease] = useState(false);
  const ingredient = {
    Nombre: NombreR,
    stock: parseInt(StockR),
    precio: parseInt(PriceR),
    Imagen: ImageR,
    IngredienteID: SkuR,
    unidadMedida: unidadMedidaR,
  };
  const handlerEditIngredientChange = (e) => {
    const { name, value } = e.target;
    updateIngredientField(`${name}R`, value);
  };

  const handlerSaveIngredient = () => {
    fetchIngredient
      .putIngredient(ingredient, ingredient.IngredienteID)
      .then((response) =>
        enqueueSnackbar(
          response === "success"
            ? "Ingrediente Editado!"
            : "Ingrediente no editado!",
          { variant: response }
        )
      );
    setStock(stocki + ingredient.stock);
    if (ID === true) {
      setID(false);
    } else {
      setID(true);
    }
    setIncrease(false);
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

  useEffect(() => {
    if (unidadMedida === "oz") {
      setRecorrido(Solida);
    } else if (unidadMedida === "ml") {
      setRecorrido(Liquida);
    } else if (unidadMedida === "ud") {
      setRecorrido(Unidad);
    } else {
    }
  }, []);

  const Cambio = (e) => {
    let change = e.target.value;
    console.log(change);
    if (change === "Quintal") {
      setAbreviatura("");
      setStock((stock / 1600).toFixed(2));
    }
    if (change === "Kilogramo") {
      setAbreviatura("");
      setStock((stock / 35.274).toFixed(2));
    }
    if (change === "Libra") {
      setAbreviatura("");
      setStock((stock / 16).toFixed(2));
    }
    if (change === "Litro") {
      setAbreviatura("");
      setStock((stock / 1000).toFixed(2));
    }
    if (change === "Galón") {
      setAbreviatura("");
      setStock((stock / 4000).toFixed(2));
    }
  };

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 2,
    },
    select: {
      minWidth: 1,
      marginBottom: "26px",
    },
  }));
  const classes = useStyles();

  return (
    <Fragments>
      <div className={increase ? "Spacing increase" : "Spacing"}></div>
      <div className={increase ? "container-card increase" : "container-card"}>
        <div className="container-card__ContentsGrid">
          <div className="container-card__ContentsGrid__item Sku">
            <h4>{sku}</h4>
          </div>
          <div className="container-card__ContentsGrid__item">
            <h4>{nombre}</h4>
          </div>
          <div className="container-card__ContentsGrid__item">
            <p>{precio}</p>
          </div>
          <div className="container-card__ContentsGrid__item">
            <p>
              {stocki}
              {Abreviatura}
            </p>
            <FormControl className={classes.formControl}>
              <InputLabel></InputLabel>
              <Select className={classes.select} onChange={Cambio}>
                <MenuItem>
                  <em>None</em>
                </MenuItem>
                {recorrido.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="container-card__ContentsGrid__item">
            <input onMouseUp={handlerHidenEdit} type="checkbox" />
          </div>
        </div>
        <div
          className={increase ? "Spacing-card" : "Spacing-card increase"}
        ></div>
        <Suspense fallback={"Cargando...."}>
          {increase ? (
            <EditIngredient
              handlerEditIngredientChange={handlerEditIngredientChange}
            />
          ) : null}
        </Suspense>
        <div
          className={increase ? "Spacing-card" : "Spacing-card increase"}
        ></div>
        <div className="container-card__button">
          <button onClick={handlerSaveIngredient}>Guardar Cambios</button>
        </div>
      </div>
    </Fragments>
  );
};

export default function IntegrationNotistac(props) {
  const {
    nombre,
    stock,
    precio,
    imagen,
    sku,
    unidadMedida,
    setIngrediente,
    ID,
    setID,
  } = props;
  return (
    <SnackbarProvider maxSnack={3}>
      <CardInventoryIngredient
        nombre={nombre}
        stock={stock}
        precio={precio}
        imagen={imagen}
        sku={sku}
        unidadMedida={unidadMedida}
        setIngrediente={setIngrediente}
        ID={ID}
        setID={setID}
      />
    </SnackbarProvider>
  );
}
