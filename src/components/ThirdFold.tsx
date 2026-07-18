import { Book, CheckSquare, Gift, HelpCircle, Layers, MessageSquare, Flame, Headphones, BookOpen, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function ThirdFold() {
  const bonuses = [
    {
      title: "🎁 Código Âncora",
      desc: "Como moldar o comportamento correto em casa, na escola e em qualquer ambiente público, criando um senso de honra automático.",
      icon: CheckSquare,
    },
    {
      title: "🎁 Código Norte",
      desc: "Uma direção inabalável para guiar o futuro, o propósito e o caráter do seu filho, protegendo-o contra influências ruins.",
      icon: Layers,
    },
    {
      title: "🎁 Código Vínculo",
      desc: "Como estabelecer uma conexão emocional indestrutível e fazer seu filho se sentir seguro para te contar a verdade sempre.",
      icon: MessageSquare,
    },
    {
      title: "🎁 Código Limite",
      desc: "Técnicas cirúrgicas de comunicação para colocar regras claras dentro de casa, sem dar sermões e sem gritar.",
      icon: Book,
    },
    {
      title: "🎁 Código Recomeço",
      desc: "O protocolo de emergência para curar o estresse pós-briga e restabelecer o respeito mútuo em menos de 5 minutos.",
      icon: HelpCircle,
    },
    {
      title: "🎁 Código Valor",
      desc: "Como neutralizar o hábito da reclamação diária e fazer seu filho cultivar gratidão genuína por tudo o que você faz.",
      icon: Gift,
    },
  ];

  return (
    <section 
      id="third-fold" 
      className="w-full bg-neutral-950 text-white py-14 sm:py-20 px-5 sm:px-8 md:px-12 select-none border-b-4 border-black relative"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Flag badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#FF0000] text-white text-[9px] font-black uppercase tracking-widest px-3.5 py-1.5 border border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(255,215,0,1)] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#FFD700] fill-[#FFD700]" />
          <span>O MAPA COMPLETO DA TRANSFORMAÇÃO</span>
        </div>

        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-montserrat font-black text-2xl xs:text-3xl sm:text-4xl text-center text-white leading-tight uppercase tracking-tight max-w-2xl"
        >
          O que você vai dominar dentro do <span className="text-[#FFD700] underline decoration-[#FFD700] decoration-2">Treinamento Código Honra</span>:
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-opensans font-bold text-xs xs:text-sm sm:text-base text-neutral-300 text-center mt-4 max-w-3xl leading-relaxed"
        >
          Você receberá as chaves mentais exatas de escuta ativa e recondicionamento comportamental. Tudo planejado para você <span className="text-[#FFD700] font-black underline decoration-[#FFD700] decoration-2">recuperar o controle absoluto da sua própria casa de forma pacífica, rápida e definitiva</span>.
        </motion.p>

        {/* Deliverables representation - styled with high contrast dark cards and gold borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-2xl mt-10">
          <div className="bg-neutral-900 p-5 rounded-2xl border border-neutral-800 shadow-[0px_8px_24px_rgba(0,0,0,0.3)] flex items-start gap-4 hover:border-[#FFD700]/30 transition-colors duration-200">
            <span className="text-2xl bg-neutral-950 p-2.5 rounded-xl border border-neutral-800">🎧</span>
            <div>
              <h4 className="font-montserrat font-black text-xs sm:text-sm text-[#FFD700] uppercase tracking-tight">ÁUDIOS DE SINTONIA PRÁTICA</h4>
              <p className="font-opensans text-[11px] sm:text-xs text-neutral-400 mt-1 font-semibold leading-relaxed">Lições objetivas direto ao ponto, perfeitas para ouvir em alta velocidade no celular.</p>
            </div>
          </div>

          <div className="bg-neutral-900 p-5 rounded-2xl border border-neutral-800 shadow-[0px_8px_24px_rgba(0,0,0,0.3)] flex items-start gap-4 hover:border-[#FFD700]/30 transition-colors duration-200">
            <span className="text-2xl bg-neutral-950 p-2.5 rounded-xl border border-neutral-800">📘</span>
            <div>
              <h4 className="font-montserrat font-black text-xs sm:text-sm text-[#FFD700] uppercase tracking-tight">MANUAIS DE CONSULTA RÁPIDA</h4>
              <p className="font-opensans text-[11px] sm:text-xs text-neutral-400 mt-1 font-semibold leading-relaxed">Mapas conceituais, checklists e scripts prontos em PDF no seu WhatsApp.</p>
            </div>
          </div>
        </div>

        {/* Visual Header for the 6 bonuses */}
        <div className="w-full max-w-3xl mt-16 pt-12 border-t border-neutral-800">
          <div className="text-center mb-10">
            <span className="bg-neutral-900 text-[#FFD700] text-[10px] font-black px-4 py-2 border border-[#FFD700]/30 rounded-full uppercase tracking-widest font-montserrat shadow-[0px_4px_12px_rgba(255,215,0,0.05)]">
              CONJUNTO DE ELITE • INCLUSO HOJE
            </span>
            <h3 className="font-montserrat font-black text-xl sm:text-2xl md:text-3xl text-white mt-4 uppercase tracking-tight">
              🎁 E mais 6 Códigos Secretos de Bônus:
            </h3>
            <p className="font-opensans font-bold text-xs sm:text-sm text-neutral-400 mt-2">
              Sua caixa de ferramentas completa para resolver qualquer crise comportamental:
            </p>
          </div>

          {/* Bonus List - stylized card with sharp borders and gold hover details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {bonuses.map((bonus, idx) => {
              const IconComp = bonus.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className="bg-neutral-900 p-5 rounded-2xl border border-neutral-800 text-left shadow-[0px_8px_24px_rgba(0,0,0,0.3)] hover:border-[#FFD700]/40 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-[#FFD700] mb-4">
                    <IconComp className="w-4.5 h-4.5 stroke-[2.5]" />
                  </div>
                  <h4 className="font-montserrat font-black text-xs sm:text-sm text-white uppercase tracking-tight leading-tight">
                    {bonus.title}
                  </h4>
                  <p className="font-opensans font-semibold text-[11px] sm:text-xs text-neutral-400 mt-2 leading-relaxed">
                    {bonus.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
