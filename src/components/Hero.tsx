import { ArrowUpRight, ArrowDownLeft, Sparkles, Lightbulb, Share2, Sun, Heart, Eye } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onLearnMoreClick: () => void;
  onShareClick: () => void;
}

export default function Hero({ onLearnMoreClick, onShareClick }: HeroProps) {
  return (
    <section className="relative px-4 md:px-8 pt-8 pb-16 overflow-hidden max-w-7xl mx-auto">
      
      {/* Decorative background vectors/orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-brand-olive-light)]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-[var(--color-brand-olive)]/15 rounded-full blur-3xl -z-10" />

      {/* Floating Badges (Desktop) */}
      <div className="hidden lg:block absolute left-8 top-12">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 bg-[var(--color-brand-olive-light)] rounded-full flex items-center justify-center border border-zinc-200/50 shadow-sm"
        >
          <Sun className="w-5 h-5 text-[var(--color-brand-dark)]" />
        </motion.div>
      </div>
      
      <div className="hidden lg:block absolute left-24 top-28">
        <motion.div
          animate={{ y: [-10, 0, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-10 h-10 bg-[var(--color-brand-dark)] text-white rounded-full flex items-center justify-center shadow-lg"
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>
      </div>

      <div className="hidden lg:block absolute right-16 top-16">
        <div className="flex gap-3 items-center">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 bg-[var(--color-brand-olive-pale)] rounded-full flex items-center justify-center border border-[var(--color-brand-olive)] shadow-sm"
          >
            <Lightbulb className="w-5 h-5 text-[var(--color-brand-dark)]" />
          </motion.div>
          <div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center text-[var(--color-brand-dark)]">
            <ArrowDownLeft className="w-5 h-5 text-[var(--color-brand-text-muted)]" />
          </div>
        </div>
      </div>

      {/* Main Hero Header Section */}
      <div className="text-center md:pt-6 pb-12">
        
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 14 }}
          className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight lg:tracking-tighter text-[var(--color-brand-dark)] max-w-4xl mx-auto leading-[1.1] md:leading-[1.12]"
        >
          Agissons pour les droits{" "}
          <motion.span 
            initial={{ scale: 0.9, rotate: -2 }}
            animate={{ scale: 1, rotate: -1 }}
            transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.1 }}
            className="inline-block relative px-5 py-0.5 bg-[var(--color-brand-olive-pale)] text-[var(--color-brand-dark)] border border-[var(--color-brand-olive)] rounded-full shadow-sm"
          >
            et la dignité
          </motion.span>{" "}
          <br />
          des albinos au Bénin
        </motion.h1>

        {/* Sub-header / Row info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 max-w-4xl mx-auto text-left border-t border-zinc-200/50 pt-8"
        >
          
          <div className="max-w-md">
            <p className="text-stone-650 text-sm md:text-base leading-relaxed font-medium">
              Albi International défend les droits des personnes atteintes d'albinisme au Bénin. Chaque année, grâce à vos dons, nous distribuons des kits de protection solaire SPF 50+ et des fournitures scolaires adaptées à des enfants albinos vulnérables à Cotonou et Porto-Novo. Ensemble, luttons contre l'exclusion et le cancer de la peau — une vie sauvable à la fois.
            </p>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              onClick={onLearnMoreClick}
              className="group bg-[var(--color-brand-olive)] hover:bg-[var(--color-brand-olive-dense)] text-[var(--color-brand-dark)] hover:text-white font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-full flex items-center gap-3.5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              En savoir plus
              <div className="w-6 h-6 rounded-full bg-[var(--color-brand-dark)] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-brand-olive-light)]" />
              </div>
            </motion.button>
          </div>

        </motion.div>

      </div>

      {/* Grid of the 5 Custom Cards */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-12 gap-5.5 items-stretch mt-6"
      >
        
        {/* Card 1: Small Abstract Square Pattern */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 18 } }
          }}
          whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.3 } }}
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(15, 22, 15, 0.82) 0%, rgba(15, 22, 15, 0.9) 100%), url('/images/volunteers_park_1781879709971.webp')"
          }}
          className="md:col-span-2 bg-cover bg-center rounded-[2rem] min-h-[160px] md:min-h-auto relative overflow-hidden group flex items-center justify-center border border-zinc-850 shadow-md transition-shadow duration-300"
        >
          <div className="absolute inset-0 bg-[var(--color-brand-olive-light)]/10 mix-blend-multiply opacity-60" />
          
          <div className="relative z-10 w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-md border border-white/20 group-hover:scale-110 transition-transform duration-500">
            <div className="relative w-8 h-8 flex flex-col justify-between">
              <div className="flex justify-between">
                <div className="w-3.5 h-3.5 bg-white rounded-sm" />
                <div className="w-3.5 h-3.5 bg-[var(--color-brand-olive-light)] rounded-sm" />
              </div>
              <div className="flex justify-between">
                <div className="w-3.5 h-3.5 bg-[var(--color-brand-olive)] rounded-sm" />
                <div className="w-3.5 h-3.5 bg-white rounded-sm" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Metrics / Highlights Card */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 18 } }
          }}
          whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.3 } }}
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(10, 15, 12, 0.91) 0%, rgba(10, 15, 12, 0.96) 100%), url('/images/albi_sun_cream_sage_1781884128743.webp')"
          }}
          className="md:col-span-3 bg-cover bg-center border border-zinc-800 rounded-[2rem] p-7 flex flex-col justify-between gap-6 shadow-md hover:shadow-xl transition-shadow duration-500 text-white"
        >
          <div className="relative z-10">
            <span className="font-display font-black text-2xl lg:text-3xl text-[var(--color-brand-olive-light)] tracking-tight leading-tight block">
              +500 dons
            </span>
            <p className="text-zinc-200 text-[11px] lg:text-xs mt-2 font-normal leading-relaxed">
              De tubes de crème solaire protectrice à fort indice d'UV distribués gratuitement aux familles béninoises vulnérables.
            </p>
          </div>
          
          <div className="h-[1px] bg-zinc-800/60 relative z-10" />

          <div className="relative z-10">
            <span className="font-display font-black text-2xl lg:text-3xl text-[var(--color-brand-olive-light)] tracking-tight leading-tight block">
              3 programmes
            </span>
            <p className="text-zinc-200 text-[11px] lg:text-xs mt-2 font-normal leading-relaxed">
              La distribution annuelle de kits scolaires adaptés, le Noël d'inclusion des enfants et la journée d'éducation JISA.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Interactive Solar Protection Card */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 18 } }
          }}
          whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.3 } }}
          className="md:col-span-3 bg-zinc-100 rounded-[2rem] relative overflow-hidden group min-h-[380px] shadow-xs hover:shadow-xl hover:shadow-zinc-200/60 transition-shadow duration-500 flex flex-col justify-end border border-zinc-200/30"
        >
          
          {/* Main Portrait Image */}
          <img
            src="/images/albi_applying_sunscreen_1781884143114.webp"
            alt="Application bienveillante de crème solaire sur un enfant"
            fetchPriority="high"
            decoding="async"
            width={600}
            height={800}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-750 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)]/70 via-transparent to-black/10" />

          {/* Floater Square Black Badge */}
          <div className="absolute top-5 left-5 bg-[var(--color-brand-dark)] text-white w-9 h-9 rounded-xl flex items-center justify-center shadow-md">
            <Sun className="w-4 h-4 text-[var(--color-brand-olive-light)]" />
          </div>

          {/* Bottom White Capsule Overlay */}
          <div className="p-4 relative z-10 w-full">
            <button
              onClick={onShareClick}
              className="w-full bg-white hover:bg-[var(--color-brand-olive-pale)] text-[var(--color-brand-dark)] font-bold text-[11px] tracking-wide uppercase py-3.5 px-4 rounded-full flex items-center justify-between shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <span>Partager un témoignage</span>
              <div className="w-6 h-6 rounded-full bg-[var(--color-brand-dark)] text-white flex items-center justify-center hover:scale-105 transition-transform">
                <Share2 className="w-3 h-3 text-[var(--color-brand-olive-light)]" />
              </div>
            </button>
          </div>
        </motion.div>

        {/* Card 4: Action/Donate Card with wave texture */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 18 } }
          }}
          whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.3 } }}
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(120, 135, 100, 0.91) 0%, rgba(120, 135, 100, 0.96) 100%), url('/images/albi_prevention_care_1781884154813.webp')"
          }}
          className="md:col-span-2 bg-cover bg-center rounded-[2rem] p-6 relative overflow-hidden group flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-500 min-h-[280px] md:min-h-auto text-[var(--color-brand-dark)]"
        >
          
          {/* Wave line pattern overlay */}
          <div className="absolute bottom-0 right-0 left-0 h-1/2 opacity-15 flex items-end pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,80 C30,100 70,60 100,90 L100,100 L0,100 Z" fill="var(--color-brand-olive-dense)" />
              <path d="M0,60 C40,40 60,80 100,50 L100,100 L0,100 Z" fill="rgba(255,255,255,0.2)" />
            </svg>
          </div>

          {/* Tags */}
          <div className="flex gap-1.5 flex-wrap z-10">
            <span className="text-[9px] font-extrabold uppercase bg-white/80 text-[var(--color-brand-dark)] px-2.5 py-1 rounded-full border border-white/20">
              Santé
            </span>
            <span className="text-[9px] font-extrabold uppercase bg-white/80 text-[var(--color-brand-dark)] px-2.5 py-1 rounded-full border border-white/20">
              Solidarité
            </span>
          </div>

          {/* Text and trigger */}
          <div className="z-10 mt-8">
            <a
              href="https://wa.me/22997494591?text=Bonjour%20Albi%20International%20!%20Je%20souhaite%20soutenir%20l'association%20et%20faire%20un%20don%20pour%20les%20enfants%20atteints%20d'albinisme%20au%20B%C3%A9nin."
              target="_blank"
              rel="noopener noreferrer"
              className="text-left group/btn cursor-pointer block no-underline"
            >
              <h3 className="font-display font-black text-base lg:text-lg text-[var(--color-brand-dark)] leading-tight hover:underline flex items-baseline gap-1">
                Faire un don <br />et protéger des vies
                <ArrowUpRight className="inline-block w-4 h-4 text-[var(--color-brand-dark)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </h3>
            </a>
          </div>
        </motion.div>

        {/* Card 5: International Day Campaign Badge */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 18 } }
          }}
          whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.3 } }}
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(15, 22, 15, 0.91) 0%, rgba(15, 22, 15, 0.96) 100%), url('/images/albi_children_school_1781884113577.webp')"
          }}
          className="md:col-span-2 bg-cover bg-center border border-zinc-800 rounded-[2rem] p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-500 relative overflow-hidden min-h-[220px] md:min-h-auto text-white"
        >
          
          <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-[var(--color-brand-olive-light)]/10 pointer-events-none" />

          <div className="flex items-center justify-between relative z-10">
            <div className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900/40 flex items-center justify-center shadow-sm backdrop-blur-xs">
              <Sun className="w-5 h-5 text-[var(--color-brand-olive-light)] animate-spin-slow" />
            </div>
            <button
              onClick={onLearnMoreClick}
              className="bg-[var(--color-brand-olive)] hover:bg-[var(--color-brand-olive-dense)] text-[var(--color-brand-dark)] hover:text-white p-1 rounded-full transition-colors cursor-pointer"
            >
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          <div className="mt-6 z-10">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-300 block">
              13 JUIN (JISA)
            </span>
            <p className="font-display font-black text-xs md:text-sm text-white mt-1.5 leading-snug">
              Journée de Sensibilisation
            </p>
          </div>
        </motion.div>

      </motion.div>

    </section>
  );
}
