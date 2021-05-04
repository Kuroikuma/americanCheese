import { React, useEffect, useState } from "react";
import HomeView from "./home.view";

import categories from "../../../../assets/image/pizza1.jpg";
import categories2 from "../../../../assets/image/pizza2.jpg";
import categories3 from "../../../../assets/image/pizza3.jpg";

const data = [];

data.push({
  categories: categories,
  categories2: categories2,
  categories3: categories3,
});

function Home() {
  return <HomeView data={data} />;
}

export default Home;
