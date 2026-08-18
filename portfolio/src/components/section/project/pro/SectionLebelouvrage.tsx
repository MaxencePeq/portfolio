import Project from "../../../Project";

const images = [
  "/img/project/pro/lebelouvrage/2.webp",
  "/img/project/pro/lebelouvrage/3.webp",
  "/img/project/pro/lebelouvrage/4.webp",
  "/img/project/pro/lebelouvrage/5.webp",
  "/img/project/pro/lebelouvrage/6.webp",
];

const stack = [
  { img: "/img/stack/symfony.webp", title: "Symfony" },
  { img: "/img/stack/js.webp", title: "JavaScript" },
  { img: "/img/stack/twig.webp", title: "Twig" },
  { img: "/img/stack/tailwind.webp", title: "Tailwind" },
  { img: "/img/stack/git.webp", title: "Git" },
];

export default function SectionLebelouvrage() {
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
          Développé avec &nbsp;
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
