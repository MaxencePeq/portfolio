import Project from "../../../Project";

const images = [
  "/img/project/perso/bakery-sim/intro.webp",
  "/img/project/perso/bakery-sim/full.webp",
  "/img/project/perso/bakery-sim/debug.webp",
];

const stack = [
  { img: "/img/stack/php.webp", title: "PHP" },
  { img: "/img/stack/composer.webp", title: "Composer" },
  { img: "/img/stack/html-5.webp", title: "HTML" },
  { img: "/img/stack/css-3.webp", title: "CSS" },
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
