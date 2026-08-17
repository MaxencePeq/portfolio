type descriptionProjetStackProps = {
  name: string;
};

export default function DescriptionProjetStack({
  name,
}: descriptionProjetStackProps) {
  // font-mono + text-xs, bg-surface-2 + border-line + text-muted
  return (
    <span className="font-mono text-xs text-muted bg-surface-2 border border-line rounded-full px-3 py-1.5 inline-block whitespace-nowrap">
      {name}
    </span>
  );
}
