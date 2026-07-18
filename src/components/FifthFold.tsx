import { User, Users, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";

export default function FifthFold() {
  const targets = [
    {
      icon: Users,
      text: "Para pais de crianças e adolescentes que sentem que perderam completamente a liderança e o controle da rotina do lar."
    },
    {
      icon: User,
      text: "Para pais e mães que desejam ser a maior referência de honra, integridade e caráter para seus filhos e filhas."
    },
    {
      icon: HeartHandshake,
      text: "Para famílias que vivem em constante conflito silencioso ou gritado e querem restabelecer de uma vez por todas a paz."
    }
  ];

  return (
    <section id="fifth-fold" className="w-full bg-neutral-950 text-white py-14 sm:py-20 px-5 sm:px-8 md:px-12 select-none border-b-4 border-black">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-montserrat font-black text-2xl xs:text-3xl sm:text-4xl text-center text-white leading-tight tracking-tight max-w-2xl mb-12 uppercase"
        >
          Este Treinamento é perfeito para...
        </motion.h2>

        {/* 3 boxes with premium dark borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {targets.map((target, idx) => {
            const IconComp = target.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col items-start hover:border-[#FFD700]/30 transition-all duration-150"
              >
                {/* Yellow Icon with sleek border */}
                <div className="w-11 h-11 rounded-xl bg-neutral-950 flex items-center justify-center text-[#FFD700] mb-5 border border-neutral-800">
                  <IconComp className="w-5 h-5 stroke-[2.5]" />
                </div>

                {/* Text: in white, with highlighted gold sections */}
                <p className="font-opensans font-semibold text-xs sm:text-sm text-neutral-300 text-left leading-relaxed">
                  {target.text.startsWith("Para ") ? (
                    <>
                      <strong className="text-white font-black underline decoration-[#FFD700] decoration-2">
                        {target.text.split(" que ")[0]}
                      </strong>
                      {" que " + target.text.split(" que ")[1]}
                    </>
                  ) : (
                    target.text
                  )}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
