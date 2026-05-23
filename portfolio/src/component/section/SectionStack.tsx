import { getLeftBorderColor } from "../../utils/infoCalc";
import Darkbox from "../box/darkbox";
import Stackbox from "../box/stackbox";

type SectionProps = {
  darkmode: boolean;
};

const frameworks = [
  { img: "/img/stack/symfony.png", title: "Symfony" },
  { img: "/img/stack/laravel.png", title: "Laravel" },
  { img: "/img/stack/react.png", title: "React" },
  { img: "/img/stack/net.png", title: ".NET" },
  { img: "/img/stack/api.webp", title: "API Platform" },
];

const outils = [
  { img: "/img/stack/docker.png", title: "Docker" },
  { img: "/img/stack/mysql.png", title: "MySQL" },
  { img: "/img/stack/serveur-sql.png", title: "SQL" },
  { img: "/img/stack/git.png", title: "Git" },
  { img: "/img/stack/phpmyadmin.png", title: "phpMyAdmin" },
  { img: "/img/stack/composer.png", title: "Composer" },
  { img: "/img/stack/tailwind.png", title: "Tailwind CSS" },
  { img: "/img/stack/bootstrap.png", title: "Bootstrap" },
];

const languages = [
  { img: "/img/stack/php.png", title: "PHP" },
  { img: "/img/stack/js.png", title: "JavaScript" },
  { img: "/img/stack/cs.png", title: "C#" },
  { img: "/img/stack/python.png", title: "Python" },
  { img: "/img/stack/twig.png", title: "Twig" },
  { img: "/img/stack/blade.png", title: "Blade" },
  { img: "/img/stack/jsx.png", title: "JSX" },
  { img: "/img/stack/typescript.png", title: "TypeScript" },
  { img: "/img/stack/html-5.png", title: "HTML" },
  { img: "/img/stack/css-3.png", title: "CSS" },
];

export default function SectionStack({ darkmode }: SectionProps) {
  return (
    <Darkbox
      darkmode={darkmode}
      content={
        <div className="flex flex-col gap-y-4">
          <p
            className={`text-2xl sm:text-3xl text-white font-semibold border-l-4 pl-4 mb-3 ${getLeftBorderColor(darkmode)}`}
          >
            Technologie & Stack
          </p>

          <div className="flex flex-col gap-y-2">
            <p className={`text-white font-semibold text-sm sm:text-base`}>
              Frameworks
            </p>
            <div className="flex flex-wrap gap-2 justify-start">
              {frameworks.map((framework) => (
                <Stackbox
                  key={framework.title}
                  darkmode={darkmode}
                  image={
                    <img
                      src={framework.img}
                      alt={`${framework.title}`}
                      className="h-8 sm:h-10 w-8 sm:w-10 object-contain"
                    />
                  }
                  name={framework.title}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <p className={`text-white font-semibold text-sm sm:text-base`}>
              Outils & Technologies
            </p>
            <div className="flex flex-wrap gap-2 justify-start">
              {outils.map((outil) => (
                <Stackbox
                  key={outil.title}
                  darkmode={darkmode}
                  image={
                    <img
                      src={outil.img}
                      alt={`${outil.title}`}
                      className="h-8 sm:h-10 w-8 sm:w-10 object-contain"
                    />
                  }
                  name={outil.title}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <p className={`text-white font-semibold text-sm sm:text-base`}>
              Langages
            </p>
            <div className="flex flex-wrap gap-2 justify-start">
              {languages.map((language) => (
                <Stackbox
                  key={language.title}
                  darkmode={darkmode}
                  image={
                    <img
                      src={language.img}
                      alt={`${language.title}`}
                      className="h-8 sm:h-10 w-8 sm:w-10 object-contain"
                    />
                  }
                  name={language.title}
                />
              ))}
            </div>
          </div>
        </div>
      }
      number={4}
    />
  );
}
