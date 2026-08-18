import SectionTitle from "../SectionTitle";
import Darkbox from "../box/Darkbox";
import Stackbox from "../box/Stackbox";

const frameworks = [
  { img: "/img/stack/symfony.webp", title: "Symfony" },
  { img: "/img/stack/laravel.webp", title: "Laravel" },
  { img: "/img/stack/react.webp", title: "React" },
  { img: "/img/stack/net.webp", title: ".NET" },
  { img: "/img/stack/api.webp", title: "API Platform" },
];

const outils = [
  { img: "/img/stack/docker.webp", title: "Docker" },
  { img: "/img/stack/mysql.webp", title: "MySQL" },
  { img: "/img/stack/git.webp", title: "Git" },
  { img: "/img/stack/phpmyadmin.webp", title: "phpMyAdmin" },
  { img: "/img/stack/tailwind.webp", title: "Tailwind CSS" },
  { img: "/img/stack/bootstrap.webp", title: "Bootstrap" },
];

const languages = [
  { img: "/img/stack/php.webp", title: "PHP" },
  { img: "/img/stack/js.webp", title: "JavaScript" },
  { img: "/img/stack/cs.webp", title: "C#" },
  { img: "/img/stack/python.webp", title: "Python" },
  { img: "/img/stack/twig.webp", title: "Twig" },
  { img: "/img/stack/blade.webp", title: "Blade" },
  { img: "/img/stack/typescript.webp", title: "TypeScript" },
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
