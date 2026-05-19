type LightboxProps = {
  darkmode: boolean;
  image: React.ReactNode;
  ImageBlockingHeight: boolean;
};

export default function Lightbox({
  darkmode,
  image,
  ImageBlockingHeight,
}: LightboxProps) {
  const bgColor = darkmode ? "bg-[#3A3A5A]" : "bg-white";
  const borderColor = darkmode ? "border-gray-600" : "border-white";
  const hover = "hover:-translate-y-[2px] transition-transform duration-200";

  let h;
  if (ImageBlockingHeight) {
    h = "h-32";
  }
  return (
    <div
      className={`${bgColor} w-full ${h} p-3 border ${borderColor} rounded-xl flex justify-center items-center overflow-hidden ${hover}`}
    >
      {image}
    </div>
  );
}
