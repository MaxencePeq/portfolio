type BookboxProps = {
  image: React.ReactNode;
  booktitle: string;
};

// Carte d'une couverture de livre. bg-surface-2 + border-line, titre en text-muted.
export default function Bookbox({ image, booktitle }: BookboxProps) {
  return (
    <div className="w-full min-w-0">
      <div className="bg-surface-2 w-full min-w-0 max-w-52 lg:min-h-70 p-4 sm:p-5 lg:p-7 border border-line rounded-xl flex flex-col gap-y-3 sm:gap-y-4 justify-center items-center text-center overflow-hidden">
        {image}
        <p className="text-muted w-full lg:min-w-42 break-words text-xs sm:text-sm font-semibold leading-snug">
          {booktitle}
        </p>
      </div>
    </div>
  );
}
