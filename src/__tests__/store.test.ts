import { useStore } from '../store/useStore';

describe('Zustand Store: Cart Logic', () => {
  it('should add an item to the cart', () => {
    const product = { id: 1, title: 'Test Product', price: 100, images: ['test.jpg'] };
    
    // Memanggil fungsi addToCart
    useStore.getState().addToCart(product);
    
    const cart = useStore.getState().cart;
    expect(cart.length).toBe(1);
    expect(cart[0].title).toBe('Test Product');
  });

  it('should remove an item from the cart', () => {
    const productId = 1;
    
    // Memanggil fungsi removeFromCart
    useStore.getState().removeFromCart(productId);
    
    const cart = useStore.getState().cart;
    expect(cart.length).toBe(0);
  });
});