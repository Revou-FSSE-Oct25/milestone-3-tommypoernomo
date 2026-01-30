// Halaman Detail Produk
export default function ProductDetail({ product, error }) {
  if (error) return <div className="text-center p-10">Produk tidak ditemukan!</div>;

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img src={product.image} alt={product.title} className="w-full md:w-1/3 object-contain h-80" />
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <p className="text-xl font-semibold text-blue-600 mb-6">${product.price}</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// Implementasi SSR sesuai Brief
export async function getServerSideProps(context) {
  const { id } = context.params;
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();

    if (!product) {
      return { notFound: true };
    }

    return { props: { product } };
  } catch (err) {
    return { props: { error: true } };
  }
}