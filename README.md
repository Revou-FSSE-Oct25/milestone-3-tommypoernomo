# RevoShop - Milestone 3 (E-Commerce Platform)

RevoShop adalah aplikasi e-commerce modern yang dibangun sebagai bagian dari tugas Milestone 3 di FSSE RevoU. Proyek ini mendemonstrasikan implementasi navigasi dinamis, penggunaan Server Components, dan integrasi API eksternal menggunakan **Next.js 15+**, **App Router**, dan **TypeScript**.

## 🚀 Live Demo
under construction

## 📋 Fitur Utama (Module 4)
- **Katalog Produk Dinamis**: Mengambil dan menampilkan daftar produk secara real-time dari Platzi Fake Store API.
- **Dynamic Routing**: Navigasi halaman detail produk menggunakan struktur rute dinamis `[id]`.
- **Server-Side Fetching**: Implementasi pengambilan data di sisi server untuk performa dan optimasi SEO yang lebih baik.
- **Layouting & Navigasi**: Penggunaan Shared Layout untuk Navbar yang konsisten di seluruh halaman aplikasi.
- **Desain Responsif**: Antarmuka yang adaptif untuk perangkat mobile dan desktop menggunakan Tailwind CSS.
- **Halaman FAQ**: Implementasi halaman statis sebagai bagian dari demonstrasi routing.

## 🛠️ Teknologi yang Digunakan
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Data Source**: [Platzi Fake Store API](https://fakeapi.platzi.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📖 Cara Menjalankan Secara Lokal

1. Clone repository ini:
   ```bash
   git clone [https://github.com/Revou-FSSE-Oct25/milestone-3-tommypoernomo.git](https://github.com/Revou-FSSE-Oct25/milestone-3-tommypoernomo.git)
2. Masuk ke direktori proyek:
    
    Bash

    cd milestone-3-tommypoernomo

3. Instal dependensi:
    Bash

    npm install

4. Jalankan server pengembangan:
    Bash

    npm run dev

5. Buka http://localhost:3000 di browser Anda.

📂 Struktur Folder Utama

    src/app/: Lokasi utama rute aplikasi (pages, layouts).

    src/app/product/[id]/: Rute dinamis untuk menampilkan detail spesifik produk.

    src/app/faq/: Halaman statis untuk Frequently Asked Questions.

    src/components/: Berisi komponen UI yang reusable seperti Navbar dan ProductCard.

Disusun oleh: Tommy Poernomo, S.ST