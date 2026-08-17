import Project from "../../../project";

type SectionProps = {
  darkmode: boolean;
};

const images = [
  "/img/project/academique/buddy/accueil.png",
  "/img/project/academique/buddy/chat.png",
  "/img/project/academique/buddy/etudiant.png",
  "/img/project/academique/buddy/famille.png",
  "/img/project/academique/buddy/login.png",
  "/img/project/academique/buddy/profile.png",
];

const stack = [
  { img: "/img/stack/symfony.png", title: "Symfony" },
  { img: "/img/stack/js.png", title: "JavaScript" },
  { img: "/img/stack/twig.png", title: "Twig" },
  { img: "/img/stack/bootstrap.png", title: "Bootstrap" },
  { img: "/img/stack/mysql.png", title: "MySQL" },
  { img: "/img/stack/serveur-sql.png", title: "SQL" },
  { img: "/img/stack/git.png", title: "Git" },
];

export default function SectionBuddy({ darkmode }: SectionProps) {
  return (
    <>
      <Project
        darkmode={darkmode}
        type={"académiques"}
        images={images}
        title={"Buddy System"}
        year={"2026"}
        isLink={true}
        titleLink={"https://buddysystem.calvin-nogueira.fr/"}
        description={
          <>
            {" "}
            <p className="">
              Réseau social étudiant : messagerie, amis, groupes, événements et
              profils. Projet universitaire, ouvert à l'inscription.
              <br />{" "}
            </p>{" "}
          </>
        }
        stacks={stack}
        isFirstInType={true}
      />
    </>
  );
}
