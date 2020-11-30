import React from "react";
import { useContext } from "react";
import ThemeContext from "ThemeContext";

export const SingleCard = ({ leng }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { colors } = theme;
  const { be, prof, marginBig, marginMedium } = leng;
  return (
    <>
      <div className="container container__item--big">
        <label>{be}</label>
        <div className="container container__item--medium">
          <label> {prof}</label>
          <div className="container container__item--small">
            <label>Geo</label>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          position: relative;
          display: flex;
          align-items: center;
          padding: 5px;
          border-radius: 4px;
          font-size: 2.4rem;
          font-weight: 600;
          color: ${colors.white};
          transition: 0.7s;
          box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.2);
        }
        .container__item--big {
          width: 306px;
          height: 66px;
          background: linear-gradient(${colors.gradientSun});
          animation: 1s slice-in;
        }

        .container__item--medium {
          width: 250px;
          height: 56px;
          margin-left: ${marginMedium - 2}px;
          border-radius: 4px;
          background: linear-gradient(${colors.gradientRose});
          animation: 2s slice-linear;
        }

        .container__item--small {
          width: 185px;
          height: 46px;
          margin-left: 50px;
          border-radius: 4px;
          background: linear-gradient(${colors.gradientGrape});
          animation: 3s slice-linear;
        }
        label {
          position: absolute;
        }
        .container__item--big > label {
          margin-left: ${marginBig};
          letter-spacing: 1px;
        }
        .container__item--big > label > span {
          margin-right: 8px;
        }
        .container__item--medium > label {
          margin-left: 9px;
        }
        .container__item--small > label {
          margin-left: 11px;
        }
        .container__item--big:hover > label {
          letter-spacing: normal;
        }
        .container__item--big:hover {
          transform: translateX(-52px);
        }
        .container__item--big:hover .container__item--medium {
          transform: translateX(175px);
        }
        .container__item--medium:hover .container__item--small {
          transform: translateX(150px);
        }
        @keyframes slice-in {
          0% {
            transform: translateX(500px);
          }
          80% {
            transform: translateX(-20px);
          }
          90% {
            transform: translateX(5px);
          }
          100% {
            transform: translateX(0px);
          }
        }
        @keyframes slice-linear {
          0% {
            transform: translateX(500px);
          }
          90% {
            transform: translateX(-10px);
          }
          95% {
            transform: translateX(5px);
          }
          100% {
            transform: translateX(0px);
          }
        }
        @media (min-width: 768px) {
          .container__item--big {
            width: 580px;
            height: 76px;
          }

          .container__item--medium {
            width: 518px;
            height: 66px;
            margin-left: ${marginMedium};
          }

          .container__item--small {
            width: 436px;
            height: 56px;
            margin-left: 63px;
          }
          .container__item--big > label {
            margin-left: ${marginBig};
          }
          .container {
            font-size: 2.8rem;
          }
          .container__item--big:hover .container__item--medium {
            transform: translateX(220px);
          }
        }
      `}</style>
    </>
  );
};
