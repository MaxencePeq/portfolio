import { getLeftBorderColor } from "../utils/infoCalc";
import Darkbox from "./box/darkbox";
import Carousel from "./carrousel";

type ProjectProps = {
  darkmode: boolean;
  type: "professionnel" | "personnel" | "académique";
  images: string[];
  title: string;
  year: string;
  titleLink: string;
  description: React.ReactNode;
};

export default function Project({
  darkmode,
  type,
  images,
  title,
  year,
  titleLink,
  description,
}: ProjectProps) {
  const underlineColor = darkmode ? "decoration-[#2563EB]" : "decoration-white";
  return (
    <>
      <Darkbox
        darkmode={darkmode}
        content={
          <div className="flex flex-col gap-y-11">
            <p
              className={`text-2xl sm:text-4xl text-white font-semibold border-l-4 pl-4 mb-3 ${getLeftBorderColor(darkmode)}`}
            >
              Réalisations {type}
            </p>
            <div className="flex flex-col gap-y-3">
              <p className="text-2xl text-white text-center font-semibold">
                {" "}
                {year}{" "}
                <a
                  href={`${titleLink}`}
                  className={`underline ${underlineColor} decoration-2`}
                >
                  {title}
                </a>
              </p>
              <div className="text-sm text-white text-center">
                {description}
              </div>
              <Carousel images={images} />
            </div>
          </div>
        }
      />
    </>
  );
}
