import React from "react";
import "./App.css";
import Cards from "./components/Product/Cards";
import Pdata from "./components/Product/Pdata";
import Navbar from "./components/Navbar/Navbar.jsx";
import Filter from "./components/Filter/Filter.jsx";
import Sort from "./components/Sort/Sort.jsx";

const App = () => {
  return (
    <>
      <Navbar />
	    <Sort />
      <div className="outer-wrapper">
        {/* <div className="filter-left-content">
            <Filter />
        </div> */}
        
            <Cards />
      </div>
    </>
  );
};

export default App;
