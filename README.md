# 📱 iPhone 17 Pro - Landing Page

<div align="center">

![iPhone 17 Pro Banner](https://img.shields.io/badge/iPhone%2017%20Pro-Landing%20Page-007AFF?style=for-the-badge&logo=apple&logoColor=white)

Uma landing page moderna e responsiva para o iPhone 17 Pro, desenvolvida com React.js e Tailwind CSS.

[🚀 **Ver Demo**](https://devkassio.github.io/Iphone-17-Pro/) • [📝 **Documentação**](#-funcionalidades) • [🐛 **Reportar Bug**](https://github.com/devkassio/Iphone-17-Pro/issues)

</div>

---

## 🎯 **Sobre o Projeto**

Este projeto é uma **landing page interativa** que simula a página oficial de produto do iPhone 17 Pro da Apple. Foi desenvolvido como parte do meu aprendizado em **React.js**, inspirado pelas videoaulas do canal **DevClub** no YouTube.

### 🎓 **Motivação**

- Aprofundar conhecimentos em **React.js** e **componentes funcionais**
- Praticar **design responsivo** e **mobile-first**
- Implementar **animações** e **interações** modernas
- Aplicar **boas práticas** de desenvolvimento front-end

---

## ✨ **Funcionalidades**

### 🌟 **Características Principais**

- ✅ **Design Responsivo** - Adaptado para desktop, tablet e mobile
- ✅ **Menu Mobile** - Hamburger menu animado para dispositivos móveis
- ✅ **Seletor de Cores** - Visualização interativa das cores do iPhone
- ✅ **Animações Suaves** - Transições e hover effects
- ✅ **Performance Otimizada** - Lazy loading e otimizações de build
- ✅ **Acessibilidade** - ARIA labels e navegação por teclado

### 📱 **Seções**

- **Hero Section** - Apresentação principal com CTA
- **Intro** - Especificações destacadas
- **Design** - Sistema de câmeras avançado
- **Cores** - Seletor interativo de cores
- **Footer** - Links e informações

---

## 🛠️ **Tecnologias Utilizadas**

<div align="center">

| Tecnologia                                                                                                            | Versão   | Uso                   |
| --------------------------------------------------------------------------------------------------------------------- | -------- | --------------------- |
| ![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react&logoColor=white)                      | `19.1.1` | Biblioteca JavaScript |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.16-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | `4.1.16` | Framework CSS         |
| ![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=flat&logo=vite&logoColor=white)                         | `Latest` | Build tool            |
| ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deploy-222?style=flat&logo=github&logoColor=white)          | `-`      | Hospedagem            |

</div>

---

## 🚀 **Como Executar o Projeto**

### 📋 **Pré-requisitos**

- Node.js (versão 18 ou superior)
- npm ou yarn

### 💻 **Instalação**

1️⃣ **Clone o repositório**

```bash
git clone https://github.com/devkassio/Iphone-17-Pro.git
cd Iphone-17-Pro
```

2️⃣ **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3️⃣ **Execute o projeto**

```bash
npm run dev
# ou
yarn dev
```

4️⃣ **Acesse no navegador**

```
http://localhost:5173
```

### 🏗️ **Build para Produção**

```bash
npm run build
npm run preview
```

---

## 📁 **Estrutura do Projeto**

```
Iphone-17-Pro/
├── 📁 public/
├── 📁 src/
│   ├── 📁 assets/          # Imagens e recursos
│   ├── 📁 components/      # Componentes React
│   │   ├── 📄 Colors/      # Seletor de cores
│   │   ├── 📄 Footer/      # Rodapé
│   │   ├── 📄 Hero/        # Seção principal
│   │   ├── 📄 Highlights/  # Destaques
│   │   ├── 📄 Intro/       # Introdução
│   │   └── 📄 NavBar/      # Menu de navegação
│   ├── 📁 pages/
│   │   └── 📄 App.jsx      # Página principal
│   ├── 📄 index.css        # Estilos globais
│   └── 📄 main.jsx         # Ponto de entrada
├── 📄 package.json         # Dependências
├── 📄 tailwind.config.js   # Configuração Tailwind
├── 📄 vite.config.js       # Configuração Vite
└── 📄 README.md           # Este arquivo
```

---

## 🎨 **Design e UX**

### 🎯 **Decisões de Design**

- **Paleta de Cores** - Tons escuros com destaques em azul e roxo
- **Tipografia** - Fontes modernas e hierarquia visual clara
- **Layout** - Grid responsivo com mobile-first approach
- **Animações** - Micro-interações para melhor UX

### 📱 **Responsividade**

- **Mobile** - 320px até 768px
- **Tablet** - 768px até 1024px
- **Desktop** - 1024px ou superior

---

## 🔄 **Deploy e CI/CD**

Este projeto utiliza **GitHub Actions** para deploy automático no **GitHub Pages**.

### 🚀 **Workflow**

1. Push para branch `main`
2. GitHub Actions executa o build
3. Deploy automático para GitHub Pages
4. Site disponível em: https://devkassio.github.io/Iphone-17-Pro/

---

## 🤝 **Contribuições**

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 🎓 **Aprendizados**

### 💡 **O que Aprendi**

- ✅ **Hooks do React** - useState, useMemo, useEffect
- ✅ **Componentização** - Criação de componentes reutilizáveis
- ✅ **Responsividade** - Mobile-first com Tailwind CSS
- ✅ **Performance** - Lazy loading e otimizações
- ✅ **Deploy** - GitHub Actions e GitHub Pages
- ✅ **Boas Práticas** - Estrutura de projeto e código limpo

### 🔄 **Próximos Passos**

- [ ] Adicionar mais animações com Framer Motion
- [ ] Implementar tema claro/escuro
- [ ] Adicionar formulário de contato funcional
- [ ] Implementar testes unitários
- [ ] Adicionar PWA (Progressive Web App)

---

## 🙏 **Agradecimentos**

### 🎯 **Créditos Especiais**

- **[DevClub](https://www.youtube.com/@DevClub)** - Canal no YouTube que inspirou este projeto
- **Apple Inc.** - Design e imagens (uso educacional)
- **Comunidade React** - Documentação e recursos

### 📚 **Recursos Educacionais**

- [DevClub no YouTube](https://www.youtube.com/@DevClub)
- [Documentação do React](https://react.dev/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/)

---

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

### ⚠️ **Disclaimer**

Este é um projeto educacional sem fins comerciais. Todas as imagens e marcas da Apple são propriedade da Apple Inc. O projeto não possui afiliação oficial com a Apple Inc.

---

<div align="center">

**Desenvolvido com ❤️ por [Kássio Barros](https://github.com/devkassio)**

[⬆ Voltar ao topo](#-iphone-17-pro---landing-page)

</div>

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
