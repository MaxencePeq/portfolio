import DescriptionProjetStack from "./box/descriptionProjetStack";
import Carrousel from "./carrousel";

type ProjectProps = {
  darkmode: boolean;
  isFirstInType: boolean;
  type?: "professionnelles" | "personnelles" | "académiques";
  images: string[];
  title: string;
  year: string;
  isLink?: boolean;
  titleLink?: string;
  description: React.ReactNode;
  stacks: { img: string; title: string }[];
};

export default function Project({
  type,
  images,
  title,
  year,
  isLink,
  titleLink,
  description,
  stacks,
}: ProjectProps) {
  // Const avec le contenu des titres -> type-section + text-text, flèche en text-accent-text
  const titleContent = isLink ? (
    <a href={`${titleLink}`} className="hover:text-accent-text">
      {title} <span className="text-accent-text">↗</span>
    </a>
  ) : (
    <>{title}</>
  );

  // Const avec l'année + le type du projet -> type-eyebrow + text-muted
  const header = (
    <p className="type-eyebrow text-muted">
      {year} · {type}
    </p>
  );

  const card = `bg-surface border border-line rounded-2xl overflow-hidden`;
  const hover = "hover:-translate-y-[2px] transition-transform duration-200";

  // Const avec le reste du contenu
  const content = (
    <div className={`w-full max-w-275 min-w-0 mx-auto ${card} ${hover}`}>
      {/* Carousel */}
      <Carrousel images={images} />

      <div className="flex flex-col gap-y-4 p-6 sm:gap-y-5 sm:p-10">
        {/* Header avec année + type du projet */}
        {header}

        <p className="type-section text-text">{titleContent}</p>

        <div className="type-body text-muted">{description}</div>

        {/* Stack */}
        <div className="flex flex-row gap-x-2 gap-y-2 flex-wrap">
          {stacks.map((stacks) => (
            <DescriptionProjetStack key={stacks.title} name={stacks.title} />
          ))}
        </div>
      </div>
    </div>
  );
  return content;
}
