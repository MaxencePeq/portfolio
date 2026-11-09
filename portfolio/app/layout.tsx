import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maxence Pequeno — Développeur full-stack",
  description:
    "Étudiant développeur full-stack. Back-end Symfony et FastAPI, front-end React. Un site d'artisan en production et une extension navigateur pour daltoniens.",
  authors: [{ name: "Maxence Pequeno" }],
};

// couleur de la barre du navigateur mobile, alignée sur le --bg sombre (thème par défaut)
export const viewport: Viewport = {
  themeColor: "#1c1410",
};

// Sombre par défaut (classe dans le HTML) ; s'exécute avant l'affichage pour
// appliquer le choix clair sans flash. Même clé que ThemeToggle.
const themeScript = `(function(){try{if(localStorage.getItem("portfolio-darkmode")==="false")document.documentElement.classList.remove("dark")}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning : le script peut modifier la classe avant React
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..800&family=Instrument+Sans:wdth,wght@75..100,400..700&family=JetBrains+Mono:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
