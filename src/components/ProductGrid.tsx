import React from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';
import { useApp } from '../context/AppContext';

export function ProductGrid() {
  const { state } = useApp();
  const { filters } = state;

  const filteredProducts = products.filter(product => {
    // Filtro de preço
    if (product.price < filters.minPrice || product.price > filters.maxPrice) {
      return false;
    }

    // Filtro de categoria
    if (filters.category && product.category !== filters.category) {
      return false;
    }

    // Filtro de tamanhos
    if (filters.sizes.length > 0) {
      if (!filters.sizes.some(size => product.sizes.includes(size))) {
        return false;
      }
    }

    // Filtro de cores
    if (filters.colors.length > 0) {
      if (!filters.colors.some(color => 
        product.colors.some(productColor => productColor.name === color)
      )) {
        return false;
      }
    }

    return true;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Tênis ({filteredProducts.length})
        </h2>
        <select className="px-4 py-2 border border-gray-300 rounded-md text-sm">
          <option>Ordenar por: Relevância</option>
          <option>Menor preço</option>
          <option>Maior preço</option>
          <option>Mais populares</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhum produto encontrado com os filtros selecionados.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}