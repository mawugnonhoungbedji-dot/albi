import React, { useState, useEffect } from "react";
import { Grid, Eye, X, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, ZoomIn, LayoutGrid, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface GalleryImage {
  url: string;
  title: string;
  desc: string;
  category: "Santé" | "Éducation" | "Sensibilisation" | "Sourires" | "Communauté";
}

const CATEGORIES = ["Tout", "Santé", "Éducation", "Sensibilisation", "Sourires", "Communauté"] as const;

type CategoryType = typeof CATEGORIES[number];
type ViewModeType = "carousel" | "grid";

const GALLERY_IMGS: GalleryImage[] = [
  {
    url: "/images/Galeries/Alb-gal (1).webp",
    title: "Distribution Solidaire de Kits Scolaires",
    desc: "Un enfant reçoit des cahiers et fournitures scolaires pour commencer l'année dans les meilleures conditions.",
    category: "Éducation"
  },
  {
    url: "/images/Galeries/Alb-gal (2).webp",
    title: "Atelier d'Application Pratique de Crème",
    desc: "Apprendre aux enfants les bons gestes pour appliquer l'écran total SPF 50+ sur le visage et le cou.",
    category: "Santé"
  },
  {
    url: "/images/Galeries/Alb-gal (3).webp",
    title: "Séance de Sensibilisation en Classe",
    desc: "Échanges avec les instituteurs et élèves pour déconstruire les préjugés entourant l'albinisme.",
    category: "Sensibilisation"
  },
  {
    url: "/images/Galeries/Alb-gal (4).webp",
    title: "Sourire Rayonnant sous le Chapeau",
    desc: "L'épanouissement d'un jeune garçon protégé du soleil grâce aux chapeaux à larges bords.",
    category: "Sourires"
  },
  {
    url: "/images/Galeries/Alb-gal (5).webp",
    title: "Échanges avec les Familles",
    desc: "Rencontre chaleureuse à domicile pour écouter les besoins spécifiques des parents d'enfants albinos.",
    category: "Communauté"
  },
  {
    url: "/images/Galeries/Alb-gal (6).webp",
    title: "Dotation Essentielle SPF 50+",
    desc: "Approvisionnement régulier en crèmes solaires pour les enfants albinos vulnérables.",
    category: "Santé"
  },
  {
    url: "/images/Galeries/Alb-gal (7).webp",
    title: "Intégration et Confiance en Classe",
    desc: "Un écolier albinos assis au premier rang pour pallier sa déficience visuelle légère.",
    category: "Éducation"
  },
  {
    url: "/images/Galeries/Alb-gal (8).webp",
    title: "Atelier de Prévention Cutanée",
    desc: "Nos bénévoles expliquent les dangers des rayons UV et l'importance d'éviter l'exposition au zénith.",
    category: "Sensibilisation"
  },
  {
    url: "/images/Galeries/Alb-gal (9).webp",
    title: "Joie Partagée lors de la Distribution",
    desc: "Instants de célébration et de sourires lors de la remise annuelle de kits de rentrée.",
    category: "Sourires"
  },
  {
    url: "/images/Galeries/Alb-gal (10).webp",
    title: "Rencontre Communautaire Inclusive",
    desc: "Dialogue et soutien mutuel au sein de la communauté des parents de Cotonou.",
    category: "Communauté"
  },
  {
    url: "/images/Galeries/Alb-gal (11).webp",
    title: "Examen Dermatologique Préventif",
    desc: "Dépistage des lésions cutanées précoces par un spécialiste partenaire lors d'une campagne de santé.",
    category: "Santé"
  },
  {
    url: "/images/Galeries/Alb-gal (12).webp",
    title: "Fournitures Scolaires pour Tous",
    desc: "La logistique rigoureuse derrière la préparation des kits scolaires pour la rentrée.",
    category: "Éducation"
  },
  {
    url: "/images/Galeries/Alb-gal (13).webp",
    title: "Sensibilisation en Milieu Rural",
    desc: "Déplacement de nos équipes pour sensibiliser les populations éloignées des grands centres urbains.",
    category: "Sensibilisation"
  },
  {
    url: "/images/Galeries/Alb-gal (14).webp",
    title: "Sourire Complice de Rentrée",
    desc: "Un moment joyeux capturé entre bénévoles et enfants bénéficiaires de kits scolaires.",
    category: "Sourires"
  },
  {
    url: "/images/Galeries/Alb-gal (15).webp",
    title: "Cercle de Solidarité Locale",
    desc: "Rassemblement communautaire pour renforcer le réseau d'entraide entre les familles.",
    category: "Communauté"
  },
  {
    url: "/images/Galeries/Alb-gal (16).webp",
    title: "Soin Cutané Quotidien",
    desc: "Une maman applique la crème protectrice sur son enfant avant le départ pour l'école.",
    category: "Santé"
  },
  {
    url: "/images/Galeries/Alb-gal (17).webp",
    title: "Soutien et Accompagnement Scolaire",
    desc: "Suivi individuel d'un élève pour s'assurer qu'il dispose de manuels en gros caractères.",
    category: "Éducation"
  },
  {
    url: "/images/Galeries/Alb-gal (18).webp",
    title: "Campagne d'Éducation Populaire",
    desc: "Utilisation de supports illustrés simples pour expliquer l'origine génétique de l'albinisme.",
    category: "Sensibilisation"
  },
  {
    url: "/images/Galeries/Alb-gal (19).webp",
    title: "Éclats de Rire à l'Orphelinat",
    desc: "Moments récréatifs organisés pour favoriser l'inclusion sociale des enfants.",
    category: "Sourires"
  },
  {
    url: "/images/Galeries/Alb-gal (20).webp",
    title: "Accompagnement Parental de Proximité",
    desc: "Échanges ciblés avec les pères et mères pour éliminer la culpabilité liée à la naissance d'un enfant albinos.",
    category: "Communauté"
  },
  {
    url: "/images/Galeries/Alb-gal (21).webp",
    title: "Consultation et Conseils Médicaux",
    desc: "Recommandation d'utilisation stricte de vêtements longs et de lunettes filtrantes UV.",
    category: "Santé"
  },
  {
    url: "/images/Galeries/Alb-gal (22).webp",
    title: "Remise Solennelle de Kits d'Inclusion",
    desc: "Distribution de cartables, chapeaux de soleil et lunettes dans une école de Porto-Novo.",
    category: "Éducation"
  },
  {
    url: "/images/Galeries/Alb-gal (23).webp",
    title: "Conférence de Sensibilisation",
    desc: "Présentation devant des acteurs institutionnels pour plaider la cause des personnes albinos.",
    category: "Sensibilisation"
  },
  {
    url: "/images/Galeries/Alb-gal (24).webp",
    title: "Sourire Timide sous Haute Protection",
    desc: "Un enfant reconnaissant de recevoir ses équipements de protection solaire individuelle.",
    category: "Sourires"
  },
  {
    url: "/images/Galeries/Alb-gal (25).webp",
    title: "Réseau de Familles Solidaires",
    desc: "Une communauté forte pour briser l'isolement social des personnes de condition albinos.",
    category: "Communauté"
  },
  {
    url: "/images/Galeries/Alb-gal (26).webp",
    title: "Distribution de Crèmes de Laboratoires Partenaires",
    desc: "Remise d'écrans solaires certifiés SPF 50+ adaptés aux peaux sensibles sans mélanine.",
    category: "Santé"
  },
  {
    url: "/images/Galeries/Alb-gal (27).webp",
    title: "Égalité des Chances à l'École",
    desc: "Des enfants albinos étudient sereinement aux côtés de leurs camarades de classe.",
    category: "Éducation"
  },
  {
    url: "/images/Galeries/Alb-gal (28).webp",
    title: "Éducation Médicale pour Tous",
    desc: "Apprendre aux plus jeunes à surveiller l'état de leur peau et à signaler toute rougeur suspecte.",
    category: "Sensibilisation"
  },
  {
    url: "/images/Galeries/Alb-gal (29).webp",
    title: "Visage Illuminé de Bonheur",
    desc: "La joie simple de se sentir entouré, protégé et considéré à sa juste valeur.",
    category: "Sourires"
  },
  {
    url: "/images/Galeries/Alb-gal (30).webp",
    title: "Visite et Don de Crèmes Solaires",
    desc: "Suivi régulier des stocks pour éviter toute rupture de protection cutanée critique.",
    category: "Santé"
  },
  {
    url: "/images/Galeries/Alb-gal (31).webp",
    title: "Remise de Mobilier Scolaire Adapté",
    desc: "Installation de pupitres plus proches du tableau pour optimiser le confort visuel.",
    category: "Éducation"
  },
  {
    url: "/images/Galeries/Alb-gal (32).webp",
    title: "Session Interactive de Déconstruction des Mythes",
    desc: "Bannir les préjugés de sorcellerie par l'explication scientifique de la dépigmentation.",
    category: "Sensibilisation"
  },
  {
    url: "/images/Galeries/Alb-gal (33).webp",
    title: "Heureux Sourire sous les Tropiques",
    desc: "Un enfant albinos confiant et heureux, paré de son chapeau à larges bords.",
    category: "Sourires"
  },
  {
    url: "/images/Galeries/Alb-gal (34).webp",
    title: "Soutien Moral aux Mamans",
    desc: "Conseils et accompagnement psychologique pour surmonter le choc émotionnel initial.",
    category: "Communauté"
  },
  {
    url: "/images/Galeries/Alb-gal (35).webp",
    title: "Examen Visuel et Distribution de Lunettes",
    desc: "Tests de vision suivis de la distribution de lunettes polarisées filtrant 100% des rayons UV.",
    category: "Santé"
  },
  {
    url: "/images/Galeries/Alb-gal (36).webp",
    title: "Cérémonie de Distribution Festive",
    desc: "Célébration en chansons pour marquer le début du partenariat avec une nouvelle école.",
    category: "Éducation"
  },
  {
    url: "/images/Galeries/Alb-gal (37).webp",
    title: "Intervention dans les Écoles Primaires",
    desc: "Sensibilisation directe des instituteurs pour adapter leur pédagogie aux élèves albinos.",
    category: "Sensibilisation"
  },
  {
    url: "/images/Galeries/Alb-gal (38).webp",
    title: "Sourire Innocent et Confiant",
    desc: "Parce que chaque enfant albinos mérite d'étudier en sécurité et avec fierté.",
    category: "Sourires"
  },
  {
    url: "/images/Galeries/Alb-gal (39).webp",
    title: "Union des Parents pour l'Inclusion",
    desc: "Réunion mensuelle du pôle de Porto-Novo pour planifier les prochaines distributions.",
    category: "Communauté"
  },
  {
    url: "/images/Galeries/Alb-gal (40).webp",
    title: "Stockage et Logistique des Crèmes",
    desc: "Inventaire et tri rigoureux des flacons de crème solaire arrivés d'Europe.",
    category: "Santé"
  },
  {
    url: "/images/Galeries/Alb-gal (41).webp",
    title: "Fournitures Scolaires pour l'Avenir",
    desc: "Remise de livres et stylos pour encourager les enfants à persévérer dans leurs études.",
    category: "Éducation"
  },
  {
    url: "/images/Galeries/Alb-gal (42).webp",
    title: "Grand Rassemblement Annuel de Sensibilisation",
    desc: "Une journée d'échanges festifs réunissant les familles, partenaires et médias locaux.",
    category: "Sensibilisation"
  }
];

export default function ActionsGallery() {
  const [selectedCat, setSelectedCat] = useState<CategoryType>("Tout");
  const [viewMode, setViewMode] = useState<ViewModeType>("carousel");
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  
  // Interactive Autoplay States
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // Filter images based on selected category
  const filteredImgs = GALLERY_IMGS.filter(img => 
    selectedCat === "Tout" ? true : img.category === selectedCat
  );

  // Handle window resizing to adjust horizontal offset values dynamically
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset active index and count when category/mode updates
  useEffect(() => {
    setActiveIdx(0);
    setVisibleCount(12);
  }, [selectedCat, viewMode]);

  // Carousel Autoplay Effect (Runs every 5s if carousel view is active and not hovered/dragged/modal-open)
  useEffect(() => {
    if (viewMode !== "carousel" || lightboxIdx !== null || isHovered || isDragging || filteredImgs.length === 0) {
      return;
    }
    const interval = setInterval(() => {
      nextImg();
    }, 5000);
    return () => clearInterval(interval);
  }, [viewMode, lightboxIdx, isHovered, isDragging, filteredImgs.length, activeIdx]);

  // Navigate carousel next
  const nextImg = () => {
    if (filteredImgs.length > 0) {
      setActiveIdx((prev) => (prev + 1) % filteredImgs.length);
    }
  };

  // Navigate carousel prev
  const prevImg = () => {
    if (filteredImgs.length > 0) {
      setActiveIdx((prev) => (prev - 1 + filteredImgs.length) % filteredImgs.length);
    }
  };

  // Open Lightbox
  const openLightbox = (index: number) => {
    setLightboxIdx(index);
  };

  // Close Lightbox
  const closeLightbox = () => {
    setLightboxIdx(null);
  };

  // Navigate lightbox next
  const nextLightboxImg = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIdx !== null && filteredImgs.length > 0) {
      setLightboxIdx((lightboxIdx + 1) % filteredImgs.length);
    }
  };

  // Navigate lightbox prev
  const prevLightboxImg = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIdx !== null && filteredImgs.length > 0) {
      setLightboxIdx((lightboxIdx - 1 + filteredImgs.length) % filteredImgs.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIdx !== null) {
        if (e.key === "ArrowRight") nextLightboxImg();
        if (e.key === "ArrowLeft") prevLightboxImg();
        if (e.key === "Escape") closeLightbox();
      } else if (viewMode === "carousel") {
        if (e.key === "ArrowRight") nextImg();
        if (e.key === "ArrowLeft") prevImg();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIdx, viewMode, filteredImgs]);

  // Swipe / Drag handler
  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    const threshold = 50;
    if (info.offset.x < -threshold) {
      nextImg();
    } else if (info.offset.x > threshold) {
      prevImg();
    }
  };

  const getWrappedIndex = (index: number) => {
    const L = filteredImgs.length;
    if (L === 0) return 0;
    return (index + L) % L;
  };

  // Compute 3D layout offset positions
  const getCardStyles = (offset: number) => {
    if (offset === 0) {
      return {
        x: 0,
        scale: 1.05,
        zIndex: 30,
        opacity: 1,
        rotate: 0,
        pointerEvents: "auto" as const
      };
    }

    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;
    const baseOffset = isMobile ? 100 : isTablet ? 180 : 250;

    if (offset === -1) {
      return {
        x: -baseOffset,
        scale: 0.85,
        zIndex: 20,
        opacity: 0.75,
        rotate: -3,
        pointerEvents: "auto" as const
      };
    }
    if (offset === 1) {
      return {
        x: baseOffset,
        scale: 0.85,
        zIndex: 20,
        opacity: 0.75,
        rotate: 3,
        pointerEvents: "auto" as const
      };
    }
    if (offset === -2) {
      return {
        x: -baseOffset * 1.7,
        scale: 0.7,
        zIndex: 10,
        opacity: 0.35,
        rotate: -6,
        pointerEvents: "auto" as const
      };
    }
    if (offset === 2) {
      return {
        x: baseOffset * 1.7,
        scale: 0.7,
        zIndex: 10,
        opacity: 0.35,
        rotate: 6,
        pointerEvents: "auto" as const
      };
    }

    return {
      x: offset > 0 ? baseOffset * 2.5 : -baseOffset * 2.5,
      scale: 0.5,
      zIndex: 0,
      opacity: 0,
      rotate: 0,
      pointerEvents: "none" as const
    };
  };

  // Entrance Variants for stunning page loads
  const headerVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } }
  };

  const tabsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
  };

  const tabItemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 150, damping: 15 } 
    }
  };

  const deckVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 35 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 18, delay: 0.3 } 
    }
  };

  // Sliding window offsets
  const offsets = [-2, -1, 0, 1, 2];

  // Grid view pagination slices
  const visibleImgs = filteredImgs.slice(0, visibleCount);

  return (
    <section className="px-4 md:px-8 py-20 max-w-7xl mx-auto overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--color-brand-olive-light)]/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Title Header (Animated Entrance) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
        className="text-center max-w-2xl mx-auto mb-12 relative z-10"
      >
        <span className="font-display font-semibold text-[10px] uppercase tracking-widest text-[var(--color-brand-text-muted)] block mb-3">
          GALLERY
        </span>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[var(--color-brand-dark)] tracking-tight">
          My Visual Diary
        </h2>
        <p className="text-zinc-500 text-xs sm:text-sm mt-3 leading-relaxed">
          See the world through my lens: adventures in photos and videos
        </p>
      </motion.div>

      {/* Tabs list (Animated Staggered Pop-In) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={tabsVariants}
        className="flex flex-wrap justify-center items-center gap-2 mb-14 relative z-10 max-w-5xl mx-auto px-4"
      >
        {CATEGORIES.map((cat) => (
          <motion.button
            key={cat}
            variants={tabItemVariants}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedCat(cat)}
            className={`px-5 py-2.5 rounded-full font-display text-[11px] font-semibold transition-colors duration-300 cursor-pointer border ${
              selectedCat === cat
                ? "bg-[var(--color-brand-dark)] text-white border-[var(--color-brand-dark)] shadow-sm"
                : "bg-white hover:bg-zinc-50 text-[var(--color-brand-dark)] border-zinc-200"
            }`}
          >
            {cat === "Tout" ? "Toutes les actions" : cat}
          </motion.button>
        ))}

        {/* View Mode Toggle Capsule Button (Animated Hover/Tap) */}
        <motion.button
          variants={tabItemVariants}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setViewMode(viewMode === "carousel" ? "grid" : "carousel")}
          className="px-5 py-2.5 rounded-full font-display text-[11px] font-semibold transition-colors duration-300 cursor-pointer border bg-white hover:bg-zinc-50 text-[var(--color-brand-olive-dense)] border-[var(--color-brand-olive)] flex items-center gap-2 shadow-xs"
        >
          {viewMode === "carousel" ? (
            <>
              <span>Voir Grille</span>
              <LayoutGrid className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              <span>Voir Carrousel</span>
              <Layers className="w-3.5 h-3.5" />
            </>
          )}
        </motion.button>
      </motion.div>

      {/* 3D Coverflow Carousel View */}
      {viewMode === "carousel" && filteredImgs.length > 0 && (
        <div className="relative flex flex-col items-center select-none">
          
          {/* Deck Container (Animated Entry) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={deckVariants}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setIsDragging(false);
            }}
            className="relative w-full max-w-5xl h-[450px] md:h-[500px] flex items-center justify-center overflow-visible"
          >
            {offsets.map((offset) => {
              const L = filteredImgs.length;
              const imgIdx = getWrappedIndex(activeIdx + offset);
              const img = filteredImgs[imgIdx];

              if (!img) return null;

              return (
                <motion.div
                  key={`${img.url}-${offset}`}
                  style={{
                    position: "absolute",
                    width: "100%",
                    maxWidth: windowWidth < 768 ? "250px" : "330px",
                    height: windowWidth < 768 ? "340px" : "430px",
                    transformOrigin: "center bottom",
                  }}
                  animate={getCardStyles(offset)}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                  drag={offset === 0 ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.4}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                  onClick={() => {
                    if (offset === 0) {
                      openLightbox(imgIdx);
                    } else {
                      setActiveIdx(imgIdx);
                    }
                  }}
                  className={`group rounded-[2rem] overflow-hidden bg-white border border-zinc-200/50 p-2.5 md:p-3 shadow-2xl flex flex-col justify-between transition-all duration-300 ${
                    offset === 0 ? "cursor-pointer border-[var(--color-brand-olive)]/40 hover:border-[var(--color-brand-olive)]/80 hover:shadow-[0_20px_50px_rgba(255,140,0,0.12)]" : "cursor-pointer"
                  }`}
                >
                  {/* Image wrapper */}
                  <div className="relative w-full h-[82%] rounded-[1.6rem] overflow-hidden bg-zinc-50 pointer-events-none">
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                      draggable={false}
                    />
                    
                    {/* Floating category tag */}
                    <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-[8.5px] font-black uppercase tracking-widest text-white px-2.5 py-1 rounded-full border border-white/10">
                      {img.category}
                    </span>

                    {/* Magnifier Glass overlay for the active card */}
                    {offset === 0 && (
                      <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.div 
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1 }}
                          className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 text-white"
                        >
                          <ZoomIn className="w-5 h-5 stroke-[2.5]" />
                        </motion.div>
                      </div>
                    )}
                  </div>

                  {/* Card bottom text area */}
                  <div className="p-2 pt-1 text-center pointer-events-none">
                    <h3 className="font-display font-bold text-zinc-950 text-xs md:text-sm leading-snug line-clamp-1 group-hover:text-[var(--color-brand-olive-dense)] transition-colors">
                      {img.title}
                    </h3>
                  </div>

                </motion.div>
              );
            })}
          </motion.div>

          {/* Navigation Controls (Interactive outlined circles) */}
          <div className="flex justify-center gap-4 mt-8 relative z-20">
            <motion.button
              whileHover={{ scale: 1.1, borderColor: "var(--color-brand-olive)" }}
              whileTap={{ scale: 0.93 }}
              onClick={prevImg}
              className="w-12 h-12 rounded-full border border-zinc-200 bg-white text-zinc-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
              aria-label="Photo précédente"
            >
              <ArrowLeft className="w-5 h-5 stroke-[1.8]" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, borderColor: "var(--color-brand-olive)" }}
              whileTap={{ scale: 0.93 }}
              onClick={nextImg}
              className="w-12 h-12 rounded-full border border-zinc-200 bg-white text-zinc-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
              aria-label="Photo suivante"
            >
              <ArrowRight className="w-5 h-5 stroke-[1.8]" />
            </motion.button>
          </div>

        </div>
      )}

      {/* Grid View Mode */}
      {viewMode === "grid" && (
        <div className="space-y-12 relative z-10">
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {visibleImgs.map((img, idx) => (
                <motion.div
                  key={img.url}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group relative cursor-pointer overflow-hidden rounded-[1.8rem] bg-white border border-zinc-200/50 p-2.5 hover:shadow-lg transition-all duration-300 hover:border-[var(--color-brand-olive)]/50"
                  onClick={() => openLightbox(idx)}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.4rem] bg-zinc-100">
                    <img
                      src={img.url}
                      alt={img.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-md p-3.5 rounded-full border border-white/30 text-white transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-5 h-5 stroke-[2.5]" />
                      </div>
                    </div>
                    <span className="absolute top-3 left-3 bg-black/55 backdrop-blur-xs text-[8.5px] font-black uppercase tracking-widest text-white px-2.5 py-1 rounded-full border border-white/10">
                      {img.category}
                    </span>
                  </div>

                  <div className="p-3">
                    <h3 className="font-display font-bold text-zinc-900 text-xs leading-snug line-clamp-1 group-hover:text-[var(--color-brand-olive-dense)] transition-colors">
                      {img.title}
                    </h3>
                    <p className="text-[10px] text-zinc-400 mt-0.5 line-clamp-1 font-semibold">
                      {img.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results Fallback */}
          {filteredImgs.length === 0 && (
            <div className="text-center py-20 bg-white/40 border border-dashed border-zinc-300 rounded-[2rem]">
              <p className="text-zinc-550 font-display font-medium text-sm">Aucune photo dans cette catégorie pour le moment.</p>
            </div>
          )}

          {/* "Voir plus" Pagination Action */}
          {filteredImgs.length > visibleCount && (
            <div className="flex justify-center mt-6">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setVisibleCount(prev => prev + 12)}
                className="bg-white hover:bg-[var(--color-brand-olive-pale)] text-[var(--color-brand-dark)] font-display font-black text-xs uppercase tracking-wider py-4 px-8 rounded-full border border-zinc-200 flex items-center gap-2 shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <span>Voir plus de photos</span>
                <ChevronRight className="w-4 h-4 text-[var(--color-brand-olive)]" />
              </motion.button>
            </div>
          )}
        </div>
      )}

      {/* Premium Lightbox Modal Carousel */}
      <AnimatePresence>
        {lightboxIdx !== null && filteredImgs[lightboxIdx] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/5"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <div className="max-w-4xl w-full flex flex-col gap-4">
              
              {/* Carousel active image container */}
              <div 
                className="relative aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden bg-black/40 border border-zinc-800 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredImgs[lightboxIdx].url}
                  alt={filteredImgs[lightboxIdx].title}
                  className="w-full h-full object-contain max-h-[75vh]"
                />

                {/* Left controls */}
                <motion.button
                  whileHover={{ scale: 1.08, bg: "rgba(0,0,0,0.85)" }}
                  whileTap={{ scale: 0.92 }}
                  onClick={prevLightboxImg}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white border border-white/10 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                </motion.button>

                {/* Right controls */}
                <motion.button
                  whileHover={{ scale: 1.08, bg: "rgba(0,0,0,0.85)" }}
                  whileTap={{ scale: 0.92 }}
                  onClick={nextLightboxImg}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white border border-white/10 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </motion.button>
              </div>

              {/* Text caption footer info */}
              <div 
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase font-black tracking-widest text-[var(--color-brand-olive)]">
                    Photo {lightboxIdx + 1} sur {filteredImgs.length}
                  </span>
                  <span className="bg-[var(--color-brand-olive)]/20 border border-[var(--color-brand-olive)]/35 text-[9px] font-black uppercase tracking-wider text-[var(--color-brand-olive-light)] px-2.5 py-0.5 rounded">
                    {filteredImgs[lightboxIdx].category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg.5 mt-2.5">
                  {filteredImgs[lightboxIdx].title}
                </h3>
                <p className="text-zinc-400 text-xs mt-1.5 leading-relaxed font-normal md:font-medium">
                  {filteredImgs[lightboxIdx].desc}
                </p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
