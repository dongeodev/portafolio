import { useContext } from "react";
import { Courses } from "components/Courses";
import { Resumen } from "components/Resumen";
import { Title } from "components/Title";
import ThemeContext from "ThemeContext";
import LengContext from "LengContext";

export const OtherSkills = () => {
  const { leng } = useContext(LengContext);
  const { otherSkills, resume } = leng;
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  const skills = [
    "Community Manager",
    "Instagram",
    "Email Marketing",
    "SEO",
    "Whatsapp Bussines",
    "English Basic",
    "Java",
    "Arduino",
    "Figma",
  ];
  const courses = [
    {
      title: "community manager",
      image: "/othersCourses/communitymanager.png",
    },
    {
      title: "fundamentos de ig",
      image: "/othersCourses/fundamentosig.png",
    },
    {
      title: "Email marketing",
      image: "/othersCourses/emailmarketing.png",
    },
    {
      title: "adobe xd",
      image: "/courses/adobexd.png",
    },
    {
      title: "freelance",
      image: "/othersCourses/freelancer.png",
    },
    {
      title: "whatsapp bussines",
      image: "/othersCourses/wb.png",
    },

    {
      title: "aprender",
      image: "/othersCourses/aprender.png",
    },
    {
      title: "conversation",
      image: "/othersCourses/conversationbasic.png",
    },
    {
      title: "fundamentals",
      image: "/othersCourses/fundamentals.png",
    },
    {
      title: "grammar",
      image: "/othersCourses/grammarbasic.png",
    },
    {
      title: "javabasic",
      image: "/othersCourses/javabasico.png",
    },
    {
      title: "java avanzado",
      image: "/othersCourses/javaavanzado.png",
    },
    {
      title: "algoritmos C",
      image: "/othersCourses/algoritmosC.png",
    },
    {
      title: "arduino",
      image: "/othersCourses/arduino.png",
    },
  ];
  return (
    <>
      <section>
        <div className="container__title-skills">
          <Title text={otherSkills.title} />
        </div>
        <Courses data={courses} />
        <Resumen data={skills} colors={colors} resume={resume} />
        <div className="container__title-skills">
          <Title text={otherSkills.title2} />
        </div>
        <p>{otherSkills.content}</p>
      </section>
      <style jsx>{`
        section {
          margin-top: 30px;
        }
        .container__title-skills {
          display: flex;
          max-width: 300px;
          margin: 30px auto;
          justify-content: flex-end;
        }
        p {
          margin: 0 auto;
          max-width: 300px;
          margin-top: 50px;
          margin-bottom: 20px;
          font-size: 1.6rem;
          font-family: "Source Code Pro", monospace;
          max-width: 300px;
          width: 100%;
          color: ${colors.blue};
        }
        @media (min-width: 768px) {
          section {
            margin-top: 50px;
          }
          .container__title-skills {
            max-width: 620px;
          }
          p {
            font-size: 2rem;
            max-width: 650px;
            width: 100%;
          }
        }
        @media (min-width: 1200px) {
          .container__title-skills {
            max-width: 1105px;
          }
          p {
            font-size: 2.4rem;
            max-width: 1105px;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};
