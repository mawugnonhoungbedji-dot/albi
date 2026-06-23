import { ArrowUpRight } from "lucide-react";
import { PROJECTS_DATA, ProjectItem } from "../data";
import { motion } from "motion/react";

interface ProjectsProps {
  onProjectSelect: (project: ProjectItem) => void;
}

export default function Projects({ onProjectSelect }: ProjectsProps) {
  return (
    <section id="projects" className="px-4 md:px-8 py-16 bg-[var(--color-brand-beige)] max-w-7xl mx-auto">
      
      {/* Small Section Tag */}
      <div className="mb-6 flex justify-start">
        <span className="border border-zinc-300 font-display font-bold text-[10px] uppercase tracking-widest text-[var(--color-brand-text-muted)] bg-white/50 px-4.5 py-1.5 rounded-full">
          Nos Programmes Actifs
        </span>
      </div>

      {/* Main Section Header */}
      <h2 className="font-display font-medium text-2xl sm:text-3xl md:text-4xl text-[var(--color-brand-dark)] leading-tight max-w-3xl tracking-tight mb-12">
        Nous menons des actions de solidarité, des distributions de matériels et des événements festifs pour soutenir{" "}
        <span className="relative inline-block px-4 py-0.5 bg-[var(--color-brand-olive-light)] text-[var(--color-brand-dark)] font-bold rounded-full border border-[var(--color-brand-olive)] rotate-[0.5deg]">
          la communauté albinos
        </span>
      </h2>

      {/* Projects Cards Grid */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
          }
        }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6.5 items-stretch"
      >
        
        {/* Card 1: Crèmes Solaires (Large, span 6) */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
          }}
          whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
          style={{
            backgroundImage: "linear-gradient(to right, rgba(10, 15, 10, 0.96) 0%, rgba(10, 15, 10, 0.85) 60%, rgba(10, 15, 10, 0.5) 100%), url('/images/albi_prevention_care_1781884154813.jpg')"
          }}
          className="lg:col-span-6 bg-cover bg-center border border-zinc-800 rounded-[2.2rem] p-8 md:p-10 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-500 min-h-[320px] text-white group"
        >
          
          <div className="flex flex-col justify-between h-full py-1 relative z-10">
            <div className="max-w-[75%]">
              <span className="text-[10px] font-bold text-[var(--color-brand-olive-light)] uppercase tracking-wider block mb-2">PRÉVENTION & PROTECTION</span>
              <h3 className="font-display font-black text-2xl md:text-3xl text-white leading-tight">
                Distribution de Crèmes Solaires
              </h3>
              <p className="text-zinc-200 text-[12px] md:text-sm mt-4 font-normal leading-relaxed">
                Notre action phare pour prévenir les brûlures graves et le cancer cutanique en équipant les familles vulnérables de filtres protecteurs de très haute protection d'indice SPF 50+.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={() => onProjectSelect(PROJECTS_DATA[0])}
                className="group/btn flex items-center gap-3 cursor-pointer"
              >
                <span className="text-xs font-black uppercase tracking-widest text-white group-hover/btn:underline">
                  Découvrir
                </span>
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center transition-all group-hover/btn:bg-[var(--color-brand-olive)] group-hover/btn:scale-110">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </div>
              </button>
            </div>
          </div>

        </motion.div>

        {/* Card 2: Kits scolaires (Span 3) */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
          }}
          whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
          className="lg:col-span-3 rounded-[2.2rem] p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-500 min-h-[320px] relative overflow-hidden group border border-zinc-800"
        >
          
          {/* Background image of school children */}
          <img 
            src="/images/albi_children_school_1781884113577.jpg" 
            alt="Enfants à l'école" 
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
          {/* Dark Forest Glaze Overlay for incredible readibility & contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)] via-[var(--color-brand-dark)]/90 to-[var(--color-brand-dark)]/40 group-hover:via-[var(--color-brand-dark)]/75 transition-all duration-300" />

          <div className="relative z-10">
            <span className="text-[10px] font-bold text-[var(--color-brand-olive-light)] uppercase tracking-wider block mb-2">{PROJECTS_DATA[1].badge}</span>
            <h3 className="font-display font-black text-2xl lg:text-3xl text-white leading-tight">
              Kits Scolaires Adaptés
            </h3>
          </div>

          <div className="flex items-center justify-between mt-12 relative z-10">
            <button
              onClick={() => onProjectSelect(PROJECTS_DATA[1])}
              className="text-xs font-black uppercase tracking-widest text-zinc-100 group-hover:underline cursor-pointer"
            >
              En Savoir Plus
            </button>
            <button 
              onClick={() => onProjectSelect(PROJECTS_DATA[1])}
              className="w-10 h-10 rounded-full bg-[var(--color-brand-olive-light)] text-[var(--color-brand-dark)] flex items-center justify-center shadow-md transition-transform group-hover:scale-110 cursor-pointer"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>

        {/* Card 3: Noël des Enfants (Span 3) */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
          }}
          whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
          className="lg:col-span-3 rounded-[2.2rem] p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-500 min-h-[320px] relative overflow-hidden group border border-zinc-800"
        >
          
          {/* Background image of sunshine & care */}
          <img 
            src="/images/albi_applying_sunscreen_1781884143114.jpg" 
            alt="Noël solidaire" 
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
          {/* Deep/Rich Forest Glaze Overlay for highly legible text */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)] via-[var(--color-brand-dark)]/90 to-[var(--color-brand-dark)]/40 group-hover:via-[var(--color-brand-dark)]/75 transition-all duration-300" />

          <div className="relative z-10">
            <span className="text-[10px] font-bold text-[var(--color-brand-olive-light)] uppercase tracking-wider block mb-2">{PROJECTS_DATA[2].badge}</span>
            <h3 className="font-display font-black text-2xl lg:text-3xl text-white leading-tight">
              Noël des Enfants Albis
            </h3>
          </div>

          <div className="flex items-center justify-between mt-12 relative z-10">
            <button
              onClick={() => onProjectSelect(PROJECTS_DATA[2])}
              className="text-xs font-black uppercase tracking-widest text-zinc-100 group-hover:underline cursor-pointer"
            >
              En Savoir Plus
            </button>
            <button
              onClick={() => onProjectSelect(PROJECTS_DATA[2])}
              className="w-10 h-10 rounded-full bg-[var(--color-brand-olive-light)] text-[var(--color-brand-dark)] flex items-center justify-center shadow-md transition-transform group-hover:scale-110 cursor-pointer"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>

      </motion.div>

    </section>
  );
}
