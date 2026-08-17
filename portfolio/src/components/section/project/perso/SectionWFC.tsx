import Project from "../../../Project";

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

export default function SectionWFC() {
  return (
    <Project
      type="personnelles"
      images={images}
      title="Website For Colorblind"
      year="2026"
      isLink={true}
      titleLink="https://github.com/MaxencePeq/Website-Colorblind-Extension"
      description={
        <p>
          Extension navigateur qui réajuste les couleurs d'une page pour les
          daltoniens — dont je fais partie. Le code est sur GitHub, la mise en
          ligne arrive.
        </p>
      }
      stacks={stack}
    />
  );
}
