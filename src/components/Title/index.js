import { useContext } from "react";
import ThemeContext from "ThemeContext";
export const Title = ({ text }) => {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  return (
    <>
      <h2>{text}</h2>

      <style jsx>{`
        h2 {
          width: max-content;
          font-size: 2.4rem;
          font-weight: 400;
        }
        @media (min-width: 768px) {
          h2 {
            font-size: 2.8rem;
          }
        }
      `}</style>
      <style jsx>{`
        h2 {
          color: ${colors.blue};
          border-bottom: 2px solid ${colors.sun};
        }
      `}</style>
    </>
  );
};
