import React from 'react';
import CartQuantity from './CartQuantity';
import styles from './page.module.css';

export default function ProductCard({ category, product }) {
  return (
    <div className={styles.product_card}>
      <h2>{product.name}</h2>
      <CartQuantity category={category} product={product.name} price={product.price} />
    </div>
  );
}
