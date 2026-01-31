import ProductCard from '../components/ProductCard';

export default async function HomePage() {
  // Gunakan API Platzi
  const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=20');
  
  if (!res.ok) return <div className="p-10 text-center">Gagal memuat katalog.</div>;
  
  const products = await res.json();

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 tracking-tight">
        RevoShop <span className="text-blue-600">Catalog</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}