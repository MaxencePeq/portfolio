type LightboxProps = {
  darkmode: boolean;
  image: React.ReactNode;
};

export default function Lightbox({ darkmode, image }: LightboxProps) {
  const bgColor = darkmode ? "bg-[#3A3A5A]" : "bg-white";
  const borderColor = darkmode ? "border-gray-600" : "border-white";
  const hover = "hover:-translate-y-[1px] transition-transform duration-100";

  return (
    <div
      className={`${bgColor} w-full h-32 p-3 border ${borderColor} rounded-xl flex justify-center items-center overflow-hidden ${hover}`}
    >
      {image}
    </div>
  );
}
