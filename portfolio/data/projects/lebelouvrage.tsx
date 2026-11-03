import Project from "@/components/Project";
import lebelouvrage2 from "@/public/img/project/pro/lebelouvrage/2.webp";
import lebelouvrage3 from "@/public/img/project/pro/lebelouvrage/3.webp";
import lebelouvrage4 from "@/public/img/project/pro/lebelouvrage/4.webp";
import lebelouvrage5 from "@/public/img/project/pro/lebelouvrage/5.webp";
import lebelouvrage6 from "@/public/img/project/pro/lebelouvrage/6.webp";

const images = [
  lebelouvrage2,
  lebelouvrage3,
  lebelouvrage4,
  lebelouvrage5,
  lebelouvrage6,
];

const stack = ["Symfony", "Javascript", "Twig", "Tailwind", "Git"];

export default function Lebelouvrage() {
  return (
    <Project
      type="professionnelles"
      images={images}
      title="Lebel Ouvrage"
      year="2026"
      isLink={true}
      titleLink="https://lebelouvrage.bzh"
      bigTitle={true}
      description={
        <p id="realisation">
          Site vitrine d'un artisan installateur de portails et systèmes de
          sécurité à Arzal (56), sans aucune présence en ligne jusque-là.
          Développé avec{" "}
          <a
            href="https://calvin-nogueira.fr"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-accent decoration-2"
          >
            Calvin Nogueira
          </a>
          . Le formulaire de devis est un parcours de qualification en plusieurs
          étapes — type de demande, matériel, commune via l'API geo.api.gouv.fr,
          photos de l'existant — pour que l'artisan reçoive un dossier complet
          par mail automatiquement. Référencement local appuyé sur des données
          structurées LocalBusiness. En ligne depuis six mois.
        </p>
      }
      stacks={stack}
    />
  );
}
