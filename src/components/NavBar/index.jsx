import { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#design', label: 'Design' },
    { href: '#camera', label: 'Câmera' },
    { href: '#performance', label: 'Performance' },
    { href: '#cores', label: 'Cores' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-xl font-bold text-gradient">iPhone 17 Pro</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white active:text-blue-400 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 font-medium">
              Comprar
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md rounded-lg mt-2 border border-gray-800">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-gray-300 hover:text-white active:text-blue-400 hover:bg-gray-800 active:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={handleLinkClick}
              className="w-full mt-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-2 rounded-full transition-all duration-200 active:scale-95 font-medium"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
