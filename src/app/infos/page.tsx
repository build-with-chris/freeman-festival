"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";

export default function InfosPage() {
  const { content } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation currentPage="tickets" />

      {/* Info Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="display text-5xl md:text-6xl font-bold mb-6">
            {content.infos.title}
          </h1>
          <p className="text-xl text-white/80 mb-8">
            {content.infos.subtitle}
          </p>

          {/* Ticket Info Notice */}
          <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/50 backdrop-blur-sm shadow-lg">
            <div className="text-center space-y-3">
              <p className="text-xl md:text-2xl font-bold text-blue-200 mb-2">
                {content.infos.ticketInfo.title}
              </p>
              <p className="text-base md:text-lg text-white/90 font-medium">
                {content.infos.ticketInfo.message}
              </p>
            </div>
          </div>

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

        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-black/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="display text-3xl md:text-4xl font-bold mb-4">
            {content.newsletter.title}
          </h2>
          <p className="text-lg text-white/80 mb-8">
            {content.newsletter.description}
          </p>
          <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
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
              className="space-y-4"
            >
              <input
                type="email"
                name="email"
                required
                placeholder={content.newsletter.emailPlaceholder}
                className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-lg"
              />
              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg font-semibold"
              >
                {content.newsletter.button}
              </button>
            </form>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm font-semibold text-white/90 mb-4">{content.newsletter.benefits.title}</p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-white/70">
                <div className="p-4 rounded-lg bg-white/5">
                  <p className="text-lg mb-1">{content.newsletter.benefits.raffles.split(' ')[0]}</p>
                  <p>{content.newsletter.benefits.raffles.split(' ').slice(1).join(' ')}</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5">
                  <p className="text-lg mb-1">{content.newsletter.benefits.discounts.split(' ')[0]}</p>
                  <p>{content.newsletter.benefits.discounts.split(' ').slice(1).join(' ')}</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5">
                  <p className="text-lg mb-1">{content.newsletter.benefits.updates.split(' ')[0]}</p>
                  <p>{content.newsletter.benefits.updates.split(' ').slice(1).join(' ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="display text-2xl font-bold mb-6">{content.infos.infoTitle}</h3>
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div className="space-y-2">
              <div className="text-yellow-400 text-lg">{content.infos.infoLocation.icon}</div>
              <h4 className="font-semibold">{content.infos.infoLocation.title}</h4>
              <p className="text-white/80">{content.infos.infoLocation.text}</p>
            </div>
            <div className="space-y-2">
              <div className="text-yellow-400 text-lg">{content.infos.infoTickets.icon}</div>
              <h4 className="font-semibold">{content.infos.infoTickets.title}</h4>
              <p className="text-white/80 mb-2">{content.infos.infoTickets.text}</p>
            </div>
            <div className="space-y-2">
              <div className="text-yellow-400 text-lg">{content.infos.infoQuestions.icon}</div>
              <h4 className="font-semibold">{content.infos.infoQuestions.title}</h4>
              <p className="text-white/80">
                <Link href={content.infos.infoQuestions.link} className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  {content.infos.infoQuestions.text}
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