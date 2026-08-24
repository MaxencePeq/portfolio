import Darkbox from "../box/Darkbox";
import ImageSlider from "../slider/ImageSlider";

const images = [
  {
    src: "/img/illustration/bojangles.webp",
    title: "En attendant bojangles",
  },
  {
    src: "/img/illustration/glg.webp",
    title: "Gagner la guerre",
  },
  { src: "/img/illustration/gary.webp", title: "La promesse de l'aube" },
  {
    src: "/img/illustration/lmdf.webp",
    title: "La Maison des Feuilles",
  },
  {
    src: "/img/illustration/lotr.webp",
    title: "Le seigneur des anneaux",
  },
  { src: "/img/illustration/witcher.webp", title: "The witcher" },
  {
    src: "/img/illustration/wager.webp",
    title: "Les naufragés du Wager",
  },
  { src: "/img/illustration/petitprince.webp", title: "Le petit prince" },
  { src: "/img/illustration/foret.webp", title: "L'appel de la forêt" },
];

export default function SectionPassions() {
  // titre en type-section + text-text, paragraphes en type-body + text-muted
  const textClasse = "type-body text-muted";
  return (
    <div className="flex w-full min-w-0 flex-col gap-y-4">
      <Darkbox
        content={
          <div className="flex min-w-0 flex-col gap-6">
            <h1 className="type-section text-text">Mes Passions</h1>
            <div className="flex flex-col gap-4 mt-4">
              <p className={textClasse}>
                Je cultive depuis maintenant 6 ans mon amour pour la musique et
                plus particulièrement pour le piano. <br />
                La lecture est aussi une passion dévorante, avec les classiques
                français et l'horreur fantastique, mais aussi la peinture
                aquarelle...
              </p>
              <p className={textClasse}>
                Pour les intéressé·es, voici une petite sélection de mes
                lectures favorites :
              </p>
            </div>
          </div>
        }
      />
      <Darkbox content={<ImageSlider images={images} />} />
    </div>
  );
}
