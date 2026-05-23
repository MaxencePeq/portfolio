import Project from "../../../project";

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
  const content = (
    <>
      <Project
        darkmode={darkmode}
        type={"personnelles"}
        images={images}
        title={"Website For Colorblind"}
        year={"2026"}
        isLink={true}
        titleLink={"https://github.com/MaxencePeq/Website-Colorblind-Extension"}
        description={
          <>
            {" "}
            <p className="">
              Est une extension permettant de modifier la couleur de certains
              paramètres pour permettre aux daltoniens <br /> (commme moi)
              d'adapter la page en cours. <br /> La mise en ligne est pour très
              bientôt, en attendant le code est disponible sur mon github !
            </p>{" "}
          </>
        }
        stacks={stack}
        isFirstInType={true}
        number={7}
      />
    </>
  );
  return content;
}
