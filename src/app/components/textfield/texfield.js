import { React, useState } from "react";
import "./textfield.style.css";

const TextField = (props) => {
  let { name, type } = props;

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
    const { name, value } = e.target;
    setField(value);
    console.log(value);
  };

  return (
    <>
      <div className="texfield">
        <label
          for="input"
          className={`label ${focu && "focu"} ${
            focu ? null : field ? "full" : null
          }`}
        >
          {name}
        </label>
        <input
          name={name}
          value={field}
          onFocus={handleInput}
          onBlur={handleInput}
          onChange={handlerInputChange}
          className={focu ? "input focu" : "input"}
          type={type}
        />
      </div>
    </>
  );
};
export default TextField;
