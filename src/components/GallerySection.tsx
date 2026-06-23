import React, { useState } from "react";
import { Grid, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const GALLERY_IMGS = [
  {
    url: "/src/assets/images/albi_children_school_1781884113577.jpg",
    title: "Sourires et Chapeaux de Soleil",
    descr: "Des enfants épanouis à l'école grâce aux chapeaux à larges bords distribués par Albi International."
  },
  {
    url: "/src/assets/images/albi_applying_sunscreen_1781884143114.jpg",
    title: "Soin et Prévention Cutanée",
    descr: "Application d'écran solaire SPF 50+ hautement protecteur pour contrer l'absence de mélanine."
  },
  {
    url: "/src/assets/images/albi_sun_cream_sage_1781884128743.jpg",
    title: "Kits de Protection Individuelle",
    descr: "Chapeaux à larges bords, paires de lunettes UV et crèmes protectrices prêts à être distribués."
  }
];

export default function GallerySection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveIdx(index);
  };

  const closeLightbox = () => {
    setActiveIdx(null);
  };

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % GALLERY_IMGS.length);
    }
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + GALLERY_IMGS.length) % GALLERY_IMGS.length);
    }
  };

  return (
    <section className="px-4 md:px-8 py-20 bg-[var(--color-brand-beige)] max-w-7xl mx-auto overflow-hidden relative">
      
      {/* Small Gallery Badge */}
      <div className="flex justify-center mb-6">
        <span className="border border-zinc-300 font-display font-medium text-[10px] uppercase tracking-widest text-[var(--color-brand-text-muted)] bg-white/60 px-5.5 py-1.5 rounded-full">
          Galerie Photos
        </span>
      </div>

      {/* Title */}
      <h2 className="font-display font-semibold text-3xl sm:text-4xl text-center text-[var(--color-brand-dark)] max-w-xl mx-auto tracking-tight mb-14">
        Découvrez notre impact social <br />et nos sourires en images
      </h2>

      {/* Main Arch Frame Visual */}
      <div className="relative mx-auto max-w-4xl">
        
        {/* Floating elements at peripheral arcs */}
        <div className="absolute left-4 bottom-12 w-6 h-6 flex flex-col justify-between opacity-60">
          <div className="flex justify-between">
            <div className="w-2.5 h-2.5 bg-[var(--color-brand-olive)] rounded-xs" />
            <div className="w-2.5 h-2.5 bg-[var(--color-brand-dark)] rounded-xs" />
          </div>
          <div className="flex justify-between">
            <div className="w-2.5 h-2.5 bg-[var(--color-brand-dark)] rounded-xs" />
            <div className="w-2.5 h-2.5 bg-[var(--color-brand-olive-light)] rounded-xs" />
          </div>
        </div>

        <div className="absolute right-4 bottom-12 w-6 h-6 flex flex-col justify-between opacity-60">
          <div className="flex justify-between">
            <div className="w-2.5 h-2.5 bg-[var(--color-brand-dark)] rounded-xs" />
            <div className="w-2.5 h-2.5 bg-[var(--color-brand-olive)] rounded-xs" />
          </div>
          <div className="flex justify-between">
            <div className="w-2.5 h-2.5 bg-[var(--color-brand-olive-light)] rounded-xs" />
            <div className="w-2.5 h-2.5 bg-[var(--color-brand-dark)] rounded-xs" />
          </div>
        </div>

        {/* The Giant Curved Arch Frame */}
        <div className="bg-[var(--color-brand-olive-pale)] rounded-t-[50vw] md:rounded-t-[400px] pt-8 px-4 md:px-12 pb-4 shadow-sm relative group overflow-hidden">
          
          <div className="relative w-full rounded-t-[50vw] md:rounded-t-[380px] overflow-hidden aspect-[4/3] md:aspect-[16/9] shadow-md border-4 border-white">
            <img
              src="/src/assets/images/albi_children_school_1781884113577.jpg"
              alt="Enfants souriants à l'école"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            />
            {/* Absolute overlay dark */}
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transiton-all duration-300" />

            {/* SEE ALL PHOTOS white circle button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => openLightbox(0)}
                className="bg-white hover:bg-[var(--color-brand-olive-pale)] text-[var(--color-brand-dark)] font-display font-extrabold text-[11px] tracking-wider uppercase py-4 px-6.5 rounded-full flex flex-col items-center gap-1.5 shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 pointer-events-auto"
              >
                <Grid className="w-4 h-4 text-[var(--color-brand-text-muted)] group-hover:rotate-12" />
                <span>Voir les Photos</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal Carousel */}
      <AnimatePresence>
        {activeIdx !== null && (
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full flex flex-col gap-4">
              
              {/* Carousel active image container */}
              <div 
                className="relative aspect-video rounded-2xl overflow-hidden bg-black/50 border border-zinc-800"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={GALLERY_IMGS[activeIdx].url}
                  alt={GALLERY_IMGS[activeIdx].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />

                {/* Left controls */}
                <button
                  onClick={prevImg}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/75 border border-white/10 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right controls */}
                <button
                  onClick={nextImg}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/75 border border-white/10 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Text caption footer info */}
              <div 
                className="text-white px-2"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-[10px] uppercase font-black tracking-widest text-[var(--color-brand-olive)]">
                  Photo {activeIdx + 1} of {GALLERY_IMGS.length}
                </span>
                <h3 className="font-display font-bold text-lg.5 mt-1">
                  {GALLERY_IMGS[activeIdx].title}
                </h3>
                <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                  {GALLERY_IMGS[activeIdx].descr}
                </p>
              </div>

            </div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
