"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";

export default function LineupPage() {
  const { content } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation currentPage="lineup" />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="display text-5xl md:text-6xl font-bold mb-6">
            {content.lineup.detailed.title}
          </h1>
          <p className="text-xl text-white/80 mb-12">
            {content.lineup.detailed.subtitle}
          </p>
        </div>
      </section>

      {/* Artists */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-20">

            {/* The Nordic Council */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-6 flex items-center justify-center border border-white/10">
                  <span className="text-8xl">🎪</span>
                </div>
              </div>
              <div>
                <h2 className="display text-4xl font-bold mb-4 text-white">
                  {content.lineup.artists[0].name}
                </h2>
                <p className="text-xl mb-4 text-white/80">{content.lineup.artists[0].country}</p>
                <p className="text-lg mb-6 font-semibold">
                  Show: &quot;{content.lineup.artists[0].show}&quot;
                </p>

                <div className="space-y-4 mb-6">
                  <p className="text-white/90 leading-relaxed">
                    {content.lineup.artists[0].style}
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    {content.lineup.artists[0].concept}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-green-500/10 border border-green-400/20 mb-6">
                  <p className="text-green-300 font-semibold flex items-center gap-2">
                    <span>👨‍👩‍👧‍👦</span> {content.lineup.artists[0].audience}
                  </p>
                </div>

                <div className="text-sm text-white/60">
                  <p><strong>Mitglieder:</strong> {content.lineup.artists[0].members}</p>
                </div>
              </div>
            </div>

            {/* Art for Rainy Days */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-6 flex items-center justify-center border border-white/10">
                  <span className="text-8xl">🎭</span>
                </div>
              </div>
              <div className="md:order-1">
                <h2 className="display text-4xl font-bold mb-4 text-white">
                  {content.lineup.artists[1].name}
                </h2>
                <p className="text-xl mb-4 text-white/80">{content.lineup.artists[1].description}</p>

                {/* Award Highlight */}
                <div className="p-4 rounded-lg bg-white/10 border border-white/30 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🏆</span>
                    <p className="font-bold text-white">{content.lineup.artists[1].award}</p>
                  </div>
                  <p className="text-sm text-white/80">{content.lineup.artists[1].category}</p>
                </div>

                <p className="text-lg mb-6 font-semibold">
                  Show: &quot;{content.lineup.artists[1].show}&quot;
                </p>

                <div className="space-y-4 mb-6">
                  <p className="text-white/90 leading-relaxed">
                    {content.lineup.artists[1].style}
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    {content.lineup.artists[1].concept}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-400/20">
                  <p className="text-blue-300 text-sm">
                    <strong>Auszeichnung:</strong> {content.lineup.artists[1].recognition}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* More Acts Coming */}
          <div className="text-center mt-20 p-8 rounded-xl bg-black/20 border border-white/10">
            <h3 className="display text-2xl font-bold mb-4">Weitere Acts folgen</h3>
            <p className="text-white/80 mb-6">{content.lineup.moreActs}</p>
            <div className="flex justify-center">
              <a
                href="https://instagram.com/pepe_arts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full hover:border-purple-400/50 transition-colors"
              >
                <span>📱</span>
                <span className="font-semibold">Updates auf Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="display text-4xl font-bold mb-8">
            Erlebe diese Künstler live
          </h2>
          <Link
            href="/#tickets"
            className="btn-primary text-xl px-10 py-5 shadow-2xl hover:shadow-yellow-400/20 transition-all"
          >
            🎫 Jetzt Tickets sichern
          </Link>
          <p className="mt-6 muted">
            Internationale Zirkuskunst • 5 Shows • 14.–16. November
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