import DarkButton from "../button/DarkButton";
import Darkbox from "../box/Darkbox";

export default function SectionHome() {
  return (
    <Darkbox
      content={
        <div className="flex flex-col md:flex-row gap-8 md:gap-x-14 items-center">
          <div className="flex flex-col flex-1 gap-6 md:gap-10 w-full">
            <p className="type-eyebrow text-accent-text animate-slide-in">
              Développeur full-stack · Étudiant
            </p>
            <h1 className="type-hero text-text animate-slide-in [animation-delay:80ms]">
              Maxence Pequeno
            </h1>

            <p className="type-body text-muted max-w-[52ch] animate-slide-in [animation-delay:340ms]">
              Back-end Symfony et Laravel, front-end React. Un site d'artisan en
              production, et une extension pour daltoniens — parce que j'en suis
              un.
            </p>

            <div className="flex flex-row items-center gap-3 animate-slide-in [animation-delay:440ms]">
              <DarkButton
                text="Voir mon CV"
                textMobile="CV"
                dark={true}
                to="/cv"
              />
              <DarkButton
                text="Me contacter"
                textMobile="Contact"
                dark={false}
                to="mailto:maxence.pequeno@icloud.com"
              />
            </div>

            <p className="type-eyebrow text-muted border-t border-line pt-6 animate-slide-in [animation-delay:320ms]">
              Symfony · Laravel · React · .NET
            </p>
          </div>
          <img
            src="/img/me/mePhoto.png"
            alt="Maxence Pequeno"
            // image LCP : surtout pas de lazy ici
            fetchPriority="high"
            decoding="async"
            className="rounded-2xl w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 xl:w-100 xl:h-100 object-cover shrink-0"
          />
        </div>
      }
    />
  );
}
