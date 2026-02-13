# RevoShop - Advanced E-Commerce Platform

RevoShop is a high-performance e-commerce web application built with **Next.js 15+**, **TypeScript**, and **Zustand**. This project demonstrates advanced implementation of the App Router architecture, global state management, authentication, and full CRUD operations.

## 🚀 Live Demo
under construction

## 🛠️ Tech Stack
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) (with Middleware Persist)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API Source**: [Platzi Fake Store API](https://fakeapi.platzi.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📋 Key Features

### 1. Advanced State Management
- **Persistent Cart**: Shopping cart data is managed via Zustand and persisted in `localStorage`.
- **Global User State**: Authentication status is accessible across the entire application.

### 2. Authentication & Security
- **Secure Login**: User authentication integrated with the external API.
- **Protected Routes**: Restricted access to the Admin Dashboard for unauthenticated users using route guarding.

### 3. Comprehensive CRUD Operations
- **Product Management**: A dedicated Admin Dashboard to View (Read), Create, and Delete products in real-time.
- **Dynamic Updates**: Immediate UI feedback and list synchronization after data modification.

### 4. Optimized Performance & UX
- **Explicit SSR**: Implementation of Server-Side Rendering for product detail pages to optimize SEO and data consistency.
- **Client-Side Fetching (CSR)**: Efficient data fetching for the product catalog using `useEffect`.
- **Skeleton Screens**: Enhanced user experience with shimmering skeleton loaders during data transitions.
- **Automated Loading States**: Utilizing Next.js `loading.tsx` for seamless page navigation.

## 📂 Project Structure
- `src/app/`: Core application routing and layouts.
- `src/app/admin/`: Protected admin dashboard with CRUD logic.
- `src/app/cart/`: Cart management and order summary.
- `src/app/product/[id]/`: Dynamic routing with Server-Side Rendering.
- `src/components/`: Reusable UI components (ProductCard, Skeleton, Navbar, etc.).
- `src/store/`: Global state definitions using Zustand.

## 📖 Local Development

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/Revou-FSSE-Oct25/milestone-3-yourusername.git](https://github.com/Revou-FSSE-Oct25/milestone-3-yourusername.git)

2. **Install dependencies**:
    ```Bash

    npm install

3. **Run the development server**:
    ```Bash

    npm run dev

4.  **Access the application**:
    Open http://localhost:3000 in your browser.

**Program**: Full Stack Software Engineering - RevoU
**Project Phase**: Milestone 3 (Advanced Next.js Implementation)