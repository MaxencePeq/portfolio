type stackboxProps = {
  darkmode: boolean;
  image: React.ReactNode;
  name: string;
};

export default function Stackbox({ image, name }: stackboxProps) {
  // bg-surface-2 + border-line, nom en text-muted
  return (
    <div className="">
      <div className="bg-surface-2 min-w-0 w-24 h-24 sm:w-28 sm:h-28 p-2 border border-line rounded-xl flex flex-col gap-y-1 justify-center items-center text-center overflow-hidden">
        {image}
        <p className="text-muted w-full break-words text-xs font-semibold leading-tight">
          {name}
        </p>
      </div>
    </div>
  );
}
