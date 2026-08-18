import SectionTitle from "../SectionTitle";
import Darkbox from "../box/Darkbox";
import DarkButton from "../button/DarkButton";

// Fiche d'identité : ce qu'un recruteur cherche en premier, dans l'ordre où
// il le cherche. Un tableau plutôt que six blocs copiés-collés.
const reperes = [
  {
    label: "Formation",
    value: "BUT Informatique, 3ᵉ année — URCA, Reims",
  },
  {
    label: "Actuellement",
    value: `Alternance en développement d'applications ou web fullstack — de Août 2026 à Août 2027`,
  },
  {
    label: "Langues",
    value: "Français natif · Anglais C1",
  },
  {
    label: "Mobilité",
    value: "Permis B, véhiculé — Reims, Epernay et alentours",
  },
];

export default function SectionApropos() {
  return (
    <Darkbox
      content={
        <div className="flex flex-col gap-y-10">
          <SectionTitle text="À propos" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="type-body text-muted flex flex-col gap-4">
              <p>
                Développeur passioné, je code depuis le lycée et je n'ai
                toujours pas trouvé le jour où ça m'ennuie.
              </p>

              <p>
                Je suis daltonien, ce qui me force à toujours penser à
                l'accessiblité de mes projets (et demander à quelqu'un si mon
                rouge est vraiment rouge).
              </p>

              <p>
                A pars le travail, je suis un passioné d'art. <br />
                Musique : Je suis pianiste depuis 6 ans bientôt. <br />
                Peinture : Je m'exerce a l'aquarelle. <br />
                Littérature : Je dévore plusieurs livre par mois (science
                politique, classique, fantaisie, etc ).
                <br /> Cinéma, sport et j'en passe !
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
