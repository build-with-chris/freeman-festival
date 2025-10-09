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
            <p className="text-sm text-white/60 mb-2">
              {content.tickets.ctaNote}
            </p>
            <p className="text-white/70 text-sm">
              {content.tickets.availability}
            </p>
          </div>
        </div>
      </section>

      {/* Event Selection Section */}
      <section className="py-16 px-6 bg-black/10">
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
                            <p className="text-white/80 leading-relaxed mb-6">
                              {event.description}
                            </p>
                          </div>

                          {/* Ticket Button */}
                          <div className="flex justify-end">
                            <Link
                              href={event.ticketUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-yellow-400/20 transition-all group-hover:scale-105"
                            >
                              Tickets kaufen
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
              <p className="text-white/80">{content.tickets.infoTickets.text}</p>
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