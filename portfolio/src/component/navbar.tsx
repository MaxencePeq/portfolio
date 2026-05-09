type navbarProps = {
  darkmode: boolean;
  setDarkmode: (darkmode: boolean) => void;
};

export default function Navbar({ darkmode, setDarkmode }: navbarProps) {
  let bgColor = "bg-[#FEFEFE]";
  let titleColor = "text-[#2563EB]";
  let textColor = "text-gray-600";

  if (darkmode) {
    bgColor = "bg-[#2D2D44]";
    titleColor = "text-[#2563EB]";
    textColor = "text-gray-600";
  }

  const hover = darkmode
    ? "hover:rounded-lg hover:bg-[#424257] hover:text-gray-800 p-2"
    : "hover:rounded-lg hover:bg-gray-100 hover:text-gray-900 p-2";

  return (
    <div
      className={`flex flex-row ${bgColor} p-4 px-6 justify-between items-center`}
    >
      {/* Liens vers les différentes sections du site */}
      <p className={`${titleColor} font-bold text-xl`}>MP</p>
      <div className={`${textColor} text-sm flex flex-row gap-10`}>
        <a href="" className={`${hover}`}>
          Accueil
        </a>
        <a href="" className={`${hover}`}>
          Réalisations
        </a>
        <a href="" className={`${hover}`}>
          Autres
        </a>
        <a href="" className={`${hover}`}>
          CV
        </a>
      </div>

      {/* logos */}
      <div className="flex flex-row gap-4">
        <a href="https://github.com/MaxencePeq">
          <img
            src="../../public/img/navbar/githubIcon.png"
            alt="GitHub"
            className="w-6 h-6"
          />
        </a>

        <a href="https://www.linkedin.com/in/maxence-pequeno-671581329/">
          <img
            src="../../public/img/navbar/linkedin.png"
            alt="linkedin"
            className="w-6 h-6"
          />
        </a>
        <a href="https://www.instagram.com/pianomaxence/">
          <img
            src="../../public/img/navbar/instagram.png"
            alt="instagram"
            className="w-6 h-6"
          />
        </a>
        <img
          src="/img/navbar/darkmode.png"
          alt="darkmode"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setDarkmode(!darkmode)}
        />
      </div>
    </div>
  );
}
