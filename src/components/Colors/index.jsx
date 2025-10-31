import { useMemo, useState } from 'react';
import iphoneBlue from '../../assets/iphone-blue.jpg';
import iphoneOrange from '../../assets/iphone-orange.jpg';
import iphoneSilver from '../../assets/iphone-silver.jpg';

export default function Colors() {
  const colors = [
    {
      id: 'blue',
      name: 'Titânio',
      image: iphoneBlue,
      colorClass: 'bg-blue-500',
    },
    {
      id: 'silver',
      name: 'Titânio Natural',
      image: iphoneSilver,
      colorClass: 'bg-gray-300',
    },
    {
      id: 'orange',
      name: 'Titânio Laranja',
      image: iphoneOrange,
      colorClass: 'bg-orange-500',
    },
  ];

  const models = [
    {
      name: 'Pro Max',
      screen: '6.9" Super Retina XDR',
      storage: '256GB, 512GB e 1TB',
      battery: '4.400mAh',
      weight: '221g',
    },
    {
      name: 'Pro',
      screen: '6.3" Super Retina XDR',
      storage: '128GB, 256GB e 512GB',
      battery: '4.200mAh',
      weight: '195g',
    },
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const currentColor = useMemo(
    () => colors.find(color => color.id === selectedColor.id),
    [selectedColor.id]
  );

  return (
    <section
      id="cores"
      className="bg-black py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Escolha sua cor
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">
            Três cores para escolher: Titânio, Titânio Laranja e Titânio Natural
          </p>
        </div>
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="relative w-full max-w-2xl lg:max-w-3xl">
            <div className="relative flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
              <img
                src={currentColor.image}
                alt={`iPhone 17 Pro na cor ${currentColor.name}`}
                className="max-w-full max-h-[300px] sm:max-h-[500px] mx-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-3 left-0 right-0 text-center">
              <div className="py-4 px-8 rounded-full backdrop-blur-md bg-black/40 inline-block">
                <h3 className="font-semibold">{currentColor.name}</h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            {colors.map(color => (
              <button
                key={color.id}
                className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full cursor-pointer transition-all duration-300 ${
                  color.colorClass
                } ${
                  selectedColor.id === color.id
                    ? 'ring-4 ring-blue-500 ring-offset-2 ring-offset-black'
                    : ''
                } hover:scale-110 active:scale-95`}
                onClick={() => setSelectedColor(color)}
                aria-label={`Selecionar cor ${color.name}`}
              >
                <img
                  src={color.image}
                  alt={`iPhone 17 Pro na cor ${color.name}`}
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-8 mt-20 grid-cols-1 md:grid-cols-2">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-transparent rounded-3xl p-8 border border-gray-800 hover:border-gray-600 active:border-gray-500 transition-all duration-300 hover:bg-gray-800/50 active:bg-gray-700/50"
            >
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-blue-500 mb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                iPhone 17 {model.name}
              </h3>
              <p className="text-gray-300 mb-4 text-lg">{model.screen}</p>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <strong className="text-white">Armazenamento:</strong>{' '}
                  {model.storage}
                </li>
                <li>
                  <strong className="text-white">Bateria:</strong>{' '}
                  {model.battery}
                </li>
                <li>
                  <strong className="text-white">Peso:</strong> {model.weight}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white px-8 py-4 rounded-full text-md font-medium transition-all duration-300 mb-6 hover:scale-105 active:scale-95 shadow-md shadow-blue-500/50 cursor-pointer">
            Compre agora a partir de R$ 9.999.99
          </button>
          <p className="text-gray-400 mb-8">ou 12x de R$ 1.999,99 sem juros</p>
        </div>
      </div>
    </section>
  );
}
