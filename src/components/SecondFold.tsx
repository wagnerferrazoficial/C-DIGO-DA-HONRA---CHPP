import { BookOpen, CheckCircle, Smartphone, Flame, Headphones, Zap, ShieldCheck, Play } from "lucide-react";
import { motion } from "motion/react";

interface SecondFoldProps {
  onCtaClick: () => void;
}

export default function SecondFold({ onCtaClick }: SecondFoldProps) {
  return (
    <section 
      id="second-fold" 
      className="w-full bg-neutral-900 text-white py-14 sm:py-20 px-5 sm:px-8 md:px-12 select-none border-b-4 border-black relative overflow-hidden"
    >
      {/* Decorative premium element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Flag badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-4 py-1.5 border border-black rounded-lg shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] mb-6"
        >
          <Play className="w-3 h-3 fill-black shrink-0" />
          <span>APRESENTANDO O PROTOCOLO DE AUTORIDADE</span>
        </motion.div>

        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-montserrat font-black text-2xl xs:text-3xl sm:text-4xl text-center text-white leading-tight uppercase tracking-tight max-w-2xl"
        >
          TREINAMENTO <span className="text-[#FFD700] underline decoration-[#FFD700] decoration-2">CÓDIGO HONRA</span>
        </motion.h2>

        {/* Short explanation */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-opensans font-bold text-xs xs:text-sm sm:text-base text-neutral-300 text-center mt-4 max-w-xl leading-relaxed"
        >
          O único protocolo estratégico em áudios rápidos e checklists de ação imediata que desliga o comportamento rebelde do seu filho e reconecta o amor, o respeito e a admiração mútua de forma natural.
        </motion.p>

        {/* WHY IT WORKS SECTION (Direct response trigger for busy parents 25-44) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mt-10 mb-12 max-w-3xl">
          <div className="bg-neutral-950 border border-neutral-800 p-5 rounded-2xl text-left hover:border-[#FFD700]/30 transition-all duration-200">
            <div className="text-[#FFD700] mb-3 flex items-center gap-1.5 font-montserrat font-black text-[10px] uppercase tracking-widest">
              <Headphones className="w-4 h-4 text-[#FFD700]" />
              <span>SISTEMA ULTRA-PRÁTICO</span>
            </div>
            <h4 className="font-montserrat font-black text-xs sm:text-sm text-white uppercase tracking-tight mb-2">ÁUDIOS DE 15 MINUTOS</h4>
            <p className="font-opensans text-[11px] sm:text-xs text-neutral-400 font-semibold leading-relaxed">
              Desenvolvido sob medida para pais extremamente ocupados. Escute no trânsito, lavando a louça ou antes de dormir e aplique na hora.
            </p>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 p-5 rounded-2xl text-left hover:border-[#FFD700]/30 transition-all duration-200">
            <div className="text-[#FFD700] mb-3 flex items-center gap-1.5 font-montserrat font-black text-[10px] uppercase tracking-widest">
              <Zap className="w-4 h-4 text-[#FFD700]" />
              <span>SCRIPTS PRONTOS</span>
            </div>
            <h4 className="font-montserrat font-black text-xs sm:text-sm text-white uppercase tracking-tight mb-2">FALE DE FORMA HIPNÓTICA</h4>
            <p className="font-opensans text-[11px] sm:text-xs text-neutral-400 font-semibold leading-relaxed">
              Você saberá o tom exato, as palavras magnéticas e a linguagem corporal que desarmam qualquer pirraça ou teimosia de primeira.
            </p>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 p-5 rounded-2xl text-left hover:border-[#FFD700]/30 transition-all duration-200">
            <div className="text-[#FFD700] mb-3 flex items-center gap-1.5 font-montserrat font-black text-[10px] uppercase tracking-widest">
              <Flame className="w-4 h-4 text-[#FFD700]" />
              <span>RESTAURAÇÃO PROFUNDA</span>
            </div>
            <h4 className="font-montserrat font-black text-xs sm:text-sm text-white uppercase tracking-tight mb-2">SEM BRIGAS OU CASTIGOS</h4>
            <p className="font-opensans text-[11px] sm:text-xs text-neutral-400 font-semibold leading-relaxed">
              Nada de gritos humilhantes ou agressões. Recupere o respeito restaurando o afeto, a segurança e a maturidade emocional do seu filho.
            </p>
          </div>
        </div>

        {/* Product Offer Box with Finch Premium Frame Style */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg bg-neutral-950 border-3 border-[#FFD700] rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-[0px_0px_30px_rgba(255,215,0,0.15)]"
        >
          <span className="bg-neutral-900 text-neutral-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-neutral-800">
            PRODUÇÃO EXCLUSIVA • ACESSO IMEDIATO
          </span>
          
          <h3 className="font-montserrat font-black text-lg sm:text-xl md:text-2xl text-white mt-4 uppercase leading-tight tracking-tight">
            O QUE VOCÊ VAI ADQUIRIR AGORA:
          </h3>

          <div className="w-16 h-1.5 bg-[#FFD700] rounded-full my-4" />

          {/* Value inclusions list */}
          <div className="flex flex-col gap-3 w-full max-w-md bg-neutral-900/60 p-4 rounded-2xl border border-neutral-800 mb-6">
            <div className="flex items-center gap-3 text-left">
              <CheckCircle className="text-[#25D366] w-5 h-5 shrink-0 stroke-[2.5]" />
              <span className="font-montserrat font-bold text-[12px] sm:text-[13px] text-white leading-tight">
                Método Completo Código Honra em Áudio <span className="text-[#FFD700] font-black">(Valor Real R$ 97)</span>
              </span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <CheckCircle className="text-[#25D366] w-5 h-5 shrink-0 stroke-[2.5]" />
              <span className="font-montserrat font-bold text-[12px] sm:text-[13px] text-white leading-tight">
                Manual Prático Paternidade com Propósito PDF <span className="text-[#FFD700] font-black">(Valor Real R$ 47)</span>
              </span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <CheckCircle className="text-[#25D366] w-5 h-5 shrink-0 stroke-[2.5]" />
              <span className="font-montserrat font-bold text-[12px] sm:text-[13px] text-white leading-tight">
                6 Guias Rápidos de Ação Pessoal <span className="text-[#FFD700] font-black">(Bônus Grátis)</span>
              </span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <CheckCircle className="text-[#25D366] w-5 h-5 shrink-0 stroke-[2.5]" />
              <span className="font-montserrat font-bold text-[12px] sm:text-[13px] text-white leading-tight">
                Acesso Vitalício, Sem Mensalidades <span className="text-[#FFD700] font-black">(Inestimável)</span>
              </span>
            </div>
          </div>

          {/* Premium Low-Ticket Pricing display */}
          <div className="flex flex-col items-center mb-6">
            <span className="font-montserrat font-bold text-xs sm:text-sm text-neutral-500 uppercase tracking-wider line-through">
              De R$ 147,00
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="font-montserrat font-bold text-sm sm:text-base text-[#25D366] uppercase">Por apenas</span>
              <span className="font-montserrat font-black text-3xl sm:text-4xl text-[#25D366] tracking-tight">R$ 17,00</span>
            </div>
            <span className="font-montserrat font-extrabold text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-widest mt-1">
              *Pagamento Único • Sem Taxas Ocultas*
            </span>
          </div>

          {/* Yellow CTA pulse button */}
          <button
            onClick={onCtaClick}
            className="w-full bg-[#FFD700] hover:bg-[#FFE033] text-black font-montserrat font-black text-xs sm:text-sm py-4 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all duration-100 uppercase tracking-wider flex items-center justify-center gap-2 animate-bounce cursor-pointer"
          >
            <span>SIM! QUERO ADQUIRIR O CÓDIGO HONRA</span>
          </button>

          {/* Trust assurances */}
          <div className="flex items-center justify-center gap-4 mt-4 text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" /> Compra 100% Segura
            </span>
            <span>•</span>
            <span>7 Dias de Garantia Dupla</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
