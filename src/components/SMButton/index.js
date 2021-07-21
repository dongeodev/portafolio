import React from "react";
import { colors } from "styles";

export const SMButton = ({
  handleClick,
  text,
  img,
  disabled = false,
  background,
}) => {
  return (
    <>
      <button onClick={handleClick} disabled={disabled}>
        <img src={img} alt="gmail" />
        <span>{text}</span>
      </button>
      <style jsx>{`
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 250px;
          width: 100%;
          height: 40px;
          border-radius: 4px;
          cursor: pointer;
          box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.1);
          background-color: ${background || "transparent"};
        }
        span {
          font-size: 1.6rem;
          margin-left: 16px;
          color: ${colors.gray};
        }
        img {
          width: 20px;
          height: 20px;
        }
        @media (min-width: 768px) {
          button {
            max-width: 330px;
            height: 48px;
          }
          span {
            font-size: 1.8rem;
          }
        }
      `}</style>
      <style jsx>{`
        button {
          border: 1px solid ${colors.gray};
        }
      `}</style>
    </>
  );
};
