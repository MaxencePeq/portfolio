import { GitHubCalendar } from "react-github-calendar";
import SectionTitle from "../SectionTitle";
import Darkbox from "../box/Darkbox";
import Lightbox from "../box/Lightbox";

type SectionProps = {
  darkmode: boolean;
};

export default function SectionGithub({ darkmode }: SectionProps) {
  const scheme = darkmode ? "dark" : "light";

  return (
    <Darkbox
      content={
        <div className="flex flex-col gap-y-8">
          <SectionTitle text="Mon activité hors études" />
          <div className="max-sm:hidden">
            <Lightbox
              image={
                <GitHubCalendar
                  username="MaxencePeq"
                  colorScheme={scheme}
                  year="last"
                  showColorLegend
                  style={{ color: "var(--text)" }}
                />
              }
            />
          </div>
          <div className="sm:hidden">
            <Lightbox
              image={
                <GitHubCalendar
                  username="MaxencePeq"
                  colorScheme={scheme}
                  year="last"
                  showColorLegend
                  blockSize={4} /* défaut : 14 */
                  blockMargin={1} /* défaut : 4 */
                  fontSize={5}
                  style={{ color: "var(--text)" }}
                />
              }
            />
          </div>
        </div>
      }
    />
  );
}
