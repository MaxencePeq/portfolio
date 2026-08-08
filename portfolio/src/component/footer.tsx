const contacts = [
  {
    label: "maxence.pequeno@icloud.com",
    to: "mailto:maxence.pequeno@icloud.com",
  },
  { label: "GitHub", to: "https://github.com/MaxencePeq" },
  {
    label: "LinkedIn",
    to: "https://www.linkedin.com/in/maxence-pequeno-671581329/",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="w-full max-w-275 min-w-0 mx-auto flex flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          {/* type-eyebrow + text-muted */}
          <p className="type-eyebrow text-muted">Contact</p>

          {/* type-section + text-text */}
          <p className="type-section text-text">Disponible pour un projet</p>
        </div>

        {/* text-text, text-accent-text au hover */}
        <div className="flex flex-row flex-wrap items-center gap-x-10 gap-y-3">
          {contacts.map(({ label, to }) => (
            <a
              key={label}
              href={to}
              className="text-text transition-colors hover:text-accent-text"
            >
              {label}
            </a>
          ))}
        </div>

        {/* font-mono + text-muted */}
        <p className="font-mono text-xs tracking-wider text-muted">
          © {new Date().getFullYear()} Maxence Pequeno
        </p>
      </div>
    </footer>
  );
}
