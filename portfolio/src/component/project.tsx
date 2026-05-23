import { getLeftBorderColor } from "../utils/infoCalc";
import Darkbox from "./box/darkbox";
import Stackbox from "./box/stackbox";
import Carrousel from "./carrousel";

type ProjectProps = {
  darkmode: boolean;
  isFirstInType: boolean;
  type?: "professionnel" | "personnel" | "académique";
  images: string[];
  title: string;
  year: string;
  isLink?: boolean;
  titleLink?: string;
  description: React.ReactNode;
  stacks: { img: string; title: string }[];
};

export default function Project({
  darkmode,
  isFirstInType,
  type,
  images,
  title,
  year,
  isLink,
  titleLink,
  description,
  stacks,
}: ProjectProps) {
  const underlineColor = darkmode ? "decoration-[#2563EB]" : "decoration-white";
  const TitleColor = darkmode ? "text-[#2563EB]" : "text-white";

  // Const avec le contenu des titres
  const titleContent = isLink ? (
    <a
      href={`${titleLink}`}
      className={`underline ${underlineColor} decoration-2 ${TitleColor} font-bold`}
    >
      {title}
    </a>
  ) : (
    <>{title}</>
  );

  // Const avec le contenu du type de projet
  const typeContent = isFirstInType ? (
    <p
      className={`text-2xl sm:text-4xl text-white font-semibold border-l-4 pl-4 mb-3 ${getLeftBorderColor(darkmode)}`}
    >
      Réalisations {type}
    </p>
  ) : null;

  // Const avec le reste du contenu
  const content = (
    <>
      <Darkbox
        darkmode={darkmode}
        content={
          <div className="flex flex-col gap-y-11">
            {typeContent}
            <div className="flex flex-col lg:gap-y-3">
              <p className="text-2xl text-white text-center font-semibold">
                {" "}
                {year} {titleContent}{" "}
              </p>
              <div className="text-sm text-white text-center">
                {description}
              </div>

              {/* Carousel */}
              <Carrousel images={images} />

              {/* Stack */}
              <div className="flex flex-row gap-x-2 gap-y-2 flex-1 items-center justify-center flex-wrap">
                {stacks.map((stacks) => (
                  <Stackbox
                    key={stacks.title}
                    darkmode={darkmode}
                    image={
                      <img
                        src={stacks.img}
                        alt={`${stacks.title}`}
                        className="h-8 sm:h-10 w-8 sm:w-10 object-contain"
                      />
                    }
                    name={stacks.title}
                  />
                ))}
              </div>
            </div>
          </div>
        }
      />
    </>
  );
  return content;
}
