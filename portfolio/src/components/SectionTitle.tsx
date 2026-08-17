type SectionTitleProps = {
  text: string;
};

export default function SectionTitle({ text }: SectionTitleProps) {
  // type-eyebrow + text-muted, filet en border-line
  return (
    <div className="flex flex-row items-center gap-6">
      <h2 className="type-eyebrow text-muted whitespace-nowrap">{text}</h2>
      <div className="flex-1 border-t border-line" />
    </div>
  );
}
