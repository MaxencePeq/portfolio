import Project from "@/components/Project";
import webmusicIndex from "@/public/img/project/perso/webmusic/index.webp";
import webmusicAlbum from "@/public/img/project/perso/webmusic/album.webp";
import webmusicAlbumTrack from "@/public/img/project/perso/webmusic/album-track.webp";
import webmusicSong from "@/public/img/project/perso/webmusic/song.webp";

const images = [webmusicIndex, webmusicAlbum, webmusicAlbumTrack, webmusicSong];

const stack = ["PHP", "PDO", "Composer", "HTML", "CSS"];

export default function WebMusic() {
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
