import Link from 'next/link';

// Struktur data Platzi
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[]; // Platzi menggunakan array string untuk gambar
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white flex flex-col h-full">
      <div className="h-48 flex items-center justify-center mb-4 p-2">
        <img 
          src={product.images[0]} // Ambil gambar pertama dari array
          alt={product.title} 
          className="max-h-full max-w-full object-contain" 
        />
      </div>
      
      <div className="flex flex-col flex-grow">
        <h2 className="font-semibold text-sm h-12 overflow-hidden mb-2">
          {product.title}
        </h2>
        <p className="text-blue-600 font-bold mb-4">${product.price}</p>
        
        <Link href={`/product/${product.id}`} className="mt-auto">
          <button className="w-full bg-black text-white py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors">
            Product Detail
          </button>
        </Link>
      </div>
    </div>
  );
}