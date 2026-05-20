import DarkButton from "../button/darkButton";
import Darkbox from "../box/darkbox";
import Lightbox from "../box/lightbox";

type SectionHomeProps = {
  darkmode: boolean;
};

export default function SectionHome({ darkmode }: SectionHomeProps) {
  return (
    <Darkbox
      darkmode={darkmode}
      content={
        <div
          className="flex flex-col md:flex-row gap-8 md:gap-x-14 items-center"
          id="accueil"
        >
          <img
            src="/img/me/mePhoto.png"
            className="rounded-xl w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 xl:w-100 xl:h-100 object-cover flex-shrink-0"
          />
          <div className="flex flex-col flex-1 gap-6 md:gap-10 items-center w-full">
            <p className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
              Maxence Pequeno
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full p-2 sm:p-4 md:p-8">
              <Lightbox
                darkmode={darkmode}
                image={
                  <img
                    src="/img/stacks/laravel.png"
                    className="p-6 sm:p-10 md:p-15"
                  />
                }
                ImageBlockingHeight={true}
              />
              <Lightbox
                darkmode={darkmode}
                image={
                  <img
                    src="/img/stacks/react.webp"
                    className="p-6 sm:p-10 md:p-15"
                  />
                }
                ImageBlockingHeight={true}
              />
              <Lightbox
                darkmode={darkmode}
                image={
                  <img
                    src="/img/stacks/symfony.png"
                    className="p-5 sm:p-8 md:p-12"
                  />
                }
                ImageBlockingHeight={true}
              />
              <Lightbox
                darkmode={darkmode}
                image={
                  <img
                    src="/img/stacks/API.png"
                    className="p-4 sm:p-7 md:p-10"
                  />
                }
                ImageBlockingHeight={true}
              />
            </div>

            <div className="flex flex-row xs:items-center justify-evenly w-full gap-3 sm:gap-2">
              <DarkButton
                text="Voir mon CV"
                textMobile="CV"
                dark={true}
                darkmode={darkmode}
                to="/cv"
              />
              <DarkButton
                text="Mon Github"
                textMobile="Github"
                dark={false}
                darkmode={darkmode}
                to="http://github.com/MaxencePeq"
              />
              <DarkButton
                text="Me contacter"
                textMobile="Contact"
                dark={false}
                darkmode={darkmode}
              />
            </div>
          </div>
        </div>
      }
      number={1}
    />
  );
}
