export const Bubble = ({ color, data, showCardReview }) => {
  const handleClick = () => {
    showCardReview(data);
  };
  return (
    <>
      <div role="button" onClick={handleClick}>
        <span className="emoji" role="img">
          {data.type === "good" ? "😎" : "🤬"}
        </span>
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
          width: 38px;
          height: 40px;
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
        div:hover {
          border: 2px solid #fd3a69;
        }
        span {
          font-size: 1.6rem;
        }
      `}</style>
    </>
  );
};
