import Project from "@/components/Project";

const stack = ["Python", "FastAPI", "Jinja2", "SQLite", "Git"];

export default function Legras() {
  return (
    <Project
      type="professionnelles"
      title="Legras Industries - Développeur alternant"
      year="2026 – 2027"
      bigTitle={true}
      description={
        <p>
          En alternance, je fais le lien entre plusieurs équipes et
          l&apos;informatique : je recueille leurs besoins, puis je conçois et
          livre les outils internes qui y répondent. Pour les équipes des
          bureaux, j&apos;ai développé un intranet qui génère automatiquement
          certains papiers. On saisit un code, l&apos;application croise les
          données de plusieurs sources d'informations et produit le fichier au
          format XML, sans aucune saisie manuelle.
        </p>
      }
      stacks={stack}
    />
  );
}
