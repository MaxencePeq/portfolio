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
  { img: "/img/stack/bootstrap.webp", title: "Bootstrap" },
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
          Est un site vitrine pour un artisan fait en collaboration avec mon
          collègue
          <a
            href="https://calvin-nogueira.fr"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-accent decoration-2"
          >
            Calvin Nogueira
          </a>
          .
        </p>
      }
      stacks={stack}
    />
  );
}
