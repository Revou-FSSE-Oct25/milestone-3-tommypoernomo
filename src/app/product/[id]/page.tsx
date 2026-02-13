import AddToCartBtn from "@/components/AddToCartBtn";

// Feedback TL: Membuat SSR eksplisit
export const dynamic = 'force-dynamic';

export default async function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;

  try {
    // Feedback TL: Menggunakan cache 'no-store' untuk memastikan SSR murni
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        cache: 'no-store'
    });
    
    if (!res.ok) throw new Error("Produk tidak ditemukan");

    const product = await res.json();

    return (
      <main className="container mx-auto p-10">
        <div className="flex flex-col md:flex-row gap-12 items-center bg-white p-8 rounded-2xl shadow-sm border">
          <div className="w-full md:w-1/2 flex justify-center">
            {/* Menampilkan gambar utama produk */}
            <img 
              src={product.images[0]} 
              alt={product.title} 
              className="max-h-96 rounded-lg object-cover" 
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">{product.title}</h1>
            <p className="text-gray-500 mb-6 text-lg">{product.description}</p>
            <p className="text-3xl font-bold text-blue-600 mb-8">${product.price}</p>
            
            {/* Memanggil Client Component di sini sehingga fungsi Klik (State Management) bisa berjalan 
            */}
            <AddToCartBtn product={product} />
            
          </div>
        </div>
      </main>
    );
  } catch (error) {
    return (
      <div className="p-20 text-center">
        <h2 className="text-xl font-semibold text-red-500">Ops! Terjadi kesalahan koneksi.</h2>
        <p className="text-gray-500">Pastikan ID produk benar atau coba lagi nanti.</p>
      </div>
    );
  }
}