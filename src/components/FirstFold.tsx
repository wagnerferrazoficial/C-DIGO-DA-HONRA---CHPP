import { motion } from "motion/react";
import { ArrowDown, AlertTriangle, ShieldCheck, Sparkles, Volume2, Flame } from "lucide-react";

export default function FirstFold() {
  const handleScrollToOffer = () => {
    const target = document.getElementById("second-fold");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const steps = [
    {
      icon: "🚨",
      title: "1. O Gatilho da Rejeição",
      desc: "Você faz uma solicitação simples. Mas o cérebro do seu filho já foi condicionado a interpretar sua fala mansa como 'opcional'."
    },
    {
      icon: "🌋",
      title: "2. A Explosão Inevitável",
      desc: "Você repete 3, 5, 10 vezes. A adrenalina sobe, você perde o controle e apela para o grito. Só aí ele se move (por medo, não por respeito)."
    },
    {
      icon: "💔",
      title: "3. O Veneno da Culpa",
      desc: "Após a tempestade, fica um silêncio hostil no ar. Você se sente um fracasso completo, enquanto o vínculo emocional se quebra mais um pouco."
    },
    {
      icon: "🌀",
      title: "4. A Espiral Infinita",
      desc: "No dia seguinte, tudo se repete. Quanto mais você grita, mais o seu filho se anestesia contra a sua voz, destruindo sua autoridade."
    }
  ];

  return (
    <section 
      id="first-fold" 
      className="w-full bg-neutral-950 text-white py-10 sm:py-16 px-5 sm:px-8 md:px-12 max-w-4xl mx-auto flex flex-col items-center select-none border-b-4 border-black"
    >
      {/* High-Converting Social Proof Banner (Finch Style - Gold Outline & Glossy Dark Card) */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 bg-neutral-900/80 border-2 border-[#FFD700] px-5 py-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(255,215,0,0.25)] max-w-xl w-full"
      >
        {/* Overlapping Avatar Group with Golden Outline */}
        <div className="flex -space-x-3.5 shrink-0">
          <img className="w-9 h-9 rounded-full border-2 border-[#FFD700] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Pais" referrerPolicy="no-referrer" />
          <img className="w-9 h-9 rounded-full border-2 border-[#FFD700] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Pais" referrerPolicy="no-referrer" />
          <img className="w-9 h-9 rounded-full border-2 border-[#FFD700] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Pais" referrerPolicy="no-referrer" />
          <img className="w-9 h-9 rounded-full border-2 border-[#FFD700] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Pais" referrerPolicy="no-referrer" />
          <img className="w-9 h-9 rounded-full border-2 border-[#FFD700] object-cover" src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=100&q=80" alt="Pais" referrerPolicy="no-referrer" />
        </div>

        {/* Stars and Trust Rating Statement */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-0.5">
          <div className="flex items-center gap-2">
            <div className="flex text-[#FFD700]">
              {"★★★★★".split("").map((star, i) => (
                <span key={i} className="text-sm tracking-tighter drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)]">★</span>
              ))}
            </div>
            <span className="font-montserrat font-black text-xs sm:text-sm text-[#FFD700] tracking-wide">
              4.8/5 ESTRELAS
            </span>
          </div>
          <p className="font-opensans font-extrabold text-[11px] sm:text-xs text-neutral-200 leading-tight">
            Mais de <span className="text-[#FFD700] font-black underline decoration-[#FFD700] decoration-1">1.247 Pais e Mães</span> saíram do caos absoluto para o respeito imediato
          </p>
        </div>
      </motion.div>

      {/* Flag / Hook statement */}
      <span className="font-montserrat font-black text-[10px] sm:text-xs text-[#FFD700] bg-neutral-900 px-3.5 py-1.5 border border-[#FFD700]/30 rounded-full tracking-widest uppercase mb-4 flex items-center gap-1.5 shadow-[2px_2px_8px_rgba(255,215,0,0.1)]">
        <Sparkles className="w-3.5 h-3.5 text-[#FFD700] fill-[#FFD700]" />
        CÓDIGO OCULTO DE AUTORIDADE FAMILIAR
      </span>

      {/* Primary Headline: All Caps, Black, Montserrat ExtraBold (Finch Style - Highly Emotional Hook) */}
      <motion.h1 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-montserrat font-black text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white leading-tight tracking-tight uppercase max-w-3xl"
      >
        Seu filho <span className="text-[#FF0000] underline decoration-[#FF0000] decoration-3">não desobedece você</span> por acaso. Ele foi psicologicamente condicionado a rejeitar a sua autoridade.
      </motion.h1>

      {/* Image below headline, above subheadline - optimized for mobile devices */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[440px] mt-6 mb-6 border-4 border-[#FFD700] rounded-2xl overflow-hidden shadow-[0px_0px_20px_rgba(255,215,0,0.2)] bg-neutral-900"
      >
        <img 
          src="https://i.postimg.cc/3wgmM7zS/Chat-GPT-Image-12-de-jul-de-2026-19-43-48.png" 
          alt="Treinamento Código Honra" 
          referrerPolicy="no-referrer"
          className="w-full h-auto object-cover block"
        />
      </motion.div>

      {/* Subheadline (Albuquerque Unique Mechanism / Secret Hook Style) */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-opensans font-bold text-xs xs:text-sm sm:text-base md:text-lg text-neutral-300 text-center mt-3 max-w-2xl leading-relaxed"
      >
        Gritos, punições duras e conversas amigáveis não funcionam porque o cérebro infantil cria uma blindagem biológica contra a irritação dos pais. Para quebrar essa barreira, você só precisa dominar o <span className="text-[#FFD700] font-black underline decoration-[#FFD700] decoration-2">Código Secreto de Comunicação Positiva</span> de 12 segundos.
      </motion.p>

      {/* DISRUPTIVE SECTION: O Ciclo do Desgaste Diário (Extremely relatable for parents 25-44) */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-2xl mt-10 p-5 xs:p-6 bg-neutral-900 border-2 border-[#FFD700]/50 rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.5)] flex flex-col items-center"
      >
        <div className="flex items-center gap-1.5 bg-[#FF0000] text-white px-3.5 py-1.5 border border-black rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <AlertTriangle className="w-3.5 h-3.5 text-white" />
          <span>ALERTA DE DESGASTE EMOCIONAL</span>
        </div>
        
        <h3 className="font-montserrat font-black text-xs xs:text-sm sm:text-base text-white text-center uppercase tracking-tight mb-6">
          Quantas vezes você passou por essa espiral de exaustão nas últimas 48 horas?
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {steps.map((st, i) => (
            <div key={i} className="bg-neutral-950 p-4 border border-neutral-800 rounded-xl flex items-start gap-3 hover:border-[#FFD700]/40 transition-colors duration-200">
              <span className="text-xl shrink-0 mt-0.5">{st.icon}</span>
              <div className="text-left">
                <h4 className="font-montserrat font-black text-[11px] sm:text-xs text-[#FFD700] leading-tight uppercase tracking-tight">{st.title}</h4>
                <p className="font-opensans font-semibold text-[10px] sm:text-[11px] text-neutral-400 mt-1 leading-snug">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Warning Message */}
        <p className="font-opensans font-black text-[10px] sm:text-xs text-center text-[#FF5252] mt-6 leading-tight uppercase tracking-widest px-2 flex items-center gap-1.5 justify-center">
          <Flame className="w-3.5 h-3.5 animate-pulse shrink-0" />
          Sua paz familiar não pode ser negociada. Mude o padrão hoje.
        </p>

        {/* Immediate CTA to get maximum low-ticket conversion */}
        <button
          onClick={handleScrollToOffer}
          className="w-full max-w-md bg-[#FFD700] hover:bg-[#FFE033] text-black font-montserrat font-black text-xs sm:text-sm py-4.5 px-6 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all duration-100 cursor-pointer uppercase tracking-wider mt-6 flex items-center justify-center gap-2.5 animate-pulse"
        >
          <span>QUERO QUEBRAR ESSE CICLO POR R$ 17</span>
          <ArrowDown className="w-4 h-4 stroke-[3]" />
        </button>
      </motion.div>
    </section>
  );
}
