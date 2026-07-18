import { Award, CheckCircle, Shield } from "lucide-react";
import { motion } from "motion/react";

export default function Biography() {
  return (
    <section 
      id="biography-section" 
      className="w-full bg-neutral-950 text-white py-14 px-5 sm:px-8 md:px-12 select-none border-b-4 border-black relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Creator Image Area: exactly 35% width on mobile as requested, styled with golden borders */}
        <div className="w-[35%] md:w-[28%] max-w-[160px] md:max-w-none shrink-0 relative">
          <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform rotate-3 scale-102 border-2 border-black" />
          <div className="relative border-3 border-black bg-neutral-800 rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(255,215,0,0.25)]">
            <img 
              src="https://i.postimg.cc/RZkshFfy/Whats-App-Image-2026-05-12-at-07-58-59.jpg" 
              alt="Wagner Ferraz" 
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover block grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>

        {/* Text Area */}
        <div className="flex-1 text-center md:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 border border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] mb-4">
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span>MENTOR DE AUTORIDADE FAMILIAR</span>
          </div>

          {/* Title */}
          <h3 className="font-montserrat font-black text-xl sm:text-2xl text-white uppercase tracking-tight leading-tight">
            Quem é Wagner Ferraz?
          </h3>

          <div className="w-12 h-1 bg-[#FFD700] my-3 mx-auto md:mx-0 rounded-full" />

          {/* Body Content */}
          <p className="font-opensans font-semibold text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Wagner Ferraz é especialista em comportamento infantil e mentor de parentalidade focado em restabelecer a autoridade e o amor nos lares brasileiros. Após ajudar centenas de pais a saírem do completo desgaste emocional da gritaria, ele condensou as estratégias secretas de comunicação de alta autoridade no método <strong className="text-white underline decoration-[#FFD700] decoration-2">Código Honra</strong>.
          </p>

          <p className="font-opensans font-semibold text-xs sm:text-sm text-neutral-400 leading-relaxed mt-3">
            Sua missão é dar aos pais e mães um passo a passo prático, livre de teorias utópicas da psicologia tradicional, para restaurar o respeito mútuo e a paz no lar em tempo recorde.
          </p>

          {/* Trust Factors */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-5 text-[10px] text-[#FFD700] font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
              <CheckCircle className="w-3 h-3 text-[#25D366]" /> +1200 Famílias Atendidas
            </span>
            <span className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
              <Shield className="w-3 h-3 text-[#25D366]" /> Método 100% Validado
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
