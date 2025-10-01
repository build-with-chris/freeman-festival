"use client";
type CountdownLabels = { days: string; hours: string; minutes: string; seconds: string };
import { useState, useEffect, useCallback } from "react";
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
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);
  const festivalDate = new Date("2025-11-14T19:00:00");

  // Gallery images for each artist
  const galleryImages = [
    // The Nordic Council - Häppy Hour
    [
      "/Happy Hour/Chris Collina for Nordic Council.webp",
      "/Happy Hour/Chris Collina - Häppy Hour 3.webp",
      "/Happy Hour/Chris Collina - Häppy Hour 4.webp",
      "/Happy Hour/Dynamo - Happy Hour cropped.webp",
      "/Happy Hour/Dynamo - Happy Hour-806.webp",
      "/Happy Hour/Glass multiplex.webp",
      "/Happy Hour/Sofa cropped.webp"
    ],
    // Art for Rainy Days - How a Spiral Works
    [
      "/How A Spiral Works/Zane Krūmiņa.webp",
      "/How A Spiral Works/Zane Krūmiņa 1.webp",
      "/How A Spiral Works/Zane Krūmiņa 2.webp",
      "/How A Spiral Works/Eve Gastaldi.webp",
      "/How A Spiral Works/Eve Gastaldi 1.webp"
    ]
  ];

  const scrollToTickets = () => {
    const ticketsSection = document.getElementById('tickets');
    if (ticketsSection) {
      ticketsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openGallery = (artistIndex: number) => {
    setCurrentGallery(artistIndex);
    setCurrentImageIndex(0);
    setGalleryOpen(true);
  };

  const closeGallery = useCallback(() => {
    setGalleryOpen(false);
  }, []);

  // Video expansion handlers
  const handleVideoPlay = useCallback((videoId: string) => {
    setExpandedVideo(videoId);
  }, []);

  const closeExpandedVideo = useCallback(() => {
    setExpandedVideo(null);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages[currentGallery].length - 1 ? 0 : prev + 1
    );
  }, [currentGallery, galleryImages]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages[currentGallery].length - 1 : prev - 1
    );
  }, [currentGallery, galleryImages]);

  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!galleryOpen) return;

      if (e.key === 'Escape') {
        closeGallery();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [galleryOpen, closeGallery, prevImage, nextImage]);

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
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-white/90 font-semibold px-2">
            {content.hero.subtitle}
          </h2>

          {/* Hero Subline */}
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-8 sm:mb-10 text-white/90 leading-relaxed max-w-5xl mx-auto px-2">
            {content.hero.subline}
          </p>

          {/* Countdown */}
          <div className="mb-6 sm:mb-8">
            <p className="text-sm sm:text-lg muted mb-3 sm:mb-4">{content.hero.countdown.title}</p>
            <Countdown targetDate={festivalDate} labels={content.hero.countdown} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-10 px-4">
            <button
              onClick={scrollToTickets}
              className="btn-primary text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              aria-label="Zu den Ticket-Preisen scrollen"
            >
              {content.hero.cta}
            </button>
            <Link
              href="/programm"
              className="btn-secondary text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto text-center"
            >
              {content.hero.ctaSecondary}
            </Link>
          </div>

          <div className="mb-6 sm:mb-8">
            <a
              href="https://maps.google.com/maps?q=Theatron+Ostpark+München"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors underline text-sm sm:text-base"
              aria-label="Freeman Location in Google Maps öffnen"
            >
              📍 Google Maps
            </a>
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

      {/* Promo Video */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="mb-6 sm:mb-8 max-w-4xl mx-auto">
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
        </div>
      </section>

      {/* Kurz-Manifest Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 sm:space-y-8 text-center">
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              {content.manifest.paragraph1}
            </p>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              {content.manifest.paragraph2}
            </p>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              {content.manifest.paragraph3}
            </p>

            {/* Claim */}
            <div className="pt-6 sm:pt-8">
              <p className="display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
                {content.manifest.claim}
              </p>
              <Link
                href="/ueber"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/30 rounded-full hover:border-white/50 hover:bg-white/20 transition-all"
              >
                <span className="font-semibold">Mehr über unsere Mission</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Tickets Card */}
            <button
              onClick={scrollToTickets}
              className="text-center p-6 sm:p-8 rounded-xl bg-black/20 border border-white/10 hover:border-yellow-400/30 hover:bg-black/30 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-xl sm:text-2xl">🎟️</span>
              </div>
              <h3 className="display text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-white transition-colors">{content.valueProps.price.title}</h3>
              <p className="muted text-sm sm:text-base mb-3">{content.valueProps.price.description}</p>
              <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors flex items-center justify-center gap-1">
                <span>mehr Infos</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>

            {/* Artists Card */}
            <Link
              href="/lineup"
              className="text-center p-6 sm:p-8 rounded-xl bg-black/20 border border-white/10 hover:border-blue-400/30 hover:bg-black/30 transition-all group block"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-xl sm:text-2xl">⭐</span>
              </div>
              <h3 className="display text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-white transition-colors">{content.valueProps.artists.title}</h3>
              <p className="muted text-sm sm:text-base mb-3">{content.valueProps.artists.description}</p>
              <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors flex items-center justify-center gap-1">
                <span>mehr Infos</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Venue Card */}
            <Link
              href="/pepe-dome"
              className="text-center p-6 sm:p-8 rounded-xl bg-black/20 border border-white/10 hover:border-green-400/30 hover:bg-black/30 transition-all group block sm:col-span-2 lg:col-span-1"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-xl sm:text-2xl">🎪</span>
              </div>
              <h3 className="display text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-white transition-colors">{content.valueProps.venue.title}</h3>
              <p className="muted text-sm sm:text-base mb-3">{content.valueProps.venue.description}</p>
              <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors flex items-center justify-center gap-1">
                <span>mehr Infos</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
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
              <div key={index} className="p-8 rounded-xl bg-black/20 border border-white/10 hover:border-white/30 transition-colors">
                {/* Artist Image */}
                <div
                  className="w-full h-48 mb-6 rounded-lg overflow-hidden cursor-pointer group relative"
                  onClick={() => openGallery(index)}
                >
                  <img
                    src={index === 0 ? "/Happy Hour/Chris Collina for Nordic Council.webp" : "/How A Spiral Works/Zane Krūmiņa.webp"}
                    alt={`${artist.name} performance`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <span className="text-white text-lg">🖼️</span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white/90 text-sm font-medium">
                    {index === 0 ? "Häppy Hour" : "How a Spiral Works"}
                  </div>
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

      {/* YouTube Videos Section */}
      <section className="py-20 px-6 bg-black/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="display text-3xl md:text-4xl font-bold mb-4">
            Unsere Künstler live
          </h2>
          <p className="text-lg muted mb-12">
            Einblicke in spektakuläre Performances
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Nordic Council YouTube Video */}
            <div className="space-y-4">
              <div
                className="aspect-video bg-black/40 rounded-xl overflow-hidden border border-white/20 relative group cursor-pointer video-container"
                onClick={() => handleVideoPlay('owESp3YkcRY')}
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/owESp3YkcRY?rel=0&modestbranding=1"
                  title="The Nordic Council - Häppy Hour Performance"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute bottom-4 left-4 text-white pointer-events-none">
                  <h3 className="font-bold text-lg">The Nordic Council</h3>
                  <p className="text-sm text-white/80">Häppy Hour Performance</p>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                    <span className="text-white text-2xl">▶️</span>
                  </div>
                </div>
              </div>
              <Link
                href="/#tickets"
                className="btn-primary w-full justify-center py-3 text-lg font-semibold"
              >
