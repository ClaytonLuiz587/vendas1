import React from 'react';
import { ShoppingBag, User, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';

export function Header() {
  const { state, dispatch } = useApp();

  const cartItemsCount = state.cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-black">NIKE</h1>
            </div>
            <nav className="hidden md:block ml-10">
              <div className="flex space-x-8">
                <a href="#" className="text-gray-900 hover:text-orange-500 transition-colors px-3 py-2 text-sm font-medium">
                  Novidades
                </a>
                <a href="#" className="text-gray-900 hover:text-orange-500 transition-colors px-3 py-2 text-sm font-medium">
                  Homem
                </a>
                <a href="#" className="text-gray-900 hover:text-orange-500 transition-colors px-3 py-2 text-sm font-medium">
                  Mulher
                </a>
                <a href="#" className="text-gray-900 hover:text-orange-500 transition-colors px-3 py-2 text-sm font-medium">
                  Kids
                </a>
              </div>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="bg-gray-100 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-64"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <button
              onClick={() => dispatch({ type: 'TOGGLE_LOGIN_MODAL' })}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <User className="h-6 w-6" />
            </button>
            
            <button
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors relative"
            >
              <ShoppingBag className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}