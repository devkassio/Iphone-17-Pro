import HeroImage from '../../assets/hero.jpg';
import HeroMobile from '../../assets/chip-a18-pro.jpg';

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background Image - Desktop */}
      <div className="absolute top-10 left-0 right-0 bottom-0 z-0 hidden md:block">
        <img
          src={HeroImage}
          alt="iPhone 17 Pro - O smartphone mais avançado da Apple"
          className="w-full h-full object-cover opacity-80"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
      </div>

      {/* Background Image - Mobile */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <img
          src={HeroMobile}
          alt="iPhone 17 Pro - O smartphone mais avançado da Apple"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>
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
