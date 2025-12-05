import "./styles/About.css";
import { Heart, Target, Shield, Smile } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-title-wrap">
          <h2 className="about-title">
            Sobre a Dra. Laudenice
          </h2>
          <div className="about-title-underline"></div>
        </div>

        <div className="about-grid">
          <div className="about-text-col">
            <div>
              <p className="about-description">
                Com ampla formação acadêmica e mais de 20 anos de experiência,
                <span className="about-highlight"> Dra. Laudenice Lucena </span>
                oferece atendimento humanizado e técnico nas áreas de odontologia estética, cirúrgica e preventiva.
              </p>
              <p className="about-description-secondary">
                Graduada pela <strong>UFPB</strong>, é Doutora em Patologia Oral pela <strong>UFRN</strong> 
                e Mestre em Diagnóstico Oral pela <strong>UFPB</strong>. Especialista em <strong>odontologia estética</strong> e <strong>odontologia hospitalar,</strong>
                habilitada em <strong>Laserterapia e terapias fotodinâmicas</strong>, alia excelência técnica, empatia e constante atualização.
              </p>
            </div>

            <div className="about-features-grid">
              <div className="about-feature-card">
                <Heart className="about-feature-icon" />
                <h4 className="about-feature-title">Humanização</h4>
                <p className="about-feature-desc">
                  Atendimento acolhedor e empático em todos os procedimentos.
                </p>
              </div>
              <div className="about-feature-card">
                <Target className="about-feature-icon" />
                <h4 className="about-feature-title">Missão</h4>
                <p className="about-feature-desc">
                  Transformar sorrisos e elevar a autoestima de cada paciente.
                </p>
              </div>
              <div className="about-feature-card">
                <Shield className="about-feature-icon" />
                <h4 className="about-feature-title">Formação</h4>
                <p className="about-feature-desc">
                  UFPB, UFRN, especialização em estética e habilitação em Laser.
                </p>
              </div>
              <div className="about-feature-card">
                <Smile className="about-feature-icon" />
                <h4 className="about-feature-title">Valores</h4>
                <p className="about-feature-desc">
                  Ética, excelência e cuidado personalizado.
                </p>
              </div>
            </div>
          </div>

          <div className="about-image-col">
            <div className="about-image-wrap">
              <img 
                src="/Imagens/Dra/Perfil-02.jpeg" 
                alt="Dra. Laudenice Lucena" 
                className="about-image-img"
              />
              <div className="about-image-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
