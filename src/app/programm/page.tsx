"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";

export default function ProgramPage() {
  const { content } = useLanguage();

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'opening': return '🎪';
      case 'show': return '🎭';
      case 'workshop': return '🤸';
      case 'talk': return '💬';
      case 'experimental': return '⚡';
      case 'social': return '🎉';
      default: return '✨';
    }
  };

  const getEventTypeStyle = (type: string) => {
    switch (type) {
      case 'opening': return 'border-yellow-400/30 bg-yellow-400/10';
      case 'show': return 'border-blue-400/30 bg-blue-400/10';
      case 'workshop': return 'border-green-400/30 bg-green-400/10';
      case 'talk': return 'border-purple-400/30 bg-purple-400/10';
      case 'experimental': return 'border-orange-400/30 bg-orange-400/10';
      case 'social': return 'border-pink-400/30 bg-pink-400/10';
      default: return 'border-white/20 bg-white/10';
    }
  };

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
            {content.program.days.map((day, index) => (
              <button
                key={index}
                onClick={() => {
                  const element = document.getElementById(`day-${index}`);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="p-6 rounded-xl bg-black/20 border border-white/10 hover:border-white/30 hover:bg-black/30 transition-all cursor-pointer text-left"
              >
                <div className="text-2xl font-bold text-white mb-2">{day.day.split(',')[0]}</div>
                <div className="text-sm muted mb-2">{day.theme}</div>
                <div className="text-xs text-white/60">{day.events.length} Events</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {content.program.days.map((day, dayIndex) => (
              <div key={dayIndex} id={`day-${dayIndex}`} className="space-y-8">
                {/* Day Header */}
                <div className="text-center">
                  <h2 className="display text-4xl font-bold mb-4">{day.day}</h2>
                  <p className="text-xl text-white/80 font-semibold">{day.theme}</p>
                </div>

                {/* Events */}
                <div className="space-y-6">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className={`p-6 rounded-xl border transition-colors hover:border-white/40 ${getEventTypeStyle(event.type)}`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        {/* Time & Icon */}
                        <div className="flex items-center gap-4 md:flex-col md:items-center md:min-w-[120px]">
                          <div className="text-3xl">{getEventTypeIcon(event.type)}</div>
                          <div className="text-xl font-bold text-white">{event.time}</div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                            <div className="flex-1">
                              <h3 className="display text-2xl font-bold mb-2">{event.title}</h3>
                              {event.subtitle && (
                                <p className="text-lg font-semibold text-white/90 mb-2">{event.subtitle}</p>
                              )}
                            </div>

                            {/* Artistic Images for Shows */}
                            {event.title.includes("How a Spiral Works") && (
                              <div className="w-full md:w-48 h-32 md:h-36 bg-black/40 rounded-lg overflow-hidden border border-white/10 relative group mt-4 md:mt-0 md:ml-6">
                                <img
                                  src={eventIndex === 0 ? "/How A Spiral Works/Zane Krūmiņa 1.webp" :
                                       eventIndex === 1 ? "/How A Spiral Works/Eve Gastaldi 1.webp" :
                                       "/How A Spiral Works/Zane Krūmiņa.webp"}
                                  alt="How a Spiral Works performance"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-75 hover:opacity-95"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30"></div>
                                <div className="absolute bottom-2 right-2 text-xs text-white/60 font-medium">
                                  Art for Rainy Days
                                </div>
                              </div>
                            )}

                            {event.title.includes("Häppy Hour") && (
                              <div className="w-full md:w-48 h-32 md:h-36 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg overflow-hidden border border-white/10 relative group mt-4 md:mt-0 md:ml-6">
                                <img
                                  src={eventIndex === 0 ? "/Happy Hour/Chris Collina - Häppy Hour 3.webp" :
                                       eventIndex === 1 ? "/Happy Hour/Dynamo - Happy Hour cropped.webp" :
                                       event.title.includes("Matinee") ? "/Happy Hour/Chris Collina - Häppy Hour 4.webp" :
                                       "/Happy Hour/Dynamo - Happy Hour-806.webp"}
                                  alt="Häppy Hour performance by The Nordic Council"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"></div>
                                <div className="absolute bottom-2 right-2 text-xs text-white/80 font-medium">
                                  The Nordic Council
                                </div>
                              </div>
                            )}
                          </div>

                          <p className="text-white/80 leading-relaxed mb-4">{event.description}</p>

                          {/* Additional Info */}
                          <div className="flex flex-wrap gap-4 text-sm">
                            {event.artist && (
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-white">🎨 Artist:</span>
                                <a
                                  href={content.program.partners.workshop.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-white/80 hover:text-white transition-colors underline"
                                >
                                  {event.artist}
                                </a>
                              </div>
                            )}
                            {event.curator && (
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-white">👤 Curator:</span>
                                <a
                                  href={content.program.partners.curator.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-white/80 hover:text-white transition-colors underline"
                                >
                                  {event.curator}
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Partners Section */}
          <div className="mt-20 p-8 rounded-xl bg-black/20 border border-white/10">
            <h3 className="display text-2xl font-bold mb-8 text-center">Festival Partners</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2">{content.program.partners.workshop.role}</h4>
                <a
                  href={content.program.partners.workshop.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors underline"
                >
                  {content.program.partners.workshop.name}
                </a>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2">{content.program.partners.curator.role}</h4>
                <a
                  href={content.program.partners.curator.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors underline"
                >
                  {content.program.partners.curator.name}
                </a>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2">{content.program.partners.film.role}</h4>
                <a
                  href={content.program.partners.film.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors underline"
                >
                  {content.program.partners.film.name}
                </a>
              </div>
            </div>
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

          {/* General Partners & Supporters */}
          <div className="mt-20 text-center">
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