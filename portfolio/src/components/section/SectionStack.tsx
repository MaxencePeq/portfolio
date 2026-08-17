import SectionTitle from "../SectionTitle";
import Darkbox from "../box/Darkbox";
import Stackbox from "../box/Stackbox";

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

export default function SectionStack() {
  return (
    <Darkbox
      content={
        <div className="flex flex-col gap-y-4">
          <SectionTitle text="Compétences" />

          <div className="flex flex-col gap-y-2">
            <h3 className="text-text font-semibold text-sm sm:text-base">
              Frameworks
            </h3>
            <div className="flex flex-wrap gap-2 justify-start">
              {frameworks.map((framework) => (
                <Stackbox
                  key={framework.title}
                  image={
                    <img
                      src={framework.img}
                      alt="" /* le nom est déjà affiché sous le logo */
                      loading="lazy"
                      decoding="async"
                      className="h-8 sm:h-10 w-8 sm:w-10 object-contain"
                    />
                  }
                  name={framework.title}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <h3 className="text-text font-semibold text-sm sm:text-base">
              Outils & Technologies
            </h3>
            <div className="flex flex-wrap gap-2 justify-start">
              {outils.map((outil) => (
                <Stackbox
                  key={outil.title}
                  image={
                    <img
                      src={outil.img}
                      alt="" /* le nom est déjà affiché sous le logo */
                      loading="lazy"
                      decoding="async"
                      className="h-8 sm:h-10 w-8 sm:w-10 object-contain"
                    />
                  }
                  name={outil.title}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <h3 className="text-text font-semibold text-sm sm:text-base">
              Langages
            </h3>
            <div className="flex flex-wrap gap-2 justify-start">
              {languages.map((language) => (
                <Stackbox
                  key={language.title}
                  image={
                    <img
                      src={language.img}
                      alt="" /* le nom est déjà affiché sous le logo */
                      loading="lazy"
                      decoding="async"
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
    />
  );
}
