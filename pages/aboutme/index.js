import { Footer } from "components/Footer";
import { HeaderAboutMe } from "components/HeaderAboutMe";
import { HeroAboutMe } from "components/HeroAboutMe";
import { OtherSkills } from "components/OtherSkills";
import React from "react";

function AboutMe() {
  return (
    <>
      <HeaderAboutMe />
      <HeroAboutMe />
      <OtherSkills />
      <Footer />
    </>
  );
}
export default AboutMe;
