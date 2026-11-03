import Project from "@/components/Project";
import bakeryIntro from "@/public/img/project/perso/bakery-sim/intro.webp";
import bakeryFull from "@/public/img/project/perso/bakery-sim/full.webp";
import bakeryDebug from "@/public/img/project/perso/bakery-sim/debug.webp";

const images = [bakeryIntro, bakeryFull, bakeryDebug];

const stack = ["PHP", "PDO", "MySQL", "Composer", "HTML", "CSS"];

export default function BakerySim() {
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
