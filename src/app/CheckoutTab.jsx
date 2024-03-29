import React, { useContext } from 'react';
import { CartContext } from './page';
export default function CheckoutTab() {
  const cart = useContext(CartContext);
  return cart.data.map((product) => (
    <p key={product.name}>
      {product.name} {product.quantity}
    </p>
  ));
}
