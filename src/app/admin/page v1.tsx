'use client';

import { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [newProduct, setNewProduct] = useState({ 
    title: '', 
    price: 0, 
    description: '', 
    categoryId: 1, 
    images: ["https://api.lorem.space/image/watch?w=640&h=480"] 
  });

  const user = useStore((state) => state.user);
  const router = useRouter();

  // Proteksi rute: Memastikan hanya user terautentikasi yang bisa mengakses dashboard
  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else {
      fetchProducts();
    }
  }, [user, router]);

  // Mengambil daftar produk dari API
  const fetchProducts = async () => {
    try {
      const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    } finally {
      setLoading(false);
    }
  };

  // Menangani penambahan produk baru dengan validasi field
  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.escuelajs.co/api/v1/products/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });

      if (res.ok) {
        alert('Success: Product added successfully');
        setNewProduct({ 
          title: '', 
          price: 0, 
          description: '', 
          categoryId: 1, 
          images: ["https://api.lorem.space/image/watch?w=640&h=480"] 
        });
        fetchProducts();
      } else {
        const errorData = await res.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (err) {
      alert('Network error while adding product');
    }
  };

  // Menghapus produk berdasarkan ID melalui API
  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      try {
        const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
          method: 'DELETE',
        });
        if (res.ok) {
          alert('Product deleted');
          setProducts(products.filter(p => p.id !== id));
        }
      } catch (err) {
        alert('Error deleting product');
      }
    }
  };

  // Menampilkan state loading jika data sedang diproses
  if (loading) return <div className="p-10 text-center font-medium">Loading Admin Dashboard...</div>;
  
  // Mencegah rendering konten jika user tidak terautentikasi
  if (!user) return null;

  return (
    <main className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8 text-red-600">Admin Dashboard</h1>

      {/* Form Section: Create Operation */}
      <section className="bg-white p-6 rounded-xl border shadow-sm mb-10">
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
        <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" placeholder="Product Title" className="border p-2 rounded" required 
            value={newProduct.title} onChange={(e) => setNewProduct({...newProduct, title: e.target.value})} 
          />
          <input 
            type="number" placeholder="Price" className="border p-2 rounded" required 
            value={newProduct.price || ''} onChange={(e) => setNewProduct({...newProduct, price: Number(e.target.value)})} 
          />
          <textarea 
            placeholder="Product Description" className="border p-2 rounded md:col-span-2" required 
            value={newProduct.description} onChange={(e) => setNewProduct({...newProduct, description: e.target.value})} 
          />
          <button type="submit" className="bg-green-600 text-white font-bold py-3 rounded md:col-span-2 hover:bg-green-700 transition">
            Save Product
          </button>
        </form>
      </section>

      {/* Table Section: Read and Delete Operations */}
      <section className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Title</th>
              <th className="p-4">Price</th>
              <th className="p-4 text-center">Actions</th>
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
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition"
                  >
                    Delete
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