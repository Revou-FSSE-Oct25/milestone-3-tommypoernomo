'use client';

import { useStore } from '@/store/useStore';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart } = useStore();

  // Menghitung total harga seluruh isi keranjang
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Keranjang Anda Kosong</h1>
        <Link href="/" className="text-blue-600 underline">Kembali belanja</Link>
      </div>
    );
  }

  return (
    <main className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Daftar Barang */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-6 bg-white p-4 rounded-xl border shadow-sm">
              <img src={item.images[0]} alt={item.title} className="w-24 h-24 object-cover rounded-md" />
              <div className="flex-1">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm">Jumlah: {item.quantity}</p>
                <p className="text-blue-600 font-bold">${item.price * item.quantity}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>

        {/* Ringkasan Belanja */}
        <div className="bg-white p-6 rounded-xl border shadow-sm h-fit">
          <h2 className="text-xl font-bold mb-4">Ringkasan</h2>
          <div className="flex justify-between mb-2">
            <span>Total Barang</span>
            <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
          </div>
          <div className="flex justify-between text-xl font-bold border-t pt-4 mt-4">
            <span>Total Harga</span>
            <span className="text-blue-600">${totalPrice}</span>
          </div>
          <button 
            onClick={() => alert('Fitur Checkout akan segera hadir!')}
            className="w-full bg-blue-600 text-white mt-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition"
          >
            Checkout Sekarang
          </button>
        </div>
      </div>
    </main>
  );
}