import { useState, useEffect } from "react";

type CarrouselProps = {
  images: string[];
};

export default function Carrousel({ images }: CarrouselProps) {
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
    <div className="relative w-full max-w-[1100px] mx-auto overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            className="w-full h-auto max-h-[300px] lg:max-h-[500px] object-contain flex-shrink-0"
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
      >
        ›
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
