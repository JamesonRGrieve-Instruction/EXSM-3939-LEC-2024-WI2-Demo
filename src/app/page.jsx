'use client';
import React, { useState, createContext } from 'react';
import ProductTab from './ProductTab';
import CheckoutTab from './CheckoutTab';
import styles from './page.module.css';
const productData = {
  soda: [
    {
      name: 'Fanta',
      price: 1.99,
    },
    {
      name: 'Sprite',
      price: 2.99,
    },
    {
      name: 'Coca-Cola',
      price: 1.59,
    },
    {
      name: 'Gatorade',
      price: 2.49,
    },
    {
      name: 'Nestle Ice Tea',
      price: 0.99,
    },
    {
      name: 'Dr. Pepper',
      price: 1.75,
    },
  ],
  snacks: [
    {
      name: 'Lays',
      price: 2.25,
    },
    {
      name: 'Doritos',
      price: 2.15,
    },
    {
      name: 'Cheetos',
      price: 2.05,
    },
    {
      name: 'Kit Kat',
      price: 1.97,
    },
    {
      name: 'Coffee Crisp',
      price: 1.89,
    },
    {
      name: 'M&Ms',
      price: 0.75,
    },
  ],
  misc: [
    {
      name: 'Paper Towel Roll',
      price: 5.75,
    },
    {
      name: 'Pre-packaged Sandwich',
      price: 4.75,
    },
    {
      name: 'Lighter',
      price: 0.49,
    },
    {
      name: 'Magazine',
      price: 6.75,
    },
    {
      name: 'Newspaper',
      price: 2.75,
    },
  ],
};
export const CartContext = createContext();
export default function Home() {
  const [selectedTab, setSelectedTab] = useState('snacks');
  const [cart, setCart] = useState([]);

  return (
    <>
      <header>
        <nav>
          <ul className={styles.flex_wrap}>
            {[...Object.keys(productData), 'checkout'].map((category) => (
              <li key={category}>
                <button
                  onClick={() => {
                    setSelectedTab(category);
                  }}
                >
                  {category.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <CartContext.Provider value={{ data: cart, mutate: setCart }}>
          {selectedTab === 'checkout' ? <CheckoutTab /> : <ProductTab category={selectedTab} products={productData[selectedTab]} />}
        </CartContext.Provider>
      </main>
    </>
  );
}
