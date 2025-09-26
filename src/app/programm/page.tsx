"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";

export default function ProgramPage() {
  const { content } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation currentPage="program" />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="display text-5xl md:text-6xl font-bold mb-6">
            {content.program.title}
          </h1>
          <p className="text-xl text-white/80 mb-12">
            {content.program.subtitle}
          </p>

          {/* Date Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-xl bg-black/20 border border-white/10">
              <div className="text-2xl font-bold text-white mb-2">Fr 14.11</div>
              <div className="text-sm muted">1 Show</div>
            </div>
            <div className="p-6 rounded-xl bg-black/20 border border-white/10">
              <div className="text-2xl font-bold text-white mb-2">Sa 15.11</div>
              <div className="text-sm muted">2 Shows</div>
            </div>
            <div className="p-6 rounded-xl bg-black/20 border border-white/10">
              <div className="text-2xl font-bold text-white mb-2">So 16.11</div>
              <div className="text-sm muted">2 Shows</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {content.program.shows.map((show, index) => (
              <div key={index} className="p-8 rounded-xl bg-black/20 border border-white/10 hover:border-white/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="display text-2xl font-bold mb-2">{show.title}</h3>
                    <p className="text-white font-semibold">{show.day}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white">{show.time}</div>
                    <div className="text-sm muted">{show.duration}</div>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">{show.description}</p>
              </div>
            ))}
          </div>

          {/* Important Notes */}
          <div className="mt-16 p-8 rounded-xl bg-blue-500/10 border border-blue-400/20">
            <h3 className="display text-xl font-bold mb-6 text-center">{content.program.notes.title}</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">⏰</div>
                <p className="font-semibold mb-1">{content.program.notes.entranceLabel}</p>
                <p className="text-sm muted">{content.program.notes.entrance}</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🪑</div>
                <p className="font-semibold mb-1">{content.program.notes.seatingLabel}</p>
                <p className="text-sm muted">{content.program.notes.seating}</p>
              </div>
              <div>
                <div className="text-2xl mb-2">♿</div>
                <p className="font-semibold mb-1">{content.program.notes.accessibilityLabel}</p>
                <p className="text-sm muted">{content.program.notes.accessibility}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="display text-4xl font-bold mb-8">
            {content.program.ctaTitle}
          </h2>
          <Link
            href="/#tickets"
            className="btn-primary text-xl px-10 py-5 shadow-2xl hover:shadow-yellow-400/20 transition-all"
          >
            {content.program.ctaButton}
          </Link>
          <p className="mt-6 muted">
            {content.program.ctaSubtitle}
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