import { ThumbsUp } from "lucide-react";
import { motion } from "motion/react";

export default function SixthFold() {
  const benefits = [
    {
      title: "Você pode falar menos e ter muito mais obediência",
      desc: "Seu filho vai respeitar as regras básicas da casa logo no primeiro comando, eliminando de vez aquela exaustiva repetição infinita de ordens cotidianas."
    },
    {
      title: "Você pode agir com firmeza inabalável e ter mais conexão",
      desc: "Descubra como colocar limites claros e saudáveis sem precisar gritar, ameaçar ou afastar o coração do seu filho de você."
    },
    {
      title: "Você pode liderar seu lar e desfrutar de paz real",
      desc: "Recupere o controle da energia familiar e veja o conflito diário dar lugar a um lar estruturado, silencioso e profundamente feliz."
    }
  ];

  return (
    <section id="sixth-fold" className="w-full bg-neutral-900 text-white py-14 sm:py-20 px-5 sm:px-8 md:px-12 select-none border-b-4 border-black">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-montserrat font-black text-2xl xs:text-3xl sm:text-4xl text-center text-white leading-tight tracking-tight max-w-2xl mb-12 uppercase"
        >
          Os 3 Maiores Benefícios da Metodologia...
        </motion.h2>

        {/* 3 boxes with dark theme and gold hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center hover:border-[#FFD700]/30 transition-all duration-150"
            >
              {/* Thumbs up Icon */}
              <div className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FFD700] mb-5">
                <ThumbsUp className="w-5 h-5 fill-[#FFD700] text-black" />
              </div>

              {/* Title */}
              <h4 className="font-opensans font-extrabold text-xs sm:text-sm md:text-base text-white leading-tight mb-4 uppercase tracking-tight">
                {benefit.title}
              </h4>

              {/* Description */}
              <p className="font-montserrat font-bold text-[11px] sm:text-xs text-neutral-400 leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
