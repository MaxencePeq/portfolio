type navbarProps = {
  darkmode: boolean;
  setDarkmode: (darkmode: boolean) => void;
};

export default function Navbar({ darkmode, setDarkmode }: navbarProps) {
  const bgColor = darkmode ? "bg-[#2D2D44]" : "bg-[#FEFEFE]";
  const titleColor = "text-[#2563EB]";
  const textColor = darkmode ? "text-white" : "text-[#2563EB]";

  const hover = darkmode
    ? "hover:rounded-lg hover:bg-[#424257] hover:text-gray-800 p-1 sm:p-2"
    : "hover:rounded-lg hover:bg-gray-100 hover:text-gray-900 p-1 sm:p-2";

  return (
    <div
      className={`flex flex-row ${bgColor} p-2 sm:p-3 px-3 sm:px-6 justify-between items-center shadow-lg gap-2`}
    >
      <p className={`${titleColor} font-bold text-lg sm:text-xl`}>MP</p>

      <div
        className={`${textColor} font-semibold text-xs sm:text-sm flex flex-row gap-1 sm:gap-6`}
      >
        <a href="/#accueil" className={hover}>
          Accueil
        </a>
        <a href="/#realisation" className={hover}>
          Réalisations
        </a>
        <a href="/#passions" className={hover}>
          Passions
        </a>
        <a href="/cv" className={hover}>
          CV
        </a>
      </div>

      <div className="flex flex-row gap-2 sm:gap-6 items-center">
        <a href="https://github.com/MaxencePeq">
          <img
            src="/img/navbar/githubIcon.png"
            alt="GitHub"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </a>
        <a href="https://www.linkedin.com/in/maxence-pequeno-671581329/">
          <img
            src="/img/navbar/linkedin.png"
            alt="linkedin"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </a>
        <a href="https://www.instagram.com/pianomaxence/">
          <img
            src="/img/navbar/instagram.png"
            alt="instagram"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </a>
        <img
          src="/img/navbar/darkmode.png"
          alt="darkmode"
          className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
          onClick={() => setDarkmode(!darkmode)}
        />
      </div>
    </div>
  );
}
