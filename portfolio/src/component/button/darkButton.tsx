type buttonProps = {
  darkmode: boolean;
  text: string;
  textMobile?: string;
  dark: boolean;
  to?: string;
};

export default function darkButton({
  darkmode,
  text,
  dark,
  to,
  textMobile,
}: buttonProps) {
  let backgroundColor = dark ? "bg-[#4DA6FF]" : "bg-[#3A3A5A]";
  let textColor = "text-white";
  let borderColor = dark ? "border-[#BFF0FB]" : "border-[#61617B]";

  if (!darkmode) {
    if (dark) {
      backgroundColor = "bg-white";
      textColor = "text-[#2563EB]";
      borderColor = "border-white";
    } else {
      backgroundColor = "bg-transparent hover:bg-white/10";
      textColor = "text-white";
      borderColor = "border-white/70";
    }
  }

  const hover = "hover:-translate-y-[2px] transition-all duration-200";

  return (
    <div className={hover}>
      <a
        href={to}
        className={`shadow-sm ${backgroundColor} ${textColor} font-semibold border ${borderColor} rounded-lg cursor-pointer text-lg py-2 px-4 inline-block`}
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
