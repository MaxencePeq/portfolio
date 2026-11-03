import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Darkbox from "@/components/ui/box/Darkbox";
import Stackbox from "@/components/ui/box/Stackbox";

const frameworks = [
  { img: "/img/stack/symfony.webp", title: "Symfony" },
  { img: "/img/stack/laravel.webp", title: "Laravel" },
  { img: "/img/stack/react.webp", title: "React" },
  { img: "/img/stack/net.webp", title: ".NET" },
  { img: "/img/stack/nextjs.webp", title: "Next.js" },
];

const outils = [
  { img: "/img/stack/docker.webp", title: "Docker" },
  { img: "/img/stack/mysql.webp", title: "MySQL" },
  { img: "/img/stack/git.webp", title: "Git" },
  { img: "/img/stack/jinja2.webp", title: "Jinja2" },
  { img: "/img/stack/api.webp", title: "API Platform" },
  { img: "/img/stack/tailwind.webp", title: "Tailwind CSS" },
  { img: "/img/stack/bootstrap.webp", title: "Bootstrap" },
];

const languages = [
  { img: "/img/stack/php.webp", title: "PHP" },
  { img: "/img/stack/js.webp", title: "JavaScript" },
  { img: "/img/stack/cs.webp", title: "C#" },
  { img: "/img/stack/serveur-sql.webp", title: "SQL" },
  { img: "/img/stack/python.webp", title: "Python" },
  { img: "/img/stack/blade.webp", title: "Blade" },
  { img: "/img/stack/typescript.webp", title: "TypeScript" },
];

const AI = [
  { img: "/img/autre/claude-code.webp", title: "Claude Code" },
  { img: "/img/autre/mcp.svg", title: "Model Context Protocol" },
  { img: "/img/autre/Linux.webp", title: "Linux" },
];

export default function Stacks() {
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
                    <Image
                      src={framework.img}
                      alt="" /* le nom est déjà affiché sous le logo */
                      width={40}
                      height={40}
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
                    <Image
                      src={outil.img}
                      alt="" /* le nom est déjà affiché sous le logo */
                      width={40}
                      height={40}
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
                    <Image
                      src={language.img}
                      alt="" /* le nom est déjà affiché sous le logo */
                      width={40}
                      height={40}
                      className="h-8 sm:h-10 w-8 sm:w-10 object-contain"
                    />
                  }
                  name={language.title}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="text-text font-semibold text-sm sm:text-base">
              IA & Autres
            </h3>
            <div className="flex flex-wrap gap-2 justify-start">
              {AI.map((IA) => (
                <Stackbox
                  key={IA.title}
                  image={
                    <Image
                      src={IA.img}
                      alt=""
                      width={40}
                      height={40}
                      className="h-8 sm:h-10 w-8 sm:w-10 object-contain"
                    />
                  }
                  name={IA.title}
                />
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}
