import React from 'react';
import ProductCard from './ProductCard';
import styles from './page.module.css';

export default function ProductTab({ category, products }) {
  return (
    <div className={styles.flex_wrap}>
      {products.map((product) => (
        <ProductCard key={product.name} category={category} product={product} />
      ))}
    </div>
  );
}
