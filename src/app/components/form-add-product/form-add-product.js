import { React, useState, Suspense, lazy, useEffect } from "react";
import "./form-add-product.style.css";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import { SnackbarProvider, useSnackbar } from "notistack";
import { ServicesGetNameCategory } from "../../../services/services-categoria";
import { fetchProduct } from "../../../services/services-product";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

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
}));

const FormAddIngredientPrduct = lazy(() =>
  import("../form-add-ingredient_product/form-add-ingredient_product")
);

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const FormAddProduct = () => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [tamañoArray, setTamañoArray] = useState([]);
  const ingredients = [
    {
      IngredienteID: null,
      CantidadIngrediente: null,
    },
  ];

  useEffect(() => {
    ServicesGetNameCategory(categoria).then((response) =>
      response ? setCategoria(response.categoriaID) : null
    );
  }, [tamañoArray]);

  const Bebidas = ["1 Litro", "1.15 Litro", "2 Litro", "3 Litro"];
  const Pizza = ["6 Piezas", "8 Piezas", "12 Piezas", "16 Piezas", "32 Piezas"];

  const [Nombre, setNombre] = useState();
  const [tamaño, setTamaño] = useState();
  const [stok, setStok] = useState();
  const [categoria, setCategoria] = useState();
  const [precio, setPrecio] = useState();
  const [isCompound, setIsCompound] = useState(false);
  const [descripcion, setDescripcion] = useState();
  const [imagen, setImagen] = useState();
  const [ingredientsList, setIngredientsList] = useState(ingredients);

  const handleTamaño = (e) => {
    setTamaño(e.target.value);
  };

  const handlerProductChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "Nombre":
        setNombre(value);
        break;
      case "isCompound":
        setIsCompound(value);
        console.log(Nombre);
        break;
      case "Stock":
        setStok(value);
        break;
      case "Precio":
        setPrecio(value);
        break;
      case "Descripcion":
        setDescripcion(value);

        break;
      case "Imagen":
        console.log(name, value);
        setImagen(value);
        break;
      case "Tamaño":
        setTamaño(value);
        break;
      default:
        break;
    }
  };
  const hadleChangeCategoria = (e) => {
    const { value } = e.target;
    console.log(value);
    if (value === "Pizza") {
      setCategoria(value);
      setTamañoArray(Pizza);
    }
    if (value === "bebidas") {
      setCategoria(value);
      setTamañoArray(Bebidas);
    }
  };
  /* const product = {
    CategoriaID: categoria,
    nombre,
    precio: parseFloat(precio),
    tamaño: parseInt(tamaño),
    stock: parseFloat(stok),
    imagen,
    isCompound,
    crearProductosNav: ingredientsList ? ingredientsList : undefined,
  };*/
  const handlerSaveProduct = () => {
    if (isCompound === true) {
      const product = {
        CategoriaID: categoria,
        Nombre,
        precio: parseFloat(precio),
        tamaño: tamaño,
        stock: parseFloat(stok) || 0,
        imagen,
        isCompound,
        crearProductosNav: ingredientsList,
      };
      fetchProduct
        .postProduct(product)
        .then((response) =>
          enqueueSnackbar(
            response === "success"
              ? "Ingrediente Agregado!"
              : "Ingrediente no agregado!",
            { variant: response }
          )
        );
    } else {
      const product = {
        CategoriaID: categoria,
        Nombre,
        precio: parseFloat(precio),
        tamaño: tamaño,
        stock: parseFloat(stok),
        imagen,
        isCompound,
      };
      fetchProduct
        .postProduct(product)
        .then((response) =>
          enqueueSnackbar(
            response === "success"
              ? "Ingrediente Agregado!"
              : "Ingrediente no agregado!",
            { variant: response }
          )
        );
    }
  };
  const handleIsCompound = (e) => {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      setIsCompound(true);
    }
    if (e.target.checked === false) {
      setIsCompound(false);
    }
  };

  return (
    <>
      <div className="FormAddProduct__container">
        <TextField
          required
          id="outlined-required"
          size="small"
          name={"Nombre"}
          onChange={handlerProductChange}
          label="Nombre"
          defaultValue="Hello World"
          variant="outlined"
        />
        <TextField
          required
          className={classes.TextField}
          id="outlined-required"
          size="small"
          name={"Stock"}
          type="number"
          onChange={handlerProductChange}
          label="Stock"
          defaultValue="Hello World"
          variant="outlined"
        />
        <TextField
          required
          className={classes.TextField}
          id="outlined-required"
          size="small"
          onBlur={hadleChangeCategoria}
          label="Categoria"
          defaultValue="Hello World"
          variant="outlined"
        />
        <TextField
          required
          className={classes.TextField}
          id="outlined-required"
          size="small"
          name={"Precio"}
          type="number"
          onChange={handlerProductChange}
          label="Precio"
          defaultValue="Hello World"
          variant="outlined"
        />
        {categoria ? (
          <div className="FormAddProduct__container_item">
            <select onChange={handleTamaño}>
              {tamañoArray.map((item) => (
                <option>{item}</option>
              ))}
            </select>
          </div>
        ) : null}
        <TextField
          required
          className={classes.TextField}
          id="outlined-required"
          size="small"
          name={"Descripcion"}
          onChange={handlerProductChange}
          label="Descripcion"
          defaultValue="Hello World"
          variant="outlined"
        />
        <input
          name={"Imagen"}
          onChange={handlerProductChange}
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
        <Suspense fallback={"Cargando...."}>
          {isCompound ? (
            <FormAddIngredientPrduct
              ingredientsList={ingredientsList}
              setIngredientsList={setIngredientsList}
            />
          ) : null}
        </Suspense>
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={isCompound}
              onChange={handleIsCompound}
              name="checkedG"
            />
          }
          label="Es Un Producto Compuesto!"
        />
        <button
          className="FormAddProduct__container--saveProduct"
          onClick={handlerSaveProduct}
        >
          Guardar Producto
        </button>
      </div>
    </>
  );
};
export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <FormAddProduct />
    </SnackbarProvider>
  );
}
