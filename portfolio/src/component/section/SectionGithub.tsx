import { GitHubCalendar } from "react-github-calendar";
import {
  getLeftBorderColor,
  getMode,
  getGitChartTextColor,
} from "../../utils/infoCalc";
import Darkbox from "../darkbox";
import Lightbox from "../lightbox";

type SectionGithubProps = {
  darkmode: boolean;
};

export default function SectionGithub({ darkmode }: SectionGithubProps) {
  return (
    <Darkbox
      darkmode={darkmode}
      content={
        <div className="flex flex-col gap-y-8">
          <p
            className={`text-4xl text-white font-semibold border-l-4 pl-4 ${getLeftBorderColor(darkmode)} `}
          >
            Mes contributions hors travail et étude
          </p>
          <Lightbox
            darkmode={darkmode}
            image={
              <GitHubCalendar
                username="MaxencePeq"
                colorScheme={getMode(darkmode)}
                year={"last"}
                showColorLegend
                style={{ color: `${getGitChartTextColor(darkmode)}` }}
              />
            }
            ImageBlockingHeight={false}
          />
        </div>
      }
    />
  );
}
