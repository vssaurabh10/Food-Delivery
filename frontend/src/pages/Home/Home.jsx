import { useState } from "react";
import AppDownload from "../../components/AppDownload/AppDownload.jsx";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.jsx";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay.jsx";
import Header from "../../components/Header/Header.jsx";
import "./Home.css";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
