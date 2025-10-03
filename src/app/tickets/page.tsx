"use client";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function TicketsPage() {

  const ticketData = [
    {
      day: "Freitag, 14.11.2025",
      events: [
        {
          time: "19:00",
          title: "\"Häppy Hour\"",
          artist: "The Nordic Council",
          description: "Ode an den Norden; Humor über peinliche Real-Life-Momente & die ambivalente Beziehung zu Alkohol. Zeitgenössischer Zirkus × Comedy.",
          ticketUrl: "https://rausgegangen.de/events/nordic-council-happy-hour-0/?mtm_campaign=teilen_event&mtm_kwd=app",
          image: "/Happy Hour/Chris Collina - Häppy Hour 3.webp"
        }
      ]
    },
    {
      day: "Samstag, 15.11.2025",
      events: [
        {
          time: "18:00",
          title: "\"Häppy Hour\"",
          artist: "The Nordic Council",
          description: "Ode an den Norden; Humor über peinliche Real-Life-Momente & die ambivalente Beziehung zu Alkohol. Zeitgenössischer Zirkus × Comedy.",
          ticketUrl: "https://rausgegangen.de/events/nordic-council-happy-hour-1/?mtm_campaign=teilen_event&mtm_kwd=app",
          image: "/Happy Hour/Dynamo - Happy Hour cropped.webp"
        },
        {
          time: "20:30",
          title: "\"How a Spiral Works\"",
          artist: "Art for Rainy Days",
          description: "Meditativer, hypnotischer Zirkus: Tanz, Hair Hanging & Aerial Rope, minimalistische Ästhetik, neu interpretierte baltische Volksmusik.",
          ticketUrl: "https://rausgegangen.de/events/art-for-rainy-days-how-a-spiral-works-0/?mtm_campaign=teilen_event&mtm_kwd=app",
          image: "/How A Spiral Works/Zane Krūmiņa 1.webp"
        }
      ]
    },
    {
      day: "Sonntag, 16.11.2025",
      events: [
        {
          time: "18:00",
          title: "\"How a Spiral Works\"",
          artist: "Art for Rainy Days",
          description: "Meditativer, hypnotischer Zirkus: Tanz, Hair Hanging & Aerial Rope, minimalistische Ästhetik, neu interpretierte baltische Volksmusik.",
          ticketUrl: "https://rausgegangen.de/events/art-for-rainy-days-how-a-spiral-works-1/?mtm_campaign=teilen_event&mtm_kwd=app",
          image: "/How A Spiral Works/Eve Gastaldi 1.webp"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation currentPage="tickets" />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="display text-5xl md:text-6xl font-bold mb-6">
            Tickets
          </h1>
          <p className="text-xl text-white/80 mb-12">
            Wähle deine Show und sichere dir dein Ticket für das Freeman Festival
          </p>
        </div>
      </section>

      {/* Tickets by Day */}
      <section id="events" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {ticketData.map((day, dayIndex) => (
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

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="display text-3xl md:text-4xl font-bold mb-6">
            Tickets sichern
          </h2>
          <p className="text-lg text-white/80 mb-12">
            Early-Bird-Tickets ab 12 € – sichere dir jetzt deinen Platz!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Early Bird */}
            <div className="p-8 rounded-xl border bg-white/5 border-white/30 shadow-white/10 shadow-lg relative group animate-pulse">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 bg-white text-black rounded-full text-xs font-bold">
                  EARLY BIRD BIS 15.10
                </span>
              </div>
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">🎁</span>
              </div>
              <h3 className="display text-xl font-semibold mb-3">🚀 Early Bird</h3>
              <div className="text-3xl font-bold text-white mb-2">12 €</div>
              <p className="text-white/70 text-sm">bis 15.10. • SPARE 10€</p>
            </div>

            {/* Standard */}
            <div className="p-8 rounded-xl border bg-black/20 border-white/10 hover:border-white/30 transition-all relative group">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 bg-yellow-400 text-black rounded-full text-xs font-bold">
                  Empfehlung
                </span>
              </div>
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">🎫</span>
              </div>
              <h3 className="display text-xl font-semibold mb-3">Standard</h3>
              <div className="text-3xl font-bold text-white mb-2">18 €</div>
              <p className="text-white/70 text-sm">online verfügbar</p>
            </div>

            {/* Abendkasse */}
            <div className="p-8 rounded-xl border bg-black/20 border-white/10 hover:border-white/30 transition-all group">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">🎪</span>
              </div>
              <h3 className="display text-xl font-semibold mb-3">Abendkasse</h3>
              <div className="text-3xl font-bold text-white mb-2">22 €</div>
              <p className="text-white/70 text-sm">falls verfügbar</p>
            </div>
          </div>

          {/* CTA and Notes */}
          <div className="text-center">
            <Link
              href="#events"
              className="btn-primary text-xl px-12 py-4 shadow-2xl hover:shadow-yellow-400/25 transition-all mb-4 inline-block"
            >
              Tickets kaufen
            </Link>
            <p className="text-sm text-white/60 mb-8">
              Workshops separat buchbar (ca. 10 €, 12 € vor Ort).
            </p>
            <p className="text-white/70 text-sm">
              Sofort verfügbar über Eventfrog (Link folgt)
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="display text-2xl font-bold mb-6">Wichtige Informationen</h3>
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div className="space-y-2">
              <div className="text-yellow-400 text-lg">📍</div>
              <h4 className="font-semibold">Ort</h4>
              <p className="text-white/80">Pepe Dome, München</p>
            </div>
            <div className="space-y-2">
              <div className="text-yellow-400 text-lg">🎫</div>
              <h4 className="font-semibold">Tickets</h4>
              <p className="text-white/80">Verfügbar über rausgegangen.de</p>
            </div>
            <div className="space-y-2">
              <div className="text-yellow-400 text-lg">💬</div>
              <h4 className="font-semibold">Fragen?</h4>
              <p className="text-white/80">
                <Link href="/kontakt" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Kontaktiere uns
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