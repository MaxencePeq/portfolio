import Project from "../../../project";

type SectionProps = {
  darkmode: boolean;
};

const images = [
  "/img/project/perso/portfolio/1.png",
  "/img/project/perso/portfolio/2.png",
  "/img/project/perso/portfolio/3.png",
];

const stack = [
  { img: "/img/stack/react.png", title: "React" },
  { img: "/img/stack/docker.png", title: "Docker" },
  { img: "/img/stack/tailwind.png", title: "Tailwind CSS" },
  { img: "/img/stack/typescript.png", title: "TypeScript" },
  { img: "/img/stack/jsx.png", title: "JSX" },
  { img: "/img/stack/git.png", title: "Git" },
];

export default function SectionPortfolio({ darkmode }: SectionProps) {
  const content = (
    <>
      <Project
        darkmode={darkmode}
        type={"personnelles"}
        images={images}
        title={"Mon portfolio "}
        year={"2026"}
        isLink={true}
        titleLink={"https://github.com/MaxencePeq/portfolio"}
        description={
          <>
            {" "}
            <p className="">
              Ce joli portfolio en React / Tailwind CSS et Docker pour le
              développement et la mise en production !
            </p>{" "}
          </>
        }
        stacks={stack}
        isFirstInType={true}
        number={8}
      />
    </>
  );
  return content;
}
