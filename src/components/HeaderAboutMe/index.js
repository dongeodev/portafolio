import Link from "next/link";
import { Menu } from "components/Menu";
import { useContext } from "react";
import ThemeContext from "ThemeContext";
import LengContext from "LengContext";

export const HeaderAboutMe = () => {
  const { leng, setLeng } = useContext(LengContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const { colors } = theme;
  const { flagLight } = colors;
  return (
    <>
      <header>
        <Link href="/">
          <a title="to home">
            <span></span>
          </a>
        </Link>
        <Menu
          setTheme={setTheme}
          leng={leng.menu}
          setLeng={setLeng}
          themeCurrent={flagLight}
        />
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
          max-width: 300px;
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
        span {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 25px;
          height: 20px;
          background-image: url("/arrowback.svg");
          background-size: 15px;
          background-repeat: no-repeat;
          background-position: center;
          cursor: pointer;
          transition: 0.2s;
          border-radius: 4px;
        }
        span:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
        span:active {
          transform: scale(0.9);
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
          span {
            width: 30px;
            height: 25px;
            background-size: 20px;
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
