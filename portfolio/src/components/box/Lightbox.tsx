type LightboxProps = {
  darkmode: boolean;
  image: React.ReactNode;
  ImageBlockingHeight: boolean;
};

export default function Lightbox({
  image,
  ImageBlockingHeight,
}: LightboxProps) {
  // bg-surface + border-line
  const hover = "hover:-translate-y-[2px] transition-transform duration-200";

  let h;
  if (ImageBlockingHeight) {
    h = "h-32";
  }
  return (
    <div
      className={`bg-surface w-full ${h} p-3 border border-line rounded-xl flex justify-center items-center overflow-hidden ${hover}`}
    >
      {image}
    </div>
  );
}
