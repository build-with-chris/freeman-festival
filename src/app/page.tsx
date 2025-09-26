"use client";
type CountdownLabels = { days: string; hours: string; minutes: string; seconds: string };
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

// Hover Animation Component
function HoverAnimation({ src, staticIcon }: { src: string; staticIcon: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Lottie Animation - only visible on hover */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <DotLottieReact
          src={src}
          loop
          autoplay={isHovered}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Static Icon - visible by default, hidden on hover */}
      <div className={`transition-opacity duration-300 w-full h-full bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <span className="text-2xl sm:text-3xl">{staticIcon}</span>
      </div>
    </div>
  );
}

// Countdown Component
function Countdown({ targetDate, labels }: { targetDate: Date; labels: CountdownLabels }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.days}</div>
        <div className="text-xs sm:text-sm muted">{labels.days}</div>
      </div>
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.hours}</div>
        <div className="text-xs sm:text-sm muted">{labels.hours}</div>
      </div>
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.minutes}</div>
        <div className="text-xs sm:text-sm muted">{labels.minutes}</div>
      </div>
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.seconds}</div>
        <div className="text-xs sm:text-sm muted">{labels.seconds}</div>
      </div>
    </div>
  );
}

export default function Home() {
  const { content } = useLanguage();
  const [selectedShow, setSelectedShow] = useState<number | null>(null);
  const festivalDate = new Date("2025-11-14T19:00:00");

  const scrollToTickets = () => {
    const ticketsSection = document.getElementById('tickets');
    if (ticketsSection) {
      ticketsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation currentPage="home" onTicketsClick={scrollToTickets} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-4 sm:mb-6">
            <span className="px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/90 font-semibold text-xs sm:text-sm">
              {content.hero.badge}
            </span>
          </div>

          <h1 className="display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 tracking-tight px-2">
            {content.hero.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 leading-relaxed max-w-4xl mx-auto px-2">
            {content.hero.subtitle}
          </p>

          {/* Countdown */}
          <div className="mb-6 sm:mb-8">
            <p className="text-sm sm:text-lg muted mb-3 sm:mb-4">{content.hero.countdown.title}</p>
            <Countdown targetDate={festivalDate} labels={content.hero.countdown} />
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4">
            <button
              onClick={scrollToTickets}
              className="btn-primary text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto max-w-xs"
              aria-label="Zu den Ticket-Preisen scrollen"
            >
              {content.hero.cta}
            </button>
            <a
              href="https://maps.google.com/maps?q=Theatron+Ostpark+München"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors underline text-sm sm:text-base"
              aria-label="Freeman Festival Location in Google Maps öffnen"
            >
              📍 Google Maps
            </a>
          </div>

          {/* Promo Video */}
          <div className="mb-6 sm:mb-8 max-w-4xl mx-auto px-4">
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-white/20 shadow-2xl">
              <video
                controls
                className="w-full h-auto"
                poster="/SaveTheDate.webp"
                preload="metadata"
              >
                <source src="/Freeman-fest-video-for-web.mp4" type="video/mp4" />
                Ihr Browser unterstützt das Video-Tag nicht.
              </video>
            </div>
            <p className="text-xs sm:text-sm muted mt-2 sm:mt-3 text-center">🎥 Freeman Festival Promo • Bitte mit Ton anschauen</p>
          </div>

          {/* Accessibility Hinweis-Balken */}
          <div className="inline-block mb-6 sm:mb-8 px-4 sm:px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-full max-w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <span className="flex items-center gap-1">
                <span>♿</span> Barrierefrei
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <span>👨‍👩‍👧‍👦</span> Geeignet für Kinder
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <span>⏱️</span> ca. 75 Minuten
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Value Props */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center p-6 sm:p-8 rounded-xl bg-black/20 border border-white/10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <span className="text-xl sm:text-2xl">💰</span>
              </div>
              <h3 className="display text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{content.valueProps.price.title}</h3>
              <p className="muted text-sm sm:text-base">{content.valueProps.price.description}</p>
            </div>
            <div className="text-center p-6 sm:p-8 rounded-xl bg-black/20 border border-white/10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <span className="text-xl sm:text-2xl">🎭</span>
              </div>
              <h3 className="display text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{content.valueProps.artists.title}</h3>
              <p className="muted text-sm sm:text-base">{content.valueProps.artists.description}</p>
            </div>
            <div className="text-center p-6 sm:p-8 rounded-xl bg-black/20 border border-white/10 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <span className="text-xl sm:text-2xl">🏛️</span>
              </div>
              <h3 className="display text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{content.valueProps.venue.title}</h3>
              <p className="muted text-sm sm:text-base">{content.valueProps.venue.description}</p>
            </div>
          </div>
        </div>
      </section>


      {/* Lineup Preview */}
      <section className="py-20 px-6 bg-black/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="display text-4xl md:text-5xl font-bold mb-4">
            {content.lineup.title}
          </h2>
          <p className="text-xl mb-12 muted">
            {content.lineup.subtitle}
          </p>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {content.lineup.artists.slice(0, 2).map((artist, index) => (
              <div key={index} className="p-8 rounded-xl bg-black/20 border border-white/10">
                <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎪</span>
                </div>
                <h3 className="display text-xl font-bold mb-2">{artist.name}</h3>
                <p className="muted text-sm">{artist.description}</p>
              </div>
            ))}
          </div>
          <Link
            href="/lineup"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full hover:border-white/50 transition-colors"
          >
            <span>Mehr über unsere Künstler</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Quick Program Preview */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="display text-3xl md:text-4xl font-bold mb-8">
            5 Shows an 3 Tagen
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {content.schedule.items.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-black/30 border border-white/10 text-center cursor-pointer hover:border-white/30 hover:bg-black/40 transition-all hover:scale-105"
                onClick={() => setSelectedShow(index)}
              >
                <div className="font-bold text-white">{item.day}</div>
                <div className="text-sm muted">{item.time}</div>
                <div className="text-xs mt-1 text-white/60">{item.title}</div>
              </div>
            ))}
          </div>
          <Link
            href="/programm"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full hover:border-white/50 transition-colors"
          >
            <span>Vollständiges Programm</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Tickets Section */}
      <section id="tickets" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            {content.tickets.title}
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 muted px-2">
            {content.tickets.subtitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {content.tickets.tiers.map((tier, index) => (
              <div
                key={index}
                onClick={() => {
                  // Here you would typically handle the ticket purchase
                  // For now, we'll just scroll to show the user they clicked
                  window.alert(`${tier.name} Ticket ausgewählt! (${tier.price})`);
                }}
                className={`p-6 sm:p-8 rounded-xl border transition-all hover:scale-105 hover:shadow-2xl relative group cursor-pointer ${
                  index === 0
                    ? 'bg-white/5 border-white/30 shadow-white/10 shadow-lg animate-pulse'
                    : 'bg-black/20 border-white/10 hover:border-white/30'
                } ${index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                {index === 0 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="px-3 sm:px-4 py-1 bg-white text-black rounded-full text-xs font-bold">
                      EARLY BIRD BIS 15.10
                    </span>
                  </div>
                )}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {index === 0 ? (
                    // Early Bird - Special animation (only on hover)
                    <HoverAnimation
                      src="https://lottie.host/d81196b3-247b-4c78-a23e-e8a499c79113/wjKIXPwofC.lottie"
                      staticIcon="🎁"
                    />
                  ) : index === 1 ? (
                    // Standard - Regular ticket animation (only on hover)
                    <HoverAnimation
                      src="https://lottie.host/0d1a7dac-aecd-4609-ab85-e6995cc84982/wYgN2NCbPe.lottie"
                      staticIcon="🎫"
                    />
                  ) : (
                    // Abendkasse - Static icon (no animation)
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl">🎪</span>
                    </div>
                  )}
                </div>
                <h3 className="display text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{tier.name}</h3>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{tier.price}</div>
                <p className="muted text-xs sm:text-sm">{tier.note}</p>
                {index === 0 && (
                  <div className="mt-3 sm:mt-4">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs font-semibold">
                      Empfehlung
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Ticket Purchase Info */}
          <div className="text-center mt-6 sm:mt-8">
            <p className="muted text-sm sm:text-base">{content.tickets.note}</p>
          </div>
        </div>
      </section>


      {/* Venue Preview */}
      <section className="py-20 px-6 bg-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="display text-3xl md:text-4xl font-bold mb-8">
            Im einzigartigen Pepe Dome
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Geodätischer Dome im Münchner Ostpark • 5m Kuppelhöhe • 200 Plätze
          </p>
          <Link
            href="/pepe-dome"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full hover:border-white/50 transition-colors"
          >
            <span>🏛️</span>
            <span>Mehr über den Pepe Dome</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="display text-4xl md:text-5xl font-bold mb-16 text-center">
            {content.faq.title}
          </h2>
          <div className="space-y-6">
            {content.faq.questions.map((faq, index) => (
              <div key={index} className="p-6 rounded-xl bg-black/20 border border-white/10">
                <h3 className="font-semibold text-lg mb-3 text-white">{faq.q}</h3>
                <p className="muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="display text-4xl md:text-5xl font-bold mb-16">
            {content.press.title}
          </h2>
          <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 italic text-white/90">
            &ldquo;{content.press.quote}&rdquo;
          </blockquote>
          <div className="flex justify-center items-center gap-4">
            <div className="w-12 h-0.5 bg-white/50"></div>
            <a
              href={content.press.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-white/80 transition-colors"
            >
              {content.press.source}
            </a>
            <div className="w-12 h-0.5 bg-white/50"></div>
          </div>
        </div>
      </section>

      {/* Social Proof - Partners */}
      <section className="py-16 px-6 bg-black/5">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="display text-xl md:text-2xl font-bold mb-8 muted">
            {content.partners.title}
          </h3>
          <div className="flex justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            {content.partners.logos.map((logo, index) => (
              <div key={index} className="w-20 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-xs muted">Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Social Proof */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="display text-3xl md:text-4xl font-bold mb-4">
            {content.social.title}
          </h2>
          <p className="text-lg muted mb-12">{content.social.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {content.social.reels.map((reel, index) => (
              <a
                key={index}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-black/20 border border-white/10 hover:border-yellow-400/30 transition-all group"
              >
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">📸</span>
                </div>
                <h3 className="font-semibold group-hover:text-white transition-colors">{reel.title}</h3>
              </a>
            ))}
          </div>
          <a
            href="https://instagram.com/pepe_arts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full hover:border-purple-400/50 transition-colors"
          >
            <span>📱</span>
            <span className="font-semibold">Folge {content.social.handle}</span>
          </a>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-black/0 to-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="display text-4xl md:text-5xl font-bold mb-6">
            {content.finalCta.title}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {content.finalCta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              className="btn-primary text-xl px-12 py-6 shadow-2xl hover:shadow-yellow-400/20 transition-all"
              aria-label="Tickets über Eventfrog kaufen (öffnet später)"
            >
              🎟️ {content.finalCta.primary}
            </button>
            <a
              href="#faq"
              className="px-6 py-3 border border-white/20 rounded-full hover:border-white/50 transition-colors muted hover:text-white"
              aria-label="Zu den häufig gestellten Fragen scrollen"
            >
              {content.finalCta.secondary}
            </a>
          </div>

          <div className="inline-block px-6 py-3 bg-red-500/20 border border-red-400/30 rounded-full mb-4">
            <span className="text-red-300 font-semibold text-sm">
              ⚡ {content.finalCta.scarcity}
            </span>
          </div>

          <p className="muted">
            {content.tickets.price} • 200 Plätze pro Vorstellung • {content.hero.date}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="display text-xl font-bold mb-4 md:mb-0">
              Freeman Festival 2025
            </div>
            <div className="flex gap-8">
              <a href="#" className="muted hover:text-white transition-colors">
                {content.footer.impressum}
              </a>
              <a href="#" className="muted hover:text-white transition-colors">
                {content.footer.datenschutz}
              </a>
            </div>
          </div>
          <div className="text-center">
            <p className="muted text-sm">{content.footer.social}</p>
          </div>
        </div>
      </footer>

      {/* Show Detail Modal */}
      {selectedShow !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedShow(null)}
        >
          <div
            className="bg-black/90 border border-white/20 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="display text-2xl sm:text-3xl font-bold mb-2">
                    {content.schedule.items[selectedShow].title}
                  </h3>
                  <p className="text-lg font-semibold text-white/80">
                    {content.schedule.items[selectedShow].date} • {content.schedule.items[selectedShow].time}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedShow(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Artist */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                  <span className="text-sm font-semibold">🎭 {content.schedule.items[selectedShow].artist}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-white/90 leading-relaxed">
                  {content.schedule.items[selectedShow].description}
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {/* Duration */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">⏱️</span>
                    <span className="font-semibold">Dauer</span>
                  </div>
                  <p className="text-white/80">{content.schedule.items[selectedShow].duration}</p>
                </div>

                {/* Audience */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">👥</span>
                    <span className="font-semibold">Zielgruppe</span>
                  </div>
                  <p className="text-white/80">{content.schedule.items[selectedShow].audience}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✨</span>
                  Highlights
                </h4>
                <div className="flex flex-wrap gap-2">
                  {content.schedule.items[selectedShow].features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setSelectedShow(null);
                    scrollToTickets();
                  }}
                  className="btn-primary px-8 py-3 text-lg"
                >
                  🎫 Tickets für diese Show
                </button>
                <p className="text-sm text-white/60 mt-2">
                  200 Plätze • Freie Platzwahl • Early Bird bis 15.10
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
