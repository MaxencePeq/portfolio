import Darkbox from "../box/darkbox";

type SectionProps = {
  darkmode: boolean;
};

export default function SectionCv({ darkmode }: SectionProps) {
  const cvImagePath = "/img/me/cv.jpg";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvImagePath;
    link.download = "cv.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    const printWindow = window.open(cvImagePath, "print");
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  // Styles pour le bouton dark
  const darkButtonStyle = darkmode
    ? "bg-[#4DA6FF] text-white border-[#BFF0FB]"
    : "bg-white text-[#2563EB] border-white";

  // Styles pour le bouton clair
  const lightButtonStyle = darkmode
    ? "bg-[#3A3A5A] text-white border-[#61617B] hover:bg-[#484873]"
    : "bg-transparent text-white border-white/70 hover:bg-white/10";

  return (
    <>
      <Darkbox
        darkmode={darkmode}
        content={
          <div className="flex flex-col items-center w-full gap-6">
            <p className="text-3xl text-white font-semibold">Mon CV</p>

            <img
              src={cvImagePath}
              alt="CV"
              className="w-full max-w-md rounded-lg shadow-md"
            />

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button
                onClick={handleDownload}
                className={`${darkButtonStyle} font-semibold border rounded-lg cursor-pointer text-lg py-2 px-6 shadow-sm hover:-translate-y-[2px] transition-all duration-200`}
              >
                Télécharger
              </button>

              <button
                onClick={handlePrint}
                className={`${lightButtonStyle} font-semibold border rounded-lg cursor-pointer text-lg py-2 px-6 shadow-sm hover:-translate-y-[2px] transition-all duration-200`}
              >
                Imprimer
              </button>
            </div>
          </div>
        }
      />
    </>
  );
}
