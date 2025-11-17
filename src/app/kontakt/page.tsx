"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";

export default function ContactPage() {
  const { content } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation currentPage="contact" />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="display text-5xl md:text-6xl font-bold mb-6">
            {content.contact.title}
          </h1>
          <p className="text-xl text-white/80 mb-12">
            {content.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Venue Information - First on mobile */}
            <div className="p-8 rounded-xl bg-black/20 border border-white/10 order-1 md:order-3 lg:order-1">
              <h2 className="display text-2xl font-bold mb-6 text-white">
                📍 {content.contact.venue.title}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-white text-lg mb-2">{content.contact.venue.name}</h3>
                  <p className="text-white/80 whitespace-pre-line mb-4">
                    {content.contact.venue.address}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-white/90 font-medium">{content.contact.venue.transport}</p>
                  <p className="text-white/90 font-medium">{content.contact.venue.parking}</p>
                </div>
                <div className="mt-6">
                  <div className="mb-4 rounded-lg overflow-hidden border border-white/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.5728!2d11.6193873!3d48.1187726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75e7f3f5e5e5%3A0x5a5a5a5a5a5a5a5a!2sTheatron%20Ostpark!5e0!3m2!1sde!2sde!4v1234567890"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Pepe Dome Standort"
                    ></iframe>
                  </div>
                  <a
                    href="https://maps.google.com/maps?q=Theatron+Ostpark+München"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/30 rounded-lg hover:border-white/50 hover:bg-white/20 transition-all text-white"
                  >
                    🗺️ <span>Google Maps öffnen</span>
                  </a>
                </div>
              </div>
            </div>

            {/* General Contact */}
            <div className="p-8 rounded-xl bg-black/20 border border-white/10 order-2 md:order-1 lg:order-2">
              <h2 className="display text-2xl font-bold mb-6 text-white">
                {content.contact.general.title}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-white mb-2">📧 {content.contact.general.emailLabel}</h3>
                  <a
                    href={`mailto:${content.contact.general.email}`}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {content.contact.general.email}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">📱 {content.contact.general.phoneLabel}</h3>
                  <a
                    href={`tel:${content.contact.general.phone}`}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {content.contact.general.phone}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">👤 {content.contact.general.contactLabel}</h3>
                  <p className="text-white/80">
                    {content.contact.general.contact}
                  </p>
                </div>
              </div>
            </div>

            {/* Press Contact */}
            <div className="p-8 rounded-xl bg-black/20 border border-white/10 order-3 md:order-2 lg:order-3">
              <h2 className="display text-2xl font-bold mb-6 text-white">
                {content.contact.press.title}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-white mb-2">👤 {content.contact.press.contactLabel}</h3>
                  <p className="text-white/80">{content.contact.press.name}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">📧 {content.contact.press.emailLabel}</h3>
                  <a
                    href={`mailto:${content.contact.press.email}`}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {content.contact.press.email}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">📱 {content.contact.press.phoneLabel}</h3>
                  <a
                    href={`tel:${content.contact.press.phone}`}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {content.contact.press.phone}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="display text-4xl md:text-5xl font-bold mb-6">
              Nachricht senden
            </h2>
            <p className="text-lg text-white/80">
              Hast du Fragen zum Festival? Schreib uns gerne eine Nachricht!
            </p>
          </div>

          <div className="bg-black/20 border border-white/10 rounded-xl p-8">
            <form action={`mailto:info@pepeshows.de`} method="post" encType="text/plain" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Dein Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="deine@email.de"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                  Betreff
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Worum geht es?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-yellow-400 focus:outline-none transition-colors resize-vertical"
                  placeholder="Deine Nachricht an uns..."
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button
                  type="submit"
                  className="btn-primary px-8 py-3 text-lg font-semibold w-full sm:w-auto"
                >
                  📧 Nachricht senden
                </button>
                <p className="text-white/60 text-sm">
                  Deine Nachricht wird an info@pepeshows.de weitergeleitet
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="display text-4xl md:text-5xl font-bold mb-8">
            {content.contact.partner.title}
          </h2>
          <p className="text-lg text-white/80 mb-12">
            {content.contact.partner.subtitle}
          </p>

          {/* PepeShows Partner Highlight */}
          <div className="max-w-2xl mx-auto p-8 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
            <div className="mb-6">
              <h3 className="display text-3xl font-bold text-white mb-4">
                PepeShows
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                {content.contact.partner.pepeDescription}
              </p>
              <a
                href="https://pepeshows.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-3 text-lg inline-flex items-center gap-2"
              >
                <span>🎪</span>
                <span>{content.contact.partner.pepeButton}</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Other Partners */}
          <div className="mt-16">
            <h3 className="display text-2xl font-bold mb-8">
              {content.contact.partner.supportTitle}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {content.contact.partner.supporters.map((supporter, index) => (
                <div key={index} className="p-6 rounded-xl bg-black/20 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">{supporter.name}</h4>
                  <p className="text-white/70 text-sm">{supporter.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="display text-4xl font-bold mb-8">
            {content.contact.social.title}
          </h2>
          <p className="text-lg text-white/80 mb-12">
            {content.contact.social.subtitle}
          </p>

          <div className="flex justify-center gap-8">
            <a
              href="https://instagram.com/pepe_arts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full hover:border-purple-400/50 transition-colors"
            >
              <span className="text-2xl">📱</span>
              <span className="font-semibold">@pepe_arts</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-black/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="display text-4xl font-bold mb-8">
            {content.contact.cta.title}
          </h2>
          <Link
            href="/#newsletter"
            className="btn-primary text-xl px-10 py-5 shadow-2xl transition-all"
          >
            {content.newsletter.button}
          </Link>
          <p className="mt-6 muted">
            {content.contact.cta.subtitle}
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