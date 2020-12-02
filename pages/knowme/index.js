import { Footer } from "components/Footer";
import { HeaderAboutMe } from "components/HeaderAboutMe";
import { HeroAboutMe } from "components/HeroAboutMe";
import { OtherSkills } from "components/OtherSkills";
import SEO from "components/Seo";
import { knowMe } from "components/Seo/data";

function AboutMe() {
  return (
    <>
      <SEO {...knowMe} />
      <HeaderAboutMe />
      <HeroAboutMe />
      <OtherSkills />
      <Footer />
    </>
  );
}
export default AboutMe;
