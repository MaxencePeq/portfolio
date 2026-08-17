import Project from "../../../Project";

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

export default function SectionBakerySim() {
  return (
    <Project
      type="personnelles"
      images={images}
      isLink={true}
      titleLink="https://github.com/MaxencePeq/BakerySimulator"
      title="Bakery Simulator"
      year="2025"
      description={
        <p>
          Simulateur de gestion de boulangerie de type idle. Le serveur de jeu
          est fermé depuis ; un mode debug accompagne le système de comptes.
        </p>
      }
      stacks={stack}
    />
  );
}
