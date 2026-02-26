import AddToCartBtn from '@/components/AddToCartBtn';
import Link from 'next/link';

// Gunakan async params untuk kompatibilitas Next.js terbaru
export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
  // 1. Resolve params (mengantisipasi perubahan di Next.js 15+)
  const resolvedParams = await params;
  const { id } = resolvedParams;

  // 2. Fetch data dengan ISR (revalidate) sesuai permintaan TL
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    next: { revalidate: 3600 } // ISR 1 jam
  });
  
  // 3. Cek jika response tidak oke
  if (!res.ok) {
    return (
      <div className="container mx-auto p-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Product Not Found</h2>
        <p className="text-gray-500 mb-6">Maaf, produk dengan ID #{id} tidak ditemukan atau telah dihapus.</p>
        <Link href="/" className="text-blue-600 underline">Kembali ke Beranda</Link>
      </div>
    );
  }

  const product = await res.json();

  return (
    <main className="container mx-auto p-6 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Gallery Image */}
        <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-inner">
          <img 
            src={product.images[0]} 
            alt={product.title} 
            className="w-full h-auto object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <nav className="text-sm text-gray-500 mb-4 uppercase tracking-widest">
            Category ID: {product.category?.id || product.categoryId}
          </nav>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {product.title}
          </h1>
          <p className="text-3xl font-bold text-blue-600 mb-8">
            ${product.price}
          </p>
          <div className="prose prose-blue text-gray-600 mb-10">
            <h3 className="text-lg font-semibold text-black mb-2">Description</h3>
            <p className="leading-relaxed">{product.description}</p>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <AddToCartBtn product={product} />
          </div>
        </div>
      </div>
    </main>
  );
}