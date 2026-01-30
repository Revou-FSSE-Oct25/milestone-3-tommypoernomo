import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetch data:", err));
  }, []);

  if (loading) return <div className="text-center p-10">Loading RevoShop...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">RevoShop Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}