import { useState } from "react";
import { Import, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 lg:px-10 xl:px-14">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <div className="flex items-center space-x-3">
            <img
              src="https://dralaudenice.com.br/Imagens/logo.png"
              className="w-10 md:w-12 lg:w-14 h-auto"
              alt="Logo"
            />
            <span className={`font-bold text-[#3D3D3D] ${isMobile ? "text-lg min-w-[160px]" : "text-2xl min-w-[180px]"}`}>
              Dra. Laudenice Lucena
            </span>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex">
            <div className={`ml-4 flex items-center ${isMobile ? "space-x-4" : "space-x-4 lg:space-x-8"} ${!isMobile && "py-2"}`}>
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
                href="https://wa.me/5583988231994?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap bg-[#E8C2A0] text-[#3D3D3D] px-5 py-2 rounded-full hover:bg-[#D4A974] transition-all duration-300 transform hover:scale-105"
              >
                {isMobile ? "Agendar" : "Agendar Consulta"}
              </a>
            </div>
          </div>

          {/* MENU MOBILE */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#B88A44]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-3 pt-3 pb-4 space-y-2">
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
              href="https://wa.me/5583988231994?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
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
