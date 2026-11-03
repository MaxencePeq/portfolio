import Project from "@/components/Project";
import buddyAccueil from "@/public/img/project/academique/buddy/accueil.webp";
import buddyChat from "@/public/img/project/academique/buddy/chat.webp";
import buddyEtudiant from "@/public/img/project/academique/buddy/etudiant.webp";
import buddyFamille from "@/public/img/project/academique/buddy/famille.webp";
import buddyLogin from "@/public/img/project/academique/buddy/login.webp";
import buddyProfile from "@/public/img/project/academique/buddy/profile.webp";

const images = [
  buddyAccueil,
  buddyChat,
  buddyEtudiant,
  buddyFamille,
  buddyLogin,
  buddyProfile,
];

const stack = [
  "Symfony",
  "JavaScript",
  "Twig",
  "Bootstrap",
  "MySQL",
  "SQL",
  "Git",
];

export default function Buddy() {
  return (
    <Project
      type="académiques"
      images={images}
      title="Buddy System"
      year="2026"
      isLink={true}
      titleLink="https://buddysystem.calvin-nogueira.fr/"
      description={
        <p>
          Plateforme de parrainage interculturel pour l'URCA : elle met en
          relation les étudiants internationaux qui arrivent à Reims, les
          étudiants de l'université et les familles rémoises — échanges
          linguistiques, sorties, messagerie. Projet mené à quatre à partir d'un
          cahier des charges, avec la conception de la base de données en amont,
          du MCD au MPD. Interface bilingue FR/EN, le site est ouvert à
          l'inscription.
        </p>
      }
      stacks={stack}
    />
  );
}
