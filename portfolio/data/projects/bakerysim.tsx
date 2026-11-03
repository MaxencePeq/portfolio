import Project from "@/components/Project";
import bakeryIntro from "@/public/img/project/perso/bakery-sim/intro.webp";
import bakeryFull from "@/public/img/project/perso/bakery-sim/full.webp";
import bakeryDebug from "@/public/img/project/perso/bakery-sim/debug.webp";

const images = [bakeryIntro, bakeryFull, bakeryDebug];

const stack = ["PHP", "PDO", "MySQL", "Composer"];

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
          Jeu incrémental (idle) de gestion de boulangerie, écrit au début de
          mes études en PHP natif, volontairement sans JavaScript. Ce choix crée
          un problème intéressant : la progression est reconstruite à chaque
          page à partir du temps écoulé depuis la dernière action —
          autoclickers, vente automatique, et un prix de la farine qui fluctue.
          L'état de la partie vit dans la session, avec un système de prestige
          qui remet les compteurs à zéro contre un multiplicateur permanent. Un
          système de comptes et un mode debug complètent le tout. Le jeu n'est
          plus hébergé, mais le code est disponible sur GitHub.
        </p>
      }
      stacks={stack}
    />
  );
}
