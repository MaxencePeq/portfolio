import { GitHubCalendar } from "react-github-calendar";
import { getMode } from "../../utils/infoCalc";
import SectionTitle from "../sectionTitle";
import Darkbox from "../box/darkbox";
import Lightbox from "../box/lightbox";

type SectionProps = {
  darkmode: boolean;
};

export default function SectionGithub({ darkmode }: SectionProps) {
  return (
    <Darkbox
      darkmode={darkmode}
      content={
        <div className="flex flex-col gap-y-8">
          <SectionTitle text="Mon activité hors études" />
          <div className="max-sm:hidden">
            <Lightbox
              darkmode={darkmode}
              image={
                <GitHubCalendar
                  username="MaxencePeq"
                  colorScheme={getMode(darkmode)}
                  year={"last"}
                  showColorLegend
                  style={{ color: "var(--text)" }}
                />
              }
              ImageBlockingHeight={false}
            />
          </div>
          <div className="sm:hidden">
            <Lightbox
              darkmode={darkmode}
              image={
                <GitHubCalendar
                  username="MaxencePeq"
                  colorScheme={getMode(darkmode)}
                  year={"last"}
                  showColorLegend
                  blockSize={4} /* défaut : 14 */
                  blockMargin={1} /* défaut : 4 */
                  fontSize={5}
                  style={{ color: "var(--text)" }}
                />
              }
              ImageBlockingHeight={false}
            />
          </div>
        </div>
      }
    />
  );
}
