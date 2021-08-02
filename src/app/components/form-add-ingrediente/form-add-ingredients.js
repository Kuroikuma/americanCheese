import { React, useState } from "react";
import "./form-add-ingredients.style.css";
import Texfield from "../textfield/texfield";
import { fetchIngredient } from "../../../services/services-ingredient";
import { makeStyles } from "@material-ui/core/styles";
import { SnackbarProvider, useSnackbar } from "notistack";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 135,
  },
}));

export const FormAddIngredient = (props) => {
  const { setID, ID } = props;

  const { enqueueSnackbar } = useSnackbar();
  const [nombre, setNombre] = useState();
  const [stok, setStok] = useState();
  const [precio, setPrecio] = useState();
  const [imagen, setImagen] = useState();
  const [unidadMedida, setUnidadMedida] = useState();

  const classes = useStyles();

  const handlerIngredientChange = (e) => {
    const { name, value, checked } = e.target;
    switch (name) {
      case "Nombre":
        setNombre(value);
        break;
      case "Stock":
        setStok(value);
        break;
      case "Precio":
        setPrecio(value);
        break;
      case "Imagen":
        setImagen(value);
        break;
      case "unidadMedida":
        setUnidadMedida(value);
        break;
      default:
        break;
    }
  };

  function convertUnitMeasure(amount, measure) {
    switch (measure) {
      case "lt":
        return parseFloat(amount * 1000);
        break;
      case "gal":
        return parseFloat(amount * 4000);
        break;
      case "lb":
        return parseFloat(amount * 16);
        break;
      case "kg":
        return parseFloat(amount * 35.274);
        break;
      case "q":
        return parseFloat(amount * 1600);
        break;
      case "ud":
        return parseFloat(amount * 1);
        break;
      default:
        return parseFloat(amount);
        break;
    }
  }

  function convertUnit(unidad) {
    if (unidad === "lt" || unidad === "gal") {
      return "ml";
    } else if (unidad === "kg" || unidad === "lb" || unidad === "q") {
      return "oz";
    } else if (unidad === "ud") {
      return "ud";
    }
  }

  const handleClickVariant = (variant) => {
    // variant could be success, error, warning, info, or default

    const ingredient = {
      nombre,
      precio: parseFloat(precio),
      stock: convertUnitMeasure(stok, unidadMedida),
      imagen,
      unidadMedida: convertUnit(unidadMedida),
    };
    fetchIngredient
      .postIngredient(ingredient)
      .then((response) =>
        enqueueSnackbar(
          response === "success"
            ? "Ingrediente Agregado!"
            : "Ingrediente no agregado!",
          { variant: response }
        )
      );
    ID === true ? setID(false) : setID(true);
  };
  return (
    <>
      <div className="FormAddIngredient__container">
        <div className="FormAddIngredient__container__title">
          <h1> Agregar Ingrediente</h1>
        </div>
        <div className="FormAddIngredient__container_item">
          <Texfield
            handlerChange={handlerIngredientChange}
            name={"Nombre"}
            placeHolder={"Nombre"}
            type={"text"}
          />
        </div>
        <div className="FormAddIngredient__container_item">
          <Texfield
            handlerChange={handlerIngredientChange}
            name={"Stock"}
            placeHolder={"Cantidad"}
            type={"number"}
          />
        </div>
        <div className="FormAddIngredient__container_item">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-select">Unidad Medida</InputLabel>
            <Select
              onChange={handlerIngredientChange}
              defaultValue=""
              id="grouped-select"
              name={"unidadMedida"}
            >
              <ListSubheader>
                <strong>Sólida</strong>
              </ListSubheader>
              <MenuItem value="ud">Unidad</MenuItem>
              <MenuItem value="lb">Libra</MenuItem>
              <MenuItem value="kg">Kilogramo</MenuItem>
              <MenuItem value="q">Quintal</MenuItem>
              <ListSubheader>
                <strong>Líquida</strong>
              </ListSubheader>
              <MenuItem value="lt">Litro</MenuItem>
              <MenuItem value="gal">Galón</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="FormAddIngredient__container_item">
          <Texfield
            handlerChange={handlerIngredientChange}
            name={"Precio"}
            placeHolder={"Precio"}
            type={"number"}
          />
        </div>
        <div className="FormAddIngredient__container_item">
          <Texfield
            handlerChange={handlerIngredientChange}
            name={"Imagen"}
            placeHolder={"Imagen"}
            type={"text"}
          />
        </div>
        <button
          className="FormAddProduct__container--saveProduct"
          onClick={handleClickVariant}
        >
          Guardar Ingrediente
        </button>
      </div>
    </>
  );
};

export default function IntegrationNotistack(props) {
  const { setID, ID } = props;
  return (
    <SnackbarProvider maxSnack={3}>
      <FormAddIngredient setID={setID} ID={ID} />
    </SnackbarProvider>
  );
}
