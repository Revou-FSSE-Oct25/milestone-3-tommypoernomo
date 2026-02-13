'use client';
import { useState } from 'react';
import { useStore } from '@/store/useStore';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('john@mail.com'); // Default user Platzi API
  const [password, setPassword] = useState('changeme');
  const setUser = useStore((state) => state.setUser);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        // Simpan token atau data user ke global state
        setUser({ email, token: data.access_token });
        alert('Login Berhasil!');
        router.push('/'); // Pindah ke home
      } else {
        alert('Login Gagal, cek email/password');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-96 border">
        <h1 className="text-2xl font-bold mb-6 text-center">Login RevoShop</h1>
        <input 
          type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded"
          value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" placeholder="Password" className="w-full p-2 mb-6 border rounded"
          value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}