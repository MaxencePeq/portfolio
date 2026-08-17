type bookboxProps = {
  darkmode: boolean;
  image: React.ReactNode;
  ImageBlockingHeight?: boolean;
  booktitle: string;
};

export default function Bookbox({
  image,
  ImageBlockingHeight,
  booktitle,
}: bookboxProps) {
  // bg-surface-2 + border-line, titre en text-muted
  let h;
  if (ImageBlockingHeight) {
    h = "h-32";
  }
  return (
    <div className="w-full min-w-0">
      <div
        className={`bg-surface-2 ${h} w-full min-w-0 max-w-52 lg:min-h-70 p-4 sm:p-5 lg:p-7 border border-line rounded-xl flex flex-col gap-y-3 sm:gap-y-4 justify-center items-center text-center overflow-hidden`}
      >
        {image}
        <p className="text-muted w-full lg:min-w-42 break-words text-xs sm:text-sm font-semibold leading-snug">
          {booktitle}
        </p>
      </div>
    </div>
  );
}
