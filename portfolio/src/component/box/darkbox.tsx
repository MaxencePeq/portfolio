type DarkboxProps = {
  darkmode: boolean;
  content: React.ReactNode;
};

export default function Darkbox({ darkmode, content }: DarkboxProps) {
  const responsiveClasses = `w-full max-w-[1100px] min-w-0 mx-auto`;
  const hover = "hover:-translate-y-[2px] transition-transform duration-200";

  let bgColor = "";
  if (darkmode) {
    bgColor = "";
  }

  return (
    <div
      className={`relative flex-wrap rounded-2xl ${bgColor} ${responsiveClasses} ${hover} md:p-8`}
    >
      {content}
    </div>
  );
}
