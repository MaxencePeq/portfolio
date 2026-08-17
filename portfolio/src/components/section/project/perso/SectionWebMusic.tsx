import Project from "../../../Project";

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

export default function SectionWebMusic() {
  return (
    <Project
      type="personnelles"
      images={images}
      isLink={true}
      titleLink="https://github.com/MaxencePeq/WebMusic"
      title="WebMusic"
      year="2024"
      description={
        <p>
          Répertoire de genres, albums et artistes, avec génération automatique
          des liens YouTube vers les morceaux. Un de mes premiers projets.
        </p>
      }
      stacks={stack}
    />
  );
}
