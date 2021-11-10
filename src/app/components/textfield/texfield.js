import { React, useState } from "react";
import "./textfield.style.css";

const TextField = (props) => {
  const { name, type, placeHolder, handlerChange, handleSubmit } = props;
  const handlerPropsInput = handlerChange ? handlerChange : null;
  const [focu, setFocu] = useState(false);
  const [field, setField] = useState("");
  const handleInput = (e) => {
    if (e.type == "focus") {
      setFocu(true);
      console.log(focu);
    } else if (e.type == "blur") {
      setFocu(false);
    }
  };
  const handlerInputChange = (e) => {
    const { value } = e.target;
    setField(value);
    console.log(value);
    if (handlerPropsInput) {
      handlerPropsInput(e);
    } else {
      console.log("Hola");
    }
  };
  const handleSubmitInput = (e) => {
    if (handleSubmit) {
      handleSubmit(e);
    } else {
      console.log("Hola");
    }
  };
  return (
    <div className="texfield">
      <label
        for="input"
        className={`label ${focu && "focu"} ${
          focu ? null : field ? "full" : null
        }`}
      >
        {placeHolder}
      </label>
      <input
        name={name}
        value={field}
        onFocus={handleInput}
        onBlur={handleInput}
        onSubmit={handleSubmitInput}
        onChange={handlerInputChange}
        className={focu ? "input focu" : "input"}
        type={type}
      />
    </div>
  );
};
export default TextField;
