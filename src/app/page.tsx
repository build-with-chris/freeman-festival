"use client";
type CountdownLabels = { days: string; hours: string; minutes: string; seconds: string };
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";


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
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/hero-aerialist.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Atmospheric overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>

        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30"></div>

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-black/50 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold text-sm shadow-lg">
              14.–16. November 2025
            </span>
          </div>

          <h1 className="display text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
            Freeman Festival
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-white/95 font-semibold drop-shadow-md">
            Zeitgenössischer Zirkus & Performance
          </h2>

          <p className="text-lg md:text-xl mb-12 text-white/90 leading-relaxed drop-shadow-sm max-w-3xl mx-auto">
            Internationale Künstler:innen treffen in München aufeinander – mutig, poetisch, grenzüberschreitend.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/tickets"
              className="btn-primary text-xl px-10 py-5 shadow-xl hover:shadow-2xl hover:shadow-yellow-400/25 transition-all w-full sm:w-auto backdrop-blur-sm"
            >
              Tickets sichern
            </Link>
            <Link
              href="/programm"
              className="btn-secondary text-xl px-10 py-5 w-full sm:w-auto text-center backdrop-blur-sm border-white/30 hover:border-white/50"
            >
              Programm ansehen
            </Link>
          </div>

          <div className="countdown mb-8 bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Countdown targetDate={festivalDate} labels={content.hero.countdown} />
          </div>
        </div>

        {/* Subtle animated particles for atmosphere */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </section>

      {/* Compact Program Overview */}
      <section className="py-16 px-6 bg-black/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="display text-3xl md:text-4xl font-bold mb-8 text-center">
            Shows & Termine
          </h2>
          <div className="space-y-4">
            {/* Friday */}
            <div className="p-6 rounded-xl bg-black/20 border border-white/10 hover:border-white/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-lg font-bold text-yellow-400">Fr 14.11. – 19:00</span>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                  <h3 className="display text-xl font-bold mb-1">&bdquo;Häppy Hour&ldquo;</h3>
                  <p className="text-white/70 text-sm">The Nordic Council</p>
                  <p className="text-white/60 text-sm mt-1">Zeitgenössischer Zirkus × Comedy</p>
                </div>
                <Link
                  href="/tickets"
                  className="btn-primary px-6 py-2 text-sm w-full md:w-auto text-center"
                >
                  Tickets
                </Link>
              </div>
            </div>

            {/* Saturday */}
            <div className="p-6 rounded-xl bg-black/20 border border-white/10 hover:border-white/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-lg font-bold text-yellow-400">Sa 15.11. – 18:00 / 20:30</span>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                  <h3 className="display text-xl font-bold mb-1">&bdquo;Häppy Hour&ldquo; / &bdquo;How a Spiral Works&ldquo;</h3>
                  <p className="text-white/70 text-sm">Nordic Council / Art for Rainy Days</p>
                  <p className="text-white/60 text-sm mt-1">Zirkus × Comedy / Tanz × Aerial</p>
                </div>
                <Link
                  href="/tickets"
                  className="btn-primary px-6 py-2 text-sm w-full md:w-auto text-center"
                >
                  Tickets
                </Link>
              </div>
            </div>

            {/* Sunday */}
            <div className="p-6 rounded-xl bg-black/20 border border-white/10 hover:border-white/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-lg font-bold text-yellow-400">So 16.11. – 18:00</span>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                  <h3 className="display text-xl font-bold mb-1">&bdquo;How a Spiral Works&ldquo;</h3>
                  <p className="text-white/70 text-sm">Art for Rainy Days</p>
                  <p className="text-white/60 text-sm mt-1">Meditativer Zirkus × Baltische Volksmusik</p>
                </div>
                <Link
                  href="/tickets"
                  className="btn-primary px-6 py-2 text-sm w-full md:w-auto text-center"
                >
                  Tickets
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/programm"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full hover:border-white/50 transition-colors"
            >
              <span>Vollständiges Programm ansehen</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Artists Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="display text-3xl md:text-4xl font-bold mb-8 text-center">
            Unsere Künstler:innen
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Nordic Council */}
            <div className="text-center">
              <div className="aspect-square mb-4 rounded-xl overflow-hidden">
                <img
                  src="/Happy Hour/Chris Collina for Nordic Council.webp"
                  alt="The Nordic Council"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="display text-xl font-bold mb-2">The Nordic Council</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Zeitgenössischer Zirkus trifft auf Comedy. Eine poetische Ode an den Norden mit Humor über peinliche Real-Life-Momente und die ambivalente Beziehung zu Alkohol.
              </p>
            </div>

            {/* Art for Rainy Days */}
            <div className="text-center">
              <div className="aspect-square mb-4 rounded-xl overflow-hidden">
                <img
                  src="/How A Spiral Works/Zane Krūmiņa.webp"
                  alt="Art for Rainy Days"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="display text-xl font-bold mb-2">Art for Rainy Days</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Meditativer, hypnotischer Zirkus mit Tanz, Hair Hanging und Aerial Rope. Minimalistische Ästhetik trifft auf neu interpretierte baltische Volksmusik.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/lineup"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full hover:border-white/50 transition-colors"
            >
              <span>Mehr zum Line-up</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Compact CTA */}
      <section className="py-12 px-6 bg-black/10">
        <div className="max-w-md mx-auto text-center">
          <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-400/10 to-orange-400/10 border border-yellow-400/20">
            <h3 className="display text-2xl font-bold mb-3">
              Tickets sichern
            </h3>
            <p className="text-white/80 text-sm mb-6">
              Early-Bird ab 12€ · Nur 200 Plätze pro Show
            </p>
            <Link
              href="/tickets"
              className="btn-primary w-full py-3 text-lg font-semibold"
            >
              Jetzt Tickets kaufen
            </Link>
          </div>
        </div>
      </section>


      {/* Location/Venue Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="display text-3xl md:text-4xl font-bold mb-8">
            Ort & Anfahrt
          </h2>

          <div className="mb-8">
            <img
              src="/pepe-dome-exterior.jpg"
              alt="Pepe Dome - Geodätischer Dome im Ostpark"
              className="w-full h-64 object-cover rounded-xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-4">Geodome im Ostpark · 200 Plätze · barrierefrei</h3>
            <p className="text-white/80 mb-6">
              🚇 U-Bahn Quiddestraße, Fußweg 10 Min.
            </p>
            <a
              href="https://maps.google.com/maps?q=Theatron+Ostpark+München"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 px-6 py-3"
            >
              <span>📍</span>
              <span>Anfahrt planen</span>
            </a>
          </div>
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
              <Link href="/kontakt" className="text-white/60 hover:text-white transition-colors">
                Kontakt
              </Link>
              <Link href="/ueber" className="text-white/60 hover:text-white transition-colors">
                Über uns
              </Link>
              <a
                href="https://pepeshows.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                Pepe Shows
              </a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-white/60 text-sm">14.–16. November 2025 · Zeitgenössischer Zirkus & Performance</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
