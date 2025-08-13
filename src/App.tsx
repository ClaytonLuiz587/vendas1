import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Filters } from './components/Filters';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { LoginModal } from './components/LoginModal';
import { Checkout } from './components/Checkout';

function AppContent() {
  const { state } = useApp();
  
  // Se o usuário está logado e tem itens no carrinho, mostrar checkout
  if (state.user && state.cart.length > 0 && state.isCartOpen) {
    return <Checkout />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Filters />
          </div>
          <div className="lg:col-span-3">
            <ProductGrid />
          </div>
        </div>
      </div>

      <Cart />
      <LoginModal />

      <footer className="bg-black text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">NIKE</h3>
              <p className="text-gray-400 text-sm">
                Just Do It. A Nike é a marca líder mundial em calçados, roupas e equipamentos esportivos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produtos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Tênis</a></li>
                <li><a href="#" className="hover:text-white">Roupas</a></li>
                <li><a href="#" className="hover:text-white">Acessórios</a></li>
                <li><a href="#" className="hover:text-white">Ofertas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white">Trocas e Devoluções</a></li>
                <li><a href="#" className="hover:text-white">Frete e Entrega</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre a Nike</a></li>
                <li><a href="#" className="hover:text-white">Sustentabilidade</a></li>
                <li><a href="#" className="hover:text-white">Carreiras</a></li>
                <li><a href="#" className="hover:text-white">Investidores</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Nike Brasil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;