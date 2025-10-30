export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-10 items-center p-4">
        <a
          className="hover:text-gray-300 transition delay-75 duration-300 ease-in-out"
          href="#design"
        >
          Design
        </a>
        <a
          className="hover:text-gray-300 transition delay-75 duration-300 ease-in-out"
          href="#camera"
        >
          Câmera
        </a>
        <a
          className="hover:text-gray-300 transition delay-75 duration-300 ease-in-out"
          href="#performance"
        >
          Performance
        </a>
        <a
          className="hover:text-gray-300 transition delay-75 duration-300 ease-in-out"
          href="#cores"
        >
          Cores
        </a>
        <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-gray-200 px-6 py-2 rounded-full">
          Comprar
        </button>
      </div>
    </nav>
  );
}
