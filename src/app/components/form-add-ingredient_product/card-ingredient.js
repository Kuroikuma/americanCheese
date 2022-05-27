import React,  { Fragments, useState, useEffect } from "react";
import { fetchIngredient } from "../../../services/services-ingredient";
import TextField from "@material-ui/core/TextField";
import "./form-add-ingredient_product.style.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  TextField: {
    marginTop: "3vh",
  },
  TextFields: {
    marginTop: "3vh",
    marginLeft: "2vh",
  },
}));

const CardIngredient = (props) => {
  const classes = useStyles();

  const { ingredient } = props;
  const [blur, setBlur] = useState(false);
  useEffect(() => {
    fetchIngredient
      .getSelectIngredientName(ingredient.IngredienteID)
      .then((response) =>
        response ? (ingredient.IngredienteID = response.ingredienteID) : null
      );
  }, [blur]);
  const handlerInputIngredient = (e) => {
    const { name, value } = e.target;
    if (name === "Ingrediente") {
      ingredient.IngredienteID = value;
    }
    if (name === "Cantidad") {
      ingredient.CantidadIngrediente = parseInt(value);
      console.log(value);
    }
    setBlur(!blur);
  };
  const handleCantidad = (e) => {
    const { name, value } = e.target;
    if (name === "Ingrediente") {
      ingredient.IngredienteID = value;
    }
    if (name === "Cantidad") {
      ingredient.CantidadIngrediente = parseInt(value);
      console.log(value);
    }
  };
  return (
    <Fragments>
      <TextField
        required
        className={classes.TextField}
        id="outlined-required"
        onBlur={handlerInputIngredient}
        name={"Ingrediente"}
        size="small"
        label="Ingrediente"
        defaultValue="Hello World"
        variant="outlined"
      />
      <TextField
        required
        className={classes.TextFields}
        id="outlined-required"
        onChange={handleCantidad}
        name={"Cantidad"}
        size="small"
        type={"number"}
        label="Cantidad"
        defaultValue="Hello World"
        variant="outlined"
      />
    </Fragments>
  );
};

export default CardIngredient;
