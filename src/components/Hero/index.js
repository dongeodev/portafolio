import Typical from "react-typical";
import { useContext } from "react";
import ThemeContext from "ThemeContext";
import LengContext from "LengContext";
import { Typing } from "components/Typing";

export const Hero = () => {
  const { leng } = useContext(LengContext);
  const { hero } = leng;
  const { theme, setTheme } = useContext(ThemeContext);
  const { colors } = theme;

  return (
    <>
      <section>
        <div className="container__not-reason">
          <h2>
            {hero.reason}
            <span className="title__span">{hero.not}</span>
            {hero.tobe}
          </h2>
          <ul>
            {hero.steps ? (
              <li>
                <Typical
                  steps={[
                    "Copy a template",
                    2000,
                    "copy and paste any code",
                    3000,
                    "don't study anymore",
                    3000,
                    "Launch oother website more",
                    4000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </li>
            ) : (
              <Typing
                steps={[
                  "Copiar Plantillas",
                  2000,
                  "copiar y pegar cualquier código",
                  4000,
                  "no estudiar más",
                  3000,
                  "lanzar ootro sitio web más",
                  4000,
                ]}
                loop={Infinity}
                colors={colors}
              />
            )}
          </ul>
        </div>
        <div className="container__reason">
          <h3>
            {hero.iam}
            <span>Front-end</span>
            {hero.because}
          </h3>
          <p>
            <span className="parrafo-span--red">{hero.iwant}</span>
            {hero.todo}
            <span className="parrafo-span--grape">{hero.every}</span>
          </p>
        </div>
      </section>
      <style jsx>{`
        section {
          display: grid;
          grid-template: repeat(2, 1fr) / 1fr;
          max-width: 280px;
          margin: 50px auto;
        }
        h2 {
          max-width: 254px;
          font-size: 2.4rem;
          font-weight: 400;
          margin-bottom: 28px;
        }
        h2 .title__span {
          font-size: 2.8rem;
          font-weight: 600;
        }
        ul {
          margin-bottom: 26px;
        }
        ul li {
          margin-bottom: 16px;
          font-size: 1.6rem;
          font-family: "Source Code Pro", monospace;
        }
        h3 {
          margin-bottom: 26px;

          font-size: 2rem;
          font-weight: 400;
        }
        span {
          display: inline-block;
          margin: 0 5px;
        }

        h3 > span {
          font-size: 2.4rem;
          font-weight: 600;
          color: ${colors.rose};
        }

        p {
          margin-left: 32px;
          max-width: 225px;
          font-size: 2rem;
        }
        @media (min-width: 360px) {
          section {
            max-width: 320px;
          }
          p {
            max-width: 360px;
          }
        }
        @media (min-width: 768px) {
          section {
            grid-template: repeat(2, 1fr) / 1fr;
            max-width: 600px;
            margin: 50px auto 120px auto;
          }
          .container__reason {
            justify-self: center;
          }
          h2 {
            max-width: 350px;
            font-size: 3.2rem;
          }
          h2 .title__span {
            font-size: 3.6rem;
          }

          ul li {
            font-size: 2rem;
          }
          h3 {
            font-size: 4rem;
          }

          h3 > span {
            font-size: 4.4rem;
          }

          p {
            max-width: 451px;
            font-size: 3.2rem;
          }
        }
        @media (min-width: 1200px) {
          section {
            grid-template: 160px 1fr / 1fr;
            max-width: 1105px;
            margin: 150px auto 150px auto;
          }

          h2 {
            max-width: 350px;
            font-size: 3.2rem;
          }
          h2 .title__span {
            font-size: 3.6rem;
          }

          ul li {
            font-size: 2rem;
          }
          h3 {
            font-size: 4rem;
          }

          h3 > span {
            font-size: 4.4rem;
          }

          p {
            max-width: 500px;
            font-size: 3.2rem;
          }
        }
      `}</style>
      <style jsx>{`
        h2 {
          color: ${colors.blue};
        }
        h2 .title__span {
          color: ${colors.rose};
        }

        ul li {
          color: ${colors.rose};
        }
        h3 {
          color: ${colors.blue};
        }
        h3 > span {
          border-bottom: 2px solid ${colors.sun};
        }
        p {
          color: ${colors.blue};
        }
        p .parrafo-span--red {
          border-bottom: 2px solid ${colors.rose};
        }
        p .parrafo-span--grape {
          border-bottom: 2px solid ${colors.grape};
        }
      `}</style>
    </>
  );
};
