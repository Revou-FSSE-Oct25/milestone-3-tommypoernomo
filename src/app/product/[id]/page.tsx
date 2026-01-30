// Perhatikan penambahan Promise pada tipe params
export default async function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // Kita harus me-await params-nya dulu di Next.js 15
  const { id } = await params;

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    
    if (!res.ok) {
      throw new Error("Gagal mengambil data");
    }

    const product = await res.json();

    return (
      <main className="container mx-auto p-10">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <img src={product.image} alt={product.title} className="w-64 my-4" />
        <p>{product.description}</p>
        <p className="text-xl font-bold mt-4">${product.price}</p>
      </main>
    );
  } catch (error) {
    console.error(error);
    return <div className="p-10 text-center">Terjadi kesalahan koneksi saat memuat produk.</div>;
  }
}