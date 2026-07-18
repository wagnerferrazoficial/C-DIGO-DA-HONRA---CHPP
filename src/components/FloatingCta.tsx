import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

interface FloatingCtaProps {
  onClick: () => void;
}

export default function FloatingCta({ onClick }: FloatingCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls down past 500px (past the first fold)
      if (window.scrollY > 550) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-neutral-950 border-t-3 border-black p-3 flex items-center justify-between shadow-[0_-4px_12px_rgba(0,0,0,0.15)] sm:hidden"
        >
          {/* Price and trust signals on left */}
          <div className="flex flex-col items-start pl-1 justify-center">
            <div className="flex items-center gap-1">
              <span className="text-red-500 font-extrabold text-[9px] line-through">R$ 97</span>
              <span className="text-[#25D366] font-black text-sm uppercase tracking-tight">R$ 17,00</span>
            </div>
            <span className="text-[8px] text-neutral-400 font-montserrat font-extrabold uppercase tracking-widest flex items-center gap-0.5 mt-0.5">
              <Sparkles className="w-2.5 h-2.5 text-[#FFD700] fill-[#FFD700]" /> ACESSO VITALÍCIO
            </span>
          </div>

          {/* Glowing/blinking Yellow Call-To-Action Button */}
          <button
            onClick={onClick}
            className="bg-[#FFD700] hover:bg-[#FFE033] text-black font-montserrat font-black text-[11px] xxs:text-xs py-2.5 px-4.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all duration-100 uppercase tracking-wider flex items-center gap-1.5 animate-pulse"
          >
            QUERO O MÉTODO
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
