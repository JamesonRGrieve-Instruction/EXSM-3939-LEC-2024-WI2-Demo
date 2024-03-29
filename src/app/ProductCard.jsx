import React from 'react';
import CartQuantity from './CartQuantity';
export default function ProductCard({ category, product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <CartQuantity category={category} product={product.name} />
    </div>
  );
}
