type stackboxProps = {
  darkmode: boolean;
  image: React.ReactNode;
  name: string;
};

export default function Stackbox({ darkmode, image, name }: stackboxProps) {
  const bgColor = darkmode ? "bg-[#3A3A5A]" : "bg-white";
  const borderColor = darkmode ? "border-gray-600" : "border-white";
  const textColor = darkmode ? "text-[#B8B8B8]" : "text-[#334155]";

  return (
    <div className="">
      <div
        className={`${bgColor} min-w-0 w-24 h-24 sm:w-28 sm:h-28 p-2 border ${borderColor} rounded-xl flex flex-col gap-y-1 justify-center items-center text-center overflow-hidden`}
      >
        {image}
        <p
          className={`${textColor} w-full break-words text-xs font-semibold leading-tight`}
        >
          {name}
        </p>
      </div>
    </div>
  );
}
