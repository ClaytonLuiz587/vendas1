import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';

export function Cart() {
  const { state, dispatch } = useApp();

  if (!state.isCartOpen) return null;

  const total = state.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!state.user) {
      dispatch({ type: 'TOGGLE_LOGIN_MODAL' });
      return;
    }
    // Simular checkout
    alert('Redirecionando para o checkout...');
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => dispatch({ type: 'TOGGLE_CART' })} />
      <div className="fixed right-0 top-0 h-full w-96 bg-white z-50 shadow-xl transform translate-x-0 transition-transform">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Carrinho ({state.cart.length})
          </h2>
          <button
            onClick={() => dispatch({ type: 'TOGGLE_CART' })}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {state.cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-12 w-12 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">Seu carrinho está vazio</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.cart.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.product.name}</h3>
                    <p className="text-xs text-gray-600">
                      {item.selectedColor.name} • Tamanho {item.selectedSize}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => dispatch({
                            type: 'UPDATE_CART_QUANTITY',
                            payload: { id: index.toString(), quantity: item.quantity - 1 }
                          })}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => dispatch({
                            type: 'UPDATE_CART_QUANTITY',
                            payload: { id: index.toString(), quantity: item.quantity + 1 }
                          })}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold">R$ {item.product.price}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: index.toString() })}
                    className="p-1 text-red-500 hover:bg-red-50 rounded"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {state.cart.length > 0 && (
          <div className="border-t p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold">Total:</span>
              <span className="text-xl font-bold">R$ {total}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </>
  );
}