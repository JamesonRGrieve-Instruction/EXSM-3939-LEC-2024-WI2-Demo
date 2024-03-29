import React from 'react';
import CartQuantity from './CartQuantity';
export default function ProductCard({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{`${product.quantity} at ${product.price} = ${product.quantity * product.price}`}</p>
      <CartQuantity category={product.category} product={product.name} />
    </div>
  );
}
