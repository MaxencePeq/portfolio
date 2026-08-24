import { Link } from "react-router-dom";

type DarkButtonProps = {
  text: string;
  textMobile?: string;
  dark: boolean;
  to?: string;
};

export default function DarkButton({
  text,
  dark,
  to,
  textMobile,
}: DarkButtonProps) {
  // dark : bg-accent + text-accent-contrast / sinon : border-line + text-text
  let backgroundColor = "bg-accent";
  let textColor = "text-accent-contrast";
  let borderColor = "border-accent";

  if (!dark) {
    backgroundColor = "bg-transparent hover:bg-surface";
    textColor = "text-text";
    borderColor = "border-line";
  }

  const hover = "hover:-translate-y-[2px] transition-all duration-200";
  const style = `${backgroundColor} ${textColor} font-semibold border ${borderColor} rounded-lg cursor-pointer text-base py-3 px-6 inline-block`;

  const label = textMobile ? (
    <>
      <span className="sm:hidden">{textMobile}</span>
      <span className="hidden sm:inline">{text}</span>
    </>
  ) : (
    text
  );

  // route interne -> Link (SPA) ; mailto/http -> <a> classique
  const internal = to?.startsWith("/") && !to.startsWith("//");

  return (
    <div className={hover}>
      {internal ? (
        <Link to={to!} className={style}>
          {label}
        </Link>
      ) : (
        <a
          href={to}
          // mailto: reste dans l'onglet courant, le reste part en externe
          target={to?.startsWith("http") ? "_blank" : undefined}
          rel={to?.startsWith("http") ? "noreferrer" : undefined}
          className={style}
        >
          {label}
        </a>
      )}
    </div>
  );
}
