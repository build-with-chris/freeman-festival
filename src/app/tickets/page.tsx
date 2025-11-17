"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";

export default function TicketsPage() {
  const { content } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation currentPage="tickets" />

      {/* Pricing Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="display text-5xl md:text-6xl font-bold mb-6">
            {content.tickets.title}
          </h1>
          <p className="text-xl text-white/80 mb-8">
            {content.tickets.subtitle}
          </p>

          {/* Newsletter CTA Banner */}
          <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-400/50 backdrop-blur-sm shadow-lg">
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                {content.newsletter.title}
              </h2>
              <p className="text-base md:text-lg text-white/90 font-medium mb-4">
                {content.newsletter.description}
              </p>
              <form 
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const email = formData.get('email') as string;
                  
                  try {
                    const response = await fetch('/api/newsletter', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ email }),
                    });

                    if (response.ok) {
                      alert(content.newsletter.success);
                      (e.target as HTMLFormElement).reset();
                    } else {
                      alert('Fehler beim Abonnieren. Bitte versuchen Sie es erneut.');
                    }
                  } catch (error) {
                    console.error('Newsletter subscription error:', error);
                    alert('Fehler beim Abonnieren. Bitte versuchen Sie es erneut.');
                  }
                }}
                className="max-w-md mx-auto space-y-3"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={content.newsletter.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                />
                <button
                  type="submit"
                  className="w-full btn-primary py-3 text-lg font-semibold"
                >
                  {content.newsletter.button}
                </button>
              </form>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm text-white/80 mb-2">{content.newsletter.benefits.title}</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
                  <span>{content.newsletter.benefits.raffles}</span>
                  <span>{content.newsletter.benefits.discounts}</span>
                  <span>{content.newsletter.benefits.updates}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Special Offer Banner */}
          <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/20 backdrop-blur-sm">
            <div className="text-center">
              <p className="text-lg md:text-xl font-semibold mb-1 flex items-center justify-center gap-2">
                <span>🍹</span>
                <span>{content.tickets.specialOffer.replace('🍹 ', '')}</span>
              </p>
              <p className="text-sm text-white/70">
                {content.tickets.specialOfferDescription}
              </p>
            </div>
          </div>

          {/* CTA Note */}
          <div className="text-center mb-8">
            <p className="text-sm text-white/60">
              {content.tickets.ctaNote}
            </p>
          </div>
        </div>
      </section>

      {/* Event Selection Section */}
      <section className="px-6 bg-black/10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="display text-3xl md:text-4xl font-bold mb-6">
            {content.tickets.selectionTitle}
          </h2>
          <p className="text-lg text-white/80">
            {content.tickets.selectionSubtitle}
          </p>
        </div>
      </section>

      {/* Tickets by Day */}
      <section id="events" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {content.tickets.days.map((day, dayIndex) => (
              <div key={dayIndex} className="space-y-8">
                {/* Day Header */}
                <div className="text-center">
                  <h2 className="display text-3xl md:text-4xl font-bold mb-4">
                    {day.day}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
                </div>

                {/* Events for this day */}
                <div className="grid gap-8">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="group bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300"
                    >
                      <div className="md:flex">
                        {/* Event Image */}
                        <div className="md:w-1/3">
                          <div className="aspect-video md:aspect-square bg-black/40 relative overflow-hidden">
                            <img
                              src={event.image}
                              alt={`${event.title} by ${event.artist}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                              <p className="text-sm font-medium opacity-90">{event.artist}</p>
                            </div>
                          </div>
                        </div>

                        {/* Event Info */}
                        <div className="md:w-2/3 p-8 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-4 mb-3">
                                  <span className="text-2xl font-bold text-yellow-400">{event.time}</span>
                                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                </div>
                                <h3 className="display text-2xl md:text-3xl font-bold mb-2">
                                  {event.title}
                                </h3>
                                <p className="text-lg font-semibold text-white/90 mb-4">
                                  {event.artist}
                                </p>
                              </div>
                            </div>
                            <p className="text-white/80 leading-relaxed mb-4">
                              {event.description}
                            </p>

                            {/* Detailed Show Description - Collapsible */}
                            {'detailedDescription' in event && event.detailedDescription && (
                              <details className="bg-gradient-to-br from-yellow-500/5 to-orange-500/5 border border-yellow-400/20 rounded-lg p-4 mb-4">
                                <summary className="cursor-pointer flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors">
                                  <span className="text-sm">📖</span>
                                  {content.navigation.language.current === 'DE' ? 'Detaillierte Beschreibung anzeigen' : 'View Detailed Description'}
                                </summary>
                                <div className="mt-4 space-y-4">
                                  <div>
                                    <p className="text-white/80 leading-relaxed text-sm whitespace-pre-line">
                                      {String(event.detailedDescription)}
                                    </p>
                                  </div>

                                  {'elements' in event && event.elements && Array.isArray(event.elements) && event.elements.length > 0 && (
                                    <div>
                                      <h5 className="font-semibold text-white mb-3">✨ {content.navigation.language.current === 'DE' ? 'Elemente' : 'Elements'}</h5>
                                      <ul className="space-y-2">
                                        {event.elements.map((element, index) => (
                                          <li key={index} className="flex items-start gap-2 text-white/80 text-sm">
                                            <span className="text-yellow-400 mt-1">•</span>
                                            <span>{String(element)}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </details>
                            )}
                          </div>

                          {/* Newsletter CTA instead of Ticket Button */}
                          <div className="flex justify-end">
                            <Link
                              href="/#newsletter"
                              className="btn-primary px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-yellow-400/20 transition-all group-hover:scale-105"
                            >
                              {content.newsletter.button}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="display text-2xl font-bold mb-6">{content.tickets.infoTitle}</h3>
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div className="space-y-2">
              <div className="text-yellow-400 text-lg">{content.tickets.infoLocation.icon}</div>
              <h4 className="font-semibold">{content.tickets.infoLocation.title}</h4>
              <p className="text-white/80">{content.tickets.infoLocation.text}</p>
            </div>
            <div className="space-y-2">
              <div className="text-yellow-400 text-lg">{content.tickets.infoTickets.icon}</div>
              <h4 className="font-semibold">{content.tickets.infoTickets.title}</h4>
              <p className="text-white/80 mb-2">{content.tickets.infoTickets.text}</p>
              <p className="text-sm text-white/70">
                {content.newsletter.description}
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-yellow-400 text-lg">{content.tickets.infoQuestions.icon}</div>
              <h4 className="font-semibold">{content.tickets.infoQuestions.title}</h4>
              <p className="text-white/80">
                <Link href={content.tickets.infoQuestions.link} className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  {content.tickets.infoQuestions.text}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="display text-xl font-bold mb-4">Freeman Festival</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Ein Festival für zeitgenössischen Zirkus und Performance
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <div className="space-y-2 text-sm">
                <Link href="/" className="block text-white/60 hover:text-white transition-colors">Home</Link>
                <Link href="/lineup" className="block text-white/60 hover:text-white transition-colors">Lineup</Link>
                <Link href="/programm" className="block text-white/60 hover:text-white transition-colors">Programm</Link>
                <Link href="/kontakt" className="block text-white/60 hover:text-white transition-colors">Kontakt</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Veranstaltungsort</h4>
              <div className="text-sm text-white/60">
                <p>Pepe Dome</p>
                <p>München</p>
                <p>14.–16. November 2025</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sm text-white/40">
            <p>&copy; 2025 Freeman Festival. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}