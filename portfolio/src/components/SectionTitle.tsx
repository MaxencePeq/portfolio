type sectionTitleProps = {
  text: string;
};

export default function SectionTitle({ text }: sectionTitleProps) {
  // type-eyebrow + text-muted, filet en border-line
  return (
    <div className="flex flex-row items-center gap-6">
      <p className="type-eyebrow text-muted whitespace-nowrap">{text}</p>
      <div className="flex-1 border-t border-line" />
    </div>
  );
}
