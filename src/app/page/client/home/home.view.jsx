import "./home.style.css";
import Layout from "../../../components/theme/layout";
import backgroundPizza from "../../../../assets/image/backgroundPizza.jpg";
import categories from "../../../../assets/image/pizza1.jpg";
import categories2 from "../../../../assets/image/pizza2.jpg";
import categories3 from "../../../../assets/image/pizza3.jpg";

const Home = () => {
  return (
    <>
      <Layout />

      <div className={"container"}>
        <div className={"title"}>
          <h1 className={"h1"}>AMERICAN</h1>
          <h1 className={"h1"}>CHEESE</h1>
          <h1 className={"h1"}>PIZZA</h1>
        </div>
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />
            <div className={"slide first"}>
              <img src={backgroundPizza} />
            </div>
            <div className={"slide"}>
              <img src={categories2} />
            </div>
            <div className={"slide"}>
              <img src={categories} />
            </div>
            <div className={"slide"}>
              <img src={categories2} />
            </div>
            <div className="navigation-auto">
              <div className={"auto-btn1"}></div>
              <div className={"auto-btn2"}></div>
              <div className={"auto-btn3"}></div>
              <div className={"auto-btn4"}></div>
            </div>
          </div>
          <div className="navigation-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
            <label htmlFor="radio4" className="manual-btn"></label>
          </div>
        </div>

        <div>
          <img className={"img"} src={categories} />
          <img className={"img2"} src={categories2} />
          <img className={"img3"} src={categories} />
        </div>
        <div className={"footer"}>
          <h2>Derechos reservados 2021.</h2>
        </div>
      </div>
    </>
  );
};
export default Home;
