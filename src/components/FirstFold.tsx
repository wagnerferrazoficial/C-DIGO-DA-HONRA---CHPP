import { motion } from "motion/react";

export default function FirstFold() {
  return (
    <section 
      id="first-fold" 
      className="w-full bg-white text-black py-6 sm:py-10 px-5 sm:px-8 md:px-12 max-w-4xl mx-auto flex flex-col items-center select-none border-b-4 border-black"
    >
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

