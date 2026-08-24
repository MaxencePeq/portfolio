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
      year="2025"
      description={
        <p>
          Répertoire musical — genres, artistes, albums, morceaux — sur une base
          de 10 700 entrées réparties en six tables, avec recherche et lien de
          recherche YouTube construit à la volée. Mon premier projet PHP : une
          entité et une collection par table, des exceptions dédiées, un accès
          PDO centralisé. Développé sur Mac, il refuse de démarrer sur Linux car
          PSR-4 fait correspondre le nom d'une classe à celui de son fichier, et
          les fichiers en minuscules passaient inaperçus sur un système
          insensible à la casse.
        </p>
      }
      stacks={stack}
    />
  );
}
