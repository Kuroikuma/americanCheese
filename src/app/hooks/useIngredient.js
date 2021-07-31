import { useReducer } from "react";

const ACTION = {
  Update_Field_Ingredient: "Update_Field_Ingredient",
};

const ACTION_REDUCERD = {
  [ACTION.Update_Field_Ingredient]: (state, action) => ({
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

export const useIngredient = ({
  Nombre,
  Stock,
  Price,
  Image,
  Sku,
  unidadMedida,
}) => {
  const initialIngredientState = {
    NombreR: Nombre,
    StockR: Stock,
    PriceR: Price,
    ImageR: Image,
    SkuR: Sku,
    unidadMedidaR: unidadMedida,
  };
  const [state, dispatch] = useReducer(REDUCER, initialIngredientState);
  const { NombreR, StockR, PriceR, ImageR, SkuR, unidadMedidaR } = state;
  return {
    NombreR,
    StockR,
    PriceR,
    ImageR,
    SkuR,
    unidadMedidaR,
    updateIngredientField: (name, value) => {
      dispatch({
        type: ACTION.Update_Field_Ingredient,
        payload: value,
        field: name,
      });
    },
  };
};
