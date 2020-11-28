import { useContext } from "react";
import ThemeContext from "ThemeContext";

export const CardSkill = ({ delay, icon }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { colors } = theme;
  return (
    <>
      <div>
        <img src={icon} alt="icono de skills" />
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          border-radius: 4px;
          animation: spin 1.5s 1.5s forwards;
          box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.1);
        }
        img {
          animation: show 1s forwards;
          height: 30px;
          width: 30px;
          opacity: 0;
          will-change: opacity;
        }

        @keyframes show {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes spin {
          0% {
            transform: rotate3d(1, 1, 0, 0deg);
          }
          80% {
            background-color: ${colors.sunRgba};
          }
          100% {
            background: linear-gradient(${colors.gradientRoseSun});
            transform: rotate3d(1, 1, 0, 360deg);
          }
        }
        @media (min-width: 768px) {
          div {
            width: 80px;
            height: 80px;
          }
          img {
            height: 40px;
            width: 40px;
          }
        }
      `}</style>
      <style jsx>{`
        div {
          background-color: ${colors.grapeSoftLight};
          animation-delay: ${delay}s;
        }
        img {
          animation-delay: ${delay + 0.3}s;
        }
      `}</style>
    </>
  );
};
