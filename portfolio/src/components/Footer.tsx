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
          <p className="type-eyebrow text-muted">Contact</p>

          <p className="type-section text-text">Disponible pour un projet</p>
        </div>

        <div className="flex flex-row flex-wrap items-center gap-x-10 gap-y-3">
          {contacts.map(({ label, to }) => (
            <a
              key={label}
              href={to}
              // mailto: reste dans l'onglet courant, le reste part en externe
              target={to.startsWith("http") ? "_blank" : undefined}
              rel={to.startsWith("http") ? "noreferrer" : undefined}
              className="text-text transition-colors hover:text-accent-text"
            >
              {label}
            </a>
          ))}
        </div>

        <p className="font-mono text-xs tracking-wider text-muted">
          © {new Date().getFullYear()} Maxence Pequeno
        </p>
      </div>
    </footer>
  );
}
