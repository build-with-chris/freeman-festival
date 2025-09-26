# Freeman Festival 2025 Website

Das Jahresentertainment im Münchner Osten - Freeman Festival Website mit Next.js, Tailwind CSS und TypeScript.

## 🎪 Features

- **Responsive Design** - Mobile-first mit Freeman-Theme
- **Internationalisierung** - Deutsch/Englisch (DE als Standard)
- **SEO-optimiert** - Metadata, JSON-LD Schema, Open Graph
- **Accessibility** - ARIA-Labels, Keyboard Navigation
- **Performance** - Next.js App Router, optimierte Assets
- **Conversion-Fokus** - Countdown, Scarcity, Multiple CTAs

## 🚀 Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌐 Promo-Redirect Snippets

Für die Bewerbung auf bestehenden Pepe-Domains:

### pepeshows.de/freeman

```html
<!doctype html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="0; url=https://freemanfestival.de/?utm_source=pepeshows&utm_campaign=freeman2025">
    <link rel="canonical" href="https://freemanfestival.de/">
    <title>Freeman Festival 2025 - Pepe Shows</title>
    <meta name="description" content="Das Jahresentertainment im Münchner Osten - 14.-16. November 2025">
    <style>
        body { font-family: 'Inter', sans-serif; background: #161616; color: #fff; text-align: center; padding: 50px 20px; }
        .logo { font-size: 2rem; font-weight: bold; color: #D4A574; margin-bottom: 2rem; }
        .btn { display: inline-block; background: #D4A574; color: #0A0A0A; padding: 1rem 2rem; border-radius: 2rem; text-decoration: none; font-weight: 600; margin-top: 2rem; }
        .btn:hover { background: #E6B887; }
    </style>
</head>
<body>
    <div class="logo">Freeman Festival 2025</div>
    <p>Das Jahresentertainment im Münchner Osten</p>
    <p>14.–16. November 2025 • Ostpark München • Pepe Dome</p>
    <a href="https://freemanfestival.de/?utm_source=pepeshows&utm_campaign=freeman2025" class="btn">Jetzt Tickets sichern</a>
    <script>
        setTimeout(() => {
            window.location.href = 'https://freemanfestival.de/?utm_source=pepeshows&utm_campaign=freeman2025';
        }, 2000);
    </script>
</body>
</html>
```

### pepearts.de/freeman

```html
<!doctype html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="0; url=https://freemanfestival.de/?utm_source=pepearts&utm_campaign=freeman2025">
    <link rel="canonical" href="https://freemanfestival.de/">
    <title>Freeman Festival 2025 - Pepe Arts</title>
    <meta name="description" content="Das Jahresentertainment im Münchner Osten - 14.-16. November 2025">
    <style>
        body { font-family: 'Inter', sans-serif; background: #161616; color: #fff; text-align: center; padding: 50px 20px; }
        .logo { font-size: 2rem; font-weight: bold; color: #D4A574; margin-bottom: 2rem; }
        .btn { display: inline-block; background: #D4A574; color: #0A0A0A; padding: 1rem 2rem; border-radius: 2rem; text-decoration: none; font-weight: 600; margin-top: 2rem; }
        .btn:hover { background: #E6B887; }
    </style>
</head>
<body>
    <div class="logo">Freeman Festival 2025</div>
    <p>Das Jahresentertainment im Münchner Osten</p>
    <p>14.–16. November 2025 • Ostpark München • Pepe Dome</p>
    <a href="https://freemanfestival.de/?utm_source=pepearts&utm_campaign=freeman2025" class="btn">Jetzt Tickets sichern</a>
    <script>
        setTimeout(() => {
            window.location.href = 'https://freemanfestival.de/?utm_source=pepearts&utm_campaign=freeman2025';
        }, 2000);
    </script>
</body>
</html>
```

### Minimale Redirect (nur Weiterleitung)

```html
<!doctype html>
<meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=https://freemanfestival.de/?utm_source=pepeshows&utm_campaign=freeman2025">
<link rel="canonical" href="https://freemanfestival.de/">
<title>Freeman Festival 2025</title>
<p>Weiterleitung… <a href="https://freemanfestival.de/?utm_source=pepeshows&utm_campaign=freeman2025">klicken</a>.</p>
```

## 📊 UTM Tracking

Die Website ist vorbereitet für UTM-Tracking:
- `utm_source=pepeshows|pepearts`
- `utm_campaign=freeman2025`

## 🎯 CTA-Struktur

**Alle CTAs führen zu #tickets (später Eventfrog-Link):**

1. **Hero CTA** - Primary, scrollt zu Tickets
2. **Nach Tickets** - Secondary CTA mit großem Button
3. **Finale CTA** - Big CTA vor Footer mit Scarcity

## 🔧 Konfiguration

- **Standard-Sprache**: Deutsch (DE)
- **Englisch**: Per `?lang=en` Parameter (geplant)
- **Ticket-Link**: Platzhalter für Eventfrog-Integration
- **Domain**: freemanfestival.de

## 📱 Social Media

- Instagram: [@pepe_arts](https://instagram.com/pepe_arts)
- Hashtags: #FreemanFestival #ZirkusInMünchen #PepeDome #Ostpark

## 🎨 Design System

**Freeman Theme basiert auf PepeShows Design Tokens:**
- Primary: Gold (#D4A574)
- Background: Dark (#161616)
- Surface: Dark Surface (#1A1A1A)
- Fonts: Outfit (Display), Inter (Body)

## 🏗️ Tech Stack

- **Framework**: Next.js 15 App Router
- **Styling**: Tailwind CSS + Freeman Theme
- **TypeScript**: Vollständige Typsicherheit
- **Fonts**: Google Fonts (Outfit + Inter)
- **Icons**: Emoji + Unicode
- **SEO**: JSON-LD Schema, Open Graph, Twitter Cards
