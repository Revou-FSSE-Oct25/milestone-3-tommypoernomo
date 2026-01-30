# RevoShop - Milestone 3 (E-Commerce Platform)

RevoShop adalah aplikasi e-commerce modern yang dibangun menggunakan **Next.js 15+** dengan **App Router** dan **TypeScript**. Proyek ini mendemonstrasikan implementasi navigasi dinamis, pengambilan data di sisi server (Server Components), dan desain responsif.

## 🚀 Live Demo
under construction

## 📋 Fitur Utama (Module 4)
- **Product Listing**: Menampilkan katalog produk secara dinamis menggunakan data dari FakeStoreAPI.
- **Dynamic Routing**: Sistem navigasi detail produk menggunakan rute dinamis `[id]`.
- **Server Components**: Implementasi data fetching yang efisien di sisi server untuk performa dan SEO yang lebih baik.
- **Responsive Navbar & Layout**: Navigasi yang konsisten di seluruh halaman menggunakan sistem Layout Next.js.
- **Static Pages**: Halaman FAQ yang di-generate secara statis (SSG).

## 🛠️ Teknologi yang Digunakan
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Data Source**: [FakeStoreAPI](https://fakestoreapi.com/)
- **Deployment**: rencananya di [Vercel](https://vercel.com/)

## 📖 Cara Menjalankan Secara Lokal

1. Clone repository ini:
   ```bash
   git clone [https://github.com/Revou-FSSE-Oct25/milestone-3-tommypoernomo.git](https://github.com/Revou-FSSE-Oct25/milestone-3-tommypoernomo.git)

    Masuk ke direktori proyek:
    Bash

    cd milestone-3-tommypoernomo

    Instal dependensi:
    Bash

    npm install

    Jalankan server pengembangan:
    Bash

    npm run dev

    Buka http://localhost:3000 di browser Anda.

📂 Struktur Folder Utama

    src/app/: Berisi rute aplikasi (pages, layouts, dan logic routing).

    src/app/product/[id]/: Implementasi rute dinamis untuk detail produk.

    src/components/: Komponen UI yang dapat digunakan kembali (Navbar, ProductCard).

Disusun oleh: Tommy Poernomo