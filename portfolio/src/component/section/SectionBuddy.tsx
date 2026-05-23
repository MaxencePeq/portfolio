import Project from "../project";

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

export default function SectionBuddy({ darkmode }: SectionProps) {
  const underlineColor = darkmode ? "decoration-[#2563EB]" : "decoration-white";
  return (
    <>
      <Project
        darkmode={darkmode}
        type={"académique"}
        images={images}
        title={"Buddy System"}
        year={"2026"}
        titleLink={"https://buddysystem.calvin-nogueira.fr/"}
        description={
          <>
            {" "}
            <p className="">
              Un projet universitaire de réseau social étudiant. Les membres
              inscrits peuvent chatter, ajouter des amies <br />
              Créer des événements, modifier leur profil, rejoindre des groupes
              et plus encore. N'hésitez pas à vous inscrire !
              <br />
              Lien :{" "}
              <a
                href="https://buddysystem.calvin-nogueira.fr/"
                className={`underline decoration-2 ${underlineColor}`}
              >
                buddysystem.calvin-nogueira.fr
              </a>{" "}
            </p>{" "}
          </>
        }
      />
    </>
  );
}
