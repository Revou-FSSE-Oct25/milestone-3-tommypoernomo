'use client';

import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [newProduct, setNewProduct] = useState({ title: '', price: 0, description: '', categoryId: 1, images: ["https://placeimg.com/640/480/any"] });

  // 1. READ (Get all products)
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10');
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  };

  // 2. CREATE (Add new product)
  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('https://api.escuelajs.co/api/v1/products/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    });

    if (res.ok) {
      alert('Produk berhasil ditambahkan!');
      fetchProducts(); // Refresh list
    }
  };

  // 3. DELETE (Remove product)
  const handleDelete = async (id: number) => {
    if (confirm('Yakin ingin menghapus produk ini?')) {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        alert('Produk dihapus!');
        setProducts(products.filter(p => p.id !== id));
      }
    }
  };

  if (loading) return <div className="p-10 text-center">Memuat Dashboard Admin...</div>;

  return (
    <main className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8 text-red-600">Admin Dashboard (CRUD)</h1>

      {/* FORM TAMBAH PRODUK */}
      <section className="bg-white p-6 rounded-xl border shadow-sm mb-10">
        <h2 className="text-xl font-bold mb-4">Tambah Produk Baru</h2>
        <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" placeholder="Nama Produk" className="border p-2 rounded" required
            onChange={(e) => setNewProduct({...newProduct, title: e.target.value})}
          />
          <input 
            type="number" placeholder="Harga" className="border p-2 rounded" required
            onChange={(e) => setNewProduct({...newProduct, price: Number(e.target.value)})}
          />
          <button type="submit" className="bg-green-600 text-white font-bold py-2 rounded md:col-span-2 hover:bg-green-700">
            Simpan Produk
          </button>
        </form>
      </section>

      {/* TABEL DAFTAR PRODUK */}
      <section className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Nama Produk</th>
              <th className="p-4">Harga</th>
              <th className="p-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{product.id}</td>
                <td className="p-4 font-medium">{product.title}</td>
                <td className="p-4">${product.price}</td>
                <td className="p-4 text-center">
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}