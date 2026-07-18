import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FaqItemProps {
  key?: any;
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900/60 shadow-[0px_4px_16px_rgba(0,0,0,0.2)] hover:border-[#FFD700]/30 transition-all duration-150">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex items-center justify-between text-left font-montserrat font-black text-xs sm:text-sm text-white select-none gap-3 focus:outline-none"
      >
        <span className="leading-snug uppercase tracking-tight">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 stroke-[2.5] text-[#FFD700] shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`} 
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 pt-1 border-t border-neutral-800/60 font-opensans text-xs sm:text-sm text-neutral-300 leading-relaxed font-semibold">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const faqs = [
    {
      question: "O que é exatamente o Treinamento Código Honra?",
      answer: "É um treinamento digital 100% focado na prática, entregue em áudios de curta duração (perfeitos para ouvir na correria do dia a dia) e materiais em PDF de consulta rápida. Ele te entrega um plano estratégico de comunicação de autoridade para desarmar a desobediência e pirraça do seu filho na primeira vez que você falar, sem brigas ou estresse.",
    },
    {
      question: "Como e quando eu vou receber o acesso?",
      answer: "O envio é imediato após a aprovação do seu pagamento. Você receberá um e-mail com as instruções de login e também um link direto no seu WhatsApp para acessar a plataforma de membros com todos os áudios e PDFs. Pagamentos feitos por Pix ou Cartão são aprovados em menos de 1 minuto.",
    },
    {
      question: "Funciona para filhos de qualquer idade?",
      answer: "Sim! As chaves de conexão emocional, limites e autoridade ensinadas no treinamento são universais e aplicáveis para crianças a partir de 3 anos (quando começam a expressar vontades próprias mais intensas) até adolescentes de 17 anos (onde a quebra de barreira na comunicação é essencial).",
    },
    {
      question: "Por que custa apenas R$ 17,00? Tem alguma pegadinha?",
      answer: "Nenhuma pegadinha. Nosso objetivo com este valor simbólico de 'low ticket' é permitir que qualquer pai ou mãe do Brasil, independentemente da condição financeira, tenha acesso ao nosso método de transformação familiar. Queremos ajudar a resgatar o maior número possível de lares do desgaste emocional da gritaria diária.",
    },
    {
      question: "O acesso tem prazo ou é vitalício?",
      answer: "O seu acesso é vitalício! Você faz o pagamento único de R$ 17,00 (sem mensalidades ocultas ou assinaturas) e o conteúdo será seu para sempre. Você poderá estudar, baixar os materiais e revisar o passo a passo quantas vezes quiser ao longo do crescimento do seu filho.",
    },
    {
      question: "E se eu comprar e achar que não serve para mim?",
      answer: "Seu risco é zero. Nós confiamos tanto na transformação que o Código Honra gera que oferecemos uma Garantia Dupla: você tem 7 dias incondicionais para pedir todo o seu dinheiro de volta se não gostar da voz, do material ou de qualquer detalhe. Além disso, oferecemos suporte próximo para te apoiar em qualquer dúvida.",
    },
  ];

  return (
    <section id="faq-section" className="w-full bg-neutral-950 text-white py-16 px-5 sm:px-8 md:px-12 border-b-4 border-black select-none">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1.5 border border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
            <HelpCircle className="w-4 h-4 shrink-0" />
            <span>OBJEÇÕES & DÚVIDAS RESOVIDAS</span>
          </div>
          <h2 className="font-montserrat font-black text-2xl xs:text-3xl sm:text-4xl text-white mt-5 leading-tight tracking-tight uppercase">
            Perguntas Frequentes dos Pais
          </h2>
          <p className="font-opensans font-bold text-xs sm:text-sm text-neutral-400 mt-2 max-w-lg mx-auto">
            Tem alguma dúvida sobre o método? Veja as respostas diretas e transparentes para as suas principais perguntas abaixo:
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
