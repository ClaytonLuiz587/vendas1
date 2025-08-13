import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useApp();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState('');
  const [showSizes, setShowSizes] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowSizes(true);
      return;
    }

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        product,
        quantity: 1,
        selectedColor,
        selectedSize
      }
    });

    setShowSizes(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </div>
        )}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-800"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center gap-1 mb-3">
          {product.colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`w-6 h-6 rounded-full border-2 transition-all ${
                selectedColor.name === color.name
                  ? 'border-orange-500 ring-2 ring-orange-200'
                  : 'border-gray-300'
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>

        {showSizes && (
          <div className="mb-3">
            <p className="text-sm font-medium mb-2">Selecione o tamanho:</p>
            <div className="grid grid-cols-4 gap-1">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`p-1 text-xs rounded border transition-colors ${
                    selectedSize === size
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">
              R$ {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                R$ {product.originalPrice}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            {!selectedSize ? 'Escolher Tamanho' : 'Adicionar'}
          </button>
        </div>
      </div>
    </div>
  );
}