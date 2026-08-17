import Darkbox from "../box/Darkbox";

export default function SectionCv() {
  const cvImagePath = "/img/me/cv.jpg";

  const handlePrint = () => {
    const printWindow = window.open(cvImagePath, "print");
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  // Mêmes tokens que DarkButton : le swap clair/sombre est géré par le CSS.
  const darkButtonStyle = "bg-accent text-accent-contrast border-accent";
  const lightButtonStyle =
    "bg-transparent hover:bg-surface text-text border-line";

  const buttonBase =
    "font-semibold border rounded-lg cursor-pointer text-lg py-2 px-6 shadow-sm hover:-translate-y-[2px] transition-all duration-200";

  return (
    <Darkbox
      content={
        <div className="flex flex-col items-center w-full gap-6">
          <h1 className="text-3xl text-text font-semibold">Mon CV</h1>

          <img
            src={cvImagePath}
            alt="CV de Maxence Pequeno"
            // contenu principal de la page /cv : pas de lazy
            decoding="async"
            className="w-full max-w-md rounded-lg shadow-md"
          />

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            {/* <a download> natif : pas besoin de fabriquer un lien en JS */}
            <a
              href={cvImagePath}
              download="CV-Maxence-Pequeno.jpg"
              className={`${darkButtonStyle} ${buttonBase} inline-block text-center`}
            >
              Télécharger
            </a>

            <button
              onClick={handlePrint}
              className={`${lightButtonStyle} ${buttonBase}`}
            >
              Imprimer
            </button>
          </div>
        </div>
      }
    />
  );
}
