import Project from "@/components/Project";
import portfolio1 from "@/public/img/project/perso/portfolio/1.webp";
import portfolio2 from "@/public/img/project/perso/portfolio/2.webp";
import portfolio3 from "@/public/img/project/perso/portfolio/3.webp";
import portfolio4 from "@/public/img/project/perso/portfolio/4.webp";

const images = [portfolio1, portfolio2, portfolio3, portfolio4];

const stack = ["React", "Docker", "Tailwind CSS", "TypeScript", "JSX", "Git"];

export default function Portfolio() {
  return (
    <Project
      type="personnelles"
      images={images}
      title="Mon portfolio"
      year="2026"
      isLink={true}
      titleLink="https://github.com/MaxencePeq/portfolio"
      description={
        <p>
          Le site que vous lisez actuellement ! Précédement React, j'ai
          désormais changé pour Next.Js (TypeScript, Tailwind, pnpm), pour
          améliorer les performances et la qualité du code. J'ai optimisé les
          dépendances et le chargement du site. Ce portfolio a subi une refonte
          majeure, améliorant la page d'accueil, la passant de 13 Mo à moins de
          400 Ko.
        </p>
      }
      stacks={stack}
    />
  );
}
