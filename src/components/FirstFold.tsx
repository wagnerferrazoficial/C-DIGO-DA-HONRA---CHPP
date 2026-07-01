import { motion } from "motion/react";

export default function FirstFold() {
  return (
    <section 
      id="first-fold" 
      className="w-full bg-white text-black py-4 sm:py-8 px-5 sm:px-8 md:px-12 max-w-4xl mx-auto flex flex-col items-center select-none border-b-4 border-black"
    >
      {/* High-Converting Social Proof Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6 sm:mb-8 bg-neutral-50 border-2 border-black px-4 py-2.5 rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] max-w-xl w-full"
      >
        {/* Overlapping Avatar Group */}
        <div className="flex -space-x-2.5 shrink-0">
          <img className="w-8.5 h-8.5 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Pais" referrerPolicy="no-referrer" />
          <img className="w-8.5 h-8.5 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Pais" referrerPolicy="no-referrer" />
          <img className="w-8.5 h-8.5 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Pais" referrerPolicy="no-referrer" />
          <img className="w-8.5 h-8.5 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Pais" referrerPolicy="no-referrer" />
          <img className="w-8.5 h-8.5 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=100&q=80" alt="Pais" referrerPolicy="no-referrer" />
        </div>

        {/* Stars and Trust Rating Statement */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-0.5">
          <div className="flex items-center gap-1.5">
            <div className="flex text-[#FFD700]">
              {"★★★★★".split("").map((star, i) => (
                <span key={i} className="text-sm tracking-tighter drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">★</span>
              ))}
            </div>
            <span className="font-montserrat font-black text-xs sm:text-sm text-black">
              4,8/5
            </span>
          </div>
          <p className="font-opensans font-extrabold text-[11px] sm:text-xs text-neutral-800 leading-tight">
            Mais de <span className="text-[#FF0000] font-black underline decoration-black decoration-1">1.247 pais</span> transformaram a relação com seus filhos
          </p>
        </div>
      </motion.div>

      {/* Primary Headline: All Caps, Black, Montserrat ExtraBold */}
      <motion.h1 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-montserrat font-extrabold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-black leading-tight tracking-tight uppercase max-w-3xl"
      >
        Seu filho não te respeita mais dentro de casa… e isso pode estar acontecendo todos os dias sem você perceber
      </motion.h1>

      {/* Requested Image below headline, above subheadline - optimized for mobile devices */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[440px] mt-5 mb-5 border-4 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-neutral-100"
      >
        <img 
          src="https://i.postimg.cc/2yD9gPqT/Gemini-Generated-Image-ttu3t4ttu3t4ttu3-(1).png" 
          alt="Treinamento Código Honra" 
          referrerPolicy="no-referrer"
          className="w-full h-auto object-cover block"
        />
      </motion.div>

      {/* Subheadline: Open Sans, no bold, ending precisely as requested */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-opensans font-normal text-xs xs:text-sm sm:text-base md:text-lg text-gray-700 text-center mt-3 max-w-2xl leading-relaxed animate-fade-in"
      >
        Broncas, conversas e punições não estao funcionando porque o problema não é a falta disciplina - <span className="underline decoration-[#FF0000] decoration-2 font-black text-black">é outra coisa mais profunda que quase nenhum pai entende</span>.
      </motion.p>
    </section>
  );
}

