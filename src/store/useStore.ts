import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: number;
  title: string;
  price: number;
  images: string[];
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  user: any | null;
  addToCart: (product: any) => void;
  removeFromCart: (id: number) => void;
  setUser: (user: any) => void;
  logout: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      cart: [],
      user: null,
      addToCart: (product) => set((state) => {
        const existing = state.cart.find((item) => item.id === product.id);
        if (existing) {
          return {
            cart: state.cart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }),
      removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
      })),
      setUser: (user) => set({ user }),
      logout: () => set({ user: null, cart: [] }),
    }),
    { name: 'revoshop-storage' } // Otomatis simpan ke LocalStorage (Syarat Module 5)
  )
);