import React from "react";
import { colors } from "styles";

export const BarSkill = ({ height = 80 }) => {
  return (
    <>
      <div className="bar">
        <img src="/ic_gmail.svg" alt="" />
      </div>

      <style jsx>{`
        .bar {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          background-color: ${colors.sun};
          transform: perspective(1000px) rotate(30deg) skew(-25deg)
            translate(0px, 0px);
        }

        .bar::before {
          content: "";
          position: absolute;
          background: ${colors.grape};
          animation: goUpRight 1s forwards;
          transform: rotate(0) skewY(45deg);
        }

        .bar::after {
          content: "";
          position: absolute;
          background: ${colors.grape};
          transform: rotate(0) skewX(45deg);
          animation: goUpLeft 1s forwards;
        }
        @keyframes goUpLeft {
          0% {
            bottom: 0px;
            right: 0px;
            height: 0px;
            width: 100%;
          }
          100% {
            bottom: ${-height + "px"};
            right: ${-height / 2 + "px"};
            height: ${height + "px"};
            width: 100%;
          }
        }
        @keyframes goUpRight {
          0% {
            bottom: 0px;
            right: 0px;
            height: 100%;
            width: 0px;
          }
          100% {
            bottom: ${-height / 2}px;
            right: ${-height}px;
            height: 100%;
            width: ${height}px;
          }
        }
      `}</style>
    </>
  );
};

// .bar::before {
//     content: "";
//     position: absolute;
//     bottom: -10px;
//     right: -20px;
//     height: 100%;
//     width: 20px;
//     background: ${colors.grape};
//     transform: rotate(0) skewY(45deg);
//     transition: 0.5s;
//     transition-delay: 0.1s;
//   }

//   .bar::after {
//     content: "";
//     position: absolute;
//     bottom: -20px;
//     right: -10px;
//     height: 20px;
//     width: 100%;
//     background: ${colors.grape};
//     transform: rotate(0) skewX(45deg);
//     transition: 0.5s;
//     transition-delay: 0.1s;
//   }
// .animation::after {
//     bottom: -80px;
//     right: -40px;
//     height: 80px;
//     width: 100%;
//     background: ${colors.grape};
//     transform: rotate(0) skewX(45deg);
//   }
//   .animation::before {
//     bottom: -40px;
//     right: -80px;
//     height: 100%;
//     width: 80px;
//     background: ${colors.grape};
//     transform: rotate(0) skewY(45deg);
//   }
