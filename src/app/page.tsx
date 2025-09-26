"use client";
import deContent from "@/i18n/de.json";
import enContent from "@/i18n/en.json";
import { useState, useEffect } from "react";
import Link from "next/link";

// Countdown Component
function Countdown({ targetDate, labels }: { targetDate: Date; labels: any }) {
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
    <div className="flex justify-center gap-4 mb-8">
      <div className="text-center">
        <div className="text-3xl font-bold text-yellow-400">{timeLeft.days}</div>
        <div className="text-sm muted">{labels.days}</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-yellow-400">{timeLeft.hours}</div>
        <div className="text-sm muted">{labels.hours}</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-yellow-400">{timeLeft.minutes}</div>
        <div className="text-sm muted">{labels.minutes}</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-yellow-400">{timeLeft.seconds}</div>
        <div className="text-sm muted">{labels.seconds}</div>
      </div>
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<'de' | 'en'>('de');
  const content = language === 'de' ? deContent : enContent;
  const festivalDate = new Date("2025-11-14T19:00:00");

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de');
  };

  const scrollToTickets = () => {
    const ticketsSection = document.getElementById('tickets');
    if (ticketsSection) {
      ticketsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="display text-xl font-bold text-yellow-400">
              Freeman Festival
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-yellow-400 font-semibold">
                {content.navigation.home}
              </Link>
              <Link href="/programm" className="hover:text-yellow-400 transition-colors">
                {content.navigation.program}
              </Link>
              <Link href="/lineup" className="hover:text-yellow-400 transition-colors">
                {content.navigation.lineup}
              </Link>
              <Link href="/pepe-dome" className="hover:text-yellow-400 transition-colors">
                {content.navigation.venue}
              </Link>
              <button
                onClick={scrollToTickets}
                className="btn-primary px-4 py-2 text-sm"
                aria-label="Zu den Tickets scrollen"
              >
                {content.navigation.tickets}
              </button>
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 border border-white/20 rounded text-sm hover:border-yellow-400/50 transition-colors"
                aria-label={language === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
              >
                {content.navigation.language.switch}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full text-yellow-400 font-semibold text-sm">
              {content.hero.badge}
            </span>
          </div>

          <h1 className="display text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            {content.hero.title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-4xl mx-auto">
            {content.hero.subtitle}
          </p>

          {/* Countdown */}
          <div className="mb-8">
            <p className="text-lg muted mb-4">{content.hero.countdown.title}</p>
            <Countdown targetDate={festivalDate} labels={content.hero.countdown} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={scrollToTickets}
              className="btn-primary text-xl px-10 py-5 shadow-lg hover:shadow-xl transition-all"
              aria-label="Zu den Ticket-Preisen scrollen"
            >
              {content.hero.cta}
            </button>
            <a
              href="https://maps.google.com/maps?q=Theatron+Ostpark+München"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition-colors underline"
              aria-label="Freeman Festival Location in Google Maps öffnen"
            >
              📍 Google Maps
            </a>
          </div>

          {/* Accessibility Hinweis-Balken */}
          <div className="inline-block mb-8 px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-full">
            <div className="flex items-center justify-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <span>♿</span> Barrierefrei
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span>👨‍👩‍👧‍👦</span> Geeignet für Kinder
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span>⏱️</span> ca. 75 Minuten
              </span>
            </div>
          </div>

          {/* Promo Video */}
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-2xl">
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
            <p className="text-sm muted mt-3">🎥 Freeman Festival Promo • Bitte mit Ton anschauen</p>
          </div>

          {/* Scarcity Indicator */}
          <div className="inline-block px-6 py-3 bg-red-500/20 border border-red-400/30 rounded-full">
            <span className="text-red-300 font-semibold text-sm">
              ⚡ {content.hero.scarcity}
            </span>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-black/20 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="display text-xl font-semibold mb-3">{content.valueProps.price.title}</h3>
              <p className="muted">{content.valueProps.price.description}</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-black/20 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="display text-xl font-semibold mb-3">{content.valueProps.artists.title}</h3>
              <p className="muted">{content.valueProps.artists.description}</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-black/20 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="display text-xl font-semibold mb-3">{content.valueProps.venue.title}</h3>
              <p className="muted">{content.valueProps.venue.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule - Right after Hero */}
      <section className="py-20 px-6 bg-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="display text-4xl md:text-5xl font-bold mb-8">
            {content.schedule.title}
          </h2>
          <p className="text-lg muted mb-12">{content.schedule.subtitle}</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {content.schedule.items.map((item, index) => (
              <div key={index} className="p-4 rounded-xl bg-black/30 border border-white/10 text-center hover:border-yellow-400/30 transition-colors">
                <div className="text-lg font-bold mb-1">{item.day}</div>
                <div className="text-yellow-400 font-semibold text-sm">{item.time}</div>
              </div>
            ))}
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
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎪</span>
                </div>
                <h3 className="display text-xl font-bold mb-2">{artist.name}</h3>
                <p className="muted text-sm">{artist.description}</p>
              </div>
            ))}
          </div>
          <Link
            href="/lineup"
            className="inline-flex items-center gap-2 px-6 py-3 border border-yellow-400/30 rounded-full hover:border-yellow-400/50 transition-colors"
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
              <div key={index} className="p-4 rounded-lg bg-black/30 border border-white/10 text-center">
                <div className="font-bold text-yellow-400">{item.day}</div>
                <div className="text-sm muted">{item.time}</div>
              </div>
            ))}
          </div>
          <Link
            href="/programm"
            className="inline-flex items-center gap-2 px-6 py-3 border border-yellow-400/30 rounded-full hover:border-yellow-400/50 transition-colors"
          >
            <span>Vollständiges Programm</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Tickets Section */}
      <section id="tickets" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="display text-4xl md:text-5xl font-bold mb-8">
            {content.tickets.title}
          </h2>
          <p className="text-xl mb-12 muted">
            {content.tickets.subtitle}
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {content.tickets.tiers.map((tier, index) => (
              <div key={index} className={`p-8 rounded-xl border transition-all hover:scale-105 hover:shadow-2xl relative ${
                index === 0
                  ? 'bg-yellow-400/10 border-yellow-400/50 shadow-yellow-400/20 shadow-lg'
                  : 'bg-black/20 border-white/10 hover:border-yellow-400/30'
              }`}>
                {index === 0 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-yellow-400 text-black rounded-full text-xs font-bold">
                      LIMITIERT
                    </span>
                  </div>
                )}
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">{index === 0 ? '🎁' : index === 1 ? '🎫' : '🎪'}</span>
                </div>
                <h3 className="display text-xl font-semibold mb-3">{tier.name}</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-2">{tier.price}</div>
                <p className="muted text-sm">{tier.note}</p>
                {index === 0 && (
                  <div className="mt-4">
                    <span className="px-3 py-1 bg-yellow-400/20 rounded-full text-yellow-400 text-xs font-semibold">
                      Empfehlung
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Big CTA after ticket tiers */}
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 p-8 rounded-xl border border-yellow-400/20 mb-8">
            <button
              className="btn-primary text-2xl px-12 py-6 shadow-2xl hover:shadow-yellow-400/20 transition-all"
              aria-label="Tickets über Eventfrog kaufen (öffnet später)"
            >
              🎫 {content.hero.cta}
            </button>
            <p className="mt-4 muted">{content.tickets.note}</p>
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
            className="inline-flex items-center gap-2 px-6 py-3 border border-yellow-400/30 rounded-full hover:border-yellow-400/50 transition-colors"
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
                <h3 className="font-semibold text-lg mb-3 text-yellow-400">{faq.q}</h3>
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
            "{content.press.quote}"
          </blockquote>
          <div className="flex justify-center items-center gap-4">
            <div className="w-12 h-0.5 bg-yellow-400"></div>
            <a
              href={content.press.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              {content.press.source}
            </a>
            <div className="w-12 h-0.5 bg-yellow-400"></div>
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
                <h3 className="font-semibold group-hover:text-yellow-400 transition-colors">{reel.title}</h3>
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
              className="px-6 py-3 border border-white/20 rounded-full hover:border-yellow-400/50 transition-colors muted hover:text-white"
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
    </div>
  );
}
