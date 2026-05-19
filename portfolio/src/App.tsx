import SectionHome from "./component/section/SectionHome";
import SectionGithub from "./component/section/SectionGithub";
import SectionPassionButton from "./component/button/passionButton";
import { section } from "./utils/section";
import ComponentPage from "./component/page";

type AppProps = {
  AppIsDarkmode: boolean;
};

function App({ AppIsDarkmode }: AppProps) {
  return (
    <ComponentPage
      AppIsDarkmode={AppIsDarkmode}
      content={
        <>
          {section(<SectionHome darkmode={AppIsDarkmode} />)}
          {section(<SectionGithub darkmode={AppIsDarkmode} />)}
          {section(<SectionPassionButton darkmode={AppIsDarkmode} />)}
        </>
      }
    />
  );
}

export default App;
