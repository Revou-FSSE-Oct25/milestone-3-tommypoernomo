'use client';

import { useState, useEffect } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { useAppStore, StoreProvider } from '@/context/StoreProvider';
import { useRouter } from 'next/navigation';

function AdminContent() {
  const { products, loading, refetch } = useProducts();
  const { user } = useAppStore();
  const router = useRouter();

  const [newProduct, setNewProduct] = useState({ title: '', price: 0, description: '', categoryId: 1, images: ["https://api.lorem.space/image/watch?w=640&h=480"] });
  const [editingProduct, setEditingProduct] = useState<any>(null); // State untuk Edit

  useEffect(() => {
    if (!user || user.email !== 'john@mail.com') {
      router.push('/login');
    }
  }, [user, router]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/products', { method: 'POST', body: JSON.stringify(newProduct) });
    if (res.ok) { alert('Produk ditambahkan!'); setNewProduct({ title: '', price: 0, description: '', categoryId: 1, images: ["https://api.lorem.space/image/watch?w=640&h=480"] }); refetch(); }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/products/${editingProduct.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingProduct),
    });
    if (res.ok) { alert('Produk diupdate!'); setEditingProduct(null); refetch(); }
  };

  const handleDelete = async (id: number) => {
    if (confirm('Hapus produk ini?')) {
      await fetch(`/api/products/${id}`, { method: 'DELETE' });
      refetch();
    }
  };

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!user) return null;

  return (
    <main className="container mx-auto p-10">
      <h1 className="text-3xl font-bold text-red-600 mb-10">Admin Dashboard</h1>

      {/* FORM TAMBAH */}
      <form onSubmit={handleAdd} className="bg-white p-6 rounded-xl border mb-10 grid gap-4 shadow-sm">
        <h2 className="font-bold">Tambah Produk</h2>
        <input type="text" placeholder="Title" className="border p-2 rounded" value={newProduct.title} onChange={e => setNewProduct({...newProduct, title: e.target.value})} required />
        <input type="number" placeholder="Price" className="border p-2 rounded" value={newProduct.price || ''} onChange={e => setNewProduct({...newProduct, price: Number(e.target.value)})} required />
        <button className="bg-green-600 text-white p-3 rounded font-bold hover:bg-green-700">Simpan Produk</button>
      </form>

      {/* MODAL EDIT */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl max-w-lg w-full shadow-2xl">
            <h2 className="text-xl font-bold mb-4 text-blue-600">Edit Produk</h2>
            <form onSubmit={handleUpdate} className="flex flex-col gap-4">
              <input className="border p-3 rounded-lg" value={editingProduct.title} onChange={e => setEditingProduct({...editingProduct, title: e.target.value})} />
              <input className="border p-3 rounded-lg" type="number" value={editingProduct.price} onChange={e => setEditingProduct({...editingProduct, price: Number(e.target.value)})} />
              <div className="flex gap-3">
                <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg flex-1 font-bold">Update</button>
                <button type="button" onClick={() => setEditingProduct(null)} className="bg-gray-200 p-3 rounded-lg flex-1">Batal</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TABEL PRODUK */}
      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 uppercase text-xs font-bold text-gray-500">
            <tr><th className="p-5">Produk</th><th className="p-5 text-center">Aksi</th></tr>
          </thead>
          <tbody>
            {products.slice(0, 10).map((p: any) => (
              <tr key={p.id} className="border-t hover:bg-gray-50 transition">
                <td className="p-5 font-medium">{p.title}</td>
                <td className="p-5 text-center flex justify-center gap-4">
                  <button onClick={() => setEditingProduct(p)} className="text-blue-600 font-bold hover:underline">Edit</button>
                  <button onClick={() => handleDelete(p.id)} className="text-red-500 font-bold hover:underline">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default function AdminPage() {
  return <StoreProvider><AdminContent /></StoreProvider>;
}