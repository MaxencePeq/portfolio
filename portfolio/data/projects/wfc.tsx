import Project from "@/components/Project";
import wfc1 from "@/public/img/project/perso/WFC/1.webp";
import wfc2 from "@/public/img/project/perso/WFC/2.webp";
import wfc3 from "@/public/img/project/perso/WFC/3.webp";
import wfc4 from "@/public/img/project/perso/WFC/4.webp";

const images = [wfc1, wfc2, wfc3, wfc4];

const stack = ["JavaScript", "HTML", "CSS"];

export default function WFC() {
  return (
    <Project
      type="personnelles"
      images={images}
      title="Website For Colorblind"
      year="2026"
      isLink={true}
      titleLink="https://github.com/MaxencePeq/Website-Colorblind-Extension"
      description={
        <p>
          Extension navigateur qui recalcule les couleurs d'une page pour les
          rendre distinguables aux daltoniens (j'en suis un). Premier prototype
          raté : les matrices simulent le daltonisme mais ne le corrigent pas.
          J'étudie donc actuellement la daltonisation plus en profondeur :
          isoler l'information perdue et la réinjecter dans les canaux encore
          perçus. Le développement est toujours en cours.
        </p>
      }
      stacks={stack}
    />
  );
}
