import { useContext } from "react";

import LengContext from "LengContext";
import Avatar from "components/Avatar";

export const CardReview = ({
  userName,
  avatar,
  content,
  userId,
  id,
  type,
  createAt,
  colors,
}) => {
  const { leng } = useContext(LengContext);
  // const { pool } = leng;

  return (
    <>
      <article>
        <Avatar userName={userName} img={avatar} colors={colors} />
        <div>
          <h3>{userName}</h3>
          <span>{createAt}</span>
          <p>{content}</p>
        </div>
      </article>
      <style jsx>{`
        article {
          display: flex;
          width: 300px;
          min-height: 45px;
          height: fit-content;
          justify-content: center;
          padding: 10px 8px;
          border-radius: 4px;
          background: ${type === "good" ? colors.sun : colors.rose};
          margin: 0 auto;
        }
        div {
          margin-left: 8px;
        }
        h3 {
          display: inline-block;
          margin-right: 8px;
          margin-bottom: 4px;
          font-size: 1.5rem;
          font-weight: 600;
          color: ${type === "good" ? colors.blue : colors.white};
        }
        span {
          font-size: 1.2rem;
          color: ${colors.gray};
          width: fit-content;
          height: fit-content;
        }
        p {
          max-width: 100%;
          font-size: 1.4rem;
          color: ${colors.blue};
        }
        @media (min-width: 768px) {
          article {
            width: 320px;
            justify-content: center;
          }
          img {
            margin-right: 20px;
          }
          h3 {
            font-size: 1.6rem;
          }
          p {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </>
  );
};
