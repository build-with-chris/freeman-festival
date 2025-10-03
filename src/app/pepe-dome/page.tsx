"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";

export default function VenuePage() {
  const { content } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation currentPage="venue" />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="display text-5xl md:text-6xl font-bold mb-6">
            {content.venue.title}
          </h1>
          <p className="text-xl text-white/80 mb-12">
            {content.venue.subtitle}
          </p>

          {/* Hero Image */}
          <div className="aspect-video bg-black/20 rounded-xl mb-12 overflow-hidden border border-white/10 relative group">
            <img
              src="/dome-image.png"
              alt="Pepe Dome Innenansicht - Geodätische Kuppel"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Pepe Dome</h3>
              <p className="text-sm text-white/80">Geodätische Kuppel im Ostpark</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description with Logo */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-6">
                {content.venue.description}
              </p>
              <p className="text-lg text-white/70 italic">
                {content.venue.uniqueness}
              </p>
            </div>

            {/* Logo */}
            <div className="flex justify-center md:justify-end">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-sm">
                <img
                  src="/PepeDome Logo ausgeschnitten.png"
                  alt="Pepe Dome Logo"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="display text-4xl md:text-5xl font-bold mb-8">
            {content.venue.experienceTitle}
          </h2>
          <p className="text-lg text-white/80 mb-16">
            {content.venue.experienceSubtitle}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {content.venue.experiences.map((experience, index) => (
              <div key={index} className="p-8 rounded-xl bg-black/20 border border-white/10 text-center hover:border-white/30 transition-colors">
                <div className="text-4xl mb-4">{experience.icon}</div>
                <h3 className="display text-xl font-semibold mb-3">{experience.title}</h3>
                <p className="muted leading-relaxed">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Pepe Dome Special */}
      <section className="py-20 px-6 bg-black/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="display text-4xl md:text-5xl font-bold text-center mb-16">
            Was macht den Pepe Dome besonders?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* International Artists */}
            <div className="p-8 rounded-xl bg-black/20 border border-white/10 text-center hover:border-white/30 transition-colors">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="display text-xl font-semibold mb-3 text-white">Internationale Künstlerszene</h3>
              <p className="text-white/80 leading-relaxed">
                Hier trainieren Künstler aus ganz Europa. Der Dome ist Treffpunkt und Trainingsort für zeitgenössische Zirkuskunst auf internationalem Niveau.
              </p>
            </div>

            {/* Creative Structure */}
            <div className="p-8 rounded-xl bg-black/20 border border-white/10 text-center hover:border-white/30 transition-colors">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="display text-xl font-semibold mb-3 text-white">Struktur für Kreativität</h3>
              <p className="text-white/80 leading-relaxed">
                Die geodätische Architektur schafft einen Raum, der Kreativität fördert. Form und Funktion verschmelzen zu einer inspirierenden Atmosphäre.
              </p>
            </div>

            {/* Create and Enjoy */}
            <div className="p-8 rounded-xl bg-black/20 border border-white/10 text-center hover:border-white/30 transition-colors">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="display text-xl font-semibold mb-3 text-white">Kreieren & Genießen</h3>
              <p className="text-white/80 leading-relaxed">
                Ein Ort, an dem man kreieren und genießen zugleich kann. Künstler und Publikum teilen denselben magischen Raum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="display text-4xl md:text-5xl font-bold text-center mb-16">
            {content.venue.locationTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.4!2d11.6!3d48.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA2JzAwLjAiTiAxMcKwMzYnMDAuMCJF!5e0!3m2!1sde!2sde!4v1000000000000!5m2!1sde!2sde"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pepe Dome Location"
              />
            </div>
            {/* Location Info */}
            <div>
              <h3 className="display text-2xl font-bold mb-6">{content.venue.location.address}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">{content.venue.transportTitle}</h4>
                  <p className="text-white/80">{content.venue.location.transport}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">{content.venue.carTitle}</h4>
                  <p className="text-white/80">{content.venue.location.parking}</p>
                </div>
                <a
                  href={content.venue.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/30 rounded-full hover:border-white/50 transition-colors"
                >
                  <span>🗺️</span>
                  <span className="font-semibold">{content.venue.routeButton}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Video Section */}
      <section className="py-20 px-6 bg-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="display text-3xl md:text-4xl font-bold mb-4">
            Wir trainieren hier
          </h2>
          <p className="text-lg muted mb-8">
            Einblicke in das Training unserer Künstler im Pepe Dome
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative rounded-xl overflow-hidden border border-white/20 bg-black/20">
              <video
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/Vorschauloop.mp4" type="video/mp4" />
                Ihr Browser unterstützt das Video-Tag nicht.
              </video>
              <div className="absolute bottom-3 left-3 text-white/90">
                <p className="text-sm font-medium">Training Session</p>
              </div>
            </div>
            <p className="text-sm muted mt-3">🏪 Training und Vorbereitung im Dome</p>
          </div>
        </div>
      </section>

      {/* Dome Impressions */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="display text-4xl md:text-5xl font-bold text-center mb-16">
            {content.venue.galleryTitle}
          </h2>

          {/* Cover Image with Text */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Square Format Cover */}
            <div className="aspect-square bg-black/20 rounded-xl overflow-hidden border border-white/10 relative group">
              <img
                src="/dome-image.png"
                alt="Pepe Dome - Geodätische Kuppel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg">Dome im Ostpark</h3>
                <p className="text-sm text-white/80">Einzigartige Location</p>
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h3 className="display text-3xl font-bold mb-6 text-white">
                Eine Kuppel, die München verändert
              </h3>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Seit August 2025 steht sie im Ostpark: eine geodätische Kuppel, die Raum für Kunst und Kultur schafft.
                Modern, offen und inspirierend – ein Ort, den München so noch nicht kannte.
              </p>
              <p className="text-white/80">
                Die einzigartige Architektur macht spektakuläre Luftakrobatik möglich, während die intime Atmosphäre
                jede Begegnung persönlich wirken lässt.
              </p>
            </div>
          </div>

          {/* Detail Image with Text */}
          <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
            {/* Portrait Format Detail */}
            <div className="md:col-span-1">
              <div className="aspect-[3/4] bg-black/20 rounded-xl overflow-hidden border border-white/10 relative group">
                <img
                  src="/Geodome1.webp"
                  alt="Geodätische Kuppelkonstruktion Detail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold">Konstruktion</h3>
                  <p className="text-sm text-white/80">Geodätische Form</p>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="md:col-span-2">
              <h3 className="display text-3xl font-bold mb-6 text-white">
                Geodätische Perfektion
              </h3>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Die geodätische Kuppelkonstruktion ist nicht nur ein architektonisches Meisterwerk,
                sondern auch funktional perfekt für Zirkuskunst optimiert.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                  <div className="text-2xl mb-2">🏛️</div>
                  <h4 className="font-semibold text-white mb-1">5 Meter Höhe</h4>
                  <p className="text-sm text-white/80">Perfekt für spektakuläre Luftakrobatik und hängende Performances</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                  <div className="text-2xl mb-2">👥</div>
                  <h4 className="font-semibold text-white mb-1">200 Plätze</h4>
                  <p className="text-sm text-white/80">Intime Atmosphäre mit optimaler Sicht für jeden Gast</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                  <div className="text-2xl mb-2">❄️</div>
                  <h4 className="font-semibold text-white mb-1">Klimatisiert</h4>
                  <p className="text-sm text-white/80">Angenehme Temperaturen zu jeder Jahreszeit</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                  <div className="text-2xl mb-2">♿</div>
                  <h4 className="font-semibold text-white mb-1">Barrierefrei</h4>
                  <p className="text-sm text-white/80">Vollständig zugänglich für alle Besucher</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="muted text-sm">Weitere Impressionen folgen während des Festivals</p>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="display text-4xl md:text-5xl font-bold text-center mb-16">
            {content.venue.techTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.venue.techSpecs.map((spec, index) => (
              <div key={index} className="p-8 rounded-xl bg-black/20 border border-white/10">
                <h3 className="display text-xl font-bold mb-4 text-white">{spec.title}</h3>
                <ul className="space-y-2 text-white/80">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="display text-4xl font-bold mb-8">
            {content.venue.ctaTitle}
          </h2>
          <Link
            href="/tickets"
            className="btn-primary text-xl px-10 py-5 shadow-2xl transition-all"
          >
            {content.venue.ctaButton}
          </Link>
          <p className="mt-6 muted">
            {content.venue.ctaSubtitle}
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
    </div>
  );
}