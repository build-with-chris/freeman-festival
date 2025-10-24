"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Datenschutz() {
  return (
    <div className="min-h-screen">
      <Navigation currentPage="datenschutz" />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h1 className="display text-4xl md:text-5xl font-bold mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-white/80 text-lg">
            Datenschutz auf einen Blick
          </p>
        </div>

        <div className="space-y-8 text-white/90">
          <section>
            <h2 className="text-2xl font-bold mb-4">Allgemeine Hinweise</h2>
            <p className="text-sm leading-relaxed mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Datenerfassung auf dieser Website</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                <p className="text-sm leading-relaxed">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Wie erfassen wir Ihre Daten?</h3>
                <p className="text-sm leading-relaxed">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Wofür nutzen wir Ihre Daten?</h3>
                <p className="text-sm leading-relaxed">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Hosting und Content Delivery Networks (CDN)</h2>

            <div>
              <h3 className="text-lg font-semibold mb-2">Externes Hosting</h3>
              <p className="text-sm leading-relaxed mb-4">
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
              </p>
              <p className="text-sm leading-relaxed">
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Allgemeine Hinweise und Pflichtinformationen</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Datenschutz</h3>
                <p className="text-sm leading-relaxed">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="text-sm bg-black/20 p-4 rounded-lg">
                  <p><strong>Zirkus Akademie München e.V.</strong></p>
                  <p>Ranhazweg 18</p>
                  <p>85521 Ottobrunn</p>
                  <p>E-Mail: info@freemanfestival.de</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p className="text-sm leading-relaxed">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                <p className="text-sm leading-relaxed">
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Datenerfassung auf dieser Website</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Server-Log-Dateien</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-sm leading-relaxed mt-4">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Kontaktformular</h3>
                <p className="text-sm leading-relaxed">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Plugins und Tools</h2>

            <div>
              <h3 className="text-lg font-semibold mb-2">Google Fonts</h3>
              <p className="text-sm leading-relaxed">
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
              </p>
            </div>
          </section>

          <section className="bg-black/20 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Kontakt bei Datenschutzfragen</h2>
            <p className="text-sm leading-relaxed">
              Wenn Sie Fragen zum Datenschutz haben, wenden Sie sich bitte an:
              <a href="mailto:info@freemanfestival.de" className="text-amber-400 hover:text-amber-300 ml-1">
                info@freemanfestival.de
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