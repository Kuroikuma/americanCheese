import { useReducer } from "react";

const ACTION = {
  Update_Field_Product: "Update_Field_Product",
};

const ACTION_REDUCERD = {
  [ACTION.Update_Field_Product]: (state, action) => ({
    ...state,
    [action.field]: action.payload,
  }),
};

const REDUCER = (state, action) => {
  console.log("estado");
  console.log(state);
  console.log(action);
  const actionReducer = ACTION_REDUCERD[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

export const useProduct = ({
  Nombre,
  Stock,
  Category,
  Tamaño,
  Price,
  cost,
  Description,
  Image,
  Sku,
  Ingredients,
}) => {
  const initialProductState = {
    NombreR: Nombre,
    StockR: Stock,
    CategoryR: Category,
    TamañoR: Tamaño,
    PriceR: Price,
    costR: cost,
    DescriptionR: Description,
    ImageR: Image,
    SkuR: Sku,
    IngredientsR: Ingredients,
  };
  const [state, dispatch] = useReducer(REDUCER, initialProductState);
  const {
    NombreR,
    StockR,
    CategoryR,
    TamañoR,
    PriceR,
    costR,
    DescriptionR,
    ImageR,
    SkuR,
    IngredientsR,
  } = state;
  return {
    NombreR,
    StockR,
    CategoryR,
    TamañoR,
    PriceR,
    costR,
    DescriptionR,
    ImageR,
    SkuR,
    IngredientsR,
    updateProductField: (name, value) => {
      dispatch({
        type: ACTION.Update_Field_Product,
        payload: value,
        field: name,
      });
    },
  };
};
