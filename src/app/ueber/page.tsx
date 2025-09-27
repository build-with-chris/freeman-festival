"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";

export default function AboutPage() {
  const { content } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation currentPage="about" />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="display text-5xl md:text-6xl font-bold mb-6">
            {content.about.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            {content.about.subtitle}
          </p>
          <div className="text-lg text-white/70 italic">
            {content.about.tagline}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="display text-4xl md:text-5xl font-bold mb-8">
              {content.about.mission.title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-white/90">
              {content.about.mission.description}
            </p>
          </div>
        </div>
      </section>

      {/* Why Munich */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="display text-4xl font-bold mb-8">
                {content.about.munich.title}
              </h2>
              <div className="space-y-6 text-white/90 leading-relaxed">
                {content.about.munich.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {/* Artistic Tradition List - in one row */}
              <div className="flex flex-wrap gap-6 text-white/90 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎭</span>
                  <span className="font-medium">Blauer Reiter</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎪</span>
                  <span className="font-medium">Dada-Bewegung</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✊</span>
                  <span className="font-medium">Kultureller Widerstand</span>
                </div>
              </div>

              {/* Dada Image - larger */}
              <div className="rounded-xl overflow-hidden border border-white/20 relative group">
                <img
                  src="/Dada.webp"
                  alt="Dada-Bewegung München - Historische künstlerische Rebellion"
                  className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-lg">Dada-Bewegung</h4>
                  <p className="text-sm text-white/80">München als Zentrum künstlerischer Revolution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contemporary Circus Philosophy */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="display text-4xl md:text-5xl font-bold mb-8">
            {content.about.circus.title}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-12">
            {content.about.circus.description}
          </p>

          {/* Core Questions */}
          <div className="space-y-8">
            <h3 className="display text-2xl font-bold text-white">
              {content.about.questions.title}
            </h3>
            <div className="space-y-6">
              {content.about.questions.items.map((question, index) => (
                <div key={index} className="p-6 rounded-xl bg-black/20 border border-white/10">
                  <p className="text-lg text-white/90 italic">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Festival Vision */}
      <section className="py-20 px-6 bg-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="display text-4xl font-bold mb-8">
            {content.about.vision.title}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-12">
            {content.about.vision.description}
          </p>

          {/* Freedom Statement */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
            <div className="space-y-4 text-xl font-semibold text-white">
              {content.about.freedom.statements.map((statement, index) => (
                <div key={index} className="flex items-center justify-center gap-3">
                  <span className="text-2xl">✨</span>
                  <span>{statement}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-lg text-white/80 italic">
              {content.about.freedom.closing}
            </div>
          </div>

          {/* General Partners & Supporters */}
          <div className="text-center mt-20">
            <h3 className="display text-xl font-bold mb-8 muted">Mit Unterstützung von</h3>
            <div className="flex justify-center items-center">
              <img
                src="/Logos.png"
                alt="Partner und Förderer: Kulturreferat München, Theatron, BLVZ und weitere"
                className="max-w-full h-auto opacity-60 hover:opacity-90 transition-opacity duration-300"
                style={{ maxHeight: '140px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="display text-4xl font-bold mb-8">
            {content.about.cta.title}
          </h2>
          <p className="text-lg text-white/80 mb-8">
            {content.about.cta.subtitle}
          </p>
          <Link
            href="/#tickets"
            className="btn-primary text-xl px-10 py-5 shadow-2xl transition-all"
          >
            {content.about.cta.button}
          </Link>
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