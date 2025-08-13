import React, { useState } from 'react';
import { CreditCard, Truck, Shield, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';

export function Checkout() {
  const { state, dispatch } = useApp();
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  const total = state.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = 29.90;
  const finalTotal = total + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular processamento do pagamento
    alert('Pedido realizado com sucesso! Você receberá um e-mail de confirmação.');
    dispatch({ type: 'CLEAR_CART' });
    dispatch({ type: 'TOGGLE_CART' });
  };

  if (!state.user || state.cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Você precisa estar logado e ter itens no carrinho.</p>
          <button
            onClick={() => dispatch({ type: 'TOGGLE_LOGIN_MODAL' })}
            className="bg-black text-white px-6 py-2 rounded-lg"
          >
            Fazer Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => dispatch({ type: 'TOGGLE_CART' })}
            className="p-2 hover:bg-gray-200 rounded"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-2xl font-bold">Finalizar Compra</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulário de Pagamento */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Forma de Pagamento
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-3 gap-3">
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="credit"
                    checked={paymentMethod === 'credit'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">Cartão de Crédito</span>
                </label>
                
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="debit"
                    checked={paymentMethod === 'debit'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">Cartão de Débito</span>
                </label>
                
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="pix"
                    checked={paymentMethod === 'pix'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">PIX</span>
                </label>
              </div>

              {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número do Cartão
                    </label>
                    <input
                      type="text"
                      required
                      value={cardData.number}
                      onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome no Cartão
                    </label>
                    <input
                      type="text"
                      required
                      value={cardData.name}
                      onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Nome como no cartão"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Validade
                      </label>
                      <input
                        type="text"
                        required
                        value={cardData.expiry}
                        onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="MM/AA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        required
                        value={cardData.cvv}
                        onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'pix' && (
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    Após confirmar o pedido, você receberá o código PIX para pagamento via e-mail e SMS.
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Finalizar Pedido - R$ {finalTotal.toFixed(2)}
              </button>
            </form>
          </div>

          {/* Resumo do Pedido */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-lg font-semibold mb-4">Resumo do Pedido</h2>
              
              <div className="space-y-3 mb-4">
                {state.cart.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.product.name}</h3>
                      <p className="text-xs text-gray-600">
                        {item.selectedColor.name} • Tam. {item.selectedSize} • Qtd. {item.quantity}
                      </p>
                    </div>
                    <span className="text-sm font-semibold">
                      R$ {(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Frete:</span>
                  <span>R$ {shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span>R$ {finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Truck className="h-4 w-4" />
                Endereço de Entrega
              </h3>
              <p className="text-sm text-gray-600">
                {state.user.name}<br />
                {state.user.address.street}, {state.user.address.number}<br />
                {state.user.address.city} - {state.user.address.state}<br />
                CEP: {state.user.address.zipCode}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 text-green-600 mb-2">
                <Shield className="h-4 w-4" />
                <span className="font-semibold text-sm">Compra Segura</span>
              </div>
              <p className="text-xs text-gray-600">
                Seus dados estão protegidos por criptografia SSL. Entrega garantida ou seu dinheiro de volta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}