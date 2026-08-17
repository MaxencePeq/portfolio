type DarkboxProps = {
  content: React.ReactNode;
};

// Conteneur centré des sections. Plus aucun fond propre : le clair/sombre est
// entièrement porté par les tokens CSS (.dark sur <html>).
export default function Darkbox({ content }: DarkboxProps) {
  const responsiveClasses = "w-full max-w-[1100px] min-w-0 mx-auto";
  const hover = "hover:-translate-y-[2px] transition-transform duration-200";

  return (
    <div
      className={`relative flex-wrap rounded-2xl ${responsiveClasses} ${hover} md:p-8`}
    >
      {content}
    </div>
  );
}
