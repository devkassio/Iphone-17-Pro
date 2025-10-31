import A18Image from '../../assets/chip-a18-pro.jpg';
import IosFeaturesImage from '../../assets/ios-features.jpg';
import TitaniumImage from '../../assets/titanium-design.jpg';
export default function Highlights() {
  const specs = [
    {
      value: '48MP',
      label: 'Principal',
      description: 'Sensor quad-pixel com foco automático',
      color: 'text-blue-600',
    },
    {
      value: '12MP',
      label: 'Ultra wide',
      description: 'Campo de visão de 120° com modo noturno',
      color: 'text-orange-500',
    },
    {
      value: '12MP',
      label: 'Telefoto',
      description: 'Zoom óptico de 5x com estabilização de imagem',
      color: 'text-blue-600',
    },
  ];

  return (
    <section className="bg-black py-16 sm:py-20 px-4 sm:px-6 lg:px-8" id="design">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Design revolucionário
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Cada detalhe foi pensado para criar a melhor experiencia de uso.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className=" bg-gray-900 rounded-3xl p-8 flex flex-col items-center">
            <img
              src={TitaniumImage}
              alt="Imagem dos iphone 17 pro"
              className="w-full rounded-2xl mb-4"
            />
            <h3 className="text-3xl mb-2 font-bold">Titânio Premium</h3>
            <p className="text-gray-300 text-sm">
              Estrutura em titânio de grau aeroespacial. O smartphone mais forte
              e leve ja criado.
            </p>
          </div>
          <div className=" bg-gray-900 rounded-3xl p-8 flex flex-col items-center">
            <img
              src={IosFeaturesImage}
              alt="Ios Features"
              className="w-full rounded-2xl mb-4"
            />
            <h3 className="text-3xl mb-2 font-bold">IOS 26</h3>
            <p className="text-gray-300 text-sm">
              O sistema operacional mais avançado de todos os tempos com IA
              integrada.
            </p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-3xl p-12 mb-30" id="performance">
          <h3 className="text-4xl font-bold mb-6 text-gradient ">A18 Pro</h3>
          <p className="mb-2 text-gray-300 text-md">
            O chip mais avançado de todos os tempos.
          </p>
          <img
            src={A18Image}
            alt="image of A18 Pro"
            className="w-full rounded-2xl mb-4"
          />

          <ul className="space-y-3 text-gray-300">
            <li>
              <strong>Chip:</strong> A19 Pro Bionic (6 núcleos de alto
              desempenho)
            </li>
            <li>
              <strong>Gráficos:</strong> GPU Apple de 6 núcleos
            </li>
            <li>
              <strong>Memória:</strong> 8GB RAM
            </li>
            <li>
              <strong>Bateria:</strong> 4.200mAh com autonomia aprimorada
            </li>
          </ul>
        </div>
        <div id="camera">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-6 text-gradient">
              Sistema de Câmeras Avançado
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span className={`text-3xl font-bold mb-2 ${spec.color}`}>
                  {spec.value}
                </span>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {spec.label}
                </h4>
                <p className="text-sm text-gray-400 text-center">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
