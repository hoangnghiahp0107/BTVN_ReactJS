import React, { useState } from "react";
import data from "./data.json";
import ProductDetails from "./ProductDetails";
import ProductItem from "./ProductItem";

function Shoeshop() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleGetProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="container">
      <div className="row ">
      <h1 className="text-center" style={{fontWeight:"300"}}>Shoe shop</h1>
        {data.map((product) => {
          return (
            <div key={product.id} className="col-sm-4 my-2">
              <ProductItem
                product={product}
                products={data}
                onSelectProduct={handleGetProduct}
              />
            </div>
          );
        })}
      </div>
      <ProductDetails
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default Shoeshop;
