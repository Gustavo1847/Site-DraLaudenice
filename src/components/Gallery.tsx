import "./styles/Gallery.css";
import { Eye, ArrowRight } from "lucide-react";
/**
 * Cases gallery
 * @returns  
 */
const Gallery = () => {
  const cases = [
    {
      before: "/Imagens/AntesDepois/Antes-01.jpg",
      after: "/Imagens/AntesDepois/Depois-01.jpg",
      title: "Restauração Estética de Fratura",
      description: "Reconstrução do dente fraturado com acabeamento estético natural."
    },
    {
      before: "/Imagens/AntesDepois/Antes-02.jpg",
      after: "/Imagens/AntesDepois/Depois-02.jpg",
      title: "Rejuvenescimento do Sorriso",
      description: "Harmonização para um sorriso mais jovem e leve."
    },
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#3D3D3D] mb-4">
            Antes e Depois
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja os resultados reais dos nossos tratamentos e inspire-se com as transformações
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#B88A44] to-[#E8C2A0] mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((case_item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#FFFDF9] to-[#F5F0E8] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E8C2A0]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-[#B88A44] to-[#E8C2A0] rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#3D3D3D]">{case_item.title}</h3>
                    <p className="text-sm text-gray-600">{case_item.description}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                {/* Imagem Antes */}
                <div className="space-y-2">
                  <img
                    src={case_item.before}
                    alt="Antes do tratamento"
                    className="w-full max-w-[300px] aspect-[4/3] object-cover rounded-xl"
                  />
                  <p className="text-sm font-medium text-gray-700 text-center">Antes</p>
                </div>

                {/* Seta central */}
                <ArrowRight className="min-h-8 min-w-8 text-[#B88A44] mx-1" />

                {/* Imagem Depois */}
                <div className="space-y-2">
                  <img
                    src={case_item.after}
                    alt="Depois do tratamento"
                    className="w-full max-w-[300px] aspect-[4/3] object-cover rounded-xl"
                  />
                  <p className="text-sm font-medium text-gray-700 text-center">Depois</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Botão Final */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5583988231994?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E8C2A0] text-[#3D3D3D] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#D4A974] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Quero transformar meu sorriso também
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
