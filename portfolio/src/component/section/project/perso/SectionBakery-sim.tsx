import Project from "../../../project";

type SectionProps = {
  darkmode: boolean;
};

const images = [
  "/img/project/perso/bakery-sim/intro.png",
  "/img/project/perso/bakery-sim/full.png",
  "/img/project/perso/bakery-sim/debug.png",
];

const stack = [
  { img: "/img/stack/php.png", title: "PHP" },
  { img: "/img/stack/composer.png", title: "Composer" },
  { img: "/img/stack/html-5.png", title: "HTML" },
  { img: "/img/stack/css-3.png", title: "CSS" },
];

export default function SectionBakerySim({ darkmode }: SectionProps) {
  const content = (
    <>
      <Project
        darkmode={darkmode}
        type={"personnelles"}
        images={images}
        isLink={true}
        titleLink="https://github.com/MaxencePeq/BakerySimulator"
        title={"Bakery Simulator"}
        year={"2025"}
        description={
          <>
            {" "}
            <p className="">
              Est un simulateur de gestion de boulangerie de type "Idle /
              Autoclicker" ! Anciennement jouable, le serveur de jeu est
              désormais fermé. <br />
              Un debug-mode a été ajouté en plus du système d'inscription pour
              modérer les comptes.
            </p>{" "}
          </>
        }
        stacks={stack}
        isFirstInType={false}
        number={9}
      />
    </>
  );
  return content;
}