Tickets für &ldquo;Häppy Hour&rdquo;
              </Link>
            </div>

            {/* Art for Rainy Days YouTube Video */}
            <div className="space-y-4">
              <div
                className="aspect-video bg-black/40 rounded-xl overflow-hidden border border-white/20 relative group cursor-pointer video-container"
                onClick={() => handleVideoPlay('UWLTynMZhHE')}
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/UWLTynMZhHE?rel=0&modestbranding=1"
                  title="Art for Rainy Days - How a Spiral Works"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute bottom-4 left-4 text-white pointer-events-none">
                  <h3 className="font-bold text-lg">Art for Rainy Days</h3>
                  <p className="text-sm text-white/80">How a Spiral Works</p>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                    <span className="text-white text-2xl">▶️</span>
                  </div>
                </div>
              </div>
              <Link
                href="/#tickets"
                className="btn-primary w-full justify-center py-3 text-lg font-semibold"
              >
Tickets für &ldquo;How a Spiral Works&rdquo;
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/lineup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/30 rounded-full hover:border-white/50 hover:bg-white/20 transition-all"
            >
              <span className="font-semibold">Alle Künstler entdecken</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>


      {/* Quick Program Preview */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="display text-3xl md:text-4xl font-bold mb-8">
            4 Shows an 3 Tagen
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
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

          {/* Main CTA Button */}
          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => {
                // Placeholder for ticket platform integration
                window.alert('Ticket-Plattform wird bald verfügbar sein!');
              }}
              className="btn-primary text-xl sm:text-2xl px-12 sm:px-16 py-4 sm:py-6 shadow-2xl hover:shadow-yellow-400/25 transition-all mb-4"
            >
              {content.tickets.ctaButton}
            </button>
            <p className="text-sm text-white/60 mb-8">
              {content.tickets.workshopNote}
            </p>
            <p className="muted text-sm sm:text-base">{content.tickets.note}</p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-black/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center">
            {content.location.title}
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 text-white/90 text-center leading-relaxed">
            {content.location.description}
          </p>

          <div className="grid md:grid-cols-1 gap-6 mb-8">
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-black/20 border border-white/10">
                <p className="text-white/90 text-lg">{content.location.address}</p>
              </div>
              <div className="p-6 rounded-xl bg-black/20 border border-white/10">
                <p className="text-white/90 text-lg">{content.location.transport}</p>
              </div>
              <div className="p-6 rounded-xl bg-black/20 border border-white/10">
                <p className="text-white/90 text-lg">{content.location.parking}</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href={content.location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg"
            >
              <span>📍</span>
              {content.location.mapButton}
            </a>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20">
            <h3 className="display text-2xl sm:text-3xl font-bold mb-4">
              {content.volunteer.title}
            </h3>
            <p className="text-lg font-semibold mb-6 text-white/90">
              {content.volunteer.subtitle}
            </p>
            <a
              href={content.volunteer.url}
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-lg"
            >
              <span>👥</span>
              {content.volunteer.button}
            </a>
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
          <div className="flex justify-center items-center">
            <img
              src="/Logos.png"
              alt="Partner und Förderer: Kulturreferat München, Theatron, BLVZ und weitere"
              className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{ maxHeight: '180px' }}
            />
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
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 overflow-hidden relative">
                  {index === 0 ? (
                    <img
                      src="/Happy Hour/Dynamo - Happy Hour cropped.webp"
                      alt="Häppy Hour behind the scenes"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : index === 1 ? (
                    <img
                      src="/Happy Hour/Chris Collina - Häppy Hour 4.webp"
                      alt="Häppy Hour artist preview"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl">📸</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/30 transition-colors"></div>
                  <div className="absolute bottom-2 left-2 text-white/80 text-xs">
                    @pepe_arts
                  </div>
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
              Freeman 2025
            </div>
            <div className="flex gap-8">
              <Link href="/kontakt" className="muted hover:text-white transition-colors">
                {content.navigation.contact}
              </Link>
              <a href="#" className="muted hover:text-white transition-colors">
                {content.footer.impressum}
              </a>
              <a href="#" className="muted hover:text-white transition-colors">
                {content.footer.datenschutz}
              </a>
              <a
                href="https://pepeshows.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="muted hover:text-white transition-colors"
              >
                {content.footer.partner}
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
                    <span className="font-semibold">{content.schedule.modal.durationLabel}</span>
                  </div>
                  <p className="text-white/80">{content.schedule.items[selectedShow].duration}</p>
                </div>

                {/* Audience */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">👥</span>
                    <span className="font-semibold">{content.schedule.modal.audienceLabel}</span>
                  </div>
                  <p className="text-white/80">{content.schedule.items[selectedShow].audience}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✨</span>
                  {content.schedule.modal.highlightsLabel}
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
                  {content.schedule.modal.ticketsButton}
                </button>
                <p className="text-sm text-white/60 mt-2">
                  {content.schedule.modal.ticketsNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Modal */}
      {galleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-xl transition-colors"
            >
              ✕
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-xl transition-colors"
            >
              ←
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-xl transition-colors"
            >
              →
            </button>

            {/* Main Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={galleryImages[currentGallery][currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                {currentImageIndex + 1} / {galleryImages[currentGallery].length}
              </div>

              {/* Artist Name */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
                <h3 className="font-semibold">
                  {currentGallery === 0 ? "The Nordic Council" : "Art for Rainy Days"}
                </h3>
                <p className="text-sm text-white/80">
                  {currentGallery === 0 ? "Häppy Hour" : "How a Spiral Works"}
                </p>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto p-2">
              {galleryImages[currentGallery].map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex ? 'border-white' : 'border-white/30'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Expanded Video Modal */}
      {expandedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl mx-auto">
            {/* Close Button */}
            <button
              onClick={closeExpandedVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Video schließen"
            >
              <span className="text-3xl">×</span>
            </button>

            {/* Expanded Video */}
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${expandedVideo}?autoplay=1&rel=0&modestbranding=1`}
                title="Expanded Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Info */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-bold mb-2">
                {expandedVideo === 'owESp3YkcRY' ? 'The Nordic Council - Häppy Hour' : 'Art for Rainy Days - How a Spiral Works'}
              </h3>
              <Link
                href="/#tickets"
                className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold"
                onClick={closeExpandedVideo}
              >
Tickets für diese Performance
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
