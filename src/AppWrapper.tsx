/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
const logoImg = "/images/Logo.webp";
import Hero from "./components/Hero";
import RunningBanner from "./components/RunningBanner";
import SolidarityCarousel from "./components/SolidarityCarousel";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import SeparatorCampaign from "./components/SeparatorCampaign";
import GetInvolved from "./components/GetInvolved";
import GallerySection from "./components/GallerySection";
import ContactModal, { ModalType } from "./components/ContactModal";
import { ProjectItem } from "./data";
import { AnimatePresence, motion } from "motion/react";
import { 
  Heart, 
  Landmark, 
  Shield, 
  Leaf, 
  ArrowUpRight, 
  HelpCircle, 
  BookOpen, 
  Sun, 
  Users, 
  Award, 
  Sparkles, 
  ChevronRight, 
  MessageSquare, 
  ArrowRight,
  X
} from "lucide-react";

export default function AppWrapper({ pageId }: { pageId: string }) {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [sponsorshipType, setSponsorshipType] = useState<string>("cream");
  const [sponsorshipQty, setSponsorshipQty] = useState<number>(1);

  const handleContactClick = (messageContext?: string) => {
    const defaultMessage = "Bonjour l'association AlbiInternational, je souhaite vous contacter pour en savoir plus ou soutenir votre action de terrain au Bénin.";
    const message = messageContext || defaultMessage;
    window.open(`https://wa.me/22997494591?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const openModal = (type: ModalType, project: ProjectItem | null = null) => {
    if (type === "contact") {
      handleContactClick();
      return;
    }
    setSelectedProject(project);
    setModalType(type);
  };


  const closeModal = () => {
    setModalType(null);
    setSelectedProject(null);
  };

  const changePage = (id: string) => {
    let url = "/";
    if (id === "projects") url = "/actions";
    else if (id === "philosophy") url = "/histoire";
    else if (id === "campaigns") url = "/sensibilisation";
    else if (id === "get-involved") url = "/soutenir";
    window.location.assign(url);
  };

  return (
    <div className="min-h-screen bg-[var(--color-brand-beige)] relative selection:bg-[var(--color-brand-olive)] selection:text-[var(--color-brand-dark)] flex flex-col justify-between">
      
      <div>
        {/* 1. Header Navigation */}
        <Header activePage={pageId} onPageChange={changePage} onContactClick={() => handleContactClick()} />

        {/* 2. Main Page Layout */}
        <main className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={pageId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* PAGE 1: ACCUEIL */}
              {pageId === "home" && (
                <div>
                  {/* SECTION 1: Hero Principal */}
                  <Hero
                    onLearnMoreClick={() => changePage("projects")}
                    onShareClick={() => openModal("share")}
                  />

                  {/* SECTION 2: Scrolling Banner & Stats ticker */}
                  <RunningBanner />

                  {/* SECTION 3: Le Carrousel Réseau de Solidarité (Portal cards based on modern curved wireframe design) */}
                  <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 overflow-visible">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-olive)] bg-[var(--color-brand-olive-pale)] px-3 py-1 rounded-full">
                        Réseau de Solidarité Bénin et International
                      </span>
                      <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-[var(--color-brand-dark)] mt-4 leading-tight tracking-tight">
                        Notre Présence en 5 Thématiques Clés
                      </h2>
                      <p className="text-zinc-650 text-xs md:text-sm font-normal md:font-medium mt-4 max-w-2xl mx-auto leading-relaxed">
                        Chaque personne atteinte d'albinisme au Bénin a droit à l'éducation inclusive, à la sécurité dermatologique et à la reconnaissance sociale. Explorez notre action directe.
                      </p>
                    </div>

                    <SolidarityCarousel onCardClick={(pageId) => changePage(pageId)} />
                  </section>

                  {/* SECTION 4: Notre Mission en Chiffres (Impact stats section for Home) */}
                  <section className="bg-white/40 border-t border-b border-zinc-200/40 py-16 md:py-20">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="bg-white border border-zinc-150 rounded-3xl p-8 text-center space-y-3 shadow-2xs hover:shadow-md transition-shadow">
                        <span className="text-[10px] font-black tracking-widest bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 rounded-full uppercase">Santé Publique</span>
                        <h3 className="font-display font-black text-4xl text-[var(--color-brand-dark)]">1 200+</h3>
                        <p className="text-zinc-600 text-xs font-semibold">Tubes d'écran total SPF 50+ acheminés directement aux familles vulnérables.</p>
                      </div>
                      <div className="bg-white border border-zinc-150 rounded-3xl p-8 text-center space-y-3 shadow-2xs hover:shadow-md transition-shadow">
                        <span className="text-[10px] font-black tracking-widest bg-emerald-50 text-emerald-950 border border-emerald-250 px-3 py-1 rounded-full uppercase">Éducation</span>
                        <h3 className="font-display font-black text-4xl text-[var(--color-brand-dark)]">450+</h3>
                        <p className="text-zinc-600 text-xs font-semibold">Kits scolaires de soutien distribués pour lutter contre l'exclusion précoce.</p>
                      </div>
                      <div className="bg-white border border-zinc-150 rounded-3xl p-8 text-center space-y-3 shadow-2xs hover:shadow-md transition-shadow">
                        <span className="text-[10px] font-black tracking-widest bg-indigo-50 text-indigo-900 border border-indigo-200 px-3 py-1 rounded-full uppercase">Présence locale</span>
                        <h3 className="font-display font-black text-4xl text-[var(--color-brand-dark)]">3</h3>
                        <p className="text-zinc-600 text-xs font-semibold">Départements d'action intensive au Bénin (Littoral, Ouémé, Zou).</p>
                      </div>
                    </div>
                  </section>

                  {/* SECTION 5: Les 3 Piliers de l'Inclusion (Inclusion pillars visual card deck) */}
                  <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                      <span className="text-[10.5px] font-black uppercase text-[var(--color-brand-olive)] tracking-widest bg-[var(--color-brand-olive-pale)] px-3.5 py-1.5 rounded-full">
                        Notre Boussole Éthique
                      </span>
                      <h2 className="font-display font-black text-2xl md:text-3xl lg:text-4xl text-[var(--color-brand-dark)] mt-4 leading-tight tracking-tight">
                        Les trois piliers souverains de l'action d'Albi
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="bg-white border border-zinc-200/80 rounded-[2rem] p-7 md:p-9 space-y-5 flex flex-col justify-between shadow-xs">
                        <div className="space-y-4">
                          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 font-bold border border-amber-200 flex items-center justify-center">
                            <Shield className="w-5 h-5" />
                          </div>
                          <h3 className="font-display font-black text-lg text-[var(--color-brand-dark)] leading-snug">Sûreté Dermatologique</h3>
                          <p className="text-zinc-650 text-xs leading-relaxed font-medium">Lutter en amont contre le photovieillissement et le carcinome en offrant des ateliers réguliers sur l'hygiène et la prévention solaire.</p>
                        </div>
                        <div className="text-[10.5px] font-black uppercase text-[var(--color-brand-olive-dense)] tracking-wider">Action Médicale Globale</div>
                      </div>

                      <div className="bg-white border border-zinc-200/80 rounded-[2rem] p-7 md:p-9 space-y-5 flex flex-col justify-between shadow-xs">
                        <div className="space-y-4">
                          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 flex items-center justify-center">
                            <Users className="w-5 h-5" />
                          </div>
                          <h3 className="font-display font-black text-lg text-[var(--color-brand-dark)] leading-snug">Inclusion Scolaire Active</h3>
                          <p className="text-zinc-650 text-xs leading-relaxed font-medium">Accompagner les écoliers dans les classes de premier plan avec du mobilier adapté et des fournitures optimisées réduisant la fatigue visuelle.</p>
                        </div>
                        <div className="text-[10.5px] font-black uppercase text-[var(--color-brand-olive-dense)] tracking-wider">Équité Intellectuelle</div>
                      </div>

                      <div className="bg-white border border-zinc-200/80 rounded-[2rem] p-7 md:p-9 space-y-5 flex flex-col justify-between shadow-xs">
                        <div className="space-y-4">
                          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 font-bold border border-amber-200 flex items-center justify-center">
                            <Heart className="w-5 h-5" />
                          </div>
                          <h3 className="font-display font-black text-lg text-[var(--color-brand-dark)] leading-snug">Dignité & Intégration</h3>
                          <p className="text-zinc-650 text-xs leading-relaxed font-medium">Offrir une insertion sociale d'excellence, briser l'isolation et sensibiliser l'opinion politique pour faire valoir les droits fondamentaux.</p>
                        </div>
                        <div className="text-[10.5px] font-black uppercase text-[var(--color-brand-olive-dense)] tracking-wider">Équité Humanitaire</div>
                      </div>
                    </div>
                  </section>

                  {/* SECTION 6: La Citation du Coeur & Appel (Emotional connection trigger) */}
                  <section className="bg-[var(--color-brand-dark)] text-white/95 rounded-[2.5rem] py-14 px-6 md:p-14 max-w-7xl mx-auto mb-16 relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[var(--color-brand-olive-light)]/10 blur-3xl pointer-events-none" />
                    <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                      <div className="w-10 h-10 rounded-full bg-white/10 text-[var(--color-brand-olive-light)] flex items-center justify-center mx-auto mb-2 border border-white/5">
                        <Sparkles className="w-5 h-5 text-amber-300 fill-amber-300" />
                      </div>
                      <h2 className="font-display font-black text-xl md:text-2xl lg:text-3xl leading-tight">« Offrir une crème est un geste de soin, offrir l'inclusion est un devoir de fraternité. »</h2>
                      <p className="text-zinc-300 text-xs leading-relaxed max-w-xl mx-auto font-medium">Rejoignez-nous dans notre combat noble et concret au Bénin pour bâtir un bouclier durable de protection.</p>
                      
                      <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button 
                          onClick={() => changePage("philosophy")}
                          className="bg-[var(--color-brand-olive)] hover:bg-[var(--color-brand-olive-dense)] text-white hover:text-white font-black text-xs uppercase tracking-wider px-6.5 py-4 rounded-full transition-transform active:scale-95 cursor-pointer flex items-center gap-2"
                        >
                          Découvrir Notre Histoire
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <a 
                          href="https://wa.me/22997494591?text=Bonjour%20Albi%20International%20!%20Je%20souhaite%20soutenir%20la%20cause%20directe%20d'Albi%20International%20au%20B%C3%A9nin."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-xs uppercase tracking-wider px-6.5 py-4 rounded-full transition-transform active:scale-95 cursor-pointer flex items-center gap-2 no-underline"
                        >
                          Soutenir la Cause Directe
                          <Heart className="w-4 h-4 text-amber-500 fill-amber-500" />
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {/* PAGE 2: NOS ACTIONS */}
              {pageId === "projects" && (
                <div className="py-1 bg-[var(--color-brand-beige)]">
                  
                  {/* SECTION 1: Promesse & Vision Clinique (Header/Stats Banner) */}
                  <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 mb-14">
                    <div className="bg-[var(--color-brand-dark)] text-white rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-xl">
                      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[var(--color-brand-olive-light)]/10 blur-3xl pointer-events-none" />
                      <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-[var(--color-brand-olive)]/15 blur-3xl pointer-events-none" />
                      <div className="relative z-10 max-w-2xl">
                        <span className="text-xs font-black uppercase tracking-widest text-[var(--color-brand-olive-light)] bg-white/10 px-3 py-1 rounded-full">
                          Nos Actions Directes
                        </span>
                        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mt-5 leading-[1.12] tracking-tight">
                          Construire la protection durable au Bénin
                        </h1>
                        <p className="text-teal-50/85 text-xs md:text-sm font-normal md:font-medium mt-4 leading-relaxed">
                          À travers trois volets phares (médical, éducatif et solidaire), notre association offre des réponses et outils sur mesure directement aux structures éducatives locales de Cotonou, Porto-Novo et en province.
                        </p>
                      </div>

                      {/* Stat summary inside action page */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4.5 mt-10 md:mt-14 border-t border-white/10 pt-8">
                        <div>
                          <span className="block font-display font-black text-3xl text-[var(--color-brand-olive-light)]">1 200+</span>
                          <span className="text-[10px] uppercase tracking-wider text-teal-100/70 font-bold">Écrans Totaux Offerts</span>
                        </div>
                        <div>
                          <span className="block font-display font-black text-3xl text-[var(--color-brand-olive-light)]">450+</span>
                          <span className="text-[10px] uppercase tracking-wider text-teal-100/70 font-bold">Kits Scolaires Fournis</span>
                        </div>
                        <div>
                          <span className="block font-display font-black text-3xl text-[var(--color-brand-olive-light)]">3 et +</span>
                          <span className="text-[10px] uppercase tracking-wider text-teal-100/70 font-bold">Départements d'Impact</span>
                        </div>
                        <div>
                          <span className="block font-display font-black text-3xl text-[var(--color-brand-olive-light)]">100%</span>
                          <span className="text-[10px] uppercase tracking-wider text-teal-100/70 font-bold">Fonds en Action Directe</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SECTION 2: Plateforme des Actions Clés (Grid of projects) */}
                  <div className="border-b border-zinc-200/50 pb-8">
                    <Projects
                      onProjectSelect={(project) => openModal("project_detail", project)}
                    />
                  </div>

                  {/* SECTION 3: Carte de Distribution Géographique (Departments targeted) */}
                  <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-5 space-y-5">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-olive-dense)] bg-[var(--color-brand-olive-pale)] px-3 py-1 rounded-full">
                          Couverture Géographique
                        </span>
                        <h2 className="font-display font-black text-2xl md:text-3xl lg:text-4xl leading-tight text-[var(--color-brand-dark)] tracking-tight">
                          Un réseau solidaire étendu sur le terrain béninois
                        </h2>
                        <p className="text-zinc-650 text-xs md:text-sm font-normal md:font-medium leading-relaxed font-semibold">
                          Nos équipes sillonnent activement le Bénin pour approvisionner les écoles et orphelinats dans 3 départements clés, assurant que la distance ne soit pas un frein au soin.
                        </p>
                        
                        <div className="space-y-3.5 pt-2">
                          <div className="flex justify-between items-center bg-white p-3.5 rounded-2xl border border-zinc-150">
                            <span className="font-bold text-xs md:text-sm text-[var(--color-brand-dark)]">Département du Littoral (Cotonou)</span>
                            <span className="text-[10.5px] font-black uppercase text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md">60% de l’impact</span>
                          </div>
                          <div className="flex justify-between items-center bg-white p-3.5 rounded-2xl border border-zinc-150">
                            <span className="font-bold text-xs md:text-sm text-[var(--color-brand-dark)]">Département de l’Ouémé (Porto-Novo)</span>
                            <span className="text-[10.5px] font-black uppercase text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md">30% de l’impact</span>
                          </div>
                          <div className="flex justify-between items-center bg-white p-3.5 rounded-2xl border border-zinc-150">
                            <span className="font-bold text-xs md:text-sm text-[var(--color-brand-dark)]">Département du Zou & Collines (Province)</span>
                            <span className="text-[10.5px] font-black uppercase text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md">10% de l’impact</span>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-7 bg-white border border-zinc-200/80 rounded-[2.2rem] p-6.5 md:p-8 flex flex-col justify-between shadow-2xs min-h-[380px] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[var(--color-brand-olive-pale)]/60 blur-3xl pointer-events-none" />
                        <div>
                          <h3 className="font-display font-black text-xl text-[var(--color-brand-dark)]">Statistiques d’Impact Géographique direct</h3>
                          <p className="text-zinc-500 text-xs font-normal md:font-medium mt-1">Nombre d'enfants accompagnés individuellement de façon trimestrielle :</p>
                        </div>

                        <div className="space-y-4 pt-6 relative z-10">
                          <div>
                            <div className="flex justify-between text-[11px] font-extrabold text-[var(--color-brand-dark)] mb-1">
                              <span>Littoral (Cotonou) — Écoles d’inclusion</span>
                              <span>280 enfants</span>
                            </div>
                            <div className="w-full h-2.5 bg-zinc-100 rounded-full overflow-hidden">
                              <div className="h-full bg-[var(--color-brand-olive)] rounded-full" style={{ width: "80%" }} />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-[11px] font-extrabold text-[var(--color-brand-dark)] mb-1">
                              <span>Ouémé (Porto-Novo, Sèmè-Kpodji & environs)</span>
                              <span>140 enfants</span>
                            </div>
                            <div className="w-full h-2.5 bg-zinc-100 rounded-full overflow-hidden">
                              <div className="h-full bg-[var(--color-brand-olive)] rounded-full animate-pulse" style={{ width: "45%" }} />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-[11px] font-extrabold text-[var(--color-brand-dark)] mb-1">
                              <span>Zou (Bohicon, Abomey & villages)</span>
                              <span>50 enfants</span>
                            </div>
                            <div className="w-full h-2.5 bg-zinc-100 rounded-full overflow-hidden">
                              <div className="h-full bg-[var(--color-brand-olive)] rounded-full" style={{ width: "18%" }} />
                            </div>
                          </div>
                        </div>

                        <div className="text-[10px] font-black uppercase text-zinc-400 tracking-wider pt-6 border-t border-zinc-100 mt-6 flex justify-between items-center">
                          <span>* Chiffres audits internes 2026</span>
                          <span className="text-[var(--color-brand-olive-dense)]">Mise à jour mensuelle</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* SECTION 4: Le Processus de Distribution Rigoureux */}
                  <section className="bg-white/40 border-t border-b border-zinc-200/40 py-16 md:py-20">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                      <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-[10px] font-black uppercase text-[var(--color-brand-olive-dense)] tracking-widest bg-[var(--color-brand-olive-pale)] px-3.5 py-1.5 rounded-full">
                          Distribution Sécurisée
                        </span>
                        <h2 className="font-display font-black text-2xl md:text-3xl lg:text-4xl text-[var(--color-brand-dark)] mt-4 leading-tight tracking-tight">
                          Le Processus Logistique Rigoureux
                        </h2>
                        <p className="text-zinc-650 text-xs md:text-sm font-normal md:font-medium max-w-xl mx-auto mt-2 leading-relaxed">
                          La transparence absolue est acquise grâce à une traçabilité minutieuse de chaque flacon, du donateur à la peau de l'enfant.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="space-y-3">
                          <span className="block font-mono font-black text-3xl text-[var(--color-brand-olive)]">01 /</span>
                          <h4 className="font-display font-extrabold text-base text-[var(--color-brand-dark)]">Acheminement & Contrôle</h4>
                          <p className="text-zinc-650 text-xs leading-relaxed font-normal md:font-medium">Les colis de crèmes SPF 50+ de laboratoires éco-sélectionnés arrivent de manière tracée et sont certifiés sains par nos pharmaciens référents.</p>
                        </div>
                        <div className="space-y-3">
                          <span className="block font-mono font-black text-3xl text-[var(--color-brand-olive)]">02 /</span>
                          <h4 className="font-display font-extrabold text-base text-[var(--color-brand-dark)]">Stockage Thermorégulé</h4>
                          <p className="text-zinc-650 text-xs leading-relaxed font-normal md:font-medium">Pour maintenir l'efficacité moléculaire active des filtres UV, les pots sont conservés à l'abri de la canicule béninoise constante.</p>
                        </div>
                        <div className="space-y-3">
                          <span className="block font-mono font-black text-3xl text-[var(--color-brand-olive)]">03 /</span>
                          <h4 className="font-display font-extrabold text-base text-[var(--color-brand-dark)]">Distribution Ciblée</h4>
                          <p className="text-zinc-650 text-xs leading-relaxed font-normal md:font-medium">Le comité d'évaluation d'Albi remet directement la dotation aux orphelinats et aux directeurs scolaires partenaires de confiance.</p>
                        </div>
                        <div className="space-y-3">
                          <span className="block font-mono font-black text-3xl text-[var(--color-brand-olive)]">04 /</span>
                          <h4 className="font-display font-extrabold text-base text-[var(--color-brand-dark)]">Suivi de Santé & Éveil</h4>
                          <p className="text-zinc-650 text-xs leading-relaxed font-normal md:font-medium">Durant l'année, nous visitons chaque famille accompagnée pour auditer la progression cutanée et l'Inclusion d'écriture.</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* SECTION 5: Le Tuteur d’Impact (Calculateur de parrainage interactif de soin) */}
                  <section className="max-w-4xl mx-auto px-4 py-20">
                    <div className="bg-white border border-zinc-250 rounded-[2.5rem] p-6.5 md:p-12 space-y-8 shadow-sm justify-between">
                      <div className="text-center space-y-2">
                        <span className="text-[10px] font-black uppercase text-amber-700 tracking-widest bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
                          Widget Interactif
                        </span>
                        <h2 className="font-display font-black text-2xl md:text-3xl lg:text-4xl text-[var(--color-brand-dark)] leading-tight pt-1 tracking-tight">
                          Calculateur d’Impact de Parrainage
                        </h2>
                        <p className="text-zinc-500 text-xs font-normal md:font-medium leading-relaxed max-w-xl mx-auto">
                          Définissez votre soutien financier théorique ou matériel et visualisez instantanément le bénéfice direct reçu par les orphelins atteints d'albinisme au Bénin.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-4">
                        <div className="space-y-5">
                          <div>
                            <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">Choisir la Forme de Parrainage</label>
                            <div className="grid grid-cols-1 gap-2.5">
                              <button 
                                onClick={() => setSponsorshipType("cream")}
                                className={`p-4 rounded-2xl text-left border transition-all ${
                                  sponsorshipType === "cream" 
                                    ? "border-[var(--color-brand-olive)] bg-[var(--color-brand-olive-pale)] ring-2 ring-[var(--color-brand-olive)]/30" 
                                    : "border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50"
                                }`}
                              >
                                <span className="block font-bold text-sm text-[var(--color-brand-dark)]">1 Flacon de Crème Solaire SPF 50+</span>
                                <span className="block text-[10px] font-black text-[var(--color-brand-olive-dense)] mt-0.5">10 000 FCFA (~15.20 €)</span>
                              </button>
                              
                              <button 
                                onClick={() => setSponsorshipType("kit")}
                                className={`p-4 rounded-2xl text-left border transition-all ${
                                  sponsorshipType === "kit" 
                                    ? "border-[var(--color-brand-olive)] bg-[var(--color-brand-olive-pale)] ring-2 ring-[var(--color-brand-olive)]/30" 
                                    : "border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50"
                                }`}
                              >
                                <span className="block font-bold text-sm text-[var(--color-brand-dark)]">Kit Solaire Complet (Crème, Chapeau, Lunettes)</span>
                                <span className="block text-[10px] font-black text-[var(--color-brand-olive-dense)] mt-0.5">15 000 FCFA (~22.90 €)</span>
                              </button>

                              <button 
                                onClick={() => setSponsorshipType("annual")}
                                className={`p-4 rounded-2xl text-left border transition-all ${
                                  sponsorshipType === "annual" 
                                    ? "border-[var(--color-brand-olive)] bg-[var(--color-brand-olive-pale)] ring-2 ring-[var(--color-brand-olive)]/30" 
                                    : "border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50"
                                }`}
                              >
                                <span className="block font-bold text-sm text-[var(--color-brand-dark)]">Parrainage Médical Annuel Intégral</span>
                                <span className="block text-[10px] font-black text-[var(--color-brand-olive-dense)] mt-0.5">30 000 FCFA (~45.70 €)</span>
                              </button>
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">Quantité soutenu</label>
                            <div className="flex items-center gap-3">
                              <button 
                                onClick={() => setSponsorshipQty((prev) => Math.max(1, prev - 1))}
                                className="w-10 h-10 rounded-xl bg-zinc-100 hover:bg-zinc-200 font-extrabold text-zinc-700 text-lg flex items-center justify-center cursor-pointer"
                              >
                                -
                              </button>
                              <span className="w-12 text-center font-display font-black text-lg text-[var(--color-brand-dark)]">{sponsorshipQty}</span>
                              <button 
                                onClick={() => setSponsorshipQty((prev) => Math.min(50, prev + 1))}
                                className="w-10 h-10 rounded-xl bg-zinc-100 hover:bg-zinc-200 font-extrabold text-zinc-700 text-lg flex items-center justify-center cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between min-h-[290px]">
                          <div className="space-y-4">
                            <span className="text-[10px] font-black tracking-widest uppercase text-[var(--color-brand-olive-dense)] bg-[var(--color-brand-olive-pale)] px-2.5 py-1 rounded">
                              Remise d'Impact Directe
                            </span>
                            
                            <div>
                              <span className="text-xs text-zinc-500 font-semibold block">Total Équivalent :</span>
                              <span className="font-display font-black text-3xl text-[var(--color-brand-dark)] leading-none block mt-1.5">
                                {(sponsorshipType === "cream" ? 10000 : sponsorshipType === "kit" ? 15000 : 30000) * sponsorshipQty} FCFA
                              </span>
                              <span className="text-[11px] text-zinc-500 font-bold block mt-1">
                                soit environ {(((sponsorshipType === "cream" ? 10000 : sponsorshipType === "kit" ? 15000 : 30000) * sponsorshipQty) / 655.957).toFixed(1)} €
                              </span>
                            </div>

                            <div className="border-t border-zinc-200 pt-4">
                              <span className="text-xs text-zinc-400 font-black block uppercase tracking-wider mb-1">Impact généré :</span>
                              <p className="text-zinc-750 text-xs font-semibold leading-relaxed">
                                {sponsorshipType === "cream" && (
                                  <>Garantit la protection de <span className="text-[var(--color-brand-olive-dense)] font-extrabold font-mono">{sponsorshipQty}</span> enfant(s) atteint(s) d'albinisme avec de la crème solaire SPF 50+ de qualité au Bénin durant tout un mois.</>
                                )}
                                {sponsorshipType === "kit" && (
                                  <>Fournit à <span className="text-[var(--color-brand-olive-dense)] font-extrabold font-mono">{sponsorshipQty}</span> enfant(s) un kit solaire complet constitué de : une crème solaire, un chapeau à larges bords et des lunettes solaires.</>
                                )}
                                {sponsorshipType === "annual" && (
                                  <>Assure un suivi dermatologique universel, verres correcteurs de haute qualité et fournitures de soin pour <span className="text-[var(--color-brand-olive-dense)] font-extrabold font-mono">{sponsorshipQty}</span> enfant(s) vulnérable(s) toute l'année.</>
                                )}
                              </p>
                            </div>
                          </div>

                          <div className="pt-6">
                            <a 
                              href={`https://wa.me/22997494591?text=${encodeURIComponent(
                                `Bonjour AlbiInternational ! Je souhaite parrainer ${sponsorshipQty} x [${
                                  sponsorshipType === "cream" 
                                    ? "Flacon de Crème Solaire SPF 50+" 
                                    : sponsorshipType === "kit" 
                                      ? "Kit Solaire Complet (Crème, Chapeau, Lunettes)" 
                                      : "Parrainage Médical Annuel"
                                }] évalué à ${
                                  (sponsorshipType === "cream" ? 10000 : sponsorshipType === "kit" ? 15000 : 30000) * sponsorshipQty
                                } FCFA pour aider directement au Bénin.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full text-center bg-[var(--color-brand-olive)] hover:bg-[var(--color-brand-olive-dense)] text-white text-xs font-black uppercase tracking-widest py-3.5 px-4 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-all hover:scale-[1.02]"
                            >
                              S'engager et Parrainer
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* SECTION 6: Appel aux Partenaires de Santé & Labos (Professional card for healthcare) */}
                  <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
                    <div className="bg-zinc-900 text-white rounded-[2.5rem] p-8 md:p-14 text-center space-y-6 relative overflow-hidden">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-brand-olive)]/5 rounded-full blur-3xl pointer-events-none" />
                      <div className="max-w-xl mx-auto space-y-4 relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-olive-light)]">Appel International</span>
                        <h2 className="font-display font-black text-2xl md:text-3xl text-white tracking-tight">Fabricants, Distributeurs, Dermatologues</h2>
                        <p className="text-zinc-350 text-xs leading-relaxed font-normal md:font-medium">
                          Vous possédez des stocks de crème d'écran solaire SPF 50+, des paires de verres solaires polarisés ou du matériel d'optique ? Écrivez-nous pour acheminer légalement ce matériel au Bénin.
                        </p>
                        <div className="pt-3">
                          <button 
                            onClick={() => handleContactClick("Bonjour l'association AlbiInternational, je souhaite vous contacter concernant le pôle logistique (dons de crèmes solaires, lunettes ou matériel d'optique) depuis le site web.")}
                            className="inline-flex items-center gap-2 bg-[var(--color-brand-olive-light)] hover:bg-white text-[var(--color-brand-dark)] text-xs font-black uppercase tracking-wider py-4 px-8 rounded-full transition-colors cursor-pointer"
                          >
                            Écrire à Notre Pôle Logistique
                            <ArrowUpRight className="w-4 h-4 text-[var(--color-brand-dark)]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>

                </div>
              )}

              {/* PAGE 3: HISTOIRE & VISION */}
              {pageId === "philosophy" && (
                <Introduction
                  onAboutClick={() => handleContactClick("Bonjour l'association AlbiInternational, je souhaite vous contacter directement suite à la lecture de votre histoire et vision sur le site web.")}
                  onCampaignsClick={() => changePage("campaigns")}
                />
              )}

              {/* PAGE 4: SENSIBILISATION */}
              {pageId === "campaigns" && (
                <div className="py-1 bg-[var(--color-brand-beige)]">
                  
                  {/* SECTION 1: Promesse Sociale (Sensibilisation Hero Header) */}
                  <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 mb-12">
                    <div className="text-center max-w-3xl mx-auto">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-olive-dense)] bg-[var(--color-brand-olive-light)] px-3.5 py-1.5 rounded-full">
                        Ateliers de prévention & Sensibilisation
                      </span>
                      <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-[var(--color-brand-dark)] mt-5 leading-[1.12] tracking-tight">
                        Changer le regard, éveiller les esprits
                      </h1>
                      <p className="text-zinc-650 text-xs md:text-sm font-normal md:font-medium mt-4 leading-relaxed">
                        À travers des interventions scolaires et des ateliers communautaires, nous déconstruisons les fausses croyances et diffusons les techniques indispensables d'hygiène solaire pour la peau et la vision.
                      </p>
                    </div>
                  </div>

                  {/* SECTION 2: Les Croyances vs La Réalité Scientifique (Myths vs Reality) */}
                  <section className="max-w-6xl mx-auto px-4 py-12">
                    <div className="text-center max-w-xl mx-auto mb-10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-olive-dense)]">Mythes décryptés</span>
                      <h2 className="font-display font-black text-2xl md:text-3xl text-[var(--color-brand-dark)] mt-2 tracking-tight">Démystifier l’albinisme par la science</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-150 space-y-4">
                        <div className="flex items-center gap-2 text-amber-600">
                          <X className="w-5 h-5 stroke-[2.5]" />
                          <span className="font-display font-black text-sm uppercase tracking-wider">La Fausse Croyance</span>
                        </div>
                        <h3 className="font-display font-extrabold text-base text-zinc-800">« Les personnes atteintes d'albinisme possèdent des pouvoirs magiques ou portent malheur. »</h3>
                        <p className="text-zinc-600 text-xs leading-relaxed font-normal md:font-medium border-t border-zinc-100 pt-3">
                          <strong className="text-[var(--color-brand-olive-dense)] block mb-1 uppercase text-[10px] tracking-widest">Réalité Clinique :</strong>
                          L'albinisme est une condition génétique héréditaire caractérisée par un déficit ou une absence totale de mélanine. C'est une variation saine du corps humain qui nécessite protection, non la persécution.
                        </p>
                      </div>

                      <div className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-150 space-y-4">
                        <div className="flex items-center gap-2 text-amber-600">
                          <X className="w-5 h-5 stroke-[2.5]" />
                          <span className="font-display font-black text-sm uppercase tracking-wider">La Fausse Croyance</span>
                        </div>
                        <h3 className="font-display font-extrabold text-base text-zinc-800">« L'albinisme est contagieux ou est le résultat d'une punition divine ancestrale. »</h3>
                        <p className="text-zinc-600 text-xs leading-relaxed font-normal md:font-medium border-t border-zinc-100 pt-3">
                          <strong className="text-[var(--color-brand-olive-dense)] block mb-1 uppercase text-[10px] tracking-widest">Réalité Clinique :</strong>
                          Cette anomalie de pigmentation se transmet de manière récessive par les deux parents porteurs sains du gène. Elle n’est en aucun cas infectieuse et n'enraye nullement le développement cognitif normal.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* SECTION 3: Interventions Scolaires Actives (Visual Timeline for campaigns) */}
                  <section className="bg-white/40 border-t border-b border-zinc-200/40 py-16">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                      <div className="text-center max-w-2xl mx-auto mb-10">
                        <span className="text-[10px] font-black uppercase text-[var(--color-brand-olive)] tracking-widest bg-[var(--color-brand-olive-pale)] px-3 py-1 rounded-full">Méthodologie d’éveil</span>
                        <h2 className="font-display font-black text-2xl md:text-3xl lg:text-4xl text-[var(--color-brand-dark)] mt-4 tracking-tight">Nos interventions scolaires pas-à-pas</h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-2xl border border-zinc-150 flex flex-col justify-between shadow-2xs">
                          <div className="space-y-3">
                            <span className="font-mono text-zinc-450 text-xs block">ÉTAPE 1</span>
                            <h4 className="font-display font-bold text-base text-[var(--color-brand-dark)]">Le Test de Fatigue Visuelle</h4>
                            <p className="text-zinc-600 text-xs leading-relaxed">Nos infirmières partenaires testent de manière ludique la vision de toute la classe pour éliminer la stigmatisation de l’élève albinos.</p>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-zinc-150 flex flex-col justify-between shadow-2xs">
                          <div className="space-y-3">
                            <span className="font-mono text-zinc-450 text-xs block">ÉTAPE 2</span>
                            <h4 className="font-display font-bold text-base text-[var(--color-brand-dark)]">Sensibilisation au Miroir</h4>
                            <p className="text-zinc-650 text-xs leading-relaxed font-normal md:font-medium">Explications sur l’écran total et le port du chapeau. Les instituteurs apprennent à placer les enfants sensibles face au tableau noir.</p>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-zinc-150 flex flex-col justify-between shadow-2xs">
                          <div className="space-y-3">
                            <span className="font-mono text-zinc-450 text-xs block">ÉTAPE 3</span>
                            <h4 className="font-display font-bold text-base text-[var(--color-brand-dark)]">Atelier des "Alliés Solaires"</h4>
                            <p className="text-zinc-600 text-xs leading-relaxed">Nous élisons des élèves sentinelles dans les classes ordinaires pour veiller sur leurs camarades albinos durant la récréation face au zénith scolaire.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* SECTION 4: Galerie Grand Prix (Photo Grid) */}
                  <div className="py-2">
                    <SeparatorCampaign />
                    <GallerySection />
                  </div>

                  {/* SECTION 5: Témoignage de Résilience (Focus on a real narrative) */}
                  <section className="max-w-4xl mx-auto px-4 py-16">
                    <div className="bg-white border border-zinc-200/80 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center shadow-2xs">
                      <div className="w-24 h-24 rounded-full bg-[var(--color-brand-olive-pale)] text-[var(--color-brand-olive-dense)] flex-shrink-0 flex items-center justify-center font-display font-black text-3xl border border-[var(--color-brand-olive)]/35">
                        S.H
                      </div>
                      <div className="space-y-4">
                        <span className="text-[10px] uppercase font-black tracking-widest text-[var(--color-brand-olive-dense)]">Histoire vécue — Cotonou</span>
                        <h3 className="font-display font-black text-xl md:text-2xl text-[var(--color-brand-dark)]">« Aujourd’hui, mes camarades comprennent que je ne suis pas un fantôme, mais juste un élève brillant sans mélanine. »</h3>
                        <p className="text-zinc-600 text-xs leading-relaxed font-normal md:font-medium">
                          — Sébastien H., 12 ans, soutenu par Albi International depuis 2021, récipiendaire du kit d'inclusion scolaire d'excellence.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* SECTION 6: Articles de Blog / Actualités (Replaces Ressource Gratuite) */}
                  <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
                    <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                      <span className="text-[10px] font-black uppercase text-[var(--color-brand-olive-dense)] tracking-widest bg-[var(--color-brand-olive-pale)] px-3.5 py-1.5 rounded-full border border-[var(--color-brand-olive)]/20">
                        Notre Blog & Actualités
                      </span>
                      <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[var(--color-brand-dark)] tracking-tight">
                        Dernières publications de l'ONG
                      </h2>
                      <p className="text-zinc-600 text-xs sm:text-sm font-semibold max-w-xl mx-auto leading-relaxed">
                        Suivez nos actions sur le terrain, nos décryptages scientifiques et nos actualités de solidarité au Bénin.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Blog Post 1 */}
                      <div className="bg-white border border-zinc-200/80 rounded-[2rem] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                        <div>
                          <div className="aspect-[16/10] overflow-hidden relative bg-zinc-150">
                            <img 
                              src="/images/albi_sun_cream_sage_1781884128743.webp" 
                              alt="Distribution de crème solaire au Bénin" 
                              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4 bg-amber-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
                              Santé & Prévention
                            </div>
                          </div>
                          <div className="p-6 space-y-3">
                            <div className="text-[10px] text-zinc-400 font-bold">12 JUIN 2026</div>
                            <h3 className="font-display font-black text-base text-[var(--color-brand-dark)] group-hover:text-[var(--color-brand-olive)] transition-colors leading-snug">
                              Protéger la peau : la distribution vitale de crème solaire SPF 50+
                            </h3>
                            <p className="text-zinc-600 text-xs leading-relaxed line-clamp-3 font-medium">
                              Nos caravanes médicales parcourent les départements du Bénin pour distribuer des écrans solaires dermatologiques de haute protection et dépister les lésions précoces.
                            </p>
                          </div>
                        </div>
                        <div className="p-6 pt-0">
                          <a 
                            href="/blog/creme-solaire"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-extrabold text-[var(--color-brand-olive)] group-hover:text-[var(--color-brand-olive-dense)] uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            <span>Lire l'article</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>

                      {/* Blog Post 2 */}
                      <div className="bg-white border border-zinc-200/80 rounded-[2rem] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                        <div>
                          <div className="aspect-[16/10] overflow-hidden relative bg-zinc-150">
                            <img 
                              src="/images/albi_children_school_1781884113577.webp" 
                              alt="Enfants albinos à l'école" 
                              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4 bg-indigo-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
                              Inclusion Éducative
                            </div>
                          </div>
                          <div className="p-6 space-y-3">
                            <div className="text-[10px] text-zinc-400 font-bold">5 SEPTEMBRE 2025</div>
                            <h3 className="font-display font-black text-base text-[var(--color-brand-dark)] group-hover:text-[var(--color-brand-olive)] transition-colors leading-snug">
                              L'inclusion scolaire : des kits adaptés pour les écoliers albinos
                            </h3>
                            <p className="text-zinc-600 text-xs leading-relaxed line-clamp-3 font-medium">
                              Découvrez notre programme annuel de rentrée solidaire. Des loupes de lecture, des manuels imprimés en gros caractères et des lunettes de protection pour offrir les mêmes chances.
                            </p>
                          </div>
                        </div>
                        <div className="p-6 pt-0">
                          <a 
                            href="/blog/kits-scolaires"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-extrabold text-[var(--color-brand-olive)] group-hover:text-[var(--color-brand-olive-dense)] uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            <span>Lire l'article</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>

                      {/* Blog Post 3 */}
                      <div className="bg-white border border-zinc-200/80 rounded-[2rem] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                        <div>
                          <div className="aspect-[16/10] overflow-hidden relative bg-zinc-150">
                            <img 
                              src="/images/albi_prevention_care_1781884154813.webp" 
                              alt="Sensibilisation albinisme Bénin" 
                              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
                              Sciences & Société
                            </div>
                          </div>
                          <div className="p-6 space-y-3">
                            <div className="text-[10px] text-zinc-400 font-bold">20 JANVIER 2026</div>
                            <h3 className="font-display font-black text-base text-[var(--color-brand-dark)] group-hover:text-[var(--color-brand-olive)] transition-colors leading-snug">
                              Démystifier l'albinisme : détruire les croyances par la science
                            </h3>
                            <p className="text-zinc-600 text-xs leading-relaxed line-clamp-3 font-medium">
                              Focus sur nos campagnes intensives de sensibilisation dans les zones rurales. Nous expliquons cliniquement la génétique de l'albinisme pour effacer les fausses superstitions.
                            </p>
                          </div>
                        </div>
                        <div className="p-6 pt-0">
                          <a 
                            href="/blog/demystifier-albinisme"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-extrabold text-[var(--color-brand-olive)] group-hover:text-[var(--color-brand-olive-dense)] uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            <span>Lire l'article</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>

                </div>
              )}

              {/* PAGE 5: NOUS SOUTENIR */}
              {pageId === "get-involved" && (
                <div className="py-12">
                  <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
                    <div className="bg-[var(--color-brand-olive)] text-white rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-lg">
                      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
                      <div className="relative z-10 max-w-2xl">
                        <span className="text-xs font-black uppercase tracking-widest text-[var(--color-brand-dark)] bg-[var(--color-brand-olive-light)] px-3 py-1 rounded-full font-display">
                          Rejoindre la Chaîne Humaine
                        </span>
                        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[var(--color-brand-beige)] mt-5 leading-[1.12] tracking-tight">
                          Votre soutien finance l'essentiel
                        </h1>
                        <p className="text-orange-50/90 text-xs md:text-sm font-normal md:font-medium mt-4 leading-relaxed">
                          Notre structure est gérée par des bénévoles engagés. Que ce soit par le don d'une crème SPF 50, en tant que bénévole médical en province, ou à travers un simple témoignage mondial d'espoir, vous faites une réelle différence.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Get involved accordion interactives and Donation lists */}
                  <GetInvolved
                    onVolunteerClick={() => handleContactClick("Bonjour l'association AlbiInternational, je souhaite devenir bénévole pour soutenir vos actions au Bénin.")}
                    onShareClick={() => openModal("share")}
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* 3. Global Decorative Badge Panel & Footer Details */}
      <footer className="bg-[var(--color-brand-dark)] text-white/90 pt-16 pb-8 border-t border-zinc-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo & Vision detail Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Logo Albi International"
                className="w-8 h-8 rounded-full object-cover border border-white/10"
              />
              <span className="font-display font-extrabold text-lg tracking-tight">
                Albi International
              </span>
            </div>
            <p className="text-[var(--color-brand-beige)]/80 text-xs md:text-sm max-w-sm leading-relaxed font-normal md:font-medium">
              Rejoignez notre réseau de solidarité au Bénin. Notre combat vise à offrir une protection cutanée adéquate, un accès durable à l'éducation inclusive et la pleine réhabilitation sociale pour chaque personne atteinte d'albinisme.
            </p>
            <div className="pt-2 text-xs text-[var(--color-brand-beige)]/70 space-y-1">
              <span className="block font-bold text-[var(--color-brand-olive-light)]">Contactez-nous :</span>
              <a href="mailto:albiiinternationale@gmail.com" className="text-white hover:text-[var(--color-brand-olive-light)] hover:underline font-mono block">albiiinternationale@gmail.com</a>
              <span className="block font-mono text-[var(--color-brand-beige)]/60">+229 97 49 45 91</span>
            </div>
          </div>

          {/* Quick links Column */}
          <div>
            <span className="block text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-olive-pale)] mb-3.5">
              Organisation
            </span>
            <ul className="space-y-2 text-xs font-semibold text-[var(--color-brand-beige)]/75">
              <li>
                <a 
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); changePage("projects"); }} 
                  className="hover:text-[var(--color-brand-olive-light)] transition-colors text-left cursor-pointer no-underline block"
                >
                  Nos Actions
                </a>
              </li>
              <li>
                <a 
                  href="#philosophy"
                  onClick={(e) => { e.preventDefault(); changePage("philosophy"); }} 
                  className="hover:text-[var(--color-brand-olive-light)] transition-colors text-left cursor-pointer no-underline block"
                >
                  Histoire & Vision
                </a>
              </li>
              <li>
                <a 
                  href="#campaigns"
                  onClick={(e) => { e.preventDefault(); changePage("campaigns"); }} 
                  className="hover:text-[var(--color-brand-olive-light)] transition-colors text-left cursor-pointer no-underline block"
                >
                  Campagnes d’Inclusion
                </a>
              </li>
              <li>
                <a 
                  href="#get-involved"
                  onClick={(e) => { e.preventDefault(); changePage("get-involved"); }} 
                  className="hover:text-[var(--color-brand-olive-light)] transition-colors text-left cursor-pointer no-underline block"
                >
                  Comment Nous Soutenir
                </a>
              </li>
              <li>
                <button 
                  onClick={() => handleContactClick()} 
                  className="hover:text-[var(--color-brand-olive-light)] transition-colors text-left cursor-pointer block"
                >
                  Contacter notre Équipe
                </button>
              </li>
            </ul>
          </div>

          {/* Eco-partners & Certifs Column */}
          <div className="space-y-4">
            <span className="block text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-olive-pale)]">
              Accréditations
            </span>
            <div className="flex gap-4.5">
              <div className="flex flex-col items-center hover:scale-105 transition-transform">
                <Shield className="w-7 h-7 text-[var(--color-brand-olive)]" />
                <span className="text-[9px] font-bold text-[var(--color-brand-olive-light)]/85 mt-1">Certifiée</span>
              </div>
              <div className="flex flex-col items-center hover:scale-105 transition-transform">
                <Landmark className="w-7 h-7 text-[var(--color-brand-olive)]" />
                <span className="text-[9px] font-bold text-[var(--color-brand-olive-light)]/85 mt-1">Souveraine</span>
              </div>
              <div className="flex flex-col items-center hover:scale-105 transition-transform">
                <Heart className="w-7 h-7 text-[var(--color-brand-olive)]" />
                <span className="text-[9px] font-bold text-[var(--color-brand-olive-light)]/85 mt-1">100% Direct</span>
              </div>
            </div>
          </div>

        </div>

        {/* Humble and authentic footer info */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-zinc-800/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-semibold text-[var(--color-brand-beige)]/60">
          <div>
            <span>© 2026 Association Albi International Bénin. Tous droits réservés. Ce site a été conçu et créé par <span className="text-[var(--color-brand-olive-light)] font-bold">U Solution agency</span>.</span>
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:underline">Charte de Confidentialité</a>
            <a href="#home" onClick={(e) => { e.preventDefault(); changePage("home"); }} className="hover:underline no-underline">Retour à l’Accueil</a>
            <span className="font-sans text-[10px] tracking-wider">Version 1.2.0</span>
          </div>
        </div>
      </footer>

      {/* 4. Handles dynamic micro-actions modals */}
      <AnimatePresence>
        {modalType && (
          <ContactModal
            type={modalType}
            selectedProject={selectedProject}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>

    </div>
  );
}

