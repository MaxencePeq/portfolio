import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Darkbox from "@/components/ui/box/Darkbox";
import Stackbox from "@/components/ui/box/Stackbox";

const rows = [
  [
    {
      title: "Langages",
      items: [
        { img: "/img/stack/php.webp", title: "PHP" },
        { img: "/img/stack/typescript.webp", title: "TypeScript" },
        { img: "/img/stack/js.webp", title: "JavaScript" },
        { img: "/img/stack/serveur-sql.webp", title: "SQL" },
        { img: "/img/stack/cs.webp", title: "C#" },
        { img: "/img/stack/python.webp", title: "Python" },
      ],
    },
  ],
  [
    {
      title: "Back-end",
      items: [
        { img: "/img/stack/symfony.webp", title: "Symfony" },
        { img: "/img/stack/api.webp", title: "API Platform" },
        { img: "/img/stack/laravel.webp", title: "Laravel" },
        { img: "/img/stack/twig.webp", title: "Twig" },
        { img: "/img/stack/blade.webp", title: "Blade" },
        { img: "/img/stack/jinja2.webp", title: "Jinja2" },
        { img: "/img/stack/fastapi.webp", title: "FastAPI" },
      ],
    },
  ],
  [
    {
      title: "Front-end",
      items: [
        { img: "/img/stack/react.webp", title: "React" },
        { img: "/img/stack/nextjs.webp", title: "Next.js" },
        { img: "/img/stack/tailwind.webp", title: "Tailwind CSS" },
        { img: "/img/stack/bootstrap.webp", title: "Bootstrap" },
      ],
    },
  ],
  [
    {
      title: "Données & Infra",
      items: [
        { img: "/img/stack/mysql.webp", title: "MySQL" },
        { img: "/img/stack/sqlite.webp", title: "SQLite" },
        { img: "/img/stack/docker.webp", title: "Docker" },
        { img: "/img/autre/Linux.webp", title: "Linux" },
        { img: "/img/stack/git.webp", title: "Git" },
      ],
    },
    {
      title: "IA",
      items: [
        { img: "/img/autre/claude-code.webp", title: "Claude Code" },
        { img: "/img/autre/mcp.svg", title: "Model Context Protocol" },
      ],
    },
  ],
];

export default function Stacks() {
  return (
    <Darkbox
      content={
        <div className="flex flex-col gap-y-4">
          <SectionTitle text="Compétences" />

          {rows.map((row) => (
            <div key={row[0].title} className="flex flex-wrap gap-x-8 gap-y-4">
              {row.map(({ title, items }) => (
                <div key={title} className="flex flex-col gap-y-2">
                  <h3 className="text-text font-semibold text-sm sm:text-base">
                    {title}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-start">
                    {items.map((item) => (
                      <Stackbox
                        key={item.title}
                        image={
                          item.img && (
                            <Image
                              src={item.img}
                              alt="" /* le nom est déjà affiché sous le logo */
                              width={40}
                              height={40}
                              className="h-8 sm:h-10 w-8 sm:w-10 object-contain"
                            />
                          )
                        }
                        name={item.title}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      }
    />
  );
}
