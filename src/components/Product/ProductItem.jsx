import React from "react";

const ProductItem = ({product}) => {
    return(
        <>
            <div className="container left-content-border">
            <div className="right-content">
              {
                  product.map((value, index) => {
                        const { id, pname, product, category, imgscr, price } = value;
                      return(
                        <>
                            <div className="cards" key={index}>
                                <div className="card">
                                    <div className="slider">
                                      <img src={imgscr} alt="" className="product-image" />
                                      {/* <div className="slide"></div> */}
                                      {/* <div class="slide"></div>
                                      <div class="slide"></div> */}
                                    </div>
                                    <div className="card-info">
                                        <h3 className="card-category">{pname}</h3>
                                        <p className="card-title">{product}</p>
                                        <p className="card-price">{price}</p>
                                        <div className="wishlist-wrapper">
                                            <button className="wishlist"> Add to bag </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                      )
                  })
              }
            </div>
        </div>
        </>
    )
}

export default ProductItem;