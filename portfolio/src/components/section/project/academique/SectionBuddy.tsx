import Project from "../../../Project";

const images = [
  "/img/project/academique/buddy/accueil.webp",
  "/img/project/academique/buddy/chat.webp",
  "/img/project/academique/buddy/etudiant.webp",
  "/img/project/academique/buddy/famille.webp",
  "/img/project/academique/buddy/login.webp",
  "/img/project/academique/buddy/profile.webp",
];

const stack = [
  { img: "/img/stack/symfony.webp", title: "Symfony" },
  { img: "/img/stack/js.webp", title: "JavaScript" },
  { img: "/img/stack/twig.webp", title: "Twig" },
  { img: "/img/stack/bootstrap.webp", title: "Bootstrap" },
  { img: "/img/stack/mysql.webp", title: "MySQL" },
  { img: "/img/stack/serveur-sql.webp", title: "SQL" },
  { img: "/img/stack/git.webp", title: "Git" },
];

export default function SectionBuddy() {
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
