
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src="https://dralaudenice.com.br/Imagens/logo.png" className="w-12 h-auto" alt="Logo" />
            <span className="text-2xl font-bold text-[#3D3D3D]">Dra. Laudenice Lucena</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-[#B88A44] transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-[#B88A44] transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-[#B88A44] transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('galeria')} className="text-gray-700 hover:text-[#B88A44] transition-colors">
                Galeria
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-[#B88A44] transition-colors">
                Contato
              </button>
              <a 
                href="https://wa.me/5583988231994" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#E8C2A0] text-[#3D3D3D] px-6 py-2 rounded-full hover:bg-[#D4A974] transition-all duration-300 transform hover:scale-105"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#B88A44]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('inicio')} className="block px-3 py-2 text-gray-700 hover:text-[#B88A44] w-full text-left">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="block px-3 py-2 text-gray-700 hover:text-[#B88A44] w-full text-left">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="block px-3 py-2 text-gray-700 hover:text-[#B88A44] w-full text-left">
              Serviços
            </button>
            <button onClick={() => scrollToSection('galeria')} className="block px-3 py-2 text-gray-700 hover:text-[#B88A44] w-full text-left">
              Galeria
            </button>
            <button onClick={() => scrollToSection('contato')} className="block px-3 py-2 text-gray-700 hover:text-[#B88A44] w-full text-left">
              Contato
            </button>
            <a 
              href="https://wa.me/5583988231994" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block mx-3 my-2 bg-[#E8C2A0] text-[#3D3D3D] px-6 py-2 rounded-full text-center hover:bg-[#D4A974] transition-all duration-300"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
