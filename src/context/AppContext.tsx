import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product, CartItem, User, FilterState } from '../types';

interface AppState {
  user: User | null;
  cart: CartItem[];
  filters: FilterState;
  isLoginModalOpen: boolean;
  isCartOpen: boolean;
}

type AppAction =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_FILTERS'; payload: Partial<FilterState> }
  | { type: 'TOGGLE_LOGIN_MODAL' }
  | { type: 'TOGGLE_CART' };

const initialState: AppState = {
  user: null,
  cart: [],
  filters: {
    minPrice: 0,
    maxPrice: 1000,
    sizes: [],
    colors: [],
    category: ''
  },
  isLoginModalOpen: false,
  isCartOpen: false
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(
        item => 
          item.product.id === action.payload.product.id && 
          item.selectedColor.name === action.payload.selectedColor.name &&
          item.selectedSize === action.payload.selectedSize
      );
      
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.product.id === action.payload.product.id &&
            item.selectedColor.name === action.payload.selectedColor.name &&
            item.selectedSize === action.payload.selectedSize
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      }
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((_, index) => index.toString() !== action.payload)
      };
    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item, index) =>
          index.toString() === action.payload.id
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        ).filter(item => item.quantity > 0)
      };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'SET_FILTERS':
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      };
    case 'TOGGLE_LOGIN_MODAL':
      return { ...state, isLoginModalOpen: !state.isLoginModalOpen };
    case 'TOGGLE_CART':
      return { ...state, isCartOpen: !state.isCartOpen };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}