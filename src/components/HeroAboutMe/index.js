import { Title } from "components/Title";
import { useContext, useState } from "react";
import ThemeContext from "ThemeContext";
import LengContext from "LengContext";
import { Button } from "components/Button";
import { Courses } from "components/Courses";
import { Resumen } from "components/Resumen";

export const HeroAboutMe = () => {
  const { leng } = useContext(LengContext);
  const { heroAboutMe, resume } = leng;
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  const skills = [
    "JavaScript",
    "React JS",
    "ECMAScript 6+",
    "HTML",
    "CSS3",
    "Webpack",
    "Git & Github",
    "Responsive Design",
    "Redux",
    "Bootstrap",
    "Next.js",
    "Gatsby.js",
    "GraphQL",
    "Styled Components",
    "Adobe XD",
    "Figma",
    "SEO",
  ];
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const courses = [
    {
      title: "profesional de js",
      image: "/courses/profesionaljs.png",
    },
    {
      title: "Carrera React js",
      image: "/courses/carrerareactjs.png",
    },
    {
      title: "avanzado react",
      image: "/courses/reactavanzado.png",
    },
    {
      title: "redux pro",
      image: "/courses/reduxpro.png",
    },
    {
      title: "responsive design",
      image: "/courses/responsivedesign.png",
    },
    {
      title: "ecmascript ",
      image: "/courses/ecma.png",
    },
    {
      title: "Frontend",
      image: "/courses/frontend.png",
    },
    {
      title: "Fundamentos js",
      image: "/courses/fundamentosjs.png",
    },
    {
      title: "Gatsbyjs",
      image: "/courses/gatsbyjs.png",
    },
    {
      title: "git",
      image: "/courses/git.png",
    },
    {
      title: "optimizacion ",
      image: "/courses/wpo.png",
    },
    {
      title: "graphql",
      image: "/courses/graphql.png",
    },
    {
      title: "Motor v8 js",
      image: "/courses/motorv8.png",
    },
    {
      title: "npm",
      image: "/courses/npm.png",
    },
    {
      title: "Next Js",
      image: "/courses/next2018.png",
    },
    {
      title: "animaciones web",
      image: "/courses/animaciones.png",
    },
    {
      title: "asincronismo js",
      image: "/courses/asincronismo.png",
    },
    {
      title: "basico js",
      image: "/courses/basicojs.png",
    },
    {
      title: "base de datos",
      image: "/courses/bdatos.png",
    },

    {
      title: "css grid layout",
      image: "/courses/cssgridlayout.png",
    },
    {
      title: "Web developer",
      image: "/courses/devweb.png",
    },

    {
      title: "postman",
      image: "/courses/postman.png",
    },
    {
      title: "prework",
      image: "/courses/prework.png",
    },
    {
      title: "React JS2018",
      image: "/courses/react2.png",
    },
    {
      title: "progressive web app",
      image: "/courses/progressiveweb.png",
    },
    {
      title: "React JS2019",
      image: "/courses/react3.png",
    },
    {
      title: "reactjs",
      image: "/courses/reactjs.png",
    },
    {
      title: "React Native",
      image: "/courses/reactnative.png",
    },
    {
      title: "react router",
      image: "/courses/reactrouter.png",
    },
    {
      title: "redux",
      image: "/courses/redux.png",
    },
    {
      title: "redux y router",
      image: "/courses/router.png",
    },
    {
      title: "webpack",
      image: "/courses/webpack.png",
    },
  ];

  return (
    <>
      <main>
        <section>
          <Title text={heroAboutMe.title} />
          <p>{heroAboutMe.content}</p>
          <div>
            <Button
              text={heroAboutMe.button}
              width="200px"
              handleClick={handleClick}
            />
          </div>
        </section>
        {open && <Courses data={courses} />}
        <Resumen data={skills} colors={colors} resume={resume} />
      </main>

      <style jsx>{`
        main {
          animation: ascend 0.5s;
        }
        @keyframes ascend {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0px);
            opacity: 1;
          }
        }
        section {
          display: flex;
          flex-direction: column;
          max-width: 300px;
          margin: 50px auto 30px auto;
        }
        p {
          margin-top: 30px;
          margin-bottom: 20px;
          font-size: 1.6rem;
          font-family: "Source Code Pro", monospace;
          max-width: 300px;
          width: 100%;
          color: ${colors.blue};
        }
        div {
          width: 200px;
          align-self: flex-end;
        }
        @media (min-width: 768px) {
          section {
            max-width: 650px;
          }
          p {
            font-size: 2rem;
            max-width: 650px;
            width: 100%;
          }
        }
        @media (min-width: 1200px) {
          section {
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
