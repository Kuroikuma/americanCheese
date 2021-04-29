import React from "react";
import SideBarView from "./side-bar.view";

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  goHome = () => {};

  goLogin = () => {};

  render() {
    return <SideBarView goHome={this.goHome} />;
  }
}

export default SideBar;
