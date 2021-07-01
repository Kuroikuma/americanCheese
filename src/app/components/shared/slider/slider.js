import React from "react";

import RBCarousel from "react-bootstrap-carousel";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import house from "../../../../assets/image/house.jpg";
import Heroes from "../../../../assets/image/Heroes.jpg";
import banda from "../../../../assets/image/Banda.jpg";
import categories3 from "../../../../assets/image/pizza3.jpg";

const styles = { height: 200, width: "100%", objectFit: "cover" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;
const data = [];

data.push({
  img: house,
  label: "pizza grande",
});
data.push({
  img: Heroes,
  label: "avengers unidos",
});
data.push({
  img: banda,
  label: "puro tostones",
});
data.push({
  img: categories3,
  label: "rico eso",
});
class Slider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      autoplay: true,
    };
  }

  _onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  _visiableOnSelect = (active) => {
    console.log(`visiable onSelect active=${active}`);
  };
  _slideNext = () => {
    this.slider.current.slideNext();
  };
  _slidePrev = () => {
    this.slider.current.slidePrev();
  };
  _goToSlide = () => {
    this.slider.current.goToSlide(1);
  };
  _autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : icon_glass;
    rightIcon = rightIcon ? undefined : icon_music;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    return (
      <div style={{ paddingBottom: 20 }}>
        <div>
          <div span={12}>
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              defaultActiveIndex={0}
              leftIcon={this.state.leftIcon}
              rightIcon={this.state.rightIcon}
              onSelect={this._onSelect}
              ref={this.slider}
              version={4}
            >
              {data.map((data) => (
                <div
                  style={{
                    height: 341,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    src={data.img}
                  />
                  <div className="carousel-caption">{data.label}</div>
                </div>
              ))}
            </RBCarousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
