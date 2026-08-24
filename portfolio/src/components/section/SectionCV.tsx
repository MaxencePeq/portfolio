import Darkbox from "../box/Darkbox";

const CV_PATH = "/MaxenceCV.pdf";

export default function SectionCv() {
  // Mêmes tokens que DarkButton : le swap clair/sombre est géré par le CSS.
  const darkButtonStyle = "bg-accent text-accent-contrast border-accent";
  const lightButtonStyle =
    "bg-transparent hover:bg-surface text-text border-line";

  const buttonBase =
    "font-semibold border rounded-lg cursor-pointer text-lg py-2 px-6 shadow-sm hover:-translate-y-[2px] transition-all duration-200 inline-block text-center";

  return (
    <Darkbox
      content={
        <div className="flex flex-col items-center w-full gap-6">
          <h1 className="text-3xl text-text font-semibold">Mon CV</h1>

          <object
            data={CV_PATH}
            type="application/pdf"
            aria-label="CV de Maxence Pequeno"
            className="hidden md:block w-full max-w-3xl h-[80vh] rounded-lg border border-line shadow-md"
          >
            <p className="type-body text-muted p-6 text-center">
              Ton navigateur n'affiche pas les PDF directement.{" "}
              <a href={CV_PATH} className="text-accent-text underline">
                Ouvrir le CV
              </a>
            </p>
          </object>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a
              href={CV_PATH}
              download="CV-Maxence-Pequeno.pdf"
              className={`${darkButtonStyle} ${buttonBase}`}
            >
              Télécharger le PDF
            </a>
            <a
              href={CV_PATH}
              target="_blank"
              rel="noreferrer"
              className={`${lightButtonStyle} ${buttonBase}`}
            >
              Ouvrir dans un onglet
            </a>
          </div>
        </div>
      }
    />
  );
}
