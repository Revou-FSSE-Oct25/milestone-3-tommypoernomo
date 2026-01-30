import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tighter">
          Revo<span className="text-black">Shop</span>
        </Link>

        {/* Menu Navigasi */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:text-blue-600 transition">
            FAQ
          </Link>
          
          {/* Ikon Keranjang (Hanya Visual untuk Milestone ini) */}
          <div className="relative cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="Status16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}