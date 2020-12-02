import { SingleCard } from "components/SingleCard";
import { useAngle } from "Hooks/useAngle";
import { Menu } from "components/Menu";
import { useContext } from "react";
import ThemeContext from "ThemeContext";
import LengContext from "LengContext";

export const Header = () => {
  const alpha = useAngle();
  const { leng, setLeng } = useContext(LengContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const { colors } = theme;
  const { flagLight } = colors;
  const { header } = leng;
  return (
    <>
      <header>
        <Menu
          setTheme={setTheme}
          leng={leng.menu}
          setLeng={setLeng}
          themeCurrent={flagLight}
        />
        <div className="hero--background"></div>
        <h1>{header.title}</h1>
        <div className="container--single-card">
          <SingleCard leng={leng.singleCard} />
        </div>
      </header>
      <style jsx>{`
        header {
          position: relative;
          display: flex;
          height: 300px;
          width: 100%;
        }
        .hero--background {
          position: absolute;
          width: 100%;
          height: 100%;
          clip-path: polygon(0 0, 100% 0, 100% 165px, 0 100%);
          background: linear-gradient(${colors.gradientPrimary});
          background-size: 100% 200%;
          animation: back 10s ease infinite;
          z-index: -1;
        }
        h1 {
          max-width: 200px;
          margin-top: 50px;
          margin-left: 40px;
          font-size: 2.8rem;
          font-weight: 700;
          color: ${colors.white};
        }
        .container--single-card {
          position: absolute;
          left: calc(50% - 153px);
          top: 198px;
          transform: rotateZ(${-alpha}deg);
        }
        @media (min-width: 375px) {
          .container--single-card {
            left: calc(50% - 140px);
            top: 198px;
          }
        }
        @media (min-width: 768px) {
          h1 {
            max-width: 250px;
            margin-top: 58px;
            margin-left: 90px;
            font-size: 3.2rem;
          }
          .container--single-card {
            left: calc(50% - 200px);
            top: 178px;
          }
        }
        @media (min-width: 1200px) {
           {
            /* header {
            height: 400px;
          } */
          }
          .hero--background {
            height: 400px;
            clip-path: polygon(0 0, 100% 0, 100% 265px, 0 100%);
          }
          h1 {
            max-width: 400px;
            margin-top: 78px;
            margin-left: 139px;
            font-size: 4.8rem;
          }
          .container--single-card {
            left: calc(50% - 200px);
            top: 278px;
          }
        }
        @keyframes back {
          0% {
            background-position: 50% 0%;
          }
          50% {
            background-position: 50% 100%;
          }
          100% {
            background-position: 50% 0%;
          }
        }
      `}</style>
      <style jsx global>{`
        body {
          background: ${colors.body};
        }
      `}</style>
    </>
  );
};
