import React, { useContext } from 'react';
import { CartContext } from './page';
export default function CartQuantity({ category, product, price }) {
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
              price: previous.find((item) => item.name === product)?.price ?? price,
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
                  price: previous.find((item) => item.name === product)?.price ?? price,
                },
              ])
            }
          ></input>
          <button
            onClick={() =>
              products.mutate((previous) => {
                const modifiedItem =
                  (previous.find((item) => item.name === product)?.quantity ?? 0) <= 1
                    ? []
                    : [
                        {
                          category: category,
                          name: product,
                          quantity: previous.find((item) => item.name === product).quantity - 1,
                          price: previous.find((item) => item.name === product)?.price ?? price,
                        },
                      ];
                return [...previous.filter((item) => item.name !== product), ...modifiedItem];
              })
            }
          >
            -
          </button>
        </>
      )}
    </div>
  );
}
