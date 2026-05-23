import Project from "../../../project";

type SectionProps = {
  darkmode: boolean;
};

const images = [
  "/img/project/perso/webmusic/index.png",
  "/img/project/perso/webmusic/album.png",
  "/img/project/perso/webmusic/album-track.png",
  "/img/project/perso/webmusic/song.png",
];

const stack = [
  { img: "/img/stack/php.png", title: "PHP" },
  { img: "/img/stack/pdo.png", title: "PDO" },
  { img: "/img/stack/composer.png", title: "Composer" },
  { img: "/img/stack/html-5.png", title: "HTML" },
  { img: "/img/stack/css-3.png", title: "CSS" },
];

export default function SectionWebMusic({ darkmode }: SectionProps) {
  const content = (
    <>
      <Project
        darkmode={darkmode}
        type={"personnelles"}
        images={images}
        isLink={true}
        titleLink="https://github.com/MaxencePeq/WebMusic"
        title={"WebMusic"}
        year={"2024"}
        description={
          <>
            {" "}
            <p className="">
              Une petite application web débutante qui répertorie des genres /
              albums / artistes de musique et créer des liens Youtube
              automatiquement pour retrouver les musiques.
            </p>{" "}
          </>
        }
        stacks={stack}
        isFirstInType={false}
        number={9}
      />
    </>
  );
  return content;
}
