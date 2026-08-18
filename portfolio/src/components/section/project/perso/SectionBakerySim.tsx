import Project from "../../../Project";

const images = [
  "/img/project/perso/bakery-sim/intro.webp",
  "/img/project/perso/bakery-sim/full.webp",
  "/img/project/perso/bakery-sim/debug.webp",
];

const stack = [
  { img: "/img/stack/php.webp", title: "PHP" },
  { img: "/img/stack/pdo.webp", title: "PDO" },
  { img: "/img/stack/mysql.webp", title: "MySQL" },
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
          Jeu incrémental (idle) de gestion de boulangerie, écrit en PHP natif
          sans une ligne de JavaScript au début de mes études. La contrainte du
          PHP crée un problème intéressant : la progression est reconstruite à
          chaque page à partir du temps écoulé depuis la dernière action —
          autoclickers, vente automatique, et un prix de la farine qui fluctue.
          L'état de la partie vit dans la session, avec un système de prestige
          qui remet les compteurs à zéro contre un multiplicateur permanent. Le
          serveur de jeu est fermé depuis ; un mode debug accompagne le système
          de comptes.
        </p>
      }
      stacks={stack}
    />
  );
}
