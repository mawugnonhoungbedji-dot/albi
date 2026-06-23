import React, { useState } from "react";
import { X, Send, Heart, Trees, Share2, Sparkles, Check, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectItem } from "../data";

export type ModalType = "contact" | "share" | "donate" | "project_detail" | null;

interface ContactModalProps {
  type: ModalType;
  selectedProject: ProjectItem | null;
  onClose: () => void;
}

export default function ContactModal({ type, selectedProject, onClose }: ContactModalProps) {
  // Contact States
  const [contactForm, setContactForm] = useState({ name: "", email: "", topic: "general", message: "" });
  const [contactSuccess, setContactSuccess] = useState(false);

  // Share States
  const [shareForm, setShareForm] = useState({ username: "", location: "", action: "", message: "", imageSeed: "eco-trail" });
  const [shareSuccess, setShareSuccess] = useState(false);

  // Donate States
  const [donationAmount, setDonationAmount] = useState<string>("50");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentDone, setPaymentDone] = useState(false);
  const [paymentForm, setPaymentForm] = useState({ fullName: "", email: "", card: "", expiry: "", cvc: "" });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setContactForm({ name: "", email: "", topic: "general", message: "" });
      onClose();
    }, 3200);
  };

  const handleShareSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShareSuccess(true);
    setTimeout(() => {
      setShareSuccess(false);
      setShareForm({ username: "", location: "", action: "", message: "", imageSeed: "eco-trail" });
      onClose();
    }, 3200);
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentDone(true);
    setTimeout(() => {
      setPaymentDone(false);
      setDonationAmount("50");
      setCustomAmount("");
      setPaymentForm({ fullName: "", email: "", card: "", expiry: "", cvc: "" });
      onClose();
    }, 3500);
  };

  const activeAmount = customAmount || donationAmount;

  if (!type) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-[var(--color-brand-beige)] border border-zinc-150 rounded-[2rem] w-full max-w-lg overflow-hidden shadow-2xl relative block"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Main Top Header Banner of Modal */}
        <div className="bg-[var(--color-brand-dark)] text-white px-6 py-5.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-olive)] text-[var(--color-brand-dark)] flex items-center justify-center">
              {type === "contact" && <Send className="w-4 h-4 text-[var(--color-brand-dark)]" />}
              {type === "share" && <Share2 className="w-4 h-4 text-[var(--color-brand-dark)]" />}
              {type === "donate" && <Heart className="w-4 h-4 text-[var(--color-brand-dark)]" />}
              {type === "project_detail" && <Trees className="w-4 h-4 text-[var(--color-brand-dark)]" />}
            </div>
            <h3 className="font-display font-extrabold tracking-tight text-sm.5 md:text-base">
              {type === "contact" && "Contacter Albi International"}
              {type === "share" && "Partager mon témoignage"}
              {type === "donate" && "Soutenir la cause Albi au Bénin"}
              {type === "project_detail" && selectedProject?.title}
            </h3>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

          <div className="p-6.5">

            {/* 1. CONTACT FORM */}
            {type === "contact" && (
              <div>
                {contactSuccess ? (
                  <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="py-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-brand-olive-pale)] flex items-center justify-center mx-auto mb-4 text-[var(--color-brand-olive-dense)]">
                      <Check className="w-7 h-7" />
                    </div>
                    <span className="font-display font-black text-xl text-[var(--color-brand-dark)]">Message Transmis !</span>
                    <p className="text-zinc-700 text-xs mt-2.5 max-w-xs mx-auto leading-relaxed">
                      Merci pour votre message d'intérêt. Notre équipe béninoise va vous répondre par email sous 24h.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-[var(--color-brand-text-muted)] tracking-wider mb-1.5 font-sans">Votre Nom Complet</label>
                      <input
                        required
                        type="text"
                        placeholder="Jean Houéssou"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-[var(--color-brand-dark)] focus:border-[var(--color-brand-olive-dense)] outline-none transition-colors font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-[var(--color-brand-text-muted)] tracking-wider mb-1.5 font-sans">Adresse Email</label>
                      <input
                        required
                        type="email"
                        placeholder="jean.houessou@example.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-[var(--color-brand-dark)] focus:border-[var(--color-brand-olive-dense)] outline-none transition-colors font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-[var(--color-brand-text-muted)] tracking-wider mb-1.5 font-sans">Sujet de votre message</label>
                      <select
                        value={contactForm.topic}
                        onChange={(e) => setContactForm({ ...contactForm, topic: e.target.value })}
                        className="w-full bg-white border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-[var(--color-brand-dark)] focus:border-[var(--color-brand-olive-dense)] outline-none transition-colors font-semibold"
                      >
                        <option value="general">Demande d'informations générales</option>
                        <option value="volunteer">Devenir Bénévole Actif au Bénin</option>
                        <option value="media">Partenariats & Médias</option>
                        <option value="donation">Dons de crèmes solaires SPF / Lunettes / Chapeaux</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-[var(--color-brand-text-muted)] tracking-wider mb-1.5 font-sans">Votre Message</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Comment souhaitez-vous soutenir l'association Albi International au Bénin..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-[var(--color-brand-dark)] focus:border-[var(--color-brand-olive-dense)] outline-none transition-colors font-medium resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[var(--color-brand-dark)] hover:bg-black text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Envoyer le message d'espoir
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* 2. SHARE RESULTS FORM */}
            {type === "share" && (
              <div>
                {shareSuccess ? (
                  <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="py-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-brand-olive-pale)] flex items-center justify-center mx-auto mb-4 text-[var(--color-brand-olive-dense)]">
                      <Check className="w-7 h-7" />
                    </div>
                    <span className="font-display font-black text-xl text-[var(--color-brand-dark)]">Témoignage Publié !</span>
                    <p className="text-zinc-700 text-xs mt-2.5 max-w-xs mx-auto leading-relaxed">
                      Votre témoignage d'encouragement a été envoyé aux coordinateurs d'Albi International. Merci pour votre humanisme ✋
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleShareSubmit} className="space-y-4">
                    <div className="bg-[var(--color-brand-olive-pale)] p-4 rounded-xl border border-[var(--color-brand-olive)] text-xs text-[var(--color-brand-dark)] leading-normal flex gap-2.5 font-medium">
                      <Sparkles className="w-4 h-4 shrink-0 text-[var(--color-brand-olive-dense)] mt-0.5 animate-pulse" />
                      <span>
                        Dites-nous ce qui vous inspire dans le combat d'Albi International au Bénin, ou partagez vos encouragements et solutions de protection solaire.
                      </span>
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-[var(--color-brand-text-muted)] tracking-wider mb-1.5 font-sans">Votre Nom / Prénom</label>
                      <input
                        required
                        type="text"
                        placeholder="Aline, Cotonou"
                        value={shareForm.username}
                        onChange={(e) => setShareForm({ ...shareForm, username: e.target.value })}
                        className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-[var(--color-brand-dark)] focus:border-[var(--color-brand-olive-dense)] outline-none transition-colors font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-[var(--color-brand-text-muted)] tracking-wider mb-1.5 font-sans">Ville & Pays</label>
                      <input
                        required
                        type="text"
                        placeholder="Porto-Novo, Bénin"
                        value={shareForm.location}
                        onChange={(e) => setShareForm({ ...shareForm, location: e.target.value })}
                        className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-[var(--color-brand-dark)] focus:border-[var(--color-brand-olive-dense)] outline-none transition-colors font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-[var(--color-brand-text-muted)] tracking-wider mb-1.5 font-sans">Votre Action / Motivation</label>
                      <input
                        required
                        type="text"
                        placeholder="Donateur de 5 crèmes solaires, Parrainage scolaire..."
                        value={shareForm.action}
                        onChange={(e) => setShareForm({ ...shareForm, action: e.target.value })}
                        className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-[var(--color-brand-dark)] focus:border-[var(--color-brand-olive-dense)] outline-none transition-colors font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-[var(--color-brand-text-muted)] tracking-wider mb-1.5 font-sans">Message d'espoir</label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Chaque geste compte. Les rayons de soleil ne doivent plus brûler la peau des enfants..."
                        value={shareForm.message}
                        onChange={(e) => setShareForm({ ...shareForm, message: e.target.value })}
                        className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-[var(--color-brand-dark)] focus:border-[var(--color-brand-olive-dense)] outline-none transition-colors font-medium resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[var(--color-brand-dark)] hover:bg-black text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      Publier sur le mur des espoirs
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* 3. DONATE FORM */}
            {type === "donate" && (
              <div>
                {paymentDone ? (
                  <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="py-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-brand-olive-pale)] flex items-center justify-center mx-auto mb-4 text-[var(--color-brand-olive-dense)]">
                      <Heart className="w-6 h-6 fill-current" />
                    </div>
                    <span className="font-display font-black text-xl text-[var(--color-brand-dark)]">Don Enregistré !</span>
                    <p className="text-[var(--color-brand-olive-dense)] font-black text-2xl mt-2">${activeAmount}.00 USD</p>
                    <p className="text-zinc-700 text-[11px] mt-2.5 max-w-xs mx-auto leading-relaxed font-semibold">
                      Un immense merci pour votre humanisme. Votre don va financer l'achat et la distribution gratuite de crèmes haute protection SPF 50+, lunettes de soleil et chapeaux à larges bords pour les orphelinats et écoles au Bénin.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleDonateSubmit} className="space-y-4">
                    
                    {/* Amount selectors */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-[var(--color-brand-text-muted)] tracking-wider mb-2 font-sans">Sélectionner le montant (USD)</label>
                      <div className="grid grid-cols-4 gap-2">
                        {["15", "50", "100", "250"].map((amt) => {
                          const active = donationAmount === amt && !customAmount;
                          return (
                            <button
                              key={amt}
                              type="button"
                              onClick={() => {
                                setDonationAmount(amt);
                                setCustomAmount("");
                              }}
                              className={`py-3 rounded-xl text-xs font-black transition-all ${
                                active
                                  ? "bg-[var(--color-brand-dark)] text-white shadow-md scale-103"
                                  : "bg-white border border-zinc-200 text-[var(--color-brand-dark)] hover:bg-zinc-100"
                              }`}
                            >
                              ${amt}
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-2 text-center">
                        <span className="text-[10px] text-[var(--color-brand-text-muted)] font-semibold">- ou entrez un montant libre (USD) -</span>
                      </div>

                      <input
                        type="number"
                        placeholder="50"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-[var(--color-brand-dark)] mt-2 focus:border-[var(--color-brand-olive-dense)] outline-none transition-colors font-black"
                      />
                    </div>

                    <div className="h-[1px] bg-zinc-200/50" />

                    {/* Payment Inputs */}
                    <div className="grid grid-cols-2 gap-3.5">
                      <div className="col-span-2">
                        <label className="block text-[11px] font-extrabold uppercase text-[var(--color-brand-text-muted)] tracking-wider mb-1 font-sans">Nom Complet du donateur</label>
                        <input
                          required
                          type="text"
                          placeholder="Votre nom ou entreprise"
                          value={paymentForm.fullName}
                          onChange={(e) => setPaymentForm({ ...paymentForm, fullName: e.target.value })}
                          className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2 text-xs text-[var(--color-brand-dark)] focus:border-[var(--color-brand-olive-dense)] outline-none"
                        />
                      </div>

                      <div className="col-span-2">
                        <label className="block text-[11px] font-extrabold uppercase text-[var(--color-brand-text-muted)] tracking-wider mb-1 font-sans">Email pour confirmation</label>
                        <input
                          required
                          type="email"
                          placeholder="don@albi-benin.org"
                          value={paymentForm.email}
                          onChange={(e) => setPaymentForm({ ...paymentForm, email: e.target.value })}
                          className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2 text-xs text-[var(--color-brand-dark)] focus:border-[var(--color-brand-olive-dense)] outline-none"
                        />
                      </div>

                      <div className="col-span-2">
                        <label className="block text-[11px] font-extrabold uppercase text-[var(--color-brand-text-muted)] tracking-wider mb-1 font-sans">Chiffres de carte bancaire (Simulation sécurisée)</label>
                        <input
                          required
                          type="text"
                          placeholder="4000 1234 5678 9010"
                          value={paymentForm.card}
                          onChange={(e) => setPaymentForm({ ...paymentForm, card: e.target.value })}
                          className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2 text-xs text-[var(--color-brand-dark)] focus:border-[var(--color-brand-olive-dense)] outline-none font-sans font-bold tracking-widest"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-extrabold uppercase text-[var(--color-brand-text-muted)] tracking-wider mb-1 font-sans">Date Expiration</label>
                        <input
                          required
                          type="text"
                          placeholder="12/28"
                          value={paymentForm.expiry}
                          onChange={(e) => setPaymentForm({ ...paymentForm, expiry: e.target.value })}
                          className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2 text-xs text-[var(--color-brand-dark)] focus:border-[var(--color-brand-olive-dense)] outline-none font-sans font-bold tracking-wider"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-extrabold uppercase text-[var(--color-brand-text-muted)] tracking-wider mb-1 font-sans">Code CVV</label>
                        <input
                          required
                          type="password"
                          placeholder="***"
                          maxLength={3}
                          value={paymentForm.cvc}
                          onChange={(e) => setPaymentForm({ ...paymentForm, cvc: e.target.value })}
                          className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2 text-xs text-[var(--color-brand-dark)] focus:border-[var(--color-brand-olive-dense)] outline-none font-sans font-bold tracking-wider"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[var(--color-brand-olive-dense)] hover:bg-[var(--color-brand-dark)] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 mt-2"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      Confirmer le Don / ${activeAmount}.00 USD
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* 4. DETAILS OF THE SELECTED PROJECT */}
            {type === "project_detail" && selectedProject && (
              <div className="space-y-4">
                
                {/* Project Portrait Visual banner */}
                {selectedProject.image && (
                  <div className="w-full aspect-[2/1] rounded-2xl overflow-hidden relative shadow-sm border border-zinc-200">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/95 text-[10px] font-black uppercase text-[var(--color-brand-dark)] px-3 py-1 rounded-full border border-white/20">
                        {selectedProject.badge || "Santé & Inclusion"}
                      </span>
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-display font-black text-xl text-[var(--color-brand-dark)] leading-tight">
                    {selectedProject.title}
                  </h4>
                  <p className="text-zinc-750 text-xs mt-3 leading-relaxed font-semibold">
                    {selectedProject.subtitle || selectedProject.description}
                  </p>
                </div>

                {/* Dynamic Content Checklist (Objectives & Results) */}
                <div className="bg-white border border-zinc-200 p-4.5 rounded-2xl space-y-4 shadow-xs">
                  <div>
                    <span className="block text-[10px] font-black uppercase text-[var(--color-brand-olive-dense)] tracking-wider font-sans mb-2">
                      🎯 Objectifs Spécifiques :
                    </span>
                    <div className="space-y-2">
                      {selectedProject.id === "prevention" && (
                        <>
                          <div className="flex gap-2 items-start text-[11px] text-zinc-800 font-semibold leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-[var(--color-brand-olive-dense)] shrink-0 mt-0.5" />
                            <span>Prévenir efficacement les cancers de la peau grâce à l'apport constant d'écrans totaux SPF 50+.</span>
                          </div>
                          <div className="flex gap-2 items-start text-[11px] text-zinc-800 font-semibold leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-[var(--color-brand-olive-dense)] shrink-0 mt-0.5" />
                            <span>Détecter de manière précoce les lésions cutanées en orientant les familles vers des dermatologues spécialisés.</span>
                          </div>
                          <div className="flex gap-2 items-start text-[11px] text-zinc-800 font-semibold leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-[var(--color-brand-olive-dense)] shrink-0 mt-0.5" />
                            <span>Inculquer les bons réflexes d'hygiène solaire journalière aux jeunes et adultes.</span>
                          </div>
                        </>
                      )}
                      {selectedProject.id === "education" && (
                        <>
                          <div className="flex gap-2 items-start text-[11px] text-zinc-800 font-semibold leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-[var(--color-brand-olive-dense)] shrink-0 mt-0.5" />
                            <span>Soutenir l'accès et le maintien des enfants atteints d'albinisme à l'école au Bénin.</span>
                          </div>
                          <div className="flex gap-2 items-start text-[11px] text-zinc-800 font-semibold leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-[var(--color-brand-olive-dense)] shrink-0 mt-0.5" />
                            <span>Réduire de manière importante les difficultés financières chroniques des familles.</span>
                          </div>
                          <div className="flex gap-2 items-start text-[11px] text-zinc-800 font-semibold leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-[var(--color-brand-olive-dense)] shrink-0 mt-0.5" />
                            <span>Encourager la réussite scolaire et l'épanouissement des enfants bénéficiaires.</span>
                          </div>
                          <div className="flex gap-2 items-start text-[11px] text-zinc-800 font-semibold leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-[var(--color-brand-olive-dense)] shrink-0 mt-0.5" />
                            <span>Promouvoir l'égalité des chances en matière d'éducation inclusive durable.</span>
                          </div>
                        </>
                      )}
                      {selectedProject.id === "christmas" && (
                        <>
                          <div className="flex gap-2 items-start text-[11px] text-zinc-800 font-semibold leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-[var(--color-brand-olive-dense)] shrink-0 mt-0.5" />
                            <span>Offrir aux enfants atteints d'albinisme un moment de précieux bonheur et d'inclusion digne.</span>
                          </div>
                          <div className="flex gap-2 items-start text-[11px] text-zinc-800 font-semibold leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-[var(--color-brand-olive-dense)] shrink-0 mt-0.5" />
                            <span>Renforcer l'estime de soi d'exister et le profond sentiment d'appartenance citoyenne.</span>
                          </div>
                          <div className="flex gap-2 items-start text-[11px] text-zinc-800 font-semibold leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-[var(--color-brand-olive-dense)] shrink-0 mt-0.5" />
                            <span>Faire un point de contrôle santé cutané et distribuer des kits de rechange d'écrans totaux.</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-zinc-150 pt-3">
                    <span className="block text-[10px] font-black uppercase text-emerald-800 tracking-wider font-sans mb-2">
                      🌿 Résultats Attendus :
                    </span>
                    <div className="space-y-2">
                      {selectedProject.id === "prevention" && (
                        <div className="text-[11px] text-zinc-700 font-medium leading-relaxed bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100/50">
                          Une baisse mesurable des brûlures graves chez les enfants de condition albinos au Bénin, et une autonomisation des mères sur les pratiques saines de soin cutané.
                        </div>
                      )}
                      {selectedProject.id === "education" && (
                        <div className="text-[11px] text-zinc-700 font-medium leading-relaxed bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100/50">
                          Une rentrée réussie, sans doutes matériels, pour les apprenants. Réduction drastique des décrochages scolaires liés aux frais d'équipement ou aux difficultés visuelles.
                        </div>
                      )}
                      {selectedProject.id === "christmas" && (
                        <div className="text-[11px] text-zinc-700 font-medium leading-relaxed bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100/50">
                          Des enfants solidaires, épanouis et heureux. Consolidation forte des liens de confiance mutuelle entre les parents d'enfants albinos et l'association AlbiInternational.
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2.5 mt-2">
                  <a
                    href="https://wa.me/22997494591?text=Bonjour l'association AlbiInternational, je souhaite vous féliciter et vous contacter pour soutenir votre action de terrain au Bénin."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[var(--color-brand-dark)] hover:bg-black text-[var(--color-brand-olive-light)] hover:text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl text-center flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    Soutenir cette action via WhatsApp
                  </a>
                  <button
                    onClick={onClose}
                    className="bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-bold text-xs uppercase tracking-wider px-5 rounded-xl text-center transition-colors cursor-pointer"
                  >
                    Fermer
                  </button>
                </div>

              </div>
            )}

          </div>

        </motion.div>
    </motion.div>
  );
}
