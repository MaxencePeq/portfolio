import Project from "../../project";

type SectionProps = {
  darkmode: boolean;
};

const images = [
  "/img/project/perso/WFC/1.png",
  "/img/project/perso/WFC/2.png",
  "/img/project/perso/WFC/3.png",
  "/img/project/perso/WFC/4.png",
];

const stack = [
  { img: "/img/stack/js.png", title: "JavaScript" },
  { img: "/img/stack/html-5.png", title: "HTML" },
  { img: "/img/stack/css-3.png", title: "CSS" },
];

export default function SectionWFC({ darkmode }: SectionProps) {
  return (
    <>
      <Project
        darkmode={darkmode}
        type={"personnel"}
        images={images}
        title={"Website For Colorblind"}
        year={"2026"}
        titleLink={""}
        description={
          <>
            {" "}
            <p className="">
              Est une extension permettant de modifier la couleur de certains
              paramètres pour permettre aux daltoniens (commme moi) d'adapter la
              page en cours.
            </p>{" "}
          </>
        }
        stacks={stack}
      />
    </>
  );
}
