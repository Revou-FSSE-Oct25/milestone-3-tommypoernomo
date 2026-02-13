'use client';
import { useStore } from '@/store/useStore';

export default function AddToCartBtn({ product }: { product: any }) {
  const addToCart = useStore((state) => state.addToCart);

  const handleAdd = () => {
    addToCart(product);
    alert(`${product.title} ditambahkan ke keranjang!`);
  };

  return (
    <button 
      onClick={handleAdd}
      className="bg-black text-white px-10 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all active:scale-95"
    >
      Add to Cart
    </button>
  );
}