import { useContext } from "react";
import ThemeContext from "ThemeContext";

export const ArrowButton = ({ right }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { colors } = theme;
  return (
    <>
      <button>
        <img src={"/arrow.svg"} />
      </button>
      <style jsx>{`
        button {
          width: 54px;
          height: 54px;
          border-radius: 4px;
          transition: scale 0.2s;
        }
        img {
          transform: rotateZ(-45deg);
        }
      `}</style>
      <style jsx>{`
        button {
          background-color: ${colors.grape};
          transform: ${right ? "rotateZ(225deg)" : "rotateZ(45deg)"};
        }
        button:active {
          transform: scale(0.9) ${right ? "rotateZ(225deg)" : "rotateZ(45deg)"};
        }
      `}</style>
    </>
  );
};
