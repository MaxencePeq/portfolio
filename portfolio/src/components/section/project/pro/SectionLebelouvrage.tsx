import Project from "../../../Project";

const images = [
  "/img/project/pro/lebelouvrage/2.png",
  "/img/project/pro/lebelouvrage/3.png",
  "/img/project/pro/lebelouvrage/4.png",
  "/img/project/pro/lebelouvrage/5.png",
  "/img/project/pro/lebelouvrage/6.png",
];

const stack = [
  { img: "/img/stack/symfony.png", title: "Symfony" },
  { img: "/img/stack/js.png", title: "JavaScript" },
  { img: "/img/stack/twig.png", title: "Twig" },
  { img: "/img/stack/bootstrap.png", title: "Bootstrap" },
  { img: "/img/stack/git.png", title: "Git" },
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
