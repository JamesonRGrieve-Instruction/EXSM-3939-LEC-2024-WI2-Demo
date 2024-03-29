import React, { useContext } from 'react';
import { CartContext } from './page';
import CheckoutRow from './CheckoutRow';
export default function CheckoutTab() {
  const cart = useContext(CartContext);
  return (
    <>
      {cart.data.map((product) => (
        <CheckoutRow key={product.name} product={product} />
      ))}
      <p>${Math.round(cart.data.map((item) => item.quantity * item.price).reduce((a, b) => a + b, 0) * 100) / 100}</p>
      <button
        onClick={() => {
          cart.mutate([]);
        }}
      >
        Checkout
      </button>
    </>
  );
}
