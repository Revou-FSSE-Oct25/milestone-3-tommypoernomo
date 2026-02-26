'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useStore } from '@/store/useStore';

const StoreContext = createContext<ReturnType<typeof useStore> | null>(null);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const store = useStore();

  // Memastikan data localStorage sudah terbaca di sisi client
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Selama proses sinkronisasi (hydration), jangan render apapun untuk mencegah mismatch
  if (!isHydrated) {
    return null; 
  }

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};

// Hook kustom untuk mempermudah pemanggilan store di komponen lain
export const useAppStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useAppStore must be used within a StoreProvider');
  }
  return context;
};