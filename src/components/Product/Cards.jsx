import React, { useState } from "react";
import Images from "../Images";
import "../../helper.css";
import Pdata from "./Pdata";
import style from "./Cards.css";
import ProductItem from "./ProductItem";
import Filter from "../Filter/Filter";
// import $ from 'jquery';

// $('.slider').slick({
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	autoplay: true,

// 	fade: true,
// 	cssEase: 'linear'
//   });

//   function slickPause() {
// 	  $('.slider').slick('slickPause');
//   }

//   slickPause();

//   $('.slider').mouseover(function() {
// 	  $('.slider').slick('slickPlay')
//   });
//   $('.slider').mouseout(function() {
// 	  slickPause();
//   });

const Cards = () => {

    const [product, setProduct] = useState(Pdata);

    // const filterResult = (catItem) => {
    //   const result = Pdata.filter((currData) => {
    //       return currData.category === catItem;
    //   })
    //   console.log(result);
    //   setProduct(result);
    // }

    const filterResult = (catItem) => {
      const result = Pdata.filter((currData) => {
          console.log(currData);
          if(catItem === currData.category) {
              return currData.category === catItem;
          } else if(catItem === currData.pname) {
              return currData.pname === catItem;
          }
      })
      console.log(result);
      setProduct(result);
  }

  return (

    <>
      

        {/* FILTERING IS DEFINED */}
        <Filter filterResult={filterResult}/>

        {/* PRODUCT CARD IS DEFINED HERE */}
        <ProductItem product={product}/>
      
    </>
    
  );
};

export default Cards;
