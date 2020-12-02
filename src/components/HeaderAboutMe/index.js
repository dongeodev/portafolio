import { Menu } from "components/Menu";
import { useContext } from "react";
import ThemeContext from "ThemeContext";
import LengContext from "LengContext";

export const HeaderAboutMe = () => {
  const { leng, setLeng } = useContext(LengContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const { colors } = theme;

  return (
    <>
      <header>
        <Menu setTheme={setTheme} leng={leng.menu} setLeng={setLeng} />
        <div className="hero--background"></div>
        <h1>Frontend React JS</h1>
        <h2>Georgie Duarte</h2>
      </header>
      <style jsx>{`
        header {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 150px;
          width: 100%;
        }
        .hero--background {
          position: absolute;
          width: 100%;
          height: 100%;
          clip-path: polygon(0 0, 100% 0, 100% 95px, 0 100%);
          background: linear-gradient(${colors.gradientPrimary});
          background-size: 100% 200%;
          animation: back 10s ease infinite;
          z-index: -1;
        }
        h1 {
          max-width: 219px;
          margin-top: 40px;
          margin-left: 20px;
          font-size: 2.8rem;
          font-weight: 700;
          color: ${colors.white};
        }
        h2 {
          display: none;
          max-width: 300px;
          margin-left: 20px;
          font-size: 2rem;
          font-weight: 400;
          color: ${colors.white};
        }

        @media (min-width: 375px) {
          h1 {
            max-width: 300px;

            margin-left: 40px;
          }
          h2 {
            max-width: 300px;
            display: initial;
            margin-left: 40px;
          }
        }
        @media (min-width: 768px) {
          h1 {
            max-width: 350px;
            margin-left: 90px;
            font-size: 3.2rem;
          }
          h2 {
            max-width: 350px;
            margin-left: 90px;
          }
        }
        @media (min-width: 1200px) {
          header {
            height: 300px;
          }
          .hero--background {
            height: 300px;
            clip-path: polygon(0 0, 100% 0, 100% 165px, 0 100%);
          }
          h1 {
            max-width: 500px;
            margin-top: 78px;
            margin-left: 139px;
            font-size: 4.8rem;
          }
          h2 {
            max-width: 350px;
            margin-left: 139px;
            font-size: 3.8rem;
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
