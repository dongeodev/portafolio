import React from "react";

export const Bubble = ({ color, symbol, label, id, handleCardReview }) => {
  const handleClick = (e) => {
    handleCardReview(e.target.id);
  };
  return (
    <>
      <div role="button" onClick={handleClick} id={id}>
        <span
          className="emoji"
          role="img"
          aria-label={label ? label : ""}
          aria-hidden={label ? "false" : "true"}
          id={id}
        >
          {symbol}
        </span>
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
          width: 28px;
          height: 30px;
          border-radius: 4px;
          background: ${color} no-repeat;
          cursor: pointer;
        }
        div:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: calc(50% - 2px);
          width: 0;
          height: 0;
          border: 8px solid transparent;
          border-top-color: ${color};
          border-bottom: 0;
          margin-left: -5px;
          margin-bottom: -6px;
        }
      `}</style>
    </>
  );
};
