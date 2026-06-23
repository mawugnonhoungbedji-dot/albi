import React, { useState, useRef, useEffect } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Shield, 
  BookOpen, 
  Sun, 
  Heart, 
  Globe, 
  Sparkles,
  Play,
  Pause
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CarouselItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  category: string;
  icon: React.ReactNode;
  tagColor: string;
}

interface SolidarityCarouselProps {
  onCardClick: (pageId: string) => void;
}

export default function SolidarityCarousel({ onCardClick }: SolidarityCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(2); // Start at the middle card (index 2)
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [autoplayProgress, setAutoplayProgress] = useState(0);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const carouselItems: CarouselItem[] = [
    {
      id: "projects",
      tag: "ACTIONS DIRECTES",
      title: "Nos Actions de Terrain",
      description: "Acheminement et distribution de crèmes solaires SPF 50+ de grade dermatologique au cœur du Bénin.",
      image: "/images/albi_prevention_care_1781884154813.webp",
      category: "Dermatologie",
      icon: <Shield className="w-5 h-5 text-amber-700" />,
      tagColor: "bg-amber-100/90 text-amber-900 border-amber-200"
    },
    {
      id: "philosophy",
      tag: "RÉSILIENCE",
      title: "L'Histoire de Carine",
      description: "Comment une histoire familiale intime a enfanté un mouvement médical et d'inclusion souverain.",
      image: "/images/Fondatrice.webp",
      category: "Histoire",
      icon: <BookOpen className="w-5 h-5 text-emerald-700" />,
      tagColor: "bg-emerald-100/90 text-emerald-900 border-emerald-200"
    },
    {
      id: "campaigns",
      tag: "SENSIBILISATION",
      title: "Activités & Campagnes",
      description: "Sensibiliser de façon intensive dans les écoles et villages pour éteindre les mythes infondés.",
      image: "/images/albi_children_school_1781884113577.webp",
      category: "Éducation",
      icon: <Sun className="w-5 h-5 text-amber-600" />,
      tagColor: "bg-amber-50 text-amber-850 border-amber-300"
    },
    {
      id: "get-involved",
      tag: "SOLIDARITÉ US",
      title: "Rejoindre & Parrainer",
      description: "Participer financièrement à l'achat de soins de secours, offrir des lunettes UV ou devenir parrain d'un orphelin.",
      image: "/images/albi_applying_sunscreen_1781884143114.webp",
      category: "Soutien",
      icon: <Heart className="w-5 h-5 text-rose-600" />,
      tagColor: "bg-rose-100/90 text-rose-900 border-rose-200"
    },
    {
      id: "philosophy", // Maps to philosophy perspectives
      tag: "PERSPECTIVES",
      title: "Réseau International",
      description: "Bâtir des coopérations scientifiques et obtenir la subvention complète des examens dermatologiques d'albi.",
      image: "/images/volunteers_park_1781879709971.webp",
      category: "Avenir",
      icon: <Globe className="w-5 h-5 text-indigo-700" />,
      tagColor: "bg-indigo-100/90 text-indigo-900 border-indigo-200"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselItems.length);
    setAutoplayProgress(0);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    setAutoplayProgress(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Smooth Autoplay interval ticking
  useEffect(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    if (isPlaying && !isHovered) {
      const stepTimeMs = 50; // Update progress bar every 50ms
      const totalTimeMs = 5500; // Complete full slide cycle in 5.5s
      const increment = (stepTimeMs / totalTimeMs) * 100;

      progressIntervalRef.current = setInterval(() => {
        setAutoplayProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + increment;
        });
      }, stepTimeMs);
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPlaying, isHovered, activeIndex]);

  // Toggle active play state
  const togglePlayState = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div 
      className="relative w-full overflow-visible py-10 px-4 md:px-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* 1. Wireframe Annotations Overlays */}
      {/* Top Left Twin Sketch Marks */}
      <div className="absolute top-2 left-[5%] md:left-[12%] select-none pointer-events-none hidden sm:block">
        <svg className="w-12 h-12 text-zinc-350" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" className="rotate-[45deg]" />
        </svg>
      </div>

      {/* Top Right Curved Annotation: "Partager la vision !" with a cute curving down arrow */}
      <div className="absolute -top-6 right-[4%] md:right-[15%] select-none pointer-events-none hidden md:flex flex-col items-center">
        <span className="font-serif italic text-sm text-[var(--color-brand-olive-dense)] tracking-wider -rotate-6 font-extrabold flex items-center gap-1">
          <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" /> Partager la vision !
        </span>
        <svg className="w-20 h-12 text-zinc-400 mt-1" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10C35 5 75 15 85 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
          <path d="M80 32C82.5 35 84.5 38 85 40C84 38.5 82 36.5 76 35.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* 2. Carousel Cards Stack Container */}
      <div 
        className="relative max-w-6.5xl mx-auto min-h-[460px] flex items-center justify-center overflow-visible"
        onTouchStart={(e) => setDragStart(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (dragStart === null) return;
          const dragEnd = e.changedTouches[0].clientX;
          const diff = dragStart - dragEnd;
          if (diff > 50) handleNext();
          if (diff < -50) handlePrev();
          setDragStart(null);
        }}
      >
        
        {/* Track for desktop arc layout */}
        <div className="hidden lg:flex items-center justify-center -space-x-12 w-full max-w-5xl py-8 overflow-visible relative">
          
          {carouselItems.map((item, index) => {
            // Calculate relative offset of card compared to the active centered card
            const offset = index - activeIndex;
            
            // Generate nice 3D circular path layout settings
            let scale = 1;
            let rotate = 0;
            let translateY = 0;
            let zIndex = 1;
            let opacity = 1;
            
            if (offset === 0) {
              scale = 1.08;
              rotate = 0;
              translateY = -18;
              zIndex = 10;
              opacity = 1;
            } else if (offset === -1 || (offset === carouselItems.length - 1 && activeIndex === 0)) {
              scale = 0.94;
              rotate = -7;
              translateY = 4;
              zIndex = 5;
              opacity = 0.85;
            } else if (offset === 1 || (offset === - (carouselItems.length - 1) && activeIndex === carouselItems.length - 1)) {
              scale = 0.94;
              rotate = 7;
              translateY = 4;
              zIndex = 5;
              opacity = 0.85;
            } else if (offset === -2 || offset === carouselItems.length - 2) {
              scale = 0.82;
              rotate = -14;
              translateY = 24;
              zIndex = 2;
              opacity = 0.55;
            } else if (offset === 2 || offset === - (carouselItems.length - 2)) {
              scale = 0.82;
              rotate = 14;
              translateY = 24;
              zIndex = 2;
              opacity = 0.55;
            } else {
              // Hide other cards off-screen
              scale = 0.65;
              rotate = offset > 0 ? 18 : -18;
              translateY = 45;
              zIndex = 0;
              opacity = 0;
            }

            const isActive = offset === 0;

            return (
              <motion.div
                key={item.id + "-" + index}
                style={{ zIndex }}
                animate={{
                  scale,
                  rotate,
                  y: isActive ? [translateY, translateY - 6, translateY] : translateY,
                  opacity
                }}
                transition={
                  isActive 
                    ? {
                        y: {
                          repeat: Infinity,
                          repeatType: "reverse",
                          duration: 3,
                          ease: "easeInOut"
                        },
                        scale: { type: "spring", stiffness: 120, damping: 15 },
                        rotate: { type: "spring", stiffness: 120, damping: 15 }
                      }
                    : {
                        type: "spring",
                        stiffness: 110,
                        damping: 14
                      }
                }
                className="w-[245px] h-[375px] shrink-0 origin-bottom relative cursor-pointer"
                onClick={() => {
                  if (isActive) {
                    onCardClick(item.id);
                  } else {
                    setActiveIndex(index);
                  }
                }}
              >
                <div className={`h-full w-full rounded-[2.2rem] bg-white border overflow-hidden p-5 flex flex-col justify-between transition-all duration-300 relative group select-none shadow-sm ${
                  isActive 
                    ? "border-[var(--color-brand-olive)] shadow-2xl shadow-amber-950/10 ring-4 ring-[var(--color-brand-olive-pale)]" 
                    : "border-zinc-200/85 hover:border-zinc-350"
                }`}>
                  
                  {/* Background Image of Card */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    {/* Dark gradient overlay on the bottom, soft clear color on top */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/75 to-zinc-950/30" />
                  </div>

                  {/* 1. Card Header Content */}
                  <div className="relative z-10 flex items-start justify-between w-full">
                    <span className={`text-[9px] font-black tracking-widest px-2.5 py-1 rounded-full border uppercase ${item.tagColor}`}>
                      {item.tag}
                    </span>
                    <div className="bg-white/95 p-1.5 rounded-xl border border-white/20 shadow-xs flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>

                  {/* 2. Shine flare animation triggered on hover */}
                  <div className="absolute inset-0 z-5 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent skew-x-[-25deg] translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />

                  {/* 3. Floating Sparkle Indicators representing solidary warmth */}
                  {isActive && (
                    <div className="absolute inset-0 pointer-events-none z-10">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: [0, 0.9, 0], y: -25, x: [-10, 10], scale: [0.6, 1, 0.6] }}
                        transition={{ repeat: Infinity, duration: 2.2, delay: 0.2 }}
                        className="absolute bottom-1/3 left-6 text-amber-300"
                      >
                        <Sparkles className="w-4 h-4" />
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: [0, 1, 0], y: -30, x: [10, -8], scale: [0.5, 0.9, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2.5, delay: 1 }}
                        className="absolute bottom-1/2 right-6 text-emerald-300"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                      </motion.div>
                    </div>
                  )}

                  {/* 4. Card Bottom content */}
                  <div className="relative z-10 space-y-2 pb-1 text-white">
                    <span className="text-[9.5px] uppercase font-black tracking-widest text-[var(--color-brand-olive-light)] block">
                      {item.category}
                    </span>
                    <h3 className="font-display font-black text-base leading-snug drop-shadow-sm group-hover:text-[var(--color-brand-olive-light)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-200/90 text-[10.5px] leading-relaxed line-clamp-3 font-medium">
                      {item.description}
                    </p>
                    
                    {/* Visual miniature timer line inside the active card itself */}
                    {isActive && isPlaying && (
                      <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden mt-1.5">
                        <div 
                          className="h-full bg-[var(--color-brand-olive)] transition-all duration-75"
                          style={{ width: `${autoplayProgress}%` }}
                        />
                      </div>
                    )}

                    {/* Interactive CTA */}
                    <div className="flex items-center gap-1.5 text-[10.5px] font-extrabold text-[var(--color-brand-olive-light)] pt-1.5 opacity-85 group-hover:opacity-100 transition-opacity">
                      <span>{isActive ? "Découvrir la cause" : "Centrer la thématique"}</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Swipeable View for Tablet & Mobile (less space) */}
        <div className="lg:hidden w-full max-w-sm flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -60, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="w-full text-left"
              onClick={() => onCardClick(carouselItems[activeIndex].id)}
            >
              <div className="w-full h-[350px] rounded-[2rem] bg-white border border-zinc-200 overflow-hidden p-6 flex flex-col justify-between relative shadow-lg">
                <div className="absolute inset-0">
                  <img 
                    src={carouselItems[activeIndex].image} 
                    alt={carouselItems[activeIndex].title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/75 to-zinc-950/20" />
                </div>

                <div className="relative z-10 flex justify-between items-center">
                  <span className={`text-[9px] font-black tracking-widest px-2.5 py-1 rounded-full border uppercase ${carouselItems[activeIndex].tagColor}`}>
                    {carouselItems[activeIndex].tag}
                  </span>
                  <div className="bg-white/90 p-1.5 rounded-xl border border-white/20">
                    {carouselItems[activeIndex].icon}
                  </div>
                </div>

                <div className="relative z-10 text-white space-y-2">
                  <span className="text-[9.5px] uppercase font-black text-[var(--color-brand-olive-light)]">
                    {carouselItems[activeIndex].category}
                  </span>
                  <h3 className="font-display font-black text-base leading-snug">
                    {carouselItems[activeIndex].title}
                  </h3>
                  <p className="text-zinc-200 text-xs">
                    {carouselItems[activeIndex].description}
                  </p>
                  
                  {/* Visual progress for active slide on mobile */}
                  {isPlaying && (
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mt-1">
                      <div 
                        className="h-full bg-[var(--color-brand-olive-light)]"
                        style={{ width: `${autoplayProgress}%` }}
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-brand-olive-light)] pt-1.5">
                    <span>Cliquer pour découvrir</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator for Mobile */}
          <div className="flex gap-2.5 mt-6">
            {carouselItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  setAutoplayProgress(0);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx 
                    ? "bg-[var(--color-brand-dark)] w-7" 
                    : "bg-zinc-300 hover:bg-zinc-400"
                }`}
                aria-label={`Aller au slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* 3. Carousel Navigation Bottom row (Prev & Next elegant controls with integrated Play/Pause toggle) */}
      <div className="flex justify-center items-center gap-5 mt-6 relative z-10">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-zinc-250 bg-white hover:bg-[var(--color-brand-olive-pale)] text-[var(--color-brand-dark)] active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-2xs hover:shadow-sm"
          aria-label="Thématique précédente"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Elegant Play/Pause toggle with automatic hover information */}
        <button
          onClick={togglePlayState}
          className={`w-10 h-10 rounded-full border transition-all flex items-center justify-center cursor-pointer shadow-2xs hover:shadow-sm group/btn relative ${
            isPlaying 
              ? "border-[var(--color-brand-olive)] bg-[var(--color-brand-olive-pale)] text-[var(--color-brand-dark)]" 
              : "border-zinc-200 bg-zinc-50 text-zinc-500"
          }`}
          title={isPlaying ? "Mettre en pause le défilement automatique" : "Lancer le défilement automatique"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-[var(--color-brand-dark)]" />
          ) : (
            <Play className="w-4 h-4 text-zinc-700 ml-0.5" />
          )}

          {/* Tooltip hint on hover */}
          <span className="absolute bottom-12 whitespace-nowrap bg-zinc-900 text-white text-[9.5px] font-extrabold py-1 px-2.5 rounded-md opacity-0 group-hover/btn:opacity-100 pointer-events-none transition-all duration-300 shadow-sm translate-y-1 group-hover/btn:translate-y-0">
            {isPlaying ? "Pause défilement" : "Lancer rotation"}
          </span>
        </button>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-zinc-250 bg-white hover:bg-[var(--color-brand-olive-pale)] text-[var(--color-brand-dark)] active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-2xs hover:shadow-sm"
          aria-label="Thématique suivante"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Global visual progress indicator bar at the bottom */}
      <div className="w-40 h-0.5 bg-zinc-200/60 mx-auto mt-6 rounded-full overflow-hidden relative">
        <div 
          className={`h-full bg-[var(--color-brand-olive-dense)] transition-all duration-100 ${isPlaying && !isHovered ? "opacity-100" : "opacity-40"}`}
          style={{ width: `${autoplayProgress}%` }}
        />
      </div>

      {/* 4. Wireframe Annotations Overlays Bottom */}
      {/* C'est gratuit et solidaire text pointing to central call bottom trigger */}
      <div className="absolute -bottom-1 left-[14%] select-none pointer-events-none hidden lg:flex flex-col items-center">
        <svg className="w-14 h-12 text-zinc-400" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M70 10C50 15 25 30 15 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
          <path d="M12 28C13 32 14 36 15 40C17 38 19.5 35.5 24 33.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="font-serif italic text-xs.5 text-[var(--color-brand-olive-dense)] tracking-wide rotate-2 font-extrabold mt-1">
          C'est gratuit & solidaire !
        </span>
      </div>

    </div>
  );
}
