"use client";
import deContent from "@/i18n/de.json";
import Link from "next/link";

export default function VenuePage() {
  const content = deContent;

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
              <Link href="/" className="hover:text-yellow-400 transition-colors">
                {content.navigation.home}
              </Link>
              <Link href="/programm" className="hover:text-yellow-400 transition-colors">
                {content.navigation.program}
              </Link>
              <Link href="/lineup" className="hover:text-yellow-400 transition-colors">
                {content.navigation.lineup}
              </Link>
              <Link href="/pepe-dome" className="text-yellow-400 font-semibold">
                {content.navigation.venue}
              </Link>
              <Link href="/#tickets" className="btn-primary px-4 py-2 text-sm">
                {content.navigation.tickets}
              </Link>
              <button className="px-3 py-1 border border-white/20 rounded text-sm hover:border-yellow-400/50 transition-colors">
                {content.navigation.language.switch}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="display text-5xl md:text-6xl font-bold mb-6">
            {content.venue.title}
          </h1>
          <p className="text-xl text-white/80 mb-12">
            {content.venue.subtitle}
          </p>

          {/* Hero Image Placeholder */}
          <div className="aspect-video bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl mb-12 flex items-center justify-center border border-white/10">
            <div className="text-center">
              <div className="text-8xl mb-4">🏛️</div>
              <p className="text-lg muted">Pepe Dome Außenansicht</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-16">
            {content.venue.description}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-black/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="display text-4xl md:text-5xl font-bold text-center mb-16">
            Was macht den Pepe Dome besonders?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.venue.features.map((feature, index) => (
              <div key={index} className="p-8 rounded-xl bg-black/20 border border-white/10 text-center hover:border-yellow-400/30 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="display text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="display text-4xl md:text-5xl font-bold text-center mb-16">
            Lage & Anfahrt
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
                  <h4 className="font-semibold text-yellow-400 mb-2">🚇 Öffentliche Verkehrsmittel</h4>
                  <p className="text-white/80">{content.venue.location.transport}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">🚗 Anfahrt mit dem Auto</h4>
                  <p className="text-white/80">{content.venue.location.parking}</p>
                </div>
                <a
                  href={content.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400/20 border border-yellow-400/30 rounded-full hover:border-yellow-400/50 transition-colors"
                >
                  <span>🗺️</span>
                  <span className="font-semibold">Route planen</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-20 px-6 bg-black/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="display text-4xl md:text-5xl font-bold text-center mb-16">
            Impressionen
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏛️', title: 'Außenansicht' },
              { icon: '🎪', title: 'Innenraum' },
              { icon: '✨', title: 'Atmosphäre' }
            ].map((item, index) => (
              <div key={index} className="aspect-square bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <span className="muted">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="muted">Weitere Bilder folgen in Kürze</p>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="display text-4xl md:text-5xl font-bold text-center mb-16">
            Technische Details
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-black/20 border border-white/10">
              <h3 className="display text-xl font-bold mb-4 text-yellow-400">Kapazität & Größe</h3>
              <ul className="space-y-2 text-white/80">
                <li>• 200 Sitzplätze (freie Platzwahl)</li>
                <li>• 5 Meter Kuppelhöhe</li>
                <li>• Geodätische Kuppelkonstruktion</li>
                <li>• Optimale Akustik</li>
              </ul>
            </div>
            <div className="p-8 rounded-xl bg-black/20 border border-white/10">
              <h3 className="display text-xl font-bold mb-4 text-yellow-400">Ausstattung & Service</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Klimatisiert</li>
                <li>• Vollständig barrierefrei</li>
                <li>• Moderne Licht- & Tontechnik</li>
                <li>• Garderobe & Sanitäranlagen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="display text-4xl font-bold mb-8">
            Erlebe Zirkuskunst im Pepe Dome
          </h2>
          <Link
            href="/#tickets"
            className="btn-primary text-xl px-10 py-5 shadow-2xl hover:shadow-yellow-400/20 transition-all"
          >
            🎫 Jetzt Tickets sichern
          </Link>
          <p className="mt-6 muted">
            Einzigartiges Ambiente • 200 Plätze • Barrierefrei
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