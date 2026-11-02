import SectionTitle from "@/components/ui/SectionTitle";
import Darkbox from "@/components/ui/box/Darkbox";
import DarkButton from "@/components/ui/DarkButton";

const reperes = [
  {
    label: "Formation",
    value: "BUT Informatique, 3ᵉ année — URCA, Reims",
  },
  {
    label: "Actuellement",
    value: "Développeur alternant chez Legras Industries",
  },
  {
    label: "Langues",
    value: "Français natif · Anglais C1",
  },
  {
    label: "Mobilité",
    value: "Permis B, véhiculé — Reims, Épernay, Chalon et alentours",
  },
];

export default function Apropos() {
  return (
    <Darkbox
      content={
        <div className="flex flex-col gap-y-10">
          <SectionTitle text="À propos" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="type-body text-muted flex flex-col gap-4">
              <p>
                Développeur passioné, je code depuis le lycée et cette passion
                ne m'a toujours pas quittée.
              </p>

              <p>
                Je suis daltonien, ce qui me force à toujours penser à
                l&apos;accessiblité de mes projets.
              </p>

              <p>
                A part le travail, je suis un passionné d&apos;art. D&apos;abord
                de musique, je suis pianiste depuis 6 ans bientôt. Mais aussi la
                peinture où je m&apos;exerce à l&apos;aquarelle, et surtout la
                littérature : je dévore plusieurs livres par mois (classique,
                science politique, fantaisie, etc). Vous pouvez retrouver mes
                recommandations dans la partie `&quot;Passions`&quot;.
                <br /> Cinéma, sport et j&apos;en passe !
              </p>

              <p>Le reste est dans les projets en dessous.</p>
            </div>

            <dl className="flex flex-col gap-3">
              {reperes.map(({ label, value }) => (
                <div
                  key={label}
                  className="p-5 rounded-2xl bg-surface border border-line"
                >
                  <dt className="type-eyebrow text-muted">{label}</dt>
                  <dd className="type-body text-text mt-1">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex items-center justify-center">
            <DarkButton
              text="Me contacter"
              dark={true}
              to="mailto:maxence.pequeno@icloud.com"
            />
          </div>
        </div>
      }
    />
  );
}
