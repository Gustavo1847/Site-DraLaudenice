
import { Heart, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#3D3D3D] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="https://dralaudenice.com.br/Imagens/logo.png" className="w-12 h-auto" alt="Logo" />
              <span className="text-2xl font-bold text-gray-300">Dra. Laudenice Lucena</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transformando sorrisos e elevando autoestima através da odontologia de excelência em João Pessoa, PB.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/dralaudenice?igshid=YzAwZjE1ZTI0Zg%3D%3D" className="w-10 h-10 bg-gradient-to-r from-[#B88A44] to-[#E8C2A0] rounded-full flex items-center justify-center hover:from-[#9C7238] hover:to-[#D4A974] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-[#E8C2A0] to-[#B88A44] rounded-full flex items-center justify-center hover:from-[#D4A974] hover:to-[#9C7238] transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Cirurgia</li>
              <li>Clínica Geral</li>
              <li>Estomatologia</li>
              <li>Estética Dental</li>
              <li>Odontologia Preventiva</li>
              <li>Prótese Dentária</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p>Av. Epitácio Pessoa, 753</p>
              <p>11º andar – Sala 1114</p>
              <p>João Pessoa, PB</p>
              <p className="text-[#E8C2A0] font-medium">(83) 9 9800-3674</p>
            </div>
            <a 
              href="https://wa.me/5583988231994" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#E8C2A0] text-[#3D3D3D] px-6 py-3 rounded-full font-medium hover:bg-[#D4A974] transition-all duration-300"
            >
              Fale Conosco
            </a>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Dra. Laudenice. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-[#E8C2A0]" />
              <span>para transformar sorrisos</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
