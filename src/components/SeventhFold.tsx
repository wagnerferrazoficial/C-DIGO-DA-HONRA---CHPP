import { CheckCircle2, ShieldCheck, CreditCard } from "lucide-react";
import { motion } from "motion/react";

interface SeventhFoldProps {
  onCtaClick: () => void;
}

export default function SeventhFold({ onCtaClick }: SeventhFoldProps) {
  return (
    <section 
      id="checkout-fold" 
      className="w-full bg-neutral-950 text-white py-16 sm:py-24 px-5 sm:px-8 md:px-12 select-none border-b-4 border-black relative overflow-hidden"
    >
      {/* Decorative premium element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-opensans font-black text-xl sm:text-2xl md:text-3xl text-white uppercase tracking-wider text-center mb-8"
        >
          GARANTA A MELHOR OFERTA HOJE
        </motion.h2>

        {/* Black Card stacked on top of the dark background */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl bg-neutral-900 text-white rounded-3xl p-6 sm:p-10 flex flex-col items-center shadow-[0px_12px_40px_rgba(0,0,0,0.6)] border-2 border-[#FFD700]/50"
        >
          {/* Sub-block yellow with black letters */}
          <div className="bg-[#FFD700] text-black font-montserrat font-black text-[12px] xxs:text-[14px] xs:text-[15px] sm:text-base px-5 py-2.5 rounded-xl border border-black uppercase tracking-widest whitespace-nowrap mb-6 shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
            ACESSO IMEDIATO
          </div>

          {/* O QUE ESTÁ INCLUÍDO */}
          <h3 className="font-opensans font-extrabold text-sm sm:text-base text-[#FFD700] uppercase tracking-wider mb-6">
            O QUE VOCÊ VAI RECEBER IMEDIATAMENTE:
          </h3>

          {/* WhatsApp green ticket items, white text */}
          <div className="w-full max-w-md bg-neutral-950 p-5 rounded-2xl border border-neutral-800 mb-8 flex flex-col gap-4">
            <div className="flex items-start gap-3 text-left">
              <CheckCircle2 className="text-[#25D366] w-5 h-5 shrink-0 mt-0.5 stroke-[3]" />
              <span className="font-montserrat font-bold text-xs sm:text-sm text-neutral-200">
                Acesso vitalício ao Treinamento Código Honra
              </span>
            </div>
            
            <div className="flex items-start gap-3 text-left">
              <CheckCircle2 className="text-[#25D366] w-5 h-5 shrink-0 mt-0.5 stroke-[3]" />
              <span className="font-montserrat font-bold text-xs sm:text-sm text-neutral-200">
                Treinamento completo Paternidade com Propósito
              </span>
            </div>

            <div className="flex items-start gap-3 text-left">
              <CheckCircle2 className="text-[#25D366] w-5 h-5 shrink-0 mt-0.5 stroke-[3]" />
              <span className="font-montserrat font-bold text-xs sm:text-sm text-neutral-200">
                Todos os 6 Códigos de Bônus inclusos
              </span>
            </div>

            <div className="flex items-start gap-3 text-left">
              <CheckCircle2 className="text-[#25D366] w-5 h-5 shrink-0 mt-0.5 stroke-[3]" />
              <span className="font-montserrat font-bold text-xs sm:text-sm text-neutral-200">
                Áudios práticos para celular + PDFs de apoio
              </span>
            </div>
          </div>

          {/* Value comparison */}
          <div className="text-center mb-2">
            <span className="font-opensans text-neutral-500 line-through text-xs sm:text-sm font-bold">
              De R$ 147,00
            </span>
          </div>

          {/* POR R$ 17,00 in WhatsApp Green */}
          <div className="text-center mb-8">
            <span className="font-opensans font-black text-xs sm:text-sm text-neutral-400 block tracking-widest uppercase">
              HOJE APENAS
            </span>
            <span className="font-montserrat font-black text-5xl xxs:text-6xl sm:text-7xl md:text-8xl text-[#25D366] tracking-tight block mt-1 drop-shadow-[0px_4px_12px_rgba(37,211,102,0.2)]">
              R$ 17,00
            </span>
            <span className="font-opensans font-extrabold text-[10px] sm:text-xs text-[#FFD700] mt-2 block uppercase tracking-widest">
              Pagamento único • Sem mensalidades
            </span>
          </div>

          {/* Yellow Rectangle Button */}
          <button
            onClick={onCtaClick}
            id="cta-button-seventh"
            className="w-full bg-[#FFD700] hover:bg-[#FFE033] text-black font-opensans font-extrabold text-xs xs:text-sm sm:text-base py-4.5 px-6 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all duration-100 cursor-pointer uppercase tracking-wider"
          >
            {/* Exactly two lines on mobile, single line or two on desktop */}
            <span className="block sm:hidden leading-tight">
              CLIQUE AQUI<br />PARA LIBERAR SEU ACESSO
            </span>
            <span className="hidden sm:block">
              CLIQUE AQUI PARA LIBERAR SEU ACESSO
            </span>
          </button>

          {/* Payment badges & details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-neutral-400 text-[10px] font-opensans font-bold uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              <span>Garantia de 7 Dias Incondicional</span>
            </div>
            <div className="hidden sm:block text-neutral-700">•</div>
            <div className="flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-[#FFD700]" />
              <span>Acesso Imediato Liberado</span>
            </div>
          </div>

        </motion.div>

        {/* Double Guarantee section under checkout card */}
        <div className="w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 mt-10 text-left shadow-[0px_8px_32px_rgba(0,0,0,0.5)]">
          <h4 className="font-montserrat font-black text-sm sm:text-base text-[#FFD700] uppercase tracking-wider mb-4 flex items-center gap-2">
            🛡️ GARANTIA DUPLA DE SATISFAÇÃO
          </h4>
          <div className="space-y-4 font-opensans text-xs sm:text-sm text-neutral-300">
            <p className="leading-relaxed">
              <strong>✔ 7 dias incondicional:</strong> Se por qualquer motivo você não gostar do conteúdo ou achar que não é para você, basta nos enviar um e-mail em até 7 dias e devolveremos 100% do seu dinheiro. Sem perguntas.
            </p>
            <p className="leading-relaxed">
              <strong>✔ 90 dias condicional:</strong> Se você aplicar o método passo a passo durante 90 dias e não ver nenhuma mudança prática no respeito do seu filho dentro de casa, basta falar conosco. Nós devolvemos todo o seu valor investido. O risco é todo nosso.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
