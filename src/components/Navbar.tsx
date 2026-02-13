'use client';

import Link from 'next/link';
import { useStore } from '@/store/useStore';

export default function Navbar() {
  // Mengambil state cart, user, dan fungsi logout dari Zustand store
  const cart = useStore((state) => state.cart);
  const user = useStore((state) => state.user);
  const logout = useStore((state) => state.logout);

  // Menghitung total jumlah barang di keranjang
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Sisi Kiri: Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tighter">
          Revo<span className="text-black">Shop</span>
        </Link>

        {/* Sisi Kanan: Navigasi & User Info */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:text-blue-600 transition">
            FAQ
          </Link>
          <Link href="/admin" className="text-sm font-medium text-red-500 hover:text-red-700 transition">
            Admin
          </Link>

          {/* Ikon Keranjang dengan Badge Angka */}
          <Link href="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Logika Tampilan Login/Logout */}
          <div className="border-l pl-6 flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-700 max-w-[100px] truncate">
                  {user.email}
                </span>
                <button 
                  onClick={() => {
                    logout();
                    alert('Anda telah logout');
                  }}
                  className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-red-50 text-red-500 border border-red-100 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                href="/login" 
                className="text-sm font-bold text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}