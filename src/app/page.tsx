import ProductCard from '../components/ProductCard';

export default async function HomePage() {
  // Fetching data langsung di Server Component
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">RevoShop Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}