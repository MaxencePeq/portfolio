type LightboxProps = {
  image: React.ReactNode;
};

// Cadre clair pour un visuel isolé. bg-surface + border-line.
export default function Lightbox({ image }: LightboxProps) {
  const hover = "hover:-translate-y-[2px] transition-transform duration-200";

  return (
    <div
      className={`bg-surface w-full p-3 border border-line rounded-xl flex justify-center items-center overflow-hidden ${hover}`}
    >
      {image}
    </div>
  );
}
