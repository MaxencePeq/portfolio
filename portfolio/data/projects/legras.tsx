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
          livre les outils internes qui y répondent. Pour l&apos;équipe
          homologation, j&apos;ai développé un intranet qui génère
          automatiquement les certificats de conformité : on saisit un code,
          l&apos;application croise les données de plusieurs fichiers Excel et
          produit le certificat au format XML, sans aucune saisie manuelle.
        </p>
      }
      stacks={stack}
    />
  );
}
