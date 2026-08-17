import Bookbox from "../box/Bookbox";

type Image = { src: string; title: string };
type ImageSliderProps = { images: Image[] };

/**
 * Étagère à défilement infini. Le ruban est dupliqué et translaté de -50% en
 * boucle : quand l'animation reboucle, la copie est pile à la position de
 * l'original, la jointure est invisible.
 *
 * L'écart entre les cartes est un `mr-*` sur chaque <li>, PAS un `gap` du
 * flex : avec un gap, 2N cartes n'ont que 2N-1 écarts et -50% tombe à côté
 * d'un demi-écart -> saut visible à chaque boucle.
 */
export default function ImageSlider({ images }: ImageSliderProps) {
  const shelf = [...images, ...images];

  return (
    <div className="w-full max-w-full min-w-0 overflow-hidden">
      <ul className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
        {shelf.map((img, index) => (
          <li
            key={index}
            // la seconde moitié est un doublon décoratif
            aria-hidden={index >= images.length}
            className="mr-3 sm:mr-4 shrink-0 w-40 sm:w-44 lg:w-52 flex items-stretch justify-center"
          >
            <Bookbox
              image={
                <img
                  src={img.src}
                  alt="" /* le titre est déjà affiché sous la couverture */
                  loading="lazy"
                  decoding="async"
                  className="h-36 sm:h-40 lg:h-42 lg:w-42 max-w-full lg:max-w-none object-contain rounded-lg"
                />
              }
              booktitle={img.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
