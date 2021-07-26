function Spinner({ colors }) {
  return (
    <>
      <div className="container">
        <div align="center" className="cssload-fond">
          <div className="cssload-container-general">
            <div className="cssload-internal">
              <div className="cssload-ballcolor cssload-ball_1"> </div>
            </div>
            <div className="cssload-internal">
              <div className="cssload-ballcolor cssload-ball_2"> </div>
            </div>
            <div className="cssload-internal">
              <div className="cssload-ballcolor cssload-ball_3"> </div>
            </div>
            <div className="cssload-internal">
              <div className="cssload-ballcolor cssload-ball_4"> </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          align-items: center;
          display: flex;
          justify-content: center;
          height: 60px;
          width: 100vw;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.6);
        }
        .cssload-fond {
          position: relative;
          margin: auto;
        }

        .cssload-container-general {
          animation: cssload-animball_two 1.15s infinite;

          width: 43px;
          height: 43px;
        }
        .cssload-internal {
          width: 43px;
          height: 43px;
          position: absolute;
        }
        .cssload-ballcolor {
          width: 19px;
          height: 19px;
          border-radius: 50%;
        }
        .cssload-ball_1,
        .cssload-ball_2,
        .cssload-ball_3,
        .cssload-ball_4 {
          position: absolute;
          animation: cssload-animball_one 1.15s infinite ease;
        }
        .cssload-ball_1 {
          background-color: ${colors.rose};
          top: 0;
          left: 0;
        }
        .cssload-ball_2 {
          background-color: ${colors.sun};
          top: 0;
          left: 23px;
        }
        .cssload-ball_3 {
          background-color: ${colors.grape};
          top: 23px;
          left: 0;
        }
        .cssload-ball_4 {
          background-color: ${colors.blue};
          top: 23px;
          left: 23px;
        }

        @keyframes cssload-animball_one {
          0% {
            position: absolute;
          }
          50% {
            top: 12px;
            left: 12px;
            position: absolute;
            opacity: 0.5;
          }
          100% {
            position: absolute;
          }
        }

        @keyframes cssload-animball_two {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(360deg) scale(1.3);
          }
          100% {
            transform: rotate(720deg) scale(1);
          }
        }
      `}</style>
    </>
  );
}

export default Spinner;
