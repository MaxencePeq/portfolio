import SectionTitle from "../SectionTitle";
import Darkbox from "../box/Darkbox";
import DarkButton from "../button/DarkButton";

export default function SectionPassionButton() {
  return (
    <Darkbox
      content={
        <div className="flex flex-col gap-y-10">
          <SectionTitle text="Activité hors de l'école" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group p-6 rounded-2xl bg-surface border border-line">
              <div className="text-5xl mb-3">
                <img
                  src="/img/illustration/bojangles.jpg"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="lg:w-auto lg:max-h-50 max-h-20"
                />
              </div>
              <h3 className="text-text text-2xl font-light">Littérature</h3>
              <p className="text-muted text-sm mt-2 italic">
                Bourdeaut · Danielewski · Tolkien, Jaworski...
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-surface border border-line">
              <div className="text-5xl mb-3">
                <img
                  src="/img/illustration/pianist.jpg"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="lg:w-auto lg:max-h-50 max-h-20"
                />
              </div>
              <h3 className="text-text text-2xl font-light">Piano</h3>
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
