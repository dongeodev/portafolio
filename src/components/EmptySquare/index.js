import React from "react";
import { useContext } from "react";
import ThemeContext from "ThemeContext";

export const EmptySquare = ({ random }) => {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  if (random > 0.7) return null;

  return (
    <>
      <div className={random < 0.7 && random > 0.3 && "square-flicker"}></div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          border-radius: 4px;
          box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.1);
          animation: flicker2 2s forwards;
        }
        .square-flicker {
          animation: flicker 5s infinite ease-in-out alternate;
          will-change: opacity;
          width: 40px;
          height: 40px;
        }

        @media (min-width: 768px) {
          div {
            width: 80px;
            height: 80px;
          }
          .square-flicker {
            width: 60px;
            height: 60px;
          }
        }

        @keyframes flicker {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        @keyframes flicker2 {
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
          100% {
            transform: rotate3d(1, 1, 0, 360deg);
          }
        }
      `}</style>
      <style jsx>{`
        div {
          background-color: ${random > 0.1
            ? colors.grapeSoftLight
            : colors.grape};
        }
        .square-flicker {
          background-color: ${colors.grapeLight};
        }
      `}</style>
    </>
  );
};
