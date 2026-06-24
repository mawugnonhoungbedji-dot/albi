import React from "react";
import { 
  ArrowUpRight, 
  Heart, 
  Sun, 
  Eye, 
  Users, 
  Check, 
  Award, 
  Shield, 
  BookOpen, 
  HelpCircle, 
  Sparkles,
  Calendar,
  Layers,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { motion } from "motion/react";

interface IntroductionProps {
  onAboutClick: () => void;
  onCampaignsClick: () => void;
}

export default function Introduction({ onAboutClick, onCampaignsClick }: IntroductionProps) {
  
  // Custom WhatsApp link generator for donating/getting involved
  const WHATSAPP_NUMBER_1 = "22997494591";
  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER_1}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="philosophy" className="bg-[var(--color-brand-beige)] min-h-screen text-[var(--color-brand-dark)] select-none overflow-x-hidden">
      
      {/* SECTION 1: HERO SECTION (Streamline Your Team, Supercharge Your Workflow style) */}
      <div className="px-4 md:px-8 pt-12 md:pt-20 pb-16 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 text-[var(--color-brand-olive-dense)] px-3.5 py-1.5 rounded-full text-[10px] md:text-sm font-extrabold uppercase tracking-widest shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-spin" />
            <span>Fondation d'action humanitaire ● Bénin</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12] text-[var(--color-brand-dark)] tracking-tight"
          >
            Transformer la douleur en force : notre histoire, notre vision
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--color-brand-text-muted)] text-sm md:text-base font-normal md:font-medium max-w-2xl mx-auto leading-relaxed"
          >
            L'association AlbiInternational est née d'une expérience personnelle profondément marquante vécue par sa fondatrice, <span className="text-[var(--color-brand-dark)] font-extrabold underline decoration-[var(--color-brand-olive)] decoration-2">Carine HOUNGUE</span>, elle-même atteinte d'albinisme, afin qu'aucun enfant ne souffre d'isolation ou de cancer cutané évitable au Bénin.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
          >
            <a
              href={getWhatsAppLink("Bonjour AlbiInternational ! J'aimerais soutenir l'association financièrement ou parrainage d'enfants suite à la lecture de l'histoire de la fondatrice Carine HOUNGUE.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[var(--color-brand-olive)] hover:bg-[var(--color-brand-olive-dense)] text-white hover:text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4.5 rounded-full shadow-lg shadow-orange-100 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-2 cursor-pointer"
            >
              Faire un don de soutien
              <Heart className="w-4 h-4 fill-current text-white/90" />
            </a>
            <button
              onClick={onAboutClick}
              className="w-full sm:w-auto bg-white hover:bg-[var(--color-brand-olive-pale)] border border-zinc-200 text-[var(--color-brand-dark)] font-extrabold text-xs uppercase tracking-wider px-8 py-4.5 rounded-full shadow-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-2 cursor-pointer"
            >
              Nous contacter directement
              <ArrowUpRight className="w-4 h-4 text-[var(--color-brand-olive)]" />
            </button>
          </motion.div>
        </div>

        {/* 3D Curved/Perspective Row of 5 Cards (matches Flowblox layout of image blocks) */}
        <div className="mt-14 md:mt-22 max-w-6.5xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-center md:-space-x-5.5 space-y-6 md:space-y-0 items-stretch py-10 overflow-visible relative">
            
            {/* Card 1: Carine Portrait */}
            <motion.div 
              whileHover={{ scale: 1.05, strokeWidth: 2, zIndex: 30, rotate: 0, y: -10 }}
              className="w-full md:w-[220px] bg-white border border-zinc-150/80 rounded-[2rem] p-5.5 shadow-md flex flex-col justify-between min-h-[340px] md:rotate-[-6deg] md:translate-y-[12px] transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-[var(--color-brand-olive-pale)] text-[var(--color-brand-olive-dense)] flex items-center justify-center font-display font-black text-xs">
                  01
                </div>
                <h4 className="font-display font-black text-base leading-tight text-[var(--color-brand-dark)]">
                  Carine HOUNGUE
                </h4>
                <p className="text-[var(--color-brand-text-muted)] text-[11px] leading-relaxed font-semibold">
                  Sujette dès le jeune âge à l'exclusion, aux regards inquisiteurs, et à la stigmatisation d'école, Carine apprend la résilience par l'amour de l'apprentissage.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-100 text-[9px] uppercase tracking-wider font-extrabold text-[var(--color-brand-olive-dense)]">
                La Fondatrice
              </div>
            </motion.div>

            {/* Card 2: Personal loss */}
            <motion.div 
              whileHover={{ scale: 1.05, zIndex: 30, rotate: 0, y: -10 }}
              className="w-full md:w-[220px] bg-white border border-zinc-150/80 rounded-[2rem] p-5.5 shadow-md flex flex-col justify-between min-h-[340px] md:rotate-[-3deg] md:translate-y-[4px] transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-[var(--color-brand-olive-pale)] text-[var(--color-brand-olive-dense)] flex items-center justify-center font-display font-black text-xs">
                  02
                </div>
                <h4 className="font-display font-black text-base leading-tight text-[var(--color-brand-dark)]">
                  Le combat de sa sœur
                </h4>
                <p className="text-[var(--color-brand-text-muted)] text-[11px] leading-relaxed font-semibold">
                  Le décès brutal de sa sœur chérie des suites d'un cancer de la peau agressif scelle le tournant crucial de son combat pour vulgariser l'indispensable prévention.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-100 text-[9px] uppercase tracking-wider font-extrabold text-red-500">
                L'épreuve fondatrice
              </div>
            </motion.div>

            {/* Card 3: June 2017 Establishment (Center highlight) */}
            <motion.div 
              whileHover={{ scale: 1.07, zIndex: 30, y: -12 }}
              className="w-full md:w-[240px] bg-[var(--color-brand-dark)] text-white border-2 border-[var(--color-brand-olive-light)] rounded-[2.2rem] p-6 shadow-xl flex flex-col justify-between min-h-[360px] md:rotate-0 md:-translate-y-[8px] z-10 transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-[var(--color-brand-olive-light)] text-[var(--color-brand-dark)] flex items-center justify-center font-display font-black text-xs">
                  03
                </div>
                <h4 className="font-display font-black text-lg leading-tight text-white">
                  Juin 2017: Naissance d'Albi
                </h4>
                <p className="text-orange-50/80 text-[11px] leading-relaxed font-medium">
                  Transformer la douleur familiale en bouclier national. Naissance d'AlbiInternational au Bénin pour la promotion stricte et la défense des enfants d'albi.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[9px] uppercase tracking-wider font-black text-[var(--color-brand-olive-light)]">
                ONG FÉDÉRATRICE OFFICIELLE
              </div>
            </motion.div>

            {/* Card 4: Medical SPF prevention */}
            <motion.div 
              whileHover={{ scale: 1.05, zIndex: 30, rotate: 0, y: -10 }}
              className="w-full md:w-[220px] bg-white border border-zinc-150/80 rounded-[2rem] p-5.5 shadow-md flex flex-col justify-between min-h-[340px] md:rotate-[3deg] md:translate-y-[4px] transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-[var(--color-brand-olive-pale)] text-[var(--color-brand-olive-dense)] flex items-center justify-center font-display font-black text-xs">
                  04
                </div>
                <h4 className="font-display font-black text-base leading-tight text-[var(--color-brand-dark)]">
                  La Ligne de Vie Clinique
                </h4>
                <p className="text-[var(--color-brand-text-muted)] text-[11px] leading-relaxed font-semibold">
                  Acheminement public planifié de protections solaires SPF 50+, examens ophtalmologiques scolaires et sensibilisations aux filtres ultraviolets.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-100 text-[9px] uppercase tracking-wider font-extrabold text-[var(--color-brand-olive-dense)]">
                Un Enjeu Vital
              </div>
            </motion.div>

            {/* Card 5: Social inclusion */}
            <motion.div 
              whileHover={{ scale: 1.05, zIndex: 30, rotate: 0, y: -10 }}
              className="w-full md:w-[220px] bg-white border border-zinc-150/80 rounded-[2rem] p-5.5 shadow-md flex flex-col justify-between min-h-[340px] md:rotate-[6deg] md:translate-y-[12px] transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-[var(--color-brand-olive-pale)] text-[var(--color-brand-olive-dense)] flex items-center justify-center font-display font-black text-xs">
                  05
                </div>
                <h4 className="font-display font-black text-base leading-tight text-[var(--color-brand-dark)]">
                  Société Béninoise Inclusive
                </h4>
                <p className="text-[var(--color-brand-text-muted)] text-[11px] leading-relaxed font-semibold">
                  Bâtir une nation équitable où l'albinisme est compris par la science et perçu comme une richesse épidermique flamboyante.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-100 text-[9px] uppercase tracking-wider font-extrabold text-[var(--color-brand-olive-dense)]">
                Notre Avenir Commun
              </div>
            </motion.div>

          </div>

          {/* 3 Core descriptive feature columns below cards from Flowblox style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-zinc-200/50">
            <div className="bg-white/45 p-6 rounded-2xl border border-zinc-150 relative">
              <div className="w-8 h-8 rounded-full bg-[var(--color-brand-olive-pale)] text-[var(--color-brand-olive-dense)] flex items-center justify-center mb-4 font-bold text-sm">
                <Shield className="w-4 h-4 text-[var(--color-brand-olive)]" />
              </div>
              <h3 className="font-display font-black text-sm text-[var(--color-brand-dark)] uppercase tracking-wide">
                Notre Histoire & Notre Héritage
              </h3>
              <p className="text-[var(--color-brand-text-muted)] text-xs mt-2.5 font-semibold leading-relaxed">
                Carine HOUNGUE a transformé une blessure intime en mouvement structuré d'utilité publique. Notre éthique est née de la résistance, animant des opérations de logistique et de santé sur l'ensemble des départements du Bénin.
              </p>
            </div>

            <div className="bg-white/45 p-6 rounded-2xl border border-zinc-150 relative">
              <div className="w-8 h-8 rounded-full bg-[var(--color-brand-olive-pale)] text-[var(--color-brand-olive-dense)] flex items-center justify-center mb-4 font-bold text-sm">
                <Eye className="w-4 h-4 text-[var(--color-brand-dark)]" />
              </div>
              <h3 className="font-display font-black text-sm text-[var(--color-brand-dark)] uppercase tracking-wide">
                Notre Vision Inclusive
              </h3>
              <p className="text-[var(--color-brand-text-muted)] text-xs mt-2.5 font-semibold leading-relaxed">
                AlbiInternational aspire à bâtir une société inclusive, équitable et respectueuse de la diversité, où les personnes de condition albinos vivent à l'abri de toute forme d'oppression rituelle, avec un accès égal aux droits fondamentaux.
              </p>
            </div>

            <div className="bg-white/45 p-6 rounded-2xl border border-zinc-150 relative">
              <div className="w-8 h-8 rounded-full bg-[var(--color-brand-olive-pale)] text-[var(--color-brand-olive-dense)] flex items-center justify-center mb-4 font-bold text-sm">
                <Users className="w-4 h-4 text-[var(--color-brand-dark)]" />
              </div>
              <h3 className="font-display font-black text-sm text-[var(--color-brand-dark)] uppercase tracking-wide">
                L'Information comme Levier
              </h3>
              <p className="text-[var(--color-brand-text-muted)] text-xs mt-2.5 font-semibold leading-relaxed">
                Nous agissons avec la ferme conviction que l'éducation d'école, l'engagement scientifique et la solidarité sont les seules armes crédibles pour reléguer les superstitions absurdes au passé.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1.5: DEDICATED NARRATIVE SECTION - FADELLE HOUNGUE & LA GENÈSE */}
      <div className="bg-white border-t border-b border-zinc-200/40 py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-[var(--color-brand-olive-pale)]/50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-amber-100/40 blur-2xl pointer-events-none" />

        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative w-full max-w-md bg-white p-4.5 rounded-[2.5rem] shadow-xl border border-zinc-150/80"
              >
                {/* Accent ribbon */}
                <div className="absolute -top-3 -right-3 bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md z-10">
                  Fondatrice
                </div>

                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-100 border border-zinc-100 relative group">
                  <img 
                    src="/images/Fondatrice.webp" 
                    alt="Carine HOUNGUE, Fondatrice de Albi International" 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="font-display font-black text-xl leading-tight">Carine HOUNGUE</h3>
                    <p className="text-orange-100/90 text-xs font-semibold mt-1">Fondatrice d'Albi International</p>
                  </div>
                </div>
              </motion.div>

              {/* Sister Tribute Sub-card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full max-w-md mt-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/40 rounded-2.5xl p-5 shadow-sm"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-black text-xs uppercase tracking-wider text-amber-850">Hommage & Mémoire</h4>
                    <p className="text-zinc-700 text-xs font-semibold leading-relaxed">
                      Fadelle HOUNGUE (1979 - 2014). Mannequin et diplômée, son courage face au cancer de la peau est le socle fondateur d'Albi International.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Narrative Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <span className="inline-flex items-center gap-2 bg-[var(--color-brand-olive-pale)] text-[var(--color-brand-olive-dense)] px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-[var(--color-brand-olive)]/20">
                  <Heart className="w-3.5 h-3.5 fill-current text-amber-500 animate-pulse" />
                  L'étincelle fondatrice de l'ONG
                </span>
                
                <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[var(--color-brand-dark)] leading-tight tracking-tight m-0">
                  Fadelle HOUNGUE : Une lumière qui continue de briller
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4 text-[var(--color-brand-text-muted)] text-xs sm:text-sm font-medium leading-relaxed"
              >
                <p>
                  <strong className="text-[var(--color-brand-dark)] font-extrabold">Fadelle HOUNGUE</strong> était une jeune femme pleine de vie, de grâce et d’ambition. Diplômée d'un BAC+2 et Mannequin de profession, elle illuminait les podiums par son élégance naturelle, son sourire et sa détermination. Derrière cette image rayonnante se cachait pourtant un combat silencieux qui allait bouleverser le destin de toute une famille.
                </p>

                <p>
                  Atteinte d'un cancer de la peau, Fadelle a mené une lutte courageuse durant plusieurs années. Entre les consultations médicales, les séances de chimiothérapie, les traitements lourds et les interventions chirurgicales, elle s'est battue avec une force admirable. Chaque étape était une épreuve, chaque espoir suivi d'une nouvelle bataille. Malgré sa détermination et celle de ses proches, la maladie a fini par l'emporter dans sa 35ᵉ année, laissant derrière elle un jeune fils et une famille profondément marquée par son départ.
                </p>

                <p>
                  Parmi ceux qui ont vécu cette épreuve au plus près se trouvait sa sœur, <strong className="text-[var(--color-brand-dark)] font-extrabold">Carine HOUNGUE</strong>. Jour après jour, elle a été témoin de la douleur physique, des difficultés d'accès aux soins spécialisés, des inquiétudes et des espoirs qui accompagnaient ce combat. Elle a vu une femme forte lutter jusqu'au bout pour sa vie et pour son enfant.
                </p>

                <div className="bg-[var(--color-brand-olive-pale)]/30 border-l-4 border-[var(--color-brand-olive)] p-5 rounded-r-2xl my-6">
                  <p className="text-[var(--color-brand-dark)] font-semibold italic text-xs sm:text-sm m-0">
                    « Le décès de Fadelle n'a pas seulement laissé un vide immense ; il a aussi fait naître une conviction profonde. Carine a compris que trop de personnes vivant avec l'albinisme continuent de faire face aux mêmes risques, souvent dans le silence, faute d'information, de prévention et d'accompagnement adapté. »
                  </p>
                </div>

                <p>
                  C'est de cette douleur transformée en engagement qu'est née l'initiative portée aujourd'hui par <strong className="text-[var(--color-brand-dark)] font-extrabold">Albi International</strong>. Chaque action menée, chaque campagne de sensibilisation, chaque consultation médicale organisée et chaque plaidoyer en faveur des droits des personnes vivant avec l'albinisme portent l'empreinte du souvenir de Fadelle.
                </p>

                <p>
                  Son histoire rappelle l'urgence d'agir. Son combat est devenu une mission. Son héritage vit désormais à travers toutes les vies que cette initiative contribue à protéger, accompagner et valoriser. Fadelle n'est plus parmi nous, mais son histoire continue d'inspirer un mouvement qui refuse que d'autres familles traversent les mêmes souffrances dans l'indifférence.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 2: BENTO GRID SECTION (Comprendre les réalités de l'albinisme) */}
      <div className="bg-white/60 border-t border-b border-zinc-200/40 py-16 md:py-24">
        <div className="px-4 md:px-8 max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-black uppercase text-[var(--color-brand-olive)] tracking-widest bg-[var(--color-brand-olive-pale)] px-3.5 py-1.5 rounded-full">
              Comprendre la Réalité
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[var(--color-brand-dark)] tracking-tight">
              Comprendre les réalités de l'albinisme
            </h2>
            <p className="text-[var(--color-brand-text-muted)] text-xs sm:text-sm font-normal md:font-medium leading-relaxed max-w-xl mx-auto">
              L'albinisme est une condition génétique héréditaire caractérisée par une absence ou une faible production de mélanine. Elle n'est ni contagieuse ni mystique, mais pose de lourds défis.
            </p>
          </div>

          {/* Bento Grid (matches Everything Your Team Needs to Work Smarter layout) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6.5 max-w-6xl mx-auto">
            
            {/* Bento Card 1: Top Left - Large Horizontal Card (Skin Cancer) */}
            <div 
              style={{
                backgroundImage: "linear-gradient(to right, rgba(15, 20, 15, 0.95) 0%, rgba(15, 20, 15, 0.85) 60%, rgba(15, 20, 15, 0.7) 100%), url('/images/albi_applying_sunscreen_1781884143114.webp')"
              }}
              className="md:col-span-8 bg-cover bg-center border border-zinc-800 rounded-3.5xl p-6.5 md:p-8 shadow-md flex flex-col md:flex-row gap-6 md:items-center justify-between overflow-hidden relative min-h-[300px] text-white"
            >
              <div className="space-y-4 md:max-w-[70%] shrink-0 relative z-10">
                <span className="text-[9px] font-black uppercase bg-amber-500/20 text-amber-200 px-3 py-1 rounded-full tracking-wider border border-amber-500/30">
                  SANTÉ CUTANÉE & PRÉVENTION
                </span>
                <h3 className="font-display font-black text-lg md:text-xl text-white leading-tight">
                  Le risque de cancer de la peau : un enjeu vital
                </h3>
                <p className="text-zinc-200 text-[11px] sm:text-xs font-normal md:font-medium leading-relaxed">
                  L'absence de mélanine laisse la peau sans bouclier face aux rayonnements ultraviolets abrasifs du soleil équatorial. Sans protection solaire SPF 50+, des brûlures se répètent et dégénèrent prématurément en cancers de la peau agressifs.
                </p>
                <p className="text-[var(--color-brand-olive-light)] text-[11px] font-extrabold">
                  Une tragédie pourtant évitable à 100% par des dépistages et de l'écran total médicalisé. Elle est la première cause de décès d'albinos en Afrique.
                </p>
              </div>
            </div>

            {/* Bento Card 2: Top Right - Small Vertical Card (Discrimination) */}
            <div 
              style={{
                backgroundImage: "linear-gradient(to bottom, rgba(15, 15, 25, 0.85), rgba(15, 15, 25, 0.95)), url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800')"
              }}
              className="md:col-span-4 bg-cover bg-center border border-zinc-800 rounded-3.5xl p-6.5 shadow-md flex flex-col justify-between min-h-[300px] text-white"
            >
              <div className="space-y-3 relative z-10">
                <span className="text-[9px] font-black uppercase bg-indigo-500/20 text-indigo-200 px-3 py-1 rounded-full tracking-wider border border-indigo-500/30">
                  DIGNITÉ & SOCIÉTÉ
                </span>
                <h3 className="font-display font-black text-base text-white leading-snug">
                  Entraves sociales et discriminations au travail
                </h3>
                <p className="text-zinc-200 text-[11px] font-medium leading-relaxed">
                  Moqueries d'école, marginalisation de voisinage, rejet de l'entourage et stéréotypes persistants pour le travail restreignent brutalement l'accès décent aux postes des jeunes qualifiés d'albi.
                </p>
              </div>
              <div className="text-[9.5px] tracking-wide uppercase font-extrabold text-[var(--color-brand-olive-light)] border-t border-zinc-800 pt-2.5 relative z-10">
                Rétablir l'honneur citoyen
              </div>
            </div>

            {/* Bento Card 3: Bottom Left - Small Vertical Card (Vision deficiencies) */}
            <div 
              style={{
                backgroundImage: "linear-gradient(to bottom, rgba(10, 20, 15, 0.85), rgba(10, 20, 15, 0.95)), url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800')"
              }}
              className="md:col-span-4 bg-cover bg-center border border-zinc-800 rounded-3.5xl p-6.5 shadow-md flex flex-col justify-between min-h-[300px] text-white"
            >
              <div className="space-y-3 relative z-10">
                <span className="text-[9px] font-black uppercase bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full tracking-wider border border-emerald-500/30">
                  SPÉCIFICITÉ VISUELLE
                </span>
                <h3 className="font-display font-black text-base text-white leading-snug">
                  Correction des difficultés visuelles d'apprentissage
                </h3>
                <p className="text-zinc-200 text-[11px] font-medium leading-relaxed">
                  L'albinisme implique structurellement un nystagmus (mouvements oculaires oscillatoires involontaires), le strabisme prononcé et un déficit de vision. Sans loupe et adaptation, les devoirs sont une souffrance.
                </p>
              </div>
              <div className="text-[9.5px] tracking-wide uppercase font-extrabold text-[var(--color-brand-olive-light)] border-t border-zinc-800 pt-2.5 relative z-10">
                Fourniture d'appareillages
              </div>
            </div>

            {/* Bento Card 4: Bottom Right - Large Horizontal Card (Myths & Superstitions) */}
            <div 
              style={{
                backgroundImage: "linear-gradient(to right, rgba(20, 10, 10, 0.95) 0%, rgba(20, 10, 10, 0.85) 60%, rgba(20, 10, 10, 0.7) 100%), url('/images/albi_children_school_1781884113577.webp')"
              }}
              className="md:col-span-8 bg-cover bg-center border border-zinc-800 rounded-3.5xl p-6.5 md:p-8 shadow-md flex flex-col md:flex-row gap-6 md:items-center justify-between overflow-hidden relative min-h-[300px] text-white"
            >
              <div className="space-y-4 md:max-w-[70%] shrink-0 relative z-10">
                <span className="text-[9px] font-black uppercase bg-red-500/20 text-red-200 px-3 py-1 rounded-full tracking-wider border border-red-500/30">
                  URGENCE DROITS HUMAINS
                </span>
                <h3 className="font-display font-black text-lg md:text-xl text-white leading-tight">
                  Lutter contre les mythes rituels magiques obsolètes
                </h3>
                <p className="text-zinc-200 text-[11px] sm:text-xs font-medium leading-relaxed">
                  Dans plusieurs communautés isolées, l'albinisme génère encore des superstitions cruelles. Certains mythes stupides attribuent aux cheveux ou membres d'albinos des effets de richesse miraculeuse, motivant des chasses rituelles criminelles.
                </p>
                <p className="text-red-350 text-[11px] font-extrabold">
                  Certains couples associent cette naissance à une malédiction conjugale outrancière, cachant ou délaissant l'enfant. L'albinisme est d'origine purement clinique et génétique héréditaire.
                </p>
              </div>
            </div>

          </div>

          <div className="text-center pt-4">
            <span className="text-[12px] font-extrabold text-[var(--color-brand-olive-dense)] block">
              💡 Combattre l'ignorance par l'explication scientifique est le seul rempart éthique pérenne.
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 3: PROVEN RESULTS, REAL IMPACT SECTION (Nos Actions et Programme de Soutien) */}
      <div className="px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[10px] font-black uppercase text-[var(--color-brand-olive)] tracking-widest bg-[var(--color-brand-olive-pale)] px-3.5 py-1.5 rounded-full">
            Actions Réelles de Secours
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[var(--color-brand-dark)] tracking-tight">
            Nos actions et programme de soutien
          </h2>
          <p className="text-[var(--color-brand-text-muted)] text-xs sm:text-sm font-normal md:font-medium max-w-xl mx-auto leading-relaxed">
            Pour répondre de façon immédiate aux besoins physiologiques et psycho-collab, AlbiInternational met en œuvre trois rendez-vous majeurs chaque année en Afrique de l'Ouest.
          </p>
        </div>

        {/* 3 Column Grid representing Programs (matches wireframe Proven Results block) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6.5xl mx-auto">
          
          {/* Card 1: JISA */}
          <div 
            style={{
              backgroundImage: "linear-gradient(to bottom, rgba(12, 18, 12, 0.91) 0%, rgba(12, 18, 12, 0.96) 100%), url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800')"
            }}
            className="bg-cover bg-center border border-zinc-800 rounded-[2.2rem] p-7 md:p-8 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 text-white"
          >
            <div className="space-y-5">
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-black uppercase tracking-wider bg-[var(--color-brand-olive-pale)]/20 text-[var(--color-brand-olive-light)] px-3 py-1 rounded-full border border-amber-500/20">
                  CÉLÉBRATION GLOBALE
                </span>
                <span className="text-zinc-300 font-bold text-[10px] uppercase font-sans flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  Mois de Juin
                </span>
              </div>
              
              <div>
                <h3 className="font-display font-black text-base md:text-lg text-white leading-tight">
                  Journée Internationale de Sensibilisation à l'Albinisme (JISA)
                </h3>
                <p className="text-zinc-300 text-xs mt-2.5 font-normal leading-relaxed">
                  L'activité phare pour informer le grand public, déconstruire les préjugés tenaces et distribuer gratuitement des flacons SPF50+ d'écran total.
                </p>
              </div>

              {/* Sub-sections: Objectifs & Résultats (User required paragraphs) */}
              <div className="space-y-4 pt-3 border-t border-zinc-800">
                <div>
                  <h4 className="font-display font-extrabold text-[11px] uppercase tracking-wider text-[var(--color-brand-olive-light)] mb-2">
                    Objectifs :
                  </h4>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-xs text-zinc-300 font-medium">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Sensibiliser les populations sur l'albinisme et les droits.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-zinc-300 font-medium">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Lutter contre les préjugés et les croyances d'un autre âge.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-zinc-300 font-medium">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Prévention du cancer par livraison élargie de filtres.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-display font-extrabold text-[11px] uppercase tracking-wider text-white mb-2">
                    Résultats Attendus :
                  </h4>
                  <ul className="space-y-1.5 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/40">
                    <li className="text-zinc-300 text-[11.5px] font-normal leading-snug flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                      <span>Réduction des violences et attitudes d'exclusion.</span>
                    </li>
                    <li className="text-zinc-300 text-[11.5px] font-normal leading-snug flex gap-1.5 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                      <span>Dotation immédiate aux écoliers démunis de Porto-Novo.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={getWhatsAppLink("Bonjour AlbiInternational ! Je souhaite financer la distribution de kits de protection solaire lors de la prochaine Journée JISA.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[var(--color-brand-olive)] hover:bg-[var(--color-brand-olive-dense)] text-white text-xs font-extrabold uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Parrainer des kits JISA
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: School kits */}
          <div 
            style={{
              backgroundImage: "linear-gradient(to bottom, rgba(10, 15, 25, 0.92) 0%, rgba(10, 15, 25, 0.97) 100%), url('/images/albi_children_school_1781884113577.webp')"
            }}
            className="bg-cover bg-center border border-zinc-800 rounded-[2.2rem] p-7 md:p-8 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 text-white"
          >
            <div className="space-y-5">
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-black uppercase tracking-wider bg-[var(--color-brand-olive-pale)]/20 text-[var(--color-brand-olive-light)] px-3 py-1 rounded-full border border-amber-500/20">
                  INCLUSION ÉDUCATIVE
                </span>
                <span className="text-zinc-300 font-bold text-[10px] uppercase font-sans flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  Mois d'Août/Septembre
                </span>
              </div>
              
              <div>
                <h3 className="font-display font-black text-base md:text-lg text-white leading-tight">
                  Distribution de kits scolaires aux enfants atteints d'albinisme
                </h3>
                <p className="text-zinc-300 text-xs mt-2.5 font-normal leading-relaxed">
                  À l'approche de chaque rentrée, nous fournissons du matériel pédagogique et d'optique adapté aux enfants d'albi issus de familles très vulnérables.
                </p>
              </div>

              {/* Sub-sections: Objectifs & Résultats (User required paragraphs) */}
              <div className="space-y-4 pt-3 border-t border-zinc-800">
                <div>
                  <h4 className="font-display font-extrabold text-[11px] uppercase tracking-wider text-[var(--color-brand-olive-light)] mb-2">
                    Objectifs :
                  </h4>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-xs text-zinc-300 font-medium">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Soutenir l'accès et le maintien d'écoliers d'albi en classe.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-zinc-300 font-medium">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Soulager le budget matériel d'école pour les parents.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-zinc-300 font-medium">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Promouvoir une éducation équitable avec loupe / gros caractères.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-display font-extrabold text-[11px] uppercase tracking-wider text-white mb-2">
                    Résultats Attendus :
                  </h4>
                  <ul className="space-y-1.5 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/40">
                    <li className="text-zinc-300 text-[11.5px] font-normal leading-snug flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                      <span>Préparation sereine de la rentrée pour 100+ élèves.</span>
                    </li>
                    <li className="text-zinc-300 text-[11.5px] font-normal leading-snug flex gap-1.5 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                      <span>Diminution majeure du décrochage oculaire.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={getWhatsAppLink("Bonjour AlbiInternational ! Je souhaite faire un don financier de rentrée pour offrir un Kit Scolaire Adapté (loupe, chapeau, cahiers, lunettes UV) à un écolier béninois.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[var(--color-brand-dark)] hover:bg-black text-white text-xs font-extrabold uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer border border-zinc-700/60"
              >
                Parrainer un kit scolaire complet
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Card 3: Christmas */}
          <div 
            style={{
              backgroundImage: "linear-gradient(to bottom, rgba(30, 20, 10, 0.92) 0%, rgba(30, 20, 10, 0.97) 100%), url('https://images.unsplash.com/photo-1544924405-1153f53942f1?auto=format&fit=crop&q=80&w=800')"
            }}
            className="bg-cover bg-center border border-zinc-800 rounded-[2.2rem] p-7 md:p-8 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 text-white"
          >
            <div className="space-y-5">
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-black uppercase tracking-wider bg-[var(--color-brand-olive-pale)]/20 text-[var(--color-brand-olive-light)] px-3 py-1 rounded-full border border-amber-500/20">
                  FÊTE ET ÉPANOUISSEMENT
                </span>
                <span className="text-zinc-300 font-bold text-[10px] uppercase font-sans flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  Mois de Décembre
                </span>
              </div>
              
              <div>
                <h3 className="font-display font-black text-base md:text-lg text-white leading-tight">
                  Noël des enfants atteints d'albinisme
                </h3>
                <p className="text-zinc-300 text-xs mt-2.5 font-normal leading-relaxed">
                  Chaque 23 Décembre, AlbiInternational offre un Noël de convivialité, de rassemblement, de partage de jouets et de filtres protecteurs.
                </p>
              </div>

              {/* Sub-sections: Objectifs & Résultats (User required paragraphs) */}
              <div className="space-y-4 pt-3 border-t border-zinc-800">
                <div>
                  <h4 className="font-display font-extrabold text-[11px] uppercase tracking-wider text-[var(--color-brand-olive-light)] mb-2">
                    Objectifs :
                  </h4>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-xs text-zinc-300 font-medium">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Offrir de la joie et de la convivialité dans un cadre sain.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-zinc-300 font-medium">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Renforcer l'estime de soi intrinsèque des jeunes d'albi.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-zinc-300 font-medium">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Associer l'esprit de partage à la distribution de crème solaire.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-display font-extrabold text-[11px] uppercase tracking-wider text-white mb-2">
                    Résultats Attendus :
                  </h4>
                  <ul className="space-y-1.5 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/40">
                    <li className="text-zinc-300 text-[11.5px] font-normal leading-snug flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                      <span>Des dizaines d'enfants albinos épanouis et valorisés.</span>
                    </li>
                    <li className="text-zinc-300 text-[11.5px] font-normal leading-snug flex gap-1.5 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                      <span>Renforcement des liens solidaires familiaux d'albi.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={getWhatsAppLink("Bonjour AlbiInternational ! Je désire financer un cadeau de Noël et un flacon de crème SPF pour les enfants atteints d'albinisme au Bénin pour le Noël du 23 décembre.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:opacity-95 text-xs font-extrabold uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                Financer un cadeau & protection Noël
                <ArrowRight className="w-3.5 h-3.5 text-amber-100" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 4: ROADMAP AND FUTURE OUTLOOK (Perspectives et actions futures) */}
      <div className="bg-gradient-to-tr from-[var(--color-brand-dark)] to-[var(--color-brand-dark)]/90 text-white border-t border-white/5 py-16 md:py-24 relative overflow-hidden">
        
        {/* Soft background light decorative spots */}
        <div className="absolute top-1/2 left-[-100px] w-96 h-96 rounded-full bg-[var(--color-brand-olive-light)]/10 blur-3.5xl pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 rounded-full bg-orange-500/10 blur-3.5xl pointer-events-none" />

        <div className="px-4 md:px-8 max-w-5xl mx-auto space-y-12 relative z-10">
          
          <div className="text-center space-y-3">
            <span className="text-[10px] font-black uppercase text-[var(--color-brand-olive-light)] tracking-widest bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              L'avenir et les Perspectives de l'Association
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl leading-tight text-white m-0 tracking-tight">
              Perspectives et actions futures
            </h2>
            <p className="text-orange-50/80 text-xs sm:text-sm font-semibold max-w-2xl mx-auto leading-relaxed">
              Pour lever définitivement les barrières de la stigmatisation et de la maladie, nous structurons un programme global ambitieux au cours de la décennie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            
            <div className="bg-white/5 border border-white/10 rounded-2.5xl p-6.5 space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[var(--color-brand-olive-light)]/15 text-[var(--color-brand-olive-light)] flex items-center justify-center font-bold">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-base text-white">
                Régularisation Logistique & Dermatologique
              </h3>
              <p className="text-zinc-350 text-xs md:text-sm font-medium leading-relaxed">
                Notre ambition première vise à nouer des partenariats industriels solides pour approvisionner à bas coût et distribuer en quantité industrielle de l'écran ultra-protecteur SPF 50+ de grade pharmaceutique au Bénin et en Afrique subsaharienne.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2.5xl p-6.5 space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[var(--color-brand-olive-light)]/15 text-[var(--color-brand-olive-light)] flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-base text-white">
                Autonomisation, Métiers & Réseaux Psychologiques
              </h3>
              <p className="text-zinc-350 text-xs md:text-sm font-medium leading-relaxed">
                Nous prévoyons l'ouverture d'un centre de renforcement des capacités pour offrir aux personnes atteintes d'albinisme des formations professionnelles certifiées (métiers du web, artisanat, commerce) et un service d'écoute et d'intégration oculaire.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2.5xl p-6.5 space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[var(--color-brand-olive-light)]/15 text-[var(--color-brand-olive-light)] flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-base text-white">
                Plaidoyer Institutionnel Universel
              </h3>
              <p className="text-zinc-350 text-xs md:text-sm font-medium leading-relaxed">
                Plaider auprès de l'Assemblée Nationale du Bénin pour l'obtention de la gratuité systématique des verres correcteurs et la subvention à 100% des soins dermatologiques d'albi dans le cadre d'une politique nationale d'inclusion de santé publique.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2.5xl p-6.5 space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[var(--color-brand-olive-light)]/15 text-[var(--color-brand-olive-light)] flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-base text-white">
                Coopération Universitaire
              </h3>
              <p className="text-zinc-350 text-xs md:text-sm font-medium leading-relaxed">
                Encourager et financer des études scientifiques spécialisées d'internes en dermatologie pour étudier l'adaptation mélanique spécifique aux peaux d'albinos en Afrique de l'Ouest côtière et ainsi optimiser les soins.
              </p>
            </div>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center max-w-3xl mx-auto space-y-4">
            <h4 className="font-display font-extrabold text-white text-[15px]">
              Chaque petite pièce s'assemble pour former le Grand Bouclier d'Inclusion.
            </h4>
            <p className="text-zinc-300 text-xs leading-relaxed max-w-xl mx-auto">
              Soutenez l'avenir d'AlbiInternational au Bénin en parrainant ou co-construisant ces magnifiques et nobles perspectives solidaires.
            </p>
            <div className="pt-2">
              <a 
                href={getWhatsAppLink("Bonjour AlbiInternational ! Je souhaite vous accompagner et devenir partenaire de vos Perspectives d'avenir.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--color-brand-olive-light)] hover:bg-white text-[var(--color-brand-dark)] text-xs font-black uppercase tracking-wider py-3.5 px-8 rounded-full transition-colors cursor-pointer"
              >
                Devenir partenaire de l'avenir
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 5: HISTORICAL TIMELINE (L'Arbre de Vie & Jalons Majeurs) */}
      <div className="bg-white/40 border-t border-b border-zinc-200/40 py-16 md:py-24">
        <div className="px-4 md:px-8 max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-black uppercase text-[var(--color-brand-olive)] tracking-widest bg-[var(--color-brand-olive-pale)] px-3.5 py-1.5 rounded-full">
              Notre Lignée d'Impact
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl leading-tight text-[var(--color-brand-dark)] tracking-tight">
              L'Arbre de Vie : Notre Parcours Évolutif
            </h2>
            <p className="text-zinc-650 text-xs sm:text-sm font-semibold max-w-xl mx-auto leading-relaxed">
              D'une initiative d'aide individuelle en 2017 à une structure d'envergure nationale et internationale aujourd'hui.
            </p>
          </div>

          <div className="relative border-l-2 border-[var(--color-brand-olive)]/30 max-w-3xl mx-auto pl-6.5 md:pl-8 space-y-10 py-4">
            
            {/* Timeline Item 1 */}
            <div className="relative">
              <div className="absolute -left-[35px] md:-left-[41px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-[var(--color-brand-olive)]" />
              <div className="space-y-1.5">
                <span className="font-mono text-xs font-bold text-[var(--color-brand-olive-dense)] bg-[var(--color-brand-olive-pale)] px-2 py-0.5 rounded">Juin 2017</span>
                <h3 className="font-display font-bold text-base text-[var(--color-brand-dark)]">La Graine Initialisée</h3>
                <p className="text-zinc-650 text-xs leading-relaxed max-w-2xl">
                  Suite au décès tragique de sa sœur, Carine HOUNGUE réunit ses premiers soutiens bénévoles à Cotonou et Porto-Novo pour acheter et distribuer manuellement de la crème solaire protectrice à 30 enfants atteints d'albinisme.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative">
              <div className="absolute -left-[35px] md:-left-[41px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-amber-500" />
              <div className="space-y-1.5">
                <span className="font-mono text-xs font-bold text-amber-950 bg-amber-100 px-2 py-0.5 rounded">2019 - 2021</span>
                <h3 className="font-display font-bold text-base text-[var(--color-brand-dark)]">L'Inclusion Scolaire Active</h3>
                <p className="text-zinc-650 text-xs leading-relaxed max-w-2xl">
                  Établissement de partenariats réguliers avec des directeurs d'écoles fondamentales au Bénin. Plus de 300 kits de fournitures scolaires de secours avec cahiers et verres protecteurs contre la lumière solaire sont offerts chaque automne.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative">
              <div className="absolute -left-[35px] md:-left-[41px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-emerald-500" />
              <div className="space-y-1.5">
                <span className="font-mono text-xs font-bold text-emerald-950 bg-emerald-100 px-2 py-0.5 rounded">2022 - 2024</span>
                <h3 className="font-display font-bold text-base text-[var(--color-brand-dark)]">La Structuration Internationale</h3>
                <p className="text-zinc-650 text-xs leading-relaxed max-w-2xl">
                  Création légitime des ramifications "AlbiInternational" pour fédérer des dons de laboratoires médicaux européens et acheminer des tubes de crème SPF 50 de qualité de grade dermatologique. Élargissement aux orphelinats.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative">
              <div className="absolute -left-[35px] md:-left-[41px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-[var(--color-brand-dark)]" />
              <div className="space-y-1.5">
                <span className="font-mono text-xs font-bold text-white bg-[var(--color-brand-dark)] px-2 py-0.5 rounded">2026 & Au-delà</span>
                <h3 className="font-display font-bold text-base text-[var(--color-brand-dark)]">La Gratuité Souveraine</h3>
                <p className="text-zinc-650 text-xs leading-relaxed max-w-2xl">
                  Plaidoyer institutionnel actif pour inscrire l'albinisme au budget national béninois pour la santé ainsi que le traitement gratuit exclusif des lésions cancéreuses précoces du derme.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 6: ETHICAL PLEDGE (Le Serment Éthique & Transparence 100% Directe) */}
      <div className="px-4 md:px-8 py-16 md:py-24 max-w-5xl mx-auto text-center space-y-8">
        <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-2 border border-amber-100 animate-pulse">
          <Heart className="w-6 h-6 fill-amber-500" />
        </div>
        
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] font-black uppercase text-amber-700 tracking-widest bg-amber-50 border border-amber-100 px-3.5 py-1.5 rounded-full">
            Notre Serment Invisible
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[var(--color-brand-dark)] leading-tight tracking-tight">
            Notre Engagement d'Éthique Absolue
          </h2>
          <p className="text-zinc-700 text-sm font-semibold italic max-w-2xl leading-relaxed">
            « Nous garantissons solennellement que chaque euro, chaque franc CFA, chaque pot de crème solaire collecté est directement remis en main propre dans les orphelinats et communautés du Bénin. Nos bénévoles autofinancent l'intégralité des coûts administratifs pour garantir un impact pur et transparent. »
          </p>
        </div>

        <div className="flex justify-center items-center gap-2 text-xs font-serif italic text-zinc-500">
          <span>— Signé par Carine HOUNGUE & le conseil de Solidarité AlbiInternational</span>
        </div>

        <div className="pt-4">
          <button 
            onClick={onCampaignsClick}
            className="group inline-flex items-center gap-2 bg-[var(--color-brand-dark)] hover:bg-[var(--color-brand-olive)] text-white text-xs font-black uppercase tracking-widest py-4.5 px-8 rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <span>Passer à la sensibilisation active</span>
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

    </section>
  );
}
