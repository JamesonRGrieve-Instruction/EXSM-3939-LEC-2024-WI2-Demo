import React from 'react';
import ProductCard from './ProductCard';
export default function ProductTab({ category, products }) {
  return products.map((product) => <ProductCard key={product.name} category={category} product={product} />);
}
