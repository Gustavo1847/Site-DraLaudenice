import "./styles/Hero.css";
import { Star, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Transformando <span className="hero-title-gradient">sorrisos.</span>
              <span className="hero-title-block">Elevando autoestima.</span>
            </h1>
            <p className="hero-description">
              Cuidado, tecnologia e confiança em cada atendimento.
            </p>

            <div className="hero-badges">
              <div className="hero-badge">
                <div className="hero-badge-icon"><Award size={24} /></div>
                <div>
                  <div className="hero-badge-title">Anos de experiência</div>
                  <div className="hero-badge-desc">Expertise comprovada</div>
                </div>
              </div>
              <div className="hero-badge">
                <div className="hero-badge-icon"><Users size={24} /></div>
                <div>
                  <div className="hero-badge-title">Atendimento humanizado</div>
                  <div className="hero-badge-desc">Cuidado personalizado</div>
                </div>
              </div>
              <div className="hero-badge">
                <div className="hero-badge-icon"><Star size={24} /></div>
                <div>
                  <div className="hero-badge-title">Resultados excepcionais</div>
                  <div className="hero-badge-desc">Sorrisos transformados</div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5583988231994"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-btn"
            >
              Agende sua consulta
            </a>
            <p className="hero-whatsapp">
              WhatsApp: (83) 9 9800-3674 • Resposta rápida garantida
            </p>
          </div>

          <div className="hero-card-wrapper">
            <div className="hero-card-bg"></div>
            <div className="hero-card">
              <img
                src="/Imagens/Dra/Perfil-01.jpeg"
                alt="Dra. Laudenice"
                className="hero-card-img"
              />
              <div className="hero-card-info">
                <h3>Dra. Laudenice Lucena</h3>
                <p className="hero-card-title">Cirurgiã-Dentista</p>
                <p className="hero-card-location">João Pessoa, PB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
