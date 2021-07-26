import { Bubble } from "components/Bubble";
import { useContext } from "react";
import ThemeContext from "ThemeContext";
import { Title } from "components/Title";
import LengContext from "LengContext";
export const Pool = ({ showCardReview, reviews }) => {
  const { leng } = useContext(LengContext);
  const { pool } = leng;
  const { theme, setTheme } = useContext(ThemeContext);
  const { colors } = theme;

  return (
    <>
      <div className="container__title-skills">
        <Title text={pool.title} />
      </div>
      <div className="container-pool">
        <div className="waves">
          {reviews.map((bubble) => (
            <div className="bubble-review bubble" key={bubble.id}>
              <Bubble
                color={bubble.type === "good" ? colors.sun : colors.rose}
                data={bubble}
                showCardReview={showCardReview}
              />
            </div>
          ))}

          <div className="wave a"></div>
          <div className="wave b"></div>
          <div className="wave c"></div>
        </div>
      </div>
      <style jsx>{`
        .container__title-skills {
          display: flex;
          width: 100%;
          justify-content: flex-end;
          padding-right: 20px;
          margin-bottom: 30px;
        }
        .container-pool {
          position: relative;
          height: 295px;
          max-width: 100%;
          width: 450px;
          background-image: url(${colors.sea});
          background-repeat: no-repeat;
          background-position: center;
          overflow: hidden;
          margin: 0 auto 15px auto;
        }
        .waves {
          position: absolute;
          bottom: -60px;
          height: 300px;
          width: 100%;
          overflow: hidden;
        }
        .wave {
          position: absolute;
          left: -180px;
          bottom: 0;

          width: 2402px;
          height: 300px;
          background: url(/waves.png) center bottom no-repeat;
          animation: 5s wave ease-in-out infinite alternate;
        }
        .bubble-review {
          position: absolute;

          z-index: 1;
          animation: 5s wave ease-in-out infinite alternate;
        }
        .bubble:nth-of-type(1) {
          left: 50%;
          top: 130px;
          animation-delay: 0.6s;
        }
        .bubble:nth-of-type(2) {
          left: 25%;
          top: 80px;
          animation-delay: 1.3s;
        }
        .bubble:nth-of-type(3) {
          left: 75%;
          top: 80px;
          animation-delay: 0.3s;
        }
        .bubble:nth-of-type(4) {
          left: 65%;
          top: 50px;
          animation-delay: 0.7s;
        }
        .bubble:nth-of-type(5) {
          left: 30%;
          top: 65px;
          animation-delay: 0.5s;
        }
        .bubble:nth-of-type(6) {
          left: 20%;
          top: 120px;
          animation-delay: 1.2s;
        }
        .bubble:nth-of-type(7) {
          left: 40%;
          top: 140px;
          animation-delay: 0.8s;
        }
        .bubble:nth-of-type(8) {
          left: 40%;
          top: 90px;
          animation-delay: 0.7s;
        }
        .bubble:nth-of-type(9) {
          left: 65%;
          top: 150px;
          animation-delay: 0.6s;
        }
        .bubble:nth-of-type(10) {
          left: 54%;
          top: 60px;
          animation-delay: 1s;
        }
        .wave.a {
          background-position: 0 -854px;
        }
        .wave.b {
          background-position: 0 -427px;
          animation-delay: 0.6s;
        }
        .wave.c {
          background-position: 0 0;
          animation-delay: 1.2s;
        }
        @keyframes wave {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-80px, 30px);
          }
          100% {
            transform: translate(80px, -40px);
          }
        }
        @media (min-width: 768px) {
          .container__title-skills {
            padding-right: 50px;
          }
          .container-pool {
            height: 492px;
            max-width: 100%;
            width: 868px;
            background-image: url(${colors.seaMedium});
            margin: 0 auto 15px auto;
          }
          .waves {
            height: 350px;
          }
          .wave {
            height: 350px;
          }
        }
        @media (min-width: 1200px) {
          .container__title-skills {
            max-width: 1105px;
            padding: 0;
            margin: 0 auto 30px auto;
          }
          .container-pool {
            height: 481px;
            max-width: 100%;
            width: 1521px;
            background-image: url(${colors.seaLarge});
          }
          .waves {
            height: 380px;
          }
          .wave {
            height: 400px;
          }
        }
      `}</style>
    </>
  );
};
