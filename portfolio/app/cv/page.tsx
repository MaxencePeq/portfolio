import Page from "@/components/Page";
import Darkbox from "@/components/ui/box/Darkbox";
import Image from "next/image";

import cvPreview from "@/public/img/cv.webp";

const CV_PATH = "/CV2027.pdf";

export default function SectionCv() {
  const darkButtonStyle = "bg-accent text-accent-contrast border-accent";
  const lightButtonStyle =
    "bg-transparent hover:bg-surface text-text border-line";

  const buttonBase =
    "font-semibold border rounded-lg cursor-pointer text-lg py-2 px-6 shadow-sm hover:-translate-y-[2px] transition-all duration-200 inline-block text-center";

  return (
    <Page
      content={
        <>
          <Darkbox
            content={
              <div className="flex flex-col items-center w-full gap-3 mt-10">
                <h1 className="text-3xl text-text font-semibold">Mon CV</h1>
                <p className="text-xl text-text">
                  Cliquez pour le découvrir complètement
                </p>

                <a
                  href={CV_PATH}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ouvrir le CV de Maxence Pequeno en PDF"
                  className="block w-full max-w-2xl rounded-sm overflow-hidden ring-1 ring-line shadow-2xl shadow-black/20 hover:-translate-y-1 hover:shadow-black/30 transition-all duration-300"
                >
                  <Image
                    src={cvPreview}
                    alt="Aperçu du CV de Maxence Pequeno"
                    priority
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="w-full h-auto"
                  />
                </a>

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
        </>
      }
    />
  );
}
