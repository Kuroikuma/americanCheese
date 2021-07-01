import { React, useState } from "react";
import "./menu-combo.style.css";
import { Link } from "react-router-dom";

export const CardCombo = (props) => {
  const { img, description, name, index } = props;

  const [visibility, setVisibility] = useState("combos-description-hidden");

  const handleVisibility = (e) => {
    console.log(description);
    if (e.type != "mouseleave") {
      setVisibility("combos-description");
    } else {
      setVisibility("combos-description-hidden");
    }
  };

  return (
    <>
      <div key={index} className="combos-card">
        <p className="name"> {name}</p>
        <div className="image">
          <img
            onMouseLeave={handleVisibility}
            onMouseOver={handleVisibility}
            src={img}
          />
        </div>
        <Link to="/point-of-sale">
          <button className="BMore">Ordenar</button>
        </Link>
        <div className={visibility}>
          {description.map((item, index) => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    </>
  );
};
