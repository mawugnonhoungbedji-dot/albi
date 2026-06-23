import React, { useState } from "react";
import { 
  ArrowUpRight, 
  Heart, 
  Users, 
  Sun, 
  Eye, 
  Check,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface GetInvolvedProps {
  onDonateClick: () => void;
  onVolunteerClick: () => void;
  onShareClick: () => void;
}

export default function GetInvolved({ onDonateClick, onVolunteerClick, onShareClick }: GetInvolvedProps) {
  // state for FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Custom WhatsApp contact coordinates
  const WHATSAPP_NUMBER_1 = "22997494591";
  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER_1}?text=${encodeURIComponent(message)}`;
  };

  const partners = [
    "Dermatologues du Bénin",
    "Association Nationale de l'Albinisme",
    "Pharmacies Solidaires Cotonou",
    "Alliance des ONG du Sud",
    "Écoles Primaires Partenaires",
    "Donateurs d'Europe-Afrique"
  ];

  const criticalIssues = [
    {
      id: "issue-1",
      title: "Mélanomes & Brûlures",
      desc: "L'absence de mélanine expose la peau à des lésions graves dès le plus jeune âge, menant à des cancers évitables par simple protection SPF 50+.",
      badge: "Santé cutanée"
    },
    {
      id: "issue-2",
      title: "Malvoyance Sévère",
      desc: "L'albinisme s'accompagne d'un strabisme et d'une acuité visuelle très faible, ce qui marginalise les écoliers sans loupes ou cahiers adaptés.",
      badge: "Barrière éducative"
    },
    {
      id: "issue-3",
      title: "Exclusion Sociale",
      desc: "Le manque d'information suscite des préjugés d'un autre temps, limitant l'épanouissement social et l'accès à l'embauche des jeunes adultes.",
      badge: "Enjeu sociétal"
    },
    {
      id: "issue-4",
      title: "Pénurie de Produits",
      desc: "Les écrans totaux de qualité médicale sont quasi introuvables localement ou importés à des tarifs exorbitants pour les familles vulnérables.",
      badge: "Problème logistique"
    }
  ];

  const pillarSolutions = [
    {
      title: "Soutien Médical Permanent",
      subtitle: "Écran total gratuit & consultations",
      desc: "Distribution planifiée de flacons de crème solaire SPF 50+ pédiatrique certifiée et organisation de consultations de dépistage cutané trimestrielles.",
      badge: "Ligne de vie 1"
    },
    {
      title: "Inclusion Éducative Activée",
      subtitle: "Surmonter l'affaiblissement visuel",
      desc: "Fourniture de lunettes solaires filtrantes UV de haute qualité, de loupes de lecture ergonomiques, de cahiers à gros caractères et de chapeaux larges.",
      badge: "Ligne de vie 2"
    },
    {
      title: "Sensibilisation Communautaire",
      subtitle: "Plaidoyer civique et lutte contre les préjugés",
      desc: "Sensibilisation directe des instituteurs, des parents et du grand public pour tordre le cou aux mythes entourant l'albinisme au Bénin.",
      badge: "Ligne de vie 3"
    }
  ];

  const timelineSteps = [
    {
      step: "01",
      title: "Réception & Traçage",
      desc: "Les dons financiers et transferts logistiques de flacons sont centralisés au Bénin, catalogués et soumis à un inventaire minutieux consultable publiquement."
    },
    {
      step: "02",
      title: "Expertise Dermatologique",
      desc: "Un médecin dermatologue bénévole analyse l'adéquation clinique des crèmes solaires réceptionnées (normes SPF 50+, absence de parfums allergènes, etc.)."
    },
    {
      step: "03",
      title: "Acheminement Scolaire",
      desc: "Nos coordinateurs transportent physiquement les stocks vers les écoles identifiées et les dispensaires relais de Porto-Novo, Cotonou et du Nord."
    },
    {
      step: "04",
      title: "Notification aux Parrains",
      desc: "Chaque enfant reçoit des dotations nominatives inscrites sur son carnet de santé d'albi, et des images de suivi sont transmises aux contributeurs."
    }
  ];

  const pricingPackages = [
    {
      name: "Kit Essentiel Prévention",
      price: "15€",
      desc: "Protège un enfant albinos",
      features: [
        "1 flacon de crème SPF 50+ (protection 2 mois)",
        "1 casquette de protection thermique",
        "Suivi médical de base par notre coordinateur",
        "Lettre numérique de remerciement"
      ],
      whatsappMsg: "Bonjour AlbiInternational ! Je souhaite financer le Kit Essentiel Prévention à 15€ pour protéger un enfant albinos au Bénin."
    },
    {
      name: "Parrainage Scolaire Complet",
      price: "45€",
      desc: "La formule d'impact recommandée",
      isPopular: true,
      features: [
        "Dotation annuelle en crèmes solaires SPF 50+",
        "1 paire de lunettes solaires UV certifiées",
        "1 chapeau à larges bords et 1 sac d'école",
        "Dotation de loupes de lecture & cahiers adaptés",
        "Rapport de progression scolaire de l'élève parrainé"
      ],
      whatsappMsg: "Bonjour AlbiInternational ! Je désire souscrire au Parrainage Scolaire Complet à 45€ pour assurer la scolarité protégée d'un enfant."
    },
    {
      name: "Soutien Médical & Clinique",
      price: "120€",
      desc: "Prise en charge spécialisée avancée",
      features: [
        "Consultation dermatologique d'urgence pour 3 enfants",
        "Dépistage précoce des kératoses actiniques",
        "Fourniture de soins hydratants réparateurs",
        "Traitement oculaire spécialisé chez notre ophtalmologue",
        "Bilan personnalisé de santé semestriel envoyé par l'ONG"
      ],
      whatsappMsg: "Bonjour AlbiInternational ! Je souhaite soutenir la cause à hauteur de 120€ avec la formule Soutien Médical & Clinique."
    }
  ];

  const faqs = [
    {
      q: "Comment puis-je m'assurer que mon don arrive bien aux enfants au Bénin ?",
      a: "Nous prônons une politique de transparence absolue. Chaque trimestre, un rapport logistique agrémenté de photos de distribution ciblée par élève est partagé avec nos donateurs. Notre ONG locale est officiellement enregistrée et soumise à des contrôles stricts."
    },
    {
      q: "Les crèmes solaires de l'ONG sont-elles spécifiques ?",
      a: "Oui. Les rayons du soleil tropical nécessitent l'application exclusive d'écrans minéraux ou de filtres de haute protection indice de protection SPF 50+ minimum, sans parfum ni alcool, adaptés à la fragilité de la structure épidermique des personnes atteintes d'albinisme."
    },
    {
      q: "Y a-t-il des frais retenus sur l'envoi de mes dons ?",
      a: "Aucun intermédiaire gourmand. 100% des dons matériels ou financiers récoltés sont affectés directement à l'achat et à la logistique d'acheminement des lots au Bénin, sous la garde attentive de nos coordinateurs."
    },
    {
      q: "Puis-je parrainer un enfant ou une école sur le long terme ?",
      a: "Absolument. En choisissant la formule de parrainage à 45€ ou en nous contactant, vous pouvez établir un suivi régulier d'un élève précis, recevoir ses notes d'école et des communiqués personnels sur son état de santé."
    }
  ];

  return (
    <div className="bg-[var(--color-brand-beige)] min-h-screen text-[var(--color-brand-dark)] font-sans selection:bg-[var(--color-brand-olive-light)] select-none">
      
      {/* SECTION 1: HERO PRINCIPAL (Avec la frise des partenaires solidaires à sa base) */}
      <section className="px-4 md:px-8 pt-12 md:pt-20 pb-16 max-w-7xl mx-auto border-b border-zinc-200/50">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 text-[var(--color-brand-olive-dense)] px-3.5 py-1.5 rounded-full text-[10px] md:text-xs font-extrabold uppercase tracking-widest shadow-xs"
          >
            <span>Soutenir l'Association AlbiInternational</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12] text-[var(--color-brand-dark)] tracking-tight"
          >
            Soutenez activement la vie et l'éducation au Bénin
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--color-brand-text-muted)] text-sm md:text-base font-normal md:font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Chaque don direct ou parrainage ciblé fournit aux enfants albinos l'essentiel vital : flacons d'écran total SPF 50+, lunettes UV enveloppantes et outils d'apprentissage adaptés.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
          >
            <button
              onClick={onDonateClick}
              className="w-full sm:w-auto bg-[var(--color-brand-olive)] hover:bg-[var(--color-brand-olive-dense)] text-white hover:text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-lg shadow-orange-100 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-2 cursor-pointer pt-4.5 pb-4.5"
            >
              Faire un don direct
              <Heart className="w-4 h-4 fill-current text-white/90 animate-pulse" />
            </button>
            <button
              onClick={onVolunteerClick}
              className="w-full sm:w-auto bg-white hover:bg-[var(--color-brand-olive-pale)] border border-zinc-200 text-[var(--color-brand-dark)] font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-2 cursor-pointer pt-4.5 pb-4.5 animate-fade-in"
            >
              Rejoindre l'équipe
              <ArrowUpRight className="w-4 h-4 text-[var(--color-brand-olive)]" />
            </button>
          </motion.div>
        </div>

        {/* Dynamic Overlapping Visual Card collage (3 overlay blocks from wireframe) */}
        <div className="mt-14 md:mt-20 relative max-w-4xl mx-auto h-[260px] sm:h-[380px] flex items-center justify-center">
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[var(--color-brand-olive-light)] to-transparent opacity-20 blur-3.5xl -z-10" />

          {/* Left Block card */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: -6 }}
            whileInView={{ opacity: 1, x: 0, rotate: -4 }}
            viewport={{ once: true }}
            className="absolute left-[-10px] md:left-4 top-10 md:top-14 w-[160px] sm:w-[260px] bg-white border border-zinc-150 rounded-2.5xl p-4 sm:p-6 shadow-md -z-10"
          >
            <span className="text-[9px] font-black uppercase text-[var(--color-brand-olive)] tracking-wider block">IMPACT SCOLAIRE</span>
            <span className="font-display font-black text-xl sm:text-3xl text-[var(--color-brand-dark)] leading-none mt-1 block">57+</span>
            <p className="text-[var(--color-brand-text-muted)] text-[10px] sm:text-xs mt-1 sm:mt-2 font-normal md:font-medium">Écoliers béninois suivis médicalement et scolarisés avec succès cette saison.</p>
          </motion.div>

          {/* Center Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-[240px] sm:w-[420px] bg-white border-2 border-white rounded-[2rem] overflow-hidden shadow-2xl relative"
          >
            <div className="aspect-[4/3] bg-zinc-100 overflow-hidden relative group">
              <img 
                src="/images/albi_applying_sunscreen_1781884143114.jpg" 
                alt="Application bienveillante de crème solaire au Bénin" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)]/40 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="p-4 sm:p-6 text-center sm:text-left bg-white">
              <h4 className="font-display font-extrabold text-sm sm:text-base text-[var(--color-brand-dark)] mb-1">
                La vie à l'abri du soleil
              </h4>
              <p className="text-[var(--color-brand-text-muted)] text-[10px] sm:text-[11px] font-semibold">
                Campagne de distribution d'écran total SPF 50+ à l'école des sourds et albinos de Porto-Novo.
              </p>
            </div>
          </motion.div>

          {/* Right Block card */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 6 }}
            whileInView={{ opacity: 1, x: 0, rotate: 4 }}
            viewport={{ once: true }}
            className="absolute right-[-10px] md:right-4 bottom-10 sm:bottom-14 w-[160px] sm:w-[260px] bg-[var(--color-brand-olive)] text-white border border-transparent rounded-2.5xl p-4 sm:p-6 shadow-md -z-10"
          >
            <span className="text-[9px] font-black uppercase text-amber-100 tracking-wider block">DISPOSITIF URGENCE</span>
            <span className="font-display font-black text-lg sm:text-2xl leading-none mt-1.5 block">Protection SPF 50+</span>
            <p className="text-orange-50 text-[10px] sm:text-xs mt-2 font-medium">100% de crèmes aux normes de dermatologie pédiatrique strictes.</p>
          </motion.div>
        </div>

        {/* Partners Row appended to Hero Section Bottom */}
        <div className="text-center pt-14">
          <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 block mb-4">
            ORGANISMES PARTENAIRES SOUDÉS SUR LE TERRAIN :
          </span>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3.5 md:gap-x-12">
            {partners.map((partner, index) => (
              <span 
                key={index}
                className="font-display font-black text-[11px] md:text-xs text-[var(--color-brand-dark)] opacity-55 hover:opacity-100 transition-opacity uppercase tracking-wider"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: ENJEUX CRITIQUES & POURQUOI AGIR (Problem / Pain Points) */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-black uppercase text-[var(--color-brand-olive)] tracking-widest">
            Un combat vital de chaque seconde
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[var(--color-brand-dark)] mt-1 tracking-tight">
            Pourquoi votre soutien est indispensable au Bénin
          </h2>
          <p className="text-[var(--color-brand-text-muted)] text-[12px] sm:text-sm font-normal md:font-medium max-w-md mx-auto leading-relaxed">
            Sans intervention structurée, les écoliers touchés par l'albinisme font face à de redoutables barrières de santé et scolaires.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {criticalIssues.map((issue, idx) => {
            const bgImages = [
              "/images/albi_prevention_care_1781884154813.jpg",
              "/images/albi_children_school_1781884113577.jpg",
              "/images/volunteers_park_1781879709971.jpg",
              "/images/albi_sun_cream_sage_1781884128743.jpg"
            ];
            const bgGradients = [
              "linear-gradient(to bottom, rgba(12, 16, 12, 0.93) 0%, rgba(12, 16, 12, 0.96) 100%)",
              "linear-gradient(to bottom, rgba(10, 15, 20, 0.93) 0%, rgba(10, 15, 20, 0.96) 100%)",
              "linear-gradient(to bottom, rgba(18, 12, 10, 0.93) 0%, rgba(18, 12, 10, 0.96) 100%)",
              "linear-gradient(to bottom, rgba(12, 18, 12, 0.93) 0%, rgba(12, 18, 12, 0.96) 100%)"
            ];
            return (
              <motion.div
                key={issue.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                style={{
                  backgroundImage: `${bgGradients[idx % 4]}, url('${bgImages[idx % 4]}')`
                }}
                className="bg-cover bg-center border border-zinc-800 rounded-[1.8rem] p-6.5 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300 min-h-[220px] text-white"
              >
                <div>
                  <span className="text-[9px] font-extrabold uppercase bg-white/10 text-[var(--color-brand-olive-light)] px-2.5 py-1 rounded-full tracking-wider border border-white/15">
                    {issue.badge}
                  </span>
                  <h3 className="font-display font-black text-base text-white mt-4 leading-tight">
                    {issue.title}
                  </h3>
                  <p className="text-zinc-200 text-[11px] sm:text-xs mt-2.5 leading-relaxed font-normal">
                    {issue.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* SECTION 3: LES 3 LIGNES DE VIE (Smarter Solutions) */}
      <section className="px-4 md:px-8 py-16 md:py-22 bg-white/65 border-t border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-black uppercase text-[var(--color-brand-olive)] tracking-widest bg-[var(--color-brand-olive-pale)] px-3.5 py-1 rounded-full">
              L'impact en action
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[var(--color-brand-dark)] mt-2 tracking-tight">
              Notre stratégie d'intervention intégrée
            </h2>
            <p className="text-[var(--color-brand-text-muted)] text-xs sm:text-sm font-normal md:font-medium max-w-md mx-auto leading-relaxed">
              Nous activons trois leviers clés interconnectés pour assurer la santé et lever les tabous.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillarSolutions.map((solution, idx) => {
              const bgImages = [
                "/images/albi_prevention_care_1781884154813.jpg",
                "/images/albi_children_school_1781884113577.jpg",
                "/images/volunteers_park_1781879709971.jpg"
              ];
              const bgGradients = [
                "linear-gradient(to bottom, rgba(10, 15, 12, 0.93) 0%, rgba(10, 15, 12, 0.97) 100%)",
                "linear-gradient(to bottom, rgba(12, 15, 22, 0.93) 0%, rgba(12, 15, 22, 0.97) 100%)",
                "linear-gradient(to bottom, rgba(18, 12, 10, 0.93) 0%, rgba(18, 12, 10, 0.97) 100%)"
              ];
              return (
                <div
                  key={idx}
                  style={{
                    backgroundImage: `${bgGradients[idx % 3]}, url('${bgImages[idx % 3]}')`
                  }}
                  className="bg-cover bg-center border border-zinc-850 rounded-3.5xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between group min-h-[300px] text-white"
                >
                  {/* Upper graphic element resembling wireframe mockups */}
                  <div className="p-6 border-b border-zinc-800/40 h-32 flex flex-col justify-between relative overflow-hidden bg-transparent">
                    <span className="text-[10px] font-black uppercase text-zinc-300 tracking-wider block">
                      {solution.badge}
                    </span>
                    <div className="flex justify-between items-center z-10">
                      <span className="font-display font-black text-[13px] md:text-sm text-white">
                        {solution.subtitle}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center shadow-sm border border-white/15">
                        {idx === 0 && <Sun className="w-4 h-4 text-[var(--color-brand-olive-light)]" />}
                        {idx === 1 && <Eye className="w-4 h-4 text-white" />}
                        {idx === 2 && <Users className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-display font-black text-base md:text-lg text-white leading-tight">
                        {solution.title}
                      </h3>
                      <p className="text-zinc-200 text-[12px] md:text-xs leading-relaxed font-normal mt-2">
                        {solution.desc}
                      </p>
                    </div>
                    
                    <div className="pt-3 border-t border-zinc-800/40">
                      <button 
                        onClick={onVolunteerClick}
                        className="text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-olive-light)] hover:text-white hover:underline flex items-center gap-1 cursor-pointer focus:outline-none"
                      >
                        En savoir plus sur nos actions
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: TRAÇABILITÉ & PARCOURS DU DON (Transparency Timeline) */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-5xl mx-auto space-y-14">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-black uppercase text-[var(--color-brand-olive)] tracking-widest">
            Audit et traçabilité
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[var(--color-brand-dark)] mt-1 tracking-tight">
            Le parcours de votre soutien
          </h2>
          <p className="text-[var(--color-brand-text-muted)] text-xs sm:text-sm font-normal md:font-medium max-w-xs mx-auto leading-relaxed">
            De la collecte générale de fonds à l'application de la crème sur l'élève en salle de classe.
          </p>
        </div>

        <div className="relative md:border-l-2 md:border-zinc-200 pl-0 md:pl-10 space-y-12 max-w-3xl mx-auto">
          {timelineSteps.map((step, idx) => (
            <div 
              key={idx}
              className="relative flex flex-col md:flex-row gap-4 items-start"
            >
              <div className="absolute left-[-47px] top-1 hidden md:flex w-8 h-8 rounded-full bg-[var(--color-brand-dark)] text-white text-[10px] font-black items-center justify-center border-4 border-[var(--color-brand-beige)]">
                {step.step}
              </div>

              <div className="bg-white border border-zinc-150/80 rounded-[1.8rem] p-6.5 shadow-xs w-full flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
                <div className="space-y-1.5 sm:max-w-xl">
                  <span className="text-[9px] md:text-[10px] font-extrabold uppercase text-[var(--color-brand-olive)] tracking-widest block md:hidden">
                    Étape {step.step}
                  </span>
                  <h3 className="font-display font-extrabold text-base text-[var(--color-brand-dark)] leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-brand-text-muted)] text-[11px] sm:text-xs leading-relaxed font-normal md:font-medium">
                    {step.desc}
                  </p>
                </div>
                
                <div className="shrink-0 flex items-center justify-start sm:justify-end">
                  <div className="w-7 h-7 rounded-full bg-green-50 text-green-600 flex items-center justify-center border border-green-200">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: FORFAITS D’IMPACT CONCRETS (Pricing Tiers / Donation Packages) */}
      <section className="px-4 md:px-8 py-16 md:py-24 bg-white/70 border-t border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-black uppercase text-[var(--color-brand-olive)] tracking-widest">
              Impact financier mesuré
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[var(--color-brand-dark)] mt-1 tracking-tight">
              Forfaits d'impact de secours Albi
            </h2>
            <p className="text-[var(--color-brand-text-muted)] text-xs sm:text-sm font-normal md:font-medium max-w-md mx-auto leading-relaxed">
              Choisissez la formule matérielle concrète que vous souhaitez voir acheminée et distribuée nominativement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {pricingPackages.map((pkg, idx) => {
              const bgImages = [
                "/images/albi_sun_cream_sage_1781884128743.jpg",
                "/images/albi_children_school_1781884113577.jpg",
                "/images/albi_prevention_care_1781884154813.jpg"
              ];
              const bgGradients = [
                "linear-gradient(to bottom, rgba(12, 18, 12, 0.94) 0%, rgba(12, 18, 12, 0.97) 100%)",
                "linear-gradient(to bottom, rgba(10, 15, 20, 0.93) 0%, rgba(10, 15, 20, 0.97) 100%)",
                "linear-gradient(to bottom, rgba(18, 12, 10, 0.94) 0%, rgba(18, 12, 10, 0.97) 100%)"
              ];
              return (
                <div
                  key={idx}
                  style={{
                    backgroundImage: `${bgGradients[idx % 3]}, url('${bgImages[idx % 3]}')`
                  }}
                  className={`bg-cover bg-center rounded-3.5xl border p-8 flex flex-col justify-between transition-all duration-300 min-h-[460px] relative text-white ${
                    pkg.isPopular 
                      ? "border-[var(--color-brand-olive)] shadow-lg hover:shadow-xl hover:shadow-orange-100/30" 
                      : "border-zinc-800 shadow-md hover:shadow-lg"
                  }`}
                >
                  {pkg.isPopular && (
                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[var(--color-brand-olive)] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1 rounded-full border border-orange-200 font-display">
                      PROJET RECOMMANDÉ
                    </div>
                  )}

                  <div className="space-y-5">
                    <div>
                      <h3 className="font-display font-black text-base uppercase tracking-wider text-white">
                        {pkg.name}
                      </h3>
                      <p className="text-zinc-350 text-xs mt-1 font-normal">{pkg.desc}</p>
                    </div>

                    <div className="flex items-baseline gap-1.5 pt-1 border-b border-zinc-800 pb-4">
                      <span className="font-display font-black text-4xl sm:text-5xl text-white">
                        {pkg.price}
                      </span>
                      <span className="text-zinc-400 text-xs font-semibold">/ parrainage ponctuel</span>
                    </div>

                    <ul className="space-y-3 pt-2">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex gap-2.5 items-start text-xs text-zinc-200 font-normal leading-relaxed">
                          <Check className="w-4 h-4 text-[var(--color-brand-olive-light)] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <a
                      href={getWhatsAppLink(pkg.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full font-black text-xs uppercase tracking-wider py-4 px-5 rounded-2xl flex items-center justify-between transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                        pkg.isPopular
                          ? "bg-[var(--color-brand-olive)] text-white hover:bg-[var(--color-brand-olive-dense)] shadow-md"
                          : "bg-[var(--color-brand-dark)] text-white hover:bg-black border border-zinc-800"
                      }`}
                    >
                      <span>Soutenir ce forfait</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ ACCORDION & SERMENT D’IMPACT (FAQ Combined with final global CTA block) */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-4xl mx-auto space-y-14">
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-black uppercase text-[var(--color-brand-olive)] tracking-widest">
              Des réponses claires à vos questions
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[var(--color-brand-dark)] tracking-tight">
              Questions Fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-white border border-zinc-150 rounded-2xl overflow-hidden transition-all duration-300 shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-5.5 py-4 cursor-pointer flex items-center justify-between gap-4 font-display font-extrabold text-xs sm:text-sm text-[var(--color-brand-dark)] hover:text-[var(--color-brand-olive-dense)] transition-colors focus:outline-none focus:ring-0"
                  >
                    <span>{faq.q}</span>
                    <div className="w-6 h-6 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100 shrink-0">
                      {isOpen 
                        ? <ChevronUp className="w-3.5 h-3.5 text-zinc-500" /> 
                        : <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
                      }
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="px-5.5 pb-5 pt-1 border-t border-zinc-50 text-[var(--color-brand-text-muted)] text-[12px] sm:text-xs leading-relaxed font-normal md:font-medium">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global CTA Form / Button Box appended inside section 6 */}
        <div className="bg-[var(--color-brand-dark)] text-white rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-xl text-center">
          <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 rounded-full bg-[var(--color-brand-olive-light)]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase text-[var(--color-brand-olive-light)] tracking-widest bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              BÉNIN ET INTERNATIONAL SOUDÉS
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl leading-tight text-white m-0 tracking-tight">
              Prêt à faire la différence aujourd'hui ?
            </h2>
            <p className="text-orange-50/80 text-xs sm:text-sm font-normal md:font-medium max-w-xl mx-auto leading-relaxed">
              Pour des projets de partenariat médicaux, des subventions ou du mécénat humanitaire direct, écrivez à nos coordinateurs francophones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <button
                onClick={onDonateClick}
                className="w-full sm:w-auto bg-[var(--color-brand-olive-light)] hover:bg-white text-[var(--color-brand-dark)] font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              >
                Participer financièrement
              </button>
              <a
                href={getWhatsAppLink("Bonjour AlbiInternational ! Je souhaite vous contacter pour proposer nos services / faire un don matériel depuis la page de soutien de votre site web.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-full border border-white/15 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-2 cursor-pointer"
              >
                Discuter logistique locale
                <ArrowUpRight className="w-4 h-4 text-[var(--color-brand-olive-light)]" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
