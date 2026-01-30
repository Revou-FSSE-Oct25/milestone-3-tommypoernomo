import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
      <h2 className="font-semibold text-sm h-10 overflow-hidden">{product.title}</h2>
      <p className="text-blue-500 font-bold mt-2">${product.price}</p>
      
      {/* Routing dinamis ke halaman detail */}
      <Link href={`/product/${product.id}`}>
        <button className="w-full mt-4 bg-gray-800 text-white py-2 rounded text-sm">
          View Detail
        </button>
      </Link>
    </div>
  );
}