'use client';

import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Skeleton from '../components/Skeleton';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Implementasi client-side data fetching untuk katalog produk
    const fetchProducts = async () => {
      // Menunggu 2 detik agar Skeleton terlihat
      await new Promise((resolve) => setTimeout(resolve, 2000));
      try {
        const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=20');
        if (!res.ok) throw new Error();
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  //if (loading) return <div className="p-20 text-center font-semibold text-xl">Loading products...</div>;
  if (loading) {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">RevoShop Collections</h1>
      <Skeleton />
    </main>
  );
}
  if (error) return <div className="p-20 text-center text-red-500">Failed to load product data.</div>;

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        RevoShop <span className="text-blue-600">Collections</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}