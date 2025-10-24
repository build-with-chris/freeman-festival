"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Impressum() {
  return (
    <div className="min-h-screen">
      <Navigation currentPage="impressum" />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h1 className="display text-4xl md:text-5xl font-bold mb-4">
            Impressum
          </h1>
          <p className="text-white/80 text-lg">
            Angaben gemäß § 5 TMG
          </p>
        </div>

        <div className="space-y-8 text-white/90">
          <section>
            <h2 className="text-2xl font-bold mb-4">Veranstalter</h2>
            <div className="space-y-2">
              <p><strong>Zirkus Akademie München e.V.</strong></p>
              <p>Ranhazweg 18</p>
              <p>85521 Ottobrunn</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
            <div className="space-y-2">
              <p><strong>E-Mail:</strong> info@freemanfestival.de</p>
              <p><strong>Telefon:</strong> +49 (0) 89 12345678</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Registereintrag</h2>
            <div className="space-y-2">
              <p><strong>Vereinsregister:</strong> Amtsgericht München</p>
              <p><strong>Registernummer:</strong> VR 123456</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Vertretungsberechtigter Vorstand</h2>
            <div className="space-y-2">
              <p><strong>1. Vorsitzende:</strong> [Name]</p>
              <p><strong>2. Vorsitzende:</strong> [Name]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Haftungsausschluss</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Haftung für Inhalte</h3>
                <p className="text-sm leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Haftung für Links</h3>
                <p className="text-sm leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Urheberrecht</h2>
            <p className="text-sm leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Online-Streitbeilegung</h2>
            <p className="text-sm leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </main>
    </div>
  );
}