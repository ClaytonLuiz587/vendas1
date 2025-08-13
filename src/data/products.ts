import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Nike Air Max 270',
    price: 599,
    originalPrice: 699,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'running',
    colors: [
      { name: 'Preto', hex: '#000000' },
      { name: 'Branco', hex: '#FFFFFF' },
      { name: 'Azul', hex: '#0066CC' }
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    description: 'O Nike Air Max 270 combina estilo e conforto com tecnologia Air Max visível.',
    features: ['Tecnologia Air Max', 'Cabedal em mesh respirável', 'Solado em borracha durável']
  },
  {
    id: '2',
    name: 'Nike Air Force 1',
    price: 449,
    image: 'https://images.pexels.com/photos/1456735/pexels-photo-1456735.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'lifestyle',
    colors: [
      { name: 'Branco', hex: '#FFFFFF' },
      { name: 'Preto', hex: '#000000' },
      { name: 'Vermelho', hex: '#CC0000' }
    ],
    sizes: ['37', '38', '39', '40', '41', '42', '43', '44'],
    description: 'O icônico Nike Air Force 1 que revolucionou o basquete e se tornou um clássico.',
    features: ['Design clássico', 'Couro premium', 'Amortecimento Air']
  },
  {
    id: '3',
    name: 'Nike React Infinity Run',
    price: 699,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'running',
    colors: [
      { name: 'Cinza', hex: '#808080' },
      { name: 'Rosa', hex: '#FF69B4' },
      { name: 'Verde', hex: '#00CC66' }
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    description: 'Desenvolvido para reduzir lesões com amortecimento React responsivo.',
    features: ['Tecnologia React', 'Flyknit superior', 'Base mais larga para estabilidade']
  },
  {
    id: '4',
    name: 'Nike Dunk Low',
    price: 529,
    image: 'https://images.pexels.com/photos/2529375/pexels-photo-2529375.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'lifestyle',
    colors: [
      { name: 'Branco/Verde', hex: '#FFFFFF' },
      { name: 'Preto/Branco', hex: '#000000' },
      { name: 'Azul/Branco', hex: '#0066CC' }
    ],
    sizes: ['37', '38', '39', '40', '41', '42', '43', '44', '45'],
    description: 'O Nike Dunk Low retorna com cores vintage e materiais premium.',
    features: ['Design retro', 'Couro genuíno', 'Solado em borracha clássico']
  },
  {
    id: '5',
    name: 'Nike Air Zoom Pegasus',
    price: 649,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'running',
    colors: [
      { name: 'Preto', hex: '#000000' },
      { name: 'Laranja', hex: '#FF6900' },
      { name: 'Azul', hex: '#0066CC' }
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    description: 'O tênis de corrida mais versátil da Nike com amortecimento Zoom Air.',
    features: ['Zoom Air forefoot', 'Mesh engineered', 'Heel clip para estabilidade']
  },
  {
    id: '6',
    name: 'Nike Blazer Mid',
    price: 479,
    originalPrice: 549,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'lifestyle',
    colors: [
      { name: 'Branco', hex: '#FFFFFF' },
      { name: 'Preto', hex: '#000000' },
      { name: 'Bege', hex: '#F5DEB3' }
    ],
    sizes: ['37', '38', '39', '40', '41', '42', '43', '44'],
    description: 'O estilo vintage do basquete com um toque moderno e elegante.',
    features: ['Design vintage', 'Couro sintético', 'Sola de borracha durável']
  },
  {
    id: '7',
    name: 'Nike Air Max 90',
    price: 579,
    image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'running',
    colors: [
      { name: 'Branco/Cinza', hex: '#FFFFFF' },
      { name: 'Preto/Vermelho', hex: '#000000' },
      { name: 'Azul/Branco', hex: '#0066CC' }
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    description: 'O lendário Air Max 90 com design icônico e amortecimento visível.',
    features: ['Air Max visível', 'Mix de materiais', 'Design atemporal']
  },
  {
    id: '8',
    name: 'Nike Court Vision Low',
    price: 399,
    image: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'lifestyle',
    colors: [
      { name: 'Branco', hex: '#FFFFFF' },
      { name: 'Preto', hex: '#000000' },
      { name: 'Marinho', hex: '#000080' }
    ],
    sizes: ['37', '38', '39', '40', '41', '42', '43', '44', '45'],
    description: 'Inspirado no basquete dos anos 80, com estilo limpo e versátil.',
    features: ['Design clássico', 'Couro sintético', 'Conforto para o dia todo']
  }
];