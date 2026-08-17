import DescriptionProjetStack from "./box/DescriptionProjetStack";
import Carrousel from "./Carrousel";

type ProjectProps = {
  type?: "professionnelles" | "personnelles" | "académiques";
  images: string[];
  title: string;
  year: string;
  isLink?: boolean;
  titleLink?: string;
  bigTitle?: boolean;
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
  bigTitle,
  description,
  stacks,
}: ProjectProps) {
  // Le projet mis en avant est un h2, les cartes de la grille des h3 : ça donne
  // un plan de page sans saut de niveau sous le h1 de la home.
  const Heading = bigTitle ? "h2" : "h3";
  const titleSize = bigTitle ? "type-section" : "type-card";
  const card = "bg-surface border border-line rounded-2xl overflow-hidden";
  const hover = "hover:-translate-y-[2px] transition-transform duration-200";

  return (
    <div className={`w-full max-w-275 min-w-0 mx-auto ${card} ${hover}`}>
      <Carrousel images={images} alt={title} />

      <div className="flex flex-col gap-y-4 p-6 sm:gap-y-5 sm:p-10">
        <p className="type-eyebrow text-muted">
          {year} · {type}
        </p>

        <Heading className={`${titleSize} text-text`}>
          {isLink ? (
            <a
              href={titleLink}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-text"
            >
              {title} <span className="text-accent-text">↗</span>
            </a>
          ) : (
            title
          )}
        </Heading>

        <div className="type-body text-muted">{description}</div>

        <div className="flex flex-row gap-x-2 gap-y-2 flex-wrap">
          {stacks.map((stack) => (
            <DescriptionProjetStack key={stack.title} name={stack.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
