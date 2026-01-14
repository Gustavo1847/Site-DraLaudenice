import { Button } from "@/components/ui/button";

const Bio = () => {
    const links = [
        {
            title: "AGENDAMENTO",
            url: "https://wa.me/5583988231994?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta",
            underline: false,
        },
        {
            title: "NOSSOS SERVIÇOS",
            url: "/#servicos",
            underline: false,
        },
    ];

    return (
        <div className="min-h-screen bg-[#EDEEEE] flex flex-col items-center py-12 px-4 relative overflow-hidden">
            {/* Background Watermark (Medical Crosses) */}
            <div className="absolute top-[10%] left-1/3 transform -translate-x-1/2 w-[300px] md:w-[400px] pointer-events-none select-none opacity-20" style={{ zIndex: 0 }}>
                <div style={{ paddingTop: '102.04081633%', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                        <div style={{ width: '100%', height: '100%', opacity: 0.8 }}>
                            <div style={{ transform: 'scale(1, 1)', width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
                                <div style={{ width: '100%', height: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                    <svg viewBox="0 0 200 200" fill="currentColor" className="text-[#dbaf98] w-full h-full">
                                        <path d="M100 0C44.77 0 0 44.77 0 100s44.77 100 100 100 100-44.77 100-100S155.23 0 100 0zm0 180c-44.11 0-80-35.89-80-80s35.89-80 80-80 80 35.89 80 80-35.89 80-80 80z" fill="none" opacity="0" />
                                        {/* Cross 1 (Main/Center) */}
                                        <path transform="translate(40, 40) scale(1.2)" d="M40 18h-8v-8c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v8h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z" />
                                        {/* Cross 2 (Top Left) */}
                                        <path transform="translate(10, 20) scale(0.8)" opacity="0.6" d="M40 18h-8v-8c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v8h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z" />
                                        {/* Cross 3 (Bottom Right) */}
                                        <path transform="translate(80, 70) scale(0.9)" opacity="0.7" d="M40 18h-8v-8c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v8h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="w-full max-w-md z-10 flex flex-col items-center">

                {/* Profile Image - Clean no border */}
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden mb-12 shadow-lg">
                    <img
                        src="/Imagens/Dra/Perfil-01.jpeg"
                        alt="Dra. Laudenice Lucena"
                        className="w-full h-full object-cover object-top"
                    />
                </div>

                {/* Logo & Name Section */}
                <div className="flex flex-col items-center mb-1 text-center">
                    <div className="flex items-center justify-center space-x-4 mb-2">
                        <img
                            src="https://dralaudenice.com.br/Imagens/logo.png"
                            className="w-20 h-auto"
                            alt="Logo"
                        />
                        <div className="flex flex-col items-start leading-none">
                            <span className="font-bold text-[#5A4B41] text-2xl tracking-[0.1em]">
                                <span className="text-[#C69C6D]">L</span>audenice
                            </span>
                            <span className="font-bold text-[#5A4B41] text-2xl tracking-[0.1em]">
                                <span className="text-[#C69C6D]">L</span>ucena
                            </span>
                        </div>
                    </div>
                </div>

                {/* Updated Title Section with correct styling */}
                <div className="flex flex-col items-center mb-12 space-y-1">
                    <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.3em] text-[#5A4B41]">
                        CIRURGIÃ DENTISTA
                    </p>
                    <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.3em] text-[#5A4B41]">
                        ESTOMATOLOGISTA
                    </p>
                </div>

                {/* Buttons Section */}
                <div className="w-full flex flex-col gap-4 px-8">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target={link.url.startsWith("http") ? "_blank" : "_self"}
                            rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
                            className="w-full block transform transition-transform duration-200 hover:-translate-y-1"
                        >
                            <div className="bg-[#dbaf98] hover:bg-[#c99f8d] text-white font-bold py-3.5 px-6 rounded-full text-center shadow-sm uppercase tracking-wider text-sm md:text-base border-b-2 border-[#b58f7d]/20">
                                <span className={link.underline ? "underline-none underline-offset-4 decoration-1" : ""}>
                                    {link.title}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Optional Footer */}
                <div className="mt-12 opacity-0">
                    {/* Placeholder spacing */}
                </div>
            </div>
        </div>
    );
};

export default Bio;
