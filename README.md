# Portfolio

Portfolio personnel de Maxence Pequeno, développeur full-stack : projets, compétences, parcours et CV.

## Stack

- **Next.js 16** (App Router, Cache Components) avec **React 19** et **TypeScript**
- **Tailwind CSS 4** : thème clair/sombre piloté par des variables CSS
- **pnpm** comme gestionnaire de paquets
- **Docker** : image multi-stage avec la sortie `standalone` de Next.js

Aucune dépendance en dehors de Next.js et React : carrousel, défilement des livres et bascule de thème sont faits à la main.

## Pages

- **`/`** : accueil, à propos, expérience et projets, compétences, aperçu des passions
- **`/cv`** : CV consultable et téléchargeable en PDF
- **`/passions`** : musique, lecture et sélection de livres

## Structure

```
portfolio/
├── app/            # Routes (layout, accueil, cv, passions) et styles globaux
├── components/     # Navbar, Footer, Project, Carrousel, ImageSlider…
│   └── ui/         # Boutons, titres de section, boîtes
├── data/           # Contenu des sections
│   └── projects/   # Un fichier par projet
├── utils/          # Helper de section
└── public/         # Images (webp) et CV
```

## Production

```bash
cd portfolio
docker build -t portfolio:<tag> .
docker compose up -d
```

Le site est auto-hébergé sur un Raspberry Pi (homelab) : Caddy sert de reverse proxy et la mise en ligne passe par Cloudflare Tunnel.

## Auteur

Maxence Pequeno · [GitHub](https://github.com/MaxencePeq) · [LinkedIn](https://www.linkedin.com/in/maxence-pequeno-671581329/)
