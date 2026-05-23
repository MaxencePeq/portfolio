# Portfolio

Portfolio personnel conçu pour présenter les compétences, projets et expériences professionnelles.

## Description

Ce projet constitue une application web moderne destinée à servir de vitrine professionnelle. Il offre une plateforme centralisée pour mettre en avant les réalisations, compétences techniques et parcours professionnel, avec une expérience utilisateur optimisée et une présentation adaptée aux appareils mobiles.

## Architecture Technique

Le projet repose sur une architecture moderne combinant :

- **Framework UI** : React 19 avec TypeScript
- **Bundler** : Docker et Vite pour la compilation et le développement optimisé
- **Routage** : React Router DOM pour la navigation multi-pages
- **Styling** : Tailwind CSS avec intégration Vite
- **Animations** : Framer Motion pour les transitions fluides
- **Composants spécialisés** : Splide pour les carrousels
- **Intégrations tierces** : React GitHub Calendar pour l'affichage de l'activité GitHub

## Contenu et Sections

L'application propose les sections suivantes :

- **Accueil** : Présentation générale et introduction
- **Stack Technologique** : Compétences techniques et technologies maîtrisées
- **Projets Professionnels** : Réalisations en contexte professionnel (Lebel Ouvrage)
- **Projets Académiques** : Travaux réalisés durant la formation (Buddy)
- **Projets Personnels** : Initiatives propres (Web Music, Portfolio, WFC, Bakery Simulator)
- **Passions** : Intérêts personnels et domaines de spécialisation
- **GitHub** : Intégration avec l'activité GitHub de l'utilisateur
- **CV** : Cursus vitae au format détaillé

## Structure du Projet

```
src/
├── component/          # Composants réutilisables
│   ├── section/       # Sections de contenu
│   ├── box/           # Composants d'affichage
│   ├── button/        # Éléments interactifs
│   ├── navbar.tsx     # Barre de navigation
│   └── carrousel.tsx  # Carrousel d'images
├── types/             # Définitions TypeScript
├── utils/             # Fonctions utilitaires
├── routes.tsx         # Configuration du routage
├── App.tsx            # Composant racine
└── main.tsx           # Point d'entrée
```

## Fonctionnalités

- Mode sombre/clair avec persistance des préférences utilisateur
- Navigation fluide entre plusieurs sections
- Intégration GitHub pour afficher l'historique de contributions
- Design responsive et adapté à tous les appareils
- Animations et transitions fluides
- Performance optimisée avec code splitting

## Technologies

- React 19
- Docker
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion
- React Router DOM
- Splide

## Maintenance et Développement

Le projet utilise ESLint pour maintenir la qualité du code et TypeScript pour la sécurité des types. Les configurations sont disponibles dans :

- `eslint.config.js` : Règles de linting
- `tsconfig.json` : Options TypeScript
- `vite.config.ts` : Configuration Vite

## Auteur

Maxence Pequeno
