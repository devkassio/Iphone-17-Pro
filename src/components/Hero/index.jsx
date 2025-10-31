import HeroImage from '../../assets/hero.jpg';

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImage}
          alt="iPhone 17 Pro - O smartphone mais avançado da Apple"
          className="w-full h-full object-cover opacity-80"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-white leading-tight">
          iPhone 17 Pro
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Titânio. Tão forte. Tão leve. Tão Pro.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          O design mais refinado que já criamos. Performance incomparável.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-500/25">
            Comprar agora
          </button>
          <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
            Saiba mais
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 text-white/80"
          aria-label="Scroll para baixo"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </section>
  );
}
