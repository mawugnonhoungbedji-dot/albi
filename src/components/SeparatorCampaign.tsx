import { Sun } from "lucide-react";

export default function SeparatorCampaign() {
  return (
    <section id="campaigns" className="w-full bg-[var(--color-brand-beige)] py-12 overflow-hidden border-b border-zinc-200/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-row items-center justify-center gap-4 md:gap-8 flex-wrap md:flex-nowrap">
        
        {/* Left Sun block & ALBI lettering */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-[var(--color-brand-olive-light)] flex items-center justify-center text-[var(--color-brand-olive-dense)] shadow-xs shrink-0 animate-bounce">
            <Sun className="w-5 h-5 text-[var(--color-brand-dark)]" />
          </div>
          <span className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-dark)] to-[var(--color-brand-olive)] select-none uppercase">
            Albi
          </span>
        </div>

        {/* Central circular sunscreen still life mask */}
        <div className="relative w-36 h-36 md:w-56 md:h-56 shrink-0 rounded-full overflow-hidden border-8 border-white shadow-xl hover:scale-105 transition-all duration-300">
          <img
            src="/images/albi_sun_cream_sage_1781884128743.webp"
            alt="Écran d'albi et chapeau de soleil"
            loading="lazy"
            decoding="async"
            width={400}
            height={400}
            className="w-full h-full object-cover animate-[spin_50s_linear_infinite]"
          />
          <div className="absolute inset-0 bg-radial-gradient-to-tr from-[var(--color-brand-dark)]/10 to-transparent pointer-events-none" />
        </div>

        {/* Right ACTION lettering */}
        <div>
          <span className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tighter text-[var(--color-brand-dark)] select-none uppercase">
            Action
          </span>
        </div>

      </div>
    </section>
  );
}
