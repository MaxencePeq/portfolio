import SectionTitle from "../sectionTitle";
import Darkbox from "../box/darkbox";
import DarkButton from "./darkButton";

type SectionProps = {
  darkmode: boolean;
};

export default function SectionPassionButton({ darkmode }: SectionProps) {
  return (
    <Darkbox
      darkmode={darkmode}
      content={
        <div className="flex flex-col gap-y-10">
          <SectionTitle text="Activité hors de l'école" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group p-6 rounded-2xl bg-surface border border-line">
              <div className="text-5xl mb-3">
                <img
                  src="/img/illustration/bojangles.jpg"
                  alt=""
                  className="lg:w-auto lg:max-h-50 max-h-20"
                />
              </div>
              <p className="text-text text-2xl font-light">Littérature</p>
              <p className="text-muted text-sm mt-2 italic">
                Bourdeaut · Danielewski · Tolkien, Jaworski...
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-surface border border-line">
              <div className="text-5xl mb-3">
                <img
                  src="/img/illustration/pianist.jpg"
                  alt=""
                  className="lg:w-auto lg:max-h-50 max-h-20"
                />
              </div>
              <p className="text-text text-2xl font-light">Piano</p>
              <p className="text-muted text-sm mt-2 italic">
                Chopin · Testard · Hisaichi...
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <DarkButton
              text={"Découvrir mes passions →"}
              dark={true}
              to="/passions"
            />
          </div>
        </div>
      }
    />
  );
}
