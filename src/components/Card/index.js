import { useContext } from "react";
import ThemeContext from "ThemeContext";

export const Card = ({ id, img, link }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { colors } = theme;

  return (
    <>
      <article>
        <span className="bar"></span>
        <a title={`link to project page ${id}`} href={link} target="_blank">
          <span className="circle"></span>
        </a>
      </article>
      <style jsx>{`
        article {
          position: relative;
          width: 180px;
          height: 240px;
          border-radius: 4px;
          background-image: url(${img});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.2);
        }
        article:hover {
          box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.4);
        }
        .bar {
          position: absolute;
          left: 0;
          right: 0;
          top: calc(50% - 12.5px);
          height: 25px;
        }
        .circle {
          position: absolute;
          left: calc(50% - 25px);
          top: calc(50% - 25px);
          height: 50px;
          width: 50px;
          border-radius: 50%;
          background-image: url("/ojo.svg");
          background-repeat: no-repeat;
          background-position: center;
          cursor: pointer;
        }
        a {
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        @media (min-width: 768px) {
          article {
            width: 256px;
            height: 400px;
          }
        }
      `}</style>
      <style jsx>{`
        .bar {
          background: linear-gradient(${colors.gradientPrimary});
        }
        .circle {
          background-color: ${colors.rose};
        }
      `}</style>
    </>
  );
};
