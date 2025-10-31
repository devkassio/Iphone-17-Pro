export default function Intro() {
  const specs = [
    {
      value: '6.3"',
      label: 'Display Super Retina XDR',
      color: 'text-blue-600',
    },
    { value: 'A18 Pro', label: 'Chip mais rápido', color: 'text-orange-500' },
    { value: '48MP', label: 'Sistema de câmera', color: 'text-blue-600' },
    { value: '29h', label: 'Bateria', color: 'text-orange-500' },
  ];

  return (
    <section className="bg-black py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">iPhone 17 Pro</h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">
          Titânio. Tão forte. Tão leve. Tão Pro.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          O design mais refinado que já criamos. Titânio de grau aeroespacial.
          Chip A18 Pro. Sistema de câmera Pro revolucionário.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 max-w-md mx-auto">
        <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50">
          Comprar agora
        </button>
        <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
          Saiba mais
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="text-center p-4"
          >
            <span className={`text-2xl sm:text-3xl font-bold block mb-2 ${spec.color}`}>
              {spec.value}
            </span>
            <p className="text-sm sm:text-base text-gray-300 font-medium">{spec.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
