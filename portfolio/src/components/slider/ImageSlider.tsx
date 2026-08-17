import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";
import Bookbox from "../box/bookbox";

type Image = { src: string; title: string };
type SliderProps = { images: Image[]; darkmode: boolean };

export default function Slider({ images, darkmode }: SliderProps) {
  const splideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!splideRef.current) return;

    const splide = new Splide(splideRef.current, {
      type: "loop",
      drag: false,
      perPage: 4,
      gap: "1rem",
      arrows: false,
      pagination: false,
      autoScroll: {
        speed: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
      },
      breakpoints: {
        1024: {
          perPage: 3,
        },
        768: {
          perPage: 2,
          gap: "0.75rem",
        },
        520: {
          perPage: 1,
          gap: "0.75rem",
        },
      },
    });

    splide.mount({ AutoScroll });

    return () => {
      splide.destroy();
    };
  }, [darkmode, images]);

  return (
    <div ref={splideRef} className="splide w-full max-w-full min-w-0 h-auto">
      <div className="splide__track overflow-hidden">
        <ul className="splide__list">
          {images.map((img, index) => (
            <li
              key={index}
              className="splide__slide flex min-w-0 items-stretch justify-center"
            >
              <Bookbox
                darkmode={darkmode}
                image={
                  <img
                    src={img.src}
                    alt={img.title}
                    className="h-36 sm:h-40 lg:h-42 lg:w-42 max-w-full lg:max-w-none object-contain rounded-lg"
                  />
                }
                booktitle={img.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
