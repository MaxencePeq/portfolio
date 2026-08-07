type buttonProps = {
  text: string;
  textMobile?: string;
  dark: boolean;
  to?: string;
};

export default function darkButton({
  text,
  dark,
  to,
  textMobile,
}: buttonProps) {
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

  return (
    <div className={hover}>
      <a
        href={to}
        className={`${backgroundColor} ${textColor} font-semibold border ${borderColor} rounded-lg cursor-pointer text-base py-3 px-6 inline-block`}
      >
        {textMobile ? (
          <>
            <span className="sm:hidden">{textMobile}</span>
            <span className="hidden sm:inline">{text}</span>
          </>
        ) : (
          text
        )}
      </a>
    </div>
  );
}
