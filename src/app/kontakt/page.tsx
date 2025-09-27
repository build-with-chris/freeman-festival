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
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">

            {/* General Contact */}
            <div className="p-8 rounded-xl bg-black/20 border border-white/10">
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
                <div>
                  <h3 className="font-semibold text-white mb-2">📍 {content.contact.general.addressLabel}</h3>
                  <p className="text-white/80 whitespace-pre-line">
                    {content.contact.general.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Press Contact */}
            <div className="p-8 rounded-xl bg-black/20 border border-white/10">
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
            href="/#tickets"
            className="btn-primary text-xl px-10 py-5 shadow-2xl transition-all"
          >
            {content.contact.cta.button}
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