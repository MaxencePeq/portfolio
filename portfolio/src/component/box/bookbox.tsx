type bookboxProps = {
  darkmode: boolean;
  image: React.ReactNode;
  ImageBlockingHeight?: boolean;
  booktitle: string;
};

export default function Bookbox({
  darkmode,
  image,
  ImageBlockingHeight,
  booktitle,
}: bookboxProps) {
  const bgColor = darkmode ? "bg-[#3A3A5A]" : "bg-white";
  const borderColor = darkmode ? "border-gray-600" : "border-white";
  const textColor = darkmode ? "text-[#B8B8B8]" : "text-[#334155]";

  let h;
  if (ImageBlockingHeight) {
    h = "h-32";
  }
  return (
    <div className="w-full min-w-0">
      <div
        className={`${bgColor} ${h} w-full min-w-0 max-w-52 lg:min-h-70 p-4 sm:p-5 lg:p-7 border ${borderColor} rounded-xl flex flex-col gap-y-3 sm:gap-y-4 justify-center items-center text-center overflow-hidden}`}
      >
        {image}
        <p
          className={`${textColor} w-full lg:min-w-42 break-words text-xs sm:text-sm font-semibold leading-snug`}
        >
          {booktitle}
        </p>
      </div>
    </div>
  );
}
