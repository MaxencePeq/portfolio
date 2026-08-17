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
          Réseau social étudiant : messagerie, amis, groupes, événements et
          profils. Projet universitaire, ouvert à l'inscription.
          <br />
        </p>
      }
      stacks={stack}
    />
  );
}
