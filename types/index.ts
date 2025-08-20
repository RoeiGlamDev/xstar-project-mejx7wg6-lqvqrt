import { ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // Consider using a hashed password in production
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  orderDate: Date;
}

export interface ContextProps {
  user: User | null;
  cart: CartItem[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export interface PropsWithChildren {
  children: ReactNode;
}

export default {}; // Default export to avoid "no default export" error