import { useContext } from "react";
import ThemeContext from "ThemeContext";

export const Button = ({
  text = "Go Swing",
  width,
  handleClick,
  type,
  disabled,
}) => {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  return (
    <>
      <button onClick={handleClick} type={type} disabled={disabled}>
        {text}
      </button>
      <style jsx>{`
        button {
          max-width: ${width || "90px"};
          width: 100%;
          height: 40px;
          box-shadow: inset 0 -4px rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          cursor: pointer;
          font-size: 1.4rem;
          font-weight: 600;
        }
        button:active {
          transform: scale(0.95);
        }
        button:disabled {
          pointer-events: none;
        }
        @media (min-width: 768px) {
          button {
            max-width: 190px;
            height: 48px;
            font-size: 1.6rem;
          }
        }
      `}</style>
      <style jsx>{`
        button {
          background: ${colors.grape};
          color: ${colors.white};
        }
        button:disabled {
          background: ${colors.gray};
        }
      `}</style>
    </>
  );
};
