import React from 'react';

export function Hero() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Just Do It
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Descubra a nova coleção de tênis Nike. Performance, estilo e inovação em cada passo.
            </p>
            <div className="mt-8 flex space-x-4">
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-semibold">
                Comprar Agora
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors font-semibold">
                Explorar
              </button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <img
              src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Nike Shoes"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}