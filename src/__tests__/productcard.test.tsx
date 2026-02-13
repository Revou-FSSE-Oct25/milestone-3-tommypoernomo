import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

const mockProduct = {
  id: 1,
  title: 'Classic Watch',
  price: 50,
  description: 'A beautiful watch',
  images: ['https://test.com/image.jpg']
};

describe('ProductCard Component', () => {
  it('should render the product title and price', () => {
    render(<ProductCard product={mockProduct} />);
    
    const title = screen.getByText(/Classic Watch/i);
    const price = screen.getByText(/\$50/i);
    
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it('should have a link to the product detail page', () => {
    render(<ProductCard product={mockProduct} />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/product/1');
  });
});