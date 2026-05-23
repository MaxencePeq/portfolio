import Project from "../project";

type SectionProps = {
  darkmode: boolean;
};

const images = [
  "/img/project/pro/lebelouvrage/1.png",
  "/img/project/pro/lebelouvrage/2.png",
  "/img/project/pro/lebelouvrage/3.png",
  "/img/project/pro/lebelouvrage/4.png",
];

export default function SectionProProject({ darkmode }: SectionProps) {
  const underlineColor = darkmode ? "decoration-[#2563EB]" : "decoration-white";
  return (
    <>
      <Project
        darkmode={darkmode}
        type={"professionnel"}
        images={images}
        title={"Lebel Ouvrage"}
        year={"2026"}
        titleLink={"https://lebelouvrage.bzh"}
        description={
          <>
            {" "}
            <p className="" id="realisation">
              Est un site vitrine pour un artisan fait en collaboration avec mon
              collègue{" "}
              <a
                href="https://calvin-nogueira.fr"
                className={`underline ${underlineColor} decoration-2`}
              >
                Calvin Nogueira
              </a>
              . <br />
              Lien :{" "}
              <a
                href="https://lebelouvrage.bzh"
                className={`underline ${underlineColor} decoration-2`}
              >
                Lebelouvrage.bzh
              </a>{" "}
            </p>{" "}
          </>
        }
      />
    </>
  );
}
