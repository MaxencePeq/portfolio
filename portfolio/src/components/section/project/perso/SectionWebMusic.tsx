import Project from "../../../Project";

const images = [
  "/img/project/perso/webmusic/index.webp",
  "/img/project/perso/webmusic/album.webp",
  "/img/project/perso/webmusic/album-track.webp",
  "/img/project/perso/webmusic/song.webp",
];

const stack = [
  { img: "/img/stack/php.webp", title: "PHP" },
  { img: "/img/stack/pdo.webp", title: "PDO" },
  { img: "/img/stack/composer.webp", title: "Composer" },
  { img: "/img/stack/html-5.webp", title: "HTML" },
  { img: "/img/stack/css-3.webp", title: "CSS" },
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
