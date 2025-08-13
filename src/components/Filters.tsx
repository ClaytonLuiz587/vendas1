import React from 'react';
import { Filter } from 'lucide-react';
import { useApp } from '../context/AppContext';

export function Filters() {
  const { state, dispatch } = useApp();
  const { filters } = state;

  const sizes = ['37', '38', '39', '40', '41', '42', '43', '44', '45'];
  const colors = [
    { name: 'Preto', hex: '#000000' },
    { name: 'Branco', hex: '#FFFFFF' },
    { name: 'Cinza', hex: '#808080' },
    { name: 'Azul', hex: '#0066CC' },
    { name: 'Vermelho', hex: '#CC0000' },
    { name: 'Verde', hex: '#00CC66' },
    { name: 'Laranja', hex: '#FF6900' },
    { name: 'Rosa', hex: '#FF69B4' }
  ];

  const handleSizeToggle = (size: string) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter(s => s !== size)
      : [...filters.sizes, size];
    dispatch({ type: 'SET_FILTERS', payload: { sizes: newSizes } });
  };

  const handleColorToggle = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter(c => c !== color)
      : [...filters.colors, color];
    dispatch({ type: 'SET_FILTERS', payload: { colors: newColors } });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="h-5 w-5" />
        <h3 className="text-lg font-semibold">Filtros</h3>
      </div>

      <div className="space-y-6">
        {/* Preço */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Preço</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm">R$</span>
              <input
                type="number"
                value={filters.minPrice}
                onChange={(e) => dispatch({ 
                  type: 'SET_FILTERS', 
                  payload: { minPrice: parseInt(e.target.value) || 0 } 
                })}
                className="w-20 px-2 py-1 border rounded text-sm"
                placeholder="Min"
              />
              <span>-</span>
              <input
                type="number"
                value={filters.maxPrice}
                onChange={(e) => dispatch({ 
                  type: 'SET_FILTERS', 
                  payload: { maxPrice: parseInt(e.target.value) || 1000 } 
                })}
                className="w-20 px-2 py-1 border rounded text-sm"
                placeholder="Max"
              />
            </div>
          </div>
        </div>

        {/* Tamanhos */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Tamanhos</h4>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map(size => (
              <button
                key={size}
                onClick={() => handleSizeToggle(size)}
                className={`p-2 text-sm rounded border transition-colors ${
                  filters.sizes.includes(size)
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Cores */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Cores</h4>
          <div className="grid grid-cols-4 gap-2">
            {colors.map(color => (
              <button
                key={color.name}
                onClick={() => handleColorToggle(color.name)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  filters.colors.includes(color.name)
                    ? 'border-orange-500 ring-2 ring-orange-200'
                    : 'border-gray-300'
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Categoria */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Categoria</h4>
          <div className="space-y-2">
            {['', 'running', 'lifestyle'].map(category => (
              <label key={category} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={filters.category === category}
                  onChange={(e) => dispatch({ 
                    type: 'SET_FILTERS', 
                    payload: { category: e.target.value } 
                  })}
                  className="mr-2"
                />
                <span className="text-sm">
                  {category === '' ? 'Todos' : category === 'running' ? 'Corrida' : 'Lifestyle'}
                </span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={() => dispatch({ 
            type: 'SET_FILTERS', 
            payload: { 
              minPrice: 0, 
              maxPrice: 1000, 
              sizes: [], 
              colors: [], 
              category: '' 
            } 
          })}
          className="w-full py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
        >
          Limpar Filtros
        </button>
      </div>
    </div>
  );
}