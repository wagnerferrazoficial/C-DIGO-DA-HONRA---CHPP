import { AlertCircle, ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export default function FirstFold() {
  const painPoints = [
    "que seu filho não te escuta",
    "que precisa repetir tudo várias vezes",
    "que a casa vive em conflito",
    "que perdeu autoridade dentro de casa",
    "que já tentou de tudo e nada mudou",
    "e que está ficando sem paciência"
  ];

  return (
    <section id="first-fold" className="w-full bg-white text-black py-14 px-5 sm:px-8 md:px-12 max-w-4xl mx-auto flex flex-col items-center select-none border-b-4 border-black">
      
      {/* Primary Headline: All Caps, Black, Montserrat ExtraBold, augmented by 20% */}
      <motion.h1 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-montserrat font-extrabold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black leading-tight tracking-tight uppercase max-w-3xl"
      >
        Seu filho não te respeita mais dentro de casa… e isso pode estar acontecendo todos os dias sem você perceber
      </motion.h1>

      {/* Requested Image below headline, above subheadline - optimized for mobile devices */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="w-full max-w-[340px] xs:max-w-md sm:max-w-lg mt-8 mb-6 border-4 border-black rounded-xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-neutral-100"
      >
        <img 
          src="https://i.postimg.cc/2yD9gPqT/Gemini-Generated-Image-ttu3t4ttu3t4ttu3-(1).png" 
          alt="Treinamento Código Honra" 
          referrerPolicy="no-referrer"
          className="w-full h-auto object-cover block"
        />
      </motion.div>

      {/* Subheadline: Half the size of headline, Open Sans, no bold, augmented by 20% */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-opensans font-normal text-sm xs:text-base sm:text-lg md:text-xl text-gray-700 text-center mt-6 max-w-2xl leading-relaxed"
      >
        Broncas, conversas e punições não estão funcionando porque o problem não é falta de disciplina — é outra coisa mais profunda que quase nenhum pai entende.
      </motion.p>

      {/* Visual Separator */}
      <div className="w-20 h-1.5 bg-[#FF0000] my-8 border border-black"></div>

      {/* Identification Mirror Block styled as an artistic high-contrast card */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-[#FFD700] border-4 border-black p-6 sm:p-8 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black"
      >
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="text-black w-6 h-6 shrink-0 stroke-[2.5]" />
          <h2 className="font-montserrat font-extrabold text-lg sm:text-xl md:text-2xl text-black uppercase tracking-tight">
            Se você sente hoje:
          </h2>
        </div>

        <ul className="space-y-3.5 mt-3">
          {painPoints.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3 text-left">
              <span className="text-black font-black text-xl leading-none mt-0.5">•</span>
              <p className="font-opensans font-bold text-sm sm:text-base md:text-lg text-black">
                {point}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-4 border-t-2 border-black/40">
          <p className="font-opensans font-extrabold text-sm sm:text-base md:text-lg text-black uppercase tracking-wider">
            Então você não está sozinho.
          </p>
          <p className="font-opensans font-medium text-sm sm:text-base md:text-lg text-black/80 mt-1">
            Isso é mais comum do que parece.
          </p>
        </div>
      </motion.div>

      {/* Break without theory */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="w-full max-w-2xl text-center mt-12 px-2"
      >
        <h3 className="font-montserrat font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-[#FF0000] mb-4">
          O problema não é seu filho.
        </h3>
        <p className="font-opensans font-extrabold text-base sm:text-lg md:text-xl text-black mb-2">
          E não é falta de amor.
        </p>
        <p className="font-opensans font-semibold text-sm sm:text-base md:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed">
          O problema é que existe um <span className="underline decoration-[#FF0000] decoration-2 font-black text-black">padrão invisível</span> que define se ele te respeita ou não dentro de casa.
        </p>

        <div className="flex justify-center mt-8 text-black animate-bounce">
          <ArrowDown className="w-6 h-6 stroke-[3]" />
        </div>
      </motion.div>

    </section>
  );
}
