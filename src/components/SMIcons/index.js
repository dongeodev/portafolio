import { colors } from "styles";

export const SMIcons = () => {
  return (
    <>
      <h3>Social Media</h3>
      <picture>
        <img src="/linkedin.svg" alt="icon linkedin" />
        <img src="/github.svg" alt="icon github" />
        <img src="/twitter.svg" alt="icon twitter" />
        <img src="/instagram.svg" alt="icon instagram" />
      </picture>
      <style jsx>{`
        h3 {
          width: max-content;
          font-size: 1.6rem;
          font-weight: 600;
          margin-right: 10px;
          margin-bottom: 12px;
          display: none;
        }
        picture {
          display: flex;
          margin: 0;
        }
        picture > img {
          margin-left: 9px;
        }
        picture > img:nth-child(1) {
          margin-left: 0px;
        }
        @media (min-width: 768px) {
          h3 {
            display: flex;
            font-size: 1.8rem;
          }
        }
        @media (min-width: 1024px) {
          h3 {
            display: flex;
            font-size: 2rem;
          }
        }
      `}</style>
      <style jsx>{`
        h3 {
          color: ${colors.white};
          border-bottom: 2px solid ${colors.sun};
        }
      `}</style>
    </>
  );
};
