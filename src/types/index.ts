export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  colors: Color[];
  sizes: string[];
  description: string;
  features: string[];
}

export interface Color {
  name: string;
  hex: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: Color;
  selectedSize: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  cpf: string;
  address: {
    street: string;
    number: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export interface FilterState {
  minPrice: number;
  maxPrice: number;
  sizes: string[];
  colors: string[];
  category: string;
}