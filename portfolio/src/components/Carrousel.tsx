import { useState, useEffect } from "react";

type CarrouselProps = {
  images: string[];
  /** Nom du projet : sert à décrire les captures pour les lecteurs d'écran. */
  alt: string;
};

export default function Carrousel({ images, alt }: CarrouselProps) {
  const [current, setCurrent] = useState(0);
  const [resetTimer, setResetTimer] = useState(0);

  const prev = () => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    setResetTimer((t) => t + 1);
  };

  const next = () => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    setResetTimer((t) => t + 1);
  };

  const goTo = (i: number) => {
    setCurrent(i);
    setResetTimer((t) => t + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [resetTimer, images.length]);

  return (
    <div
      className="relative w-full overflow-hidden"
      role="group"
      aria-roledescription="carrousel"
      aria-label={`Captures d'écran du projet ${alt}`}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${alt} — capture ${i + 1} sur ${images.length}`}
            // 1re slide en eager : la carte affiche toujours quelque chose tout
            // de suite, les suivantes sont hors du viewport horizontal
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            className="w-full h-auto max-h-[38vh] lg:max-h-[45vh] object-contain flex-shrink-0"
          />
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Image précédente"
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Image suivante"
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
      >
        <span aria-hidden="true">›</span>
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Aller à l'image ${i + 1}`}
            aria-current={i === current}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
