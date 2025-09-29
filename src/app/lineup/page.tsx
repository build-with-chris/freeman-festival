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
                <div className="space-y-4">
                  {/* Main featured image */}
                  <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl overflow-hidden border border-white/10 relative group">
                    <img
                      src="/Happy Hour/Chris Collina for Nordic Council.webp"
                      alt="Häppy Hour performance by The Nordic Council"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white/90 text-sm font-medium">
                      &ldquo;Häppy Hour&rdquo;
                    </div>
                  </div>

                  {/* Image grid */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg overflow-hidden border border-white/10 relative group">
                      <img
                        src="/Happy Hour/Glass multiplex.webp"
                        alt="The Nordic Council performance detail"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-75 hover:opacity-95"
                      />
                      <div className="absolute inset-0 bg-blue-500/10"></div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg overflow-hidden border border-white/10 relative group">
                      <img
                        src="/Happy Hour/Sofa cropped.webp"
                        alt="The Nordic Council artistic moment"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-75 hover:opacity-95"
                      />
                      <div className="absolute inset-0 bg-purple-500/10"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="display text-4xl font-bold mb-4 text-white">
                  {content.lineup.artists[0].name}
                </h2>
                <p className="text-xl mb-4 text-white/80">{content.lineup.artists[0].country}</p>
                <p className="text-lg mb-6 font-semibold">
                  Show: &ldquo;{content.lineup.artists[0].show}&rdquo;
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

                <div className="text-sm text-white/60 mb-6">
                  <p><strong>Mitglieder:</strong> {content.lineup.artists[0].members}</p>
                </div>

                {/* Video Preview */}
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🎬</span>
                    <h3 className="font-bold text-white">Performance Preview</h3>
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden bg-black/20 border border-white/20 mb-4">
                    <iframe
                      src="https://www.youtube.com/embed/owESp3YkcRY?rel=0&modestbranding=1"
                      title="The Nordic Council - Häppy Hour Performance"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-white/80 text-sm mb-4">Erlebe einen Vorgeschmack auf die faszinierende Performance von The Nordic Council</p>
                  <Link
                    href="/#tickets"
                    className="btn-primary w-full justify-center py-3 text-lg font-semibold"
                  >
Tickets für &ldquo;Häppy Hour&rdquo;
                  </Link>
                </div>
              </div>
            </div>

            {/* Art for Rainy Days */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <div className="space-y-4">
                  {/* Main featured image */}
                  <div className="aspect-square bg-black/40 rounded-xl overflow-hidden border border-white/10 relative group">
                    <img
                      src="/How A Spiral Works/Zane Krūmiņa.webp"
                      alt="How a Spiral Works performance by Art for Rainy Days"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white/80 text-sm font-medium">
                      &ldquo;How a Spiral Works&rdquo;
                    </div>
                  </div>

                  {/* Image grid */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="aspect-square bg-black/40 rounded-lg overflow-hidden border border-white/10 relative group">
                      <img
                        src="/How A Spiral Works/Eve Gastaldi.webp"
                        alt="Art for Rainy Days performer Eve Gastaldi"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 hover:opacity-90"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="aspect-square bg-black/40 rounded-lg overflow-hidden border border-white/10 relative group">
                      <img
                        src="/How A Spiral Works/Zane Krūmiņa 2.webp"
                        alt="Art for Rainy Days performance detail"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 hover:opacity-90"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                  </div>
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
                  Show: &ldquo;{content.lineup.artists[1].show}&rdquo;
                </p>

                <div className="space-y-4 mb-6">
                  <p className="text-white/90 leading-relaxed">
                    {content.lineup.artists[1].style}
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    {content.lineup.artists[1].concept}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-400/20 mb-6">
                  <p className="text-blue-300 text-sm">
                    <strong>Auszeichnung:</strong> {content.lineup.artists[1].recognition}
                  </p>
                </div>

                {/* Video Preview */}
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🎬</span>
                    <h3 className="font-bold text-white">Performance Preview</h3>
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden bg-black/20 border border-white/20 mb-4">
                    <iframe
                      src="https://www.youtube.com/embed/UWLTynMZhHE?rel=0&modestbranding=1"
                      title="Art for Rainy Days - How a Spiral Works Performance"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-white/80 text-sm mb-4">Entdecke die preisgekrönte Performance von Art for Rainy Days</p>
                  <Link
                    href="/#tickets"
                    className="btn-primary w-full justify-center py-3 text-lg font-semibold"
                  >
Tickets für &ldquo;How a Spiral Works&rdquo;
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* More Acts Coming */}
          <div className="text-center mt-20 p-8 rounded-xl bg-black/20 border border-white/10">
            <h3 className="display text-2xl font-bold mb-4">{content.lineup.moreActsTitle}</h3>
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
            {content.lineup.ctaTitle}
          </h2>
          <Link
            href="/#tickets"
            className="btn-primary text-xl px-10 py-5 shadow-2xl hover:shadow-yellow-400/20 transition-all"
          >
            {content.lineup.ctaButton}
          </Link>
          <p className="mt-6 muted">
            {content.lineup.ctaSubtitle}
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