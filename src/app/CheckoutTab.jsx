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
