import Project from "../../../Project";

const images = [
  "/img/project/perso/portfolio/1.webp",
  "/img/project/perso/portfolio/2.webp",
  "/img/project/perso/portfolio/3.webp",
  "/img/project/perso/portfolio/4.webp",
];

const stack = [
  { img: "/img/stack/react.webp", title: "React" },
  { img: "/img/stack/docker.webp", title: "Docker" },
  { img: "/img/stack/tailwind.webp", title: "Tailwind CSS" },
  { img: "/img/stack/typescript.webp", title: "TypeScript" },
  { img: "/img/stack/jsx.webp", title: "JSX" },
  { img: "/img/stack/git.webp", title: "Git" },
];

export default function SectionPortfolio() {
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
          Ce joli portfolio en React / Tailwind CSS et Docker pour le
          développement et la mise en production !
        </p>
      }
      stacks={stack}
    />
  );
}
