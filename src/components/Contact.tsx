
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-[#FFFDF9] to-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#3D3D3D] mb-4">
            Localização e Contato
          </h2>
          <p className="text-xl text-gray-600">
            Estamos prontos para cuidar do seu sorriso
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#B88A44] to-[#E8C2A0] mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#3D3D3D] mb-8">Entre em Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#B88A44] to-[#E8C2A0] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3D3D3D] mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Epitácio Pessoa, 753 – 11º andar – Sala 1114<br />
                      João Pessoa, PB
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#B88A44] to-[#9C7238] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3D3D3D] mb-1">WhatsApp</h4>
                    <p className="text-gray-600">(83) 9 9800-3674</p>
                    <p className="text-sm text-[#B88A44]">Resposta rápida garantida</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#E8C2A0] to-[#D4A974] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#3D3D3D]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3D3D3D] mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <a
                  href="https://wa.me/5583988231994?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#E8C2A0] text-[#3D3D3D] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#D4A974] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Quero agendar agora</span>
                </a>
                <p className="text-center text-sm text-gray-500 mt-3">
                  Clique e fale diretamente conosco pelo WhatsApp
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#3D3D3D] mb-8">Por que escolher a Dra. Laudenice?</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#B88A44] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-[#3D3D3D]">Atendimento Personalizado</h4>
                  <p className="text-gray-600 text-sm">Cada paciente é único e merece um tratamento exclusivo</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#B88A44] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-[#3D3D3D]">Tecnologia Avançada</h4>
                  <p className="text-gray-600 text-sm">Equipamentos modernos para diagnósticos precisos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#B88A44] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-[#3D3D3D]">Ambiente Acolhedor</h4>
                  <p className="text-gray-600 text-sm">Consultório projetado para seu conforto e tranquilidade</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#B88A44] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-[#3D3D3D]">Resultados Comprovados</h4>
                  <p className="text-gray-600 text-sm">Centenas de sorrisos transformados com excelência</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#B88A44] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-[#3D3D3D]">Facilidade de Pagamento</h4>
                  <p className="text-gray-600 text-sm">Planos flexíveis para tornar seu tratamento acessível</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-[#FFFDF9] to-[#F5F0E8] rounded-xl border border-[#E8C2A0]">
              <h4 className="font-bold text-[#3D3D3D] mb-2">🎯 Sua primeira consulta</h4>
              <p className="text-gray-600 text-sm mb-4">
                Agende uma avaliação completa e descubra como podemos transformar seu sorriso
              </p>
              <p className="text-[#B88A44] font-semibold text-sm">
                ✓ Consulta detalhada ✓ Plano personalizado ✓ Sem compromisso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
