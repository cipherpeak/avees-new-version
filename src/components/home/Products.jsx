import React from 'react';
import products from "../../assets/productsBanner/BANNER 1640X923.23.jpg";

function Products() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden">
      <img 
        src={products} 
        alt="Products Banner" 
        className="object-cover w-full h-full"
        loading="lazy" 
      />
    </section>
  );
}

export default Products;