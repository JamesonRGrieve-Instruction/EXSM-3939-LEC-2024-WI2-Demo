import React, { useContext } from 'react';
import { CartContext } from './page';
export default function CartQuantity({ category, product }) {
  const products = useContext(CartContext);
  return (
    <div>
      <button
        onClick={() =>
          products.mutate((previous) => [
            ...previous.filter((item) => item.name !== product),
            {
              category: category,
              name: product,
              quantity: (previous.find((item) => item.name === product)?.quantity ?? 0) + 1,
            },
          ])
        }
      >
        +
      </button>
      {products.data.find((item) => item.name === product) && (
        <>
          <input
            type='number'
            value={products.data.find((item) => item.name === product).quantity}
            onChange={(event) =>
              products.mutate((previous) => [
                ...previous.filter((item) => item.name !== product),
                {
                  category: category,
                  name: product,
                  quantity: event.target.value,
                },
              ])
            }
          ></input>
          <button
            onClick={() =>
              products.mutate((previous) => [
                ...previous.filter((item) => item.name !== product),
                {
                  category: category,
                  name: product,
                  quantity: previous.find((item) => item.name === product).quantity - 1,
                },
              ])
            }
          >
            -
          </button>
        </>
      )}
    </div>
  );
}
