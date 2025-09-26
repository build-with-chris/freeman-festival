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

          {/* Hero Image Placeholder */}
          <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-xl mb-12 flex items-center justify-center border border-white/10">
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
            {content.venue.featuresTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.venue.features.map((feature, index) => (
              <div key={index} className="p-8 rounded-xl bg-black/20 border border-white/10 text-center hover:border-white/30 transition-colors">
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

      {/* Gallery Placeholder */}
      <section className="py-20 px-6 bg-black/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="display text-4xl md:text-5xl font-bold text-center mb-16">
            {content.venue.galleryTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.venue.gallery.map((item, index) => (
              <div key={index} className="aspect-square bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <span className="muted">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="muted">{content.venue.gallerySubtitle}</p>
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
            href="/#tickets"
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