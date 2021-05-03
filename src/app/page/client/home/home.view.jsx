import "./home.style.css";
import Layout from "../../../components/shared/theme/layout";
import Slider from "../../../components/shared/slider/slider";

const HomeView = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((data) => (
        <div className={"containerHome"}>
          <Layout />
          <div className={"title"}>
            <h1 className={"h1"}>AMERICAN</h1>
            <h1 className={"h1"}>CHEESE</h1>
            <h1 className={"h1"}>PIZZA</h1>
          </div>
          <div className="sliderHome">
            <Slider />
          </div>
          <div>
            <img className={"img1"} src={data.categories} />
            <img className={"img2"} src={data.categories2} />
            <img className={"img3"} src={data.categories} />
          </div>
          <div className={"footer"}>
            <h2>Derechos reservados 2021.</h2>
          </div>
        </div>
      ))}
    </>
  );
};
export default HomeView;
