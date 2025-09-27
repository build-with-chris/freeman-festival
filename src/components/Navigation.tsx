"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface NavigationProps {
  currentPage?: 'home' | 'program' | 'lineup' | 'venue' | 'about' | 'contact';
  onTicketsClick?: () => void;
}

export default function Navigation({ currentPage = 'home', onTicketsClick }: NavigationProps) {
  const { language, toggleLanguage, content } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleTicketsClick = () => {
    if (onTicketsClick) {
      onTicketsClick();
    } else {
      // Navigate to home page tickets section
      window.location.href = "/#tickets";
    }
    closeMenu();
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="display text-xl font-bold group energetic-logo relative"
            onClick={closeMenu}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:via-orange-300 group-hover:to-red-300 transition-all duration-300 drop-shadow-lg relative z-10">
              🎪 Freeman Festival ✨
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-orange-400/30 to-red-400/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/programm"
              className={currentPage === 'program' ? 'text-white font-semibold' : 'hover:text-white transition-colors text-white/70'}
            >
              {content.navigation.program}
            </Link>
            <Link
              href="/lineup"
              className={currentPage === 'lineup' ? 'text-white font-semibold' : 'hover:text-white transition-colors text-white/70'}
            >
              {content.navigation.lineup}
            </Link>
            <Link
              href="/pepe-dome"
              className={currentPage === 'venue' ? 'text-white font-semibold' : 'hover:text-white transition-colors text-white/70'}
            >
              {content.navigation.venue}
            </Link>
            <Link
              href="/ueber"
              className={currentPage === 'about' ? 'text-white font-semibold' : 'hover:text-white transition-colors text-white/70'}
            >
              {content.navigation.about}
            </Link>
            <Link
              href="/kontakt"
              className={currentPage === 'contact' ? 'text-white font-semibold' : 'hover:text-white transition-colors text-white/70'}
            >
              {content.navigation.contact}
            </Link>
            <button
              onClick={handleTicketsClick}
              className="btn-primary px-4 py-2 text-sm"
              aria-label="Zu den Tickets scrollen"
            >
              {content.navigation.tickets}
            </button>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 border border-white/20 rounded text-sm hover:border-white/50 transition-colors"
              aria-label={language === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
            >
              {content.navigation.language.switch}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-8 h-8 flex items-center justify-center"
            aria-label="Menü öffnen/schließen"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute top-1 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : ''
                }`}
              />
              <span
                className={`absolute top-3 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute top-5 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-6 py-6 space-y-6">
            {/* Lottie Animation */}
            <div className="w-24 h-24 mx-auto mb-6">
              <DotLottieReact
                src="https://lottie.host/624aabe7-916a-416f-b6c2-be3a17f113f9/DyPtBBmqU4.lottie"
                loop
                autoplay
                style={{ width: "100%", height: "100%", filter: "invert(1) brightness(2)" }}
              />
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-4">
              <Link
                href="/"
                className={`block text-center py-3 px-4 rounded-lg transition-colors ${
                  currentPage === 'home'
                    ? 'bg-white/20 text-white font-semibold'
                    : 'hover:bg-white/10 hover:text-white text-white/70'
                }`}
                onClick={closeMenu}
              >
                {content.navigation.home}
              </Link>
              <Link
                href="/programm"
                className={`block text-center py-3 px-4 rounded-lg transition-colors ${
                  currentPage === 'program'
                    ? 'bg-white/20 text-white font-semibold'
                    : 'hover:bg-white/10 hover:text-white text-white/70'
                }`}
                onClick={closeMenu}
              >
                {content.navigation.program}
              </Link>
              <Link
                href="/lineup"
                className={`block text-center py-3 px-4 rounded-lg transition-colors ${
                  currentPage === 'lineup'
                    ? 'bg-white/20 text-white font-semibold'
                    : 'hover:bg-white/10 hover:text-white text-white/70'
                }`}
                onClick={closeMenu}
              >
                {content.navigation.lineup}
              </Link>
              <Link
                href="/pepe-dome"
                className={`block text-center py-3 px-4 rounded-lg transition-colors ${
                  currentPage === 'venue'
                    ? 'bg-white/20 text-white font-semibold'
                    : 'hover:bg-white/10 hover:text-white text-white/70'
                }`}
                onClick={closeMenu}
              >
                {content.navigation.venue}
              </Link>
              <Link
                href="/ueber"
                className={`block text-center py-3 px-4 rounded-lg transition-colors ${
                  currentPage === 'about'
                    ? 'bg-white/20 text-white font-semibold'
                    : 'hover:bg-white/10 hover:text-white text-white/70'
                }`}
                onClick={closeMenu}
              >
                {content.navigation.about}
              </Link>
              <Link
                href="/kontakt"
                className={`block text-center py-3 px-4 rounded-lg transition-colors ${
                  currentPage === 'contact'
                    ? 'bg-white/20 text-white font-semibold'
                    : 'hover:bg-white/10 hover:text-white text-white/70'
                }`}
                onClick={closeMenu}
              >
                {content.navigation.contact}
              </Link>

              {/* Mobile Tickets Button */}
              <button
                onClick={handleTicketsClick}
                className="btn-primary w-full py-3 text-center"
              >
                🎫 {content.navigation.tickets}
              </button>

              {/* Mobile Language Toggle */}
              <button
                onClick={() => {
                  toggleLanguage();
                  closeMenu();
                }}
                className="w-full py-3 px-4 border border-white/20 rounded-lg hover:border-white/50 transition-colors"
              >
                {language === 'de' ? '🇺🇸 English' : '🇩🇪 Deutsch'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}