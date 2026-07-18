import { CheckSquare2 } from "lucide-react";
import { motion } from "motion/react";

export default function FourthFold() {
  const points = [
    {
      text: "Como se impor de forma serena e inabalável, fazendo com que seu filho te escute e te obedeça ",
      underlined: "logo na primeira vez que você der o comando",
      suffix: "."
    },
    {
      text: "Como silenciar a birra, a provocação e a ironia sem precisar ",
      underlined: "gastar sua energia mental, gritar, explodir ou chorar de cansaço",
      suffix: "."
    },
    {
      text: "O plano de ação cirúrgico para restabelecer a estabilidade na atmosfera do seu lar, gerando um ambiente de ",
      underlined: "paz, honra mútua e respeito profundo",
      suffix: "."
    }
  ];

  return (
    <section id="fourth-fold" className="w-full bg-neutral-900 text-white py-14 sm:py-20 px-5 sm:px-8 md:px-12 select-none border-b-4 border-black">
      <div className="max-w-3xl mx-auto">
        
        {/* Title */}
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-montserrat font-black text-xl sm:text-2xl md:text-3xl text-center text-[#FFD700] mb-10 uppercase tracking-tight"
        >
          Ao concluir o Treinamento você vai dominar:
        </motion.h3>

        {/* Tickets styled as distinct bordered boxes in premium theme */}
        <div className="flex flex-col gap-5">
          {points.map((pt, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 hover:border-[#FFD700]/30 transition-all duration-150"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Yellow Validated Ticket design */}
                <div className="text-[#FFD700] shrink-0 mt-0.5 bg-neutral-900 p-2 border border-[#FFD700]/30 rounded-xl">
                  <CheckSquare2 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                </div>

                {/* Description */}
                <div className="font-montserrat font-bold text-xs sm:text-sm md:text-base text-neutral-200 leading-relaxed text-left">
                  {pt.text}
                  <span className="underline decoration-[#FFD700] decoration-2 font-black text-[#FFD700]">
                    {pt.underlined}
                  </span>
                  {pt.suffix}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
