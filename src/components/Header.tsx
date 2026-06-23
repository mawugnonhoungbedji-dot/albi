import { Home, Folder, Newspaper, Megaphone, Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../assets/images/Logo.jpeg";

interface HeaderProps {
  activePage: string;
  onPageChange: (page: string) => void;
  onContactClick: () => void;
}

export default function Header({ activePage, onPageChange, onContactClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Accueil", icon: Home },
    { id: "projects", label: "Nos Actions", icon: Folder },
    { id: "philosophy", label: "Histoire & Vision", icon: Newspaper },
    { id: "campaigns", label: "Sensibilisation", icon: Megaphone },
    { id: "get-involved", label: "Nous Soutenir", icon: Heart },
  ];

  const getRoute = (id: string) => {
    if (id === "home") return "/";
    if (id === "projects") return "/actions";
    if (id === "philosophy") return "/histoire";
    if (id === "campaigns") return "/sensibilisation";
    if (id === "get-involved") return "/soutenir";
    return "/";
  };

  return (
    <header className="sticky top-0 z-40 bg-[var(--color-brand-beige)]/90 backdrop-blur-md border-b border-zinc-200/40 px-4 md:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <button
          onClick={() => onPageChange("home")}
          className="flex items-center gap-2.5 group text-left cursor-pointer"
        >
          <img
            src={logoImg}
            alt="Logo Albi International"
            className="w-8 h-8 rounded-full object-cover border border-zinc-200/50 group-hover:scale-105 transition-transform duration-200"
          />
          <span className="font-display font-extrabold text-xl tracking-tight text-[var(--color-brand-dark)]">
            AlbiInternational
          </span>
        </button>

        {/* Center Pill Nav (Desktop) */}
        <nav className="hidden xl:flex items-center gap-1 bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-zinc-205/30 rounded-full p-1.5 backdrop-blur-sm relative z-10">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <a
                key={item.id}
                href={getRoute(item.id)}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(item.id);
                }}
                className={`relative flex items-center gap-2 font-semibold text-xs px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 z-10 no-underline ${
                  isActive
                    ? "text-white"
                    : "hover:text-[var(--color-brand-olive)] text-[var(--color-brand-dark)]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTabLarge"
                    className="absolute inset-0 bg-[var(--color-brand-dark)] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[var(--color-brand-olive-light)]" : "text-[var(--color-brand-text-muted)]"}`} />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mid-sized and smaller desktop navigation */}
        <nav className="hidden md:flex xl:hidden items-center gap-1 bg-white/70 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-zinc-205/30 rounded-full p-1 relative z-10">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <a
                key={item.id}
                href={getRoute(item.id)}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(item.id);
                }}
                className={`relative flex items-center gap-1.5 font-bold text-[11px] px-3 py-1.5 rounded-full cursor-pointer transition-colors duration-300 z-10 no-underline ${
                  isActive
                    ? "text-white"
                    : "hover:text-[var(--color-brand-olive)] text-[var(--color-brand-dark)]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTabMedium"
                    className="absolute inset-0 bg-[var(--color-brand-dark)] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[var(--color-brand-olive-light)]" : "text-[var(--color-brand-text-muted)]"}`} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onContactClick}
            id="btn-contact-header"
            className="bg-[var(--color-brand-dark)] text-white hover:bg-black font-semibold text-xs tracking-wide px-5 text-center py-2.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            Nous Contacter
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onContactClick}
            className="bg-[var(--color-brand-dark)] text-white font-medium text-xs px-3.5 py-1.5 rounded-full transition-all cursor-pointer"
          >
            Contact
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 text-[var(--color-brand-dark)] hover:bg-zinc-200/50 rounded-lg transition-colors cursor-pointer"
            aria-label="Menu principal"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white/95 border-b border-zinc-200/50 mt-3 rounded-2xl shadow-xl"
          >
            <div className="p-4 flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activePage === item.id;
                return (
                  <a
                    key={item.id}
                    href={getRoute(item.id)}
                    onClick={(e) => {
                      e.preventDefault();
                      onPageChange(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 p-3 rounded-xl text-sm font-semibold transition-all w-full text-left cursor-pointer no-underline ${
                      isActive
                        ? "bg-[var(--color-brand-dark)] text-white"
                        : "hover:bg-[var(--color-brand-olive-pale)] text-[var(--color-brand-dark)]"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-[var(--color-brand-olive-light)]" : "text-[var(--color-brand-text-muted)]"}`} />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
