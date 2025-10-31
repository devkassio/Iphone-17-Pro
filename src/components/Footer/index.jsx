export default function Footer() {
  const sections = [
    {
      title: 'Comprar e Saber mais',
      links: [
        'iPhone 17 Pro',
        'iPhone 17 Pro Max',
        'Comparar modelos',
        'Acessórios',
      ],
    },
    {
      title: 'Especificações',
      links: ['Tela', 'Processador', 'Memória interna', 'Bateria', 'Câmera'],
    },
    {
      title: 'Suporte',
      links: [
        'Suporte ao iPhone',
        'AppleCare+',
        'IOS 26',
        'Garantia',
        'Contato',
      ],
    },
    {
      title: 'Apple',
      links: [
        'Sobre Apple',
        'Empresa',
        'Privacidade',
        'Redes sociais',
        'Contato',
      ],
    },
  ];

  const buttonLinks = ['Politica de privacidade', 'Termos de uso', 'Vendas'];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="mb-4 font-semibold">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-white transition duration-300 cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="flex gap-6 text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Apple Inc. Todos os direitos
              reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              {buttonLinks.map((link, index) => (
                <a
                  className="hover:text-white transition duration-300 cursor-pointer"
                  href="#"
                  key={index}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <p className="mt-6 text-xs text-gray-500 text-center ">
            Site criado para fins educacionais | Desenvolvido por{' '}
            <strong>
              <a
                className="hover:text-white transition duration-300 cursor-pointer"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/devkassio"
              >
                Kássio Barros
              </a>
            </strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
