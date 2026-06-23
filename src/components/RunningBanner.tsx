import { Sparkles } from "lucide-react";

export default function RunningBanner() {
  const words = [
    "Albi International",
    "Protection Solaire",
    "Inclusion & Équité",
    "Sensibilisation",
    "Non à la Stigmatisation",
    "Soutenir & Aider",
    "Droit à la Santé",
    "Kits Scolaires"
  ];

  return (
    <div className="w-full bg-[var(--color-brand-dark)] py-3.5 border-y border-zinc-800 overflow-hidden flex whitespace-nowrap">
      <div className="flex animate-marquee">
        {words.map((word, index) => (
          <div key={index} className="flex items-center gap-4.5 mx-6">
            <span className="font-display font-black text-xs md:text-sm tracking-widest uppercase text-[var(--color-brand-olive-light)] select-none">
              {word}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
          </div>
        ))}
      </div>
      <div className="flex animate-marquee" aria-hidden="true">
        {words.map((word, index) => (
          <div key={`dup-${index}`} className="flex items-center gap-4.5 mx-6">
            <span className="font-display font-black text-xs md:text-sm tracking-widest uppercase text-[var(--color-brand-olive-light)] select-none">
              {word}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
