import { useContext } from "react";
import ThemeContext from "ThemeContext";
import LengContext from "LengContext";

export const CardReview = ({ id }) => {
  const { leng } = useContext(LengContext);
  // const { pool } = leng;
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  if (id == "br1") {
    return (
      <>
        <article>
          <img src="/avatar.jpg" alt="foto de perfil" />
          <div>
            <h3>Tu Corazón</h3>
            <p>Esta buscando la maldad</p>
          </div>
        </article>
        <style jsx>{`
          article {
            display: flex;
            width: 220px;
            min-height: 45px;
            background: ${colors.rose};
            padding: 6px 8px;
            border-radius: 4px;
            justify-content: center;
            margin: 0 auto;
          }
          img {
            width: 30px;
            height: 30px;
            margin-right: 5px;
            object-fit: cover;
            border-radius: 50%;
          }

          h3 {
            max-width: 170px;
            font-size: 1.2rem;
            font-weight: 600;
            color: ${colors.blue};
          }
          p {
            max-width: 170px;
            font-family: "Source Code Pro", monospace;
            font-size: 1rem;
            color: ${colors.white};
          }
          @media (min-width: 768px) {
            article {
              width: 320px;
            }
            img {
              margin-right: 20px;
            }
            h3 {
              max-width: 250px;
              font-size: 1.8rem;
            }
            p {
              max-width: 250px;

              font-size: 1.6rem;
            }
          }
        `}</style>
      </>
    );
  }
  return (
    <>
      <article>
        <img src="/avatar.jpg" alt="foto de perfil" />
        <div>
          <h3>Dan Abramov</h3>
          <p>Excellent Dev, I wanna work with him</p>
        </div>
      </article>
      <style jsx>{`
        article {
          display: flex;
          width: 220px;
          min-height: 45px;
          background: ${colors.sun};
          padding: 6px 8px;
          border-radius: 4px;
          justify-content: center;
          margin: 0 auto;
        }
        img {
          width: 30px;
          height: 30px;
          margin-right: 5px;
          object-fit: cover;
          border-radius: 50%;
        }
        h3 {
          max-width: 170px;
          font-size: 1.2rem;
          font-weight: 600;
          color: ${colors.blue};
        }
        p {
          max-width: 170px;
          font-family: "Source Code Pro", monospace;
          font-size: 1rem;
          color: ${colors.white};
        }
        @media (min-width: 768px) {
          article {
            width: 320px;
            justify-content: center;
            margin: 0 auto;
          }
          img {
            margin-right: 20px;
          }
          h3 {
            max-width: 250px;
            font-size: 1.6rem;
          }
          p {
            max-width: 250px;
            font-size: 1.4rem;
          }
        }
      `}</style>
    </>
  );
};
