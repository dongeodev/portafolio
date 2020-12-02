import { Certificate } from "components/Certificate";
import React from "react";
import { colors } from "styles";

export const Courses = ({ data } = {}) => {
  return (
    <>
      <section>
        {data &&
          data.map(({ image, title }) => (
            <Certificate img={image} key={title} alt={title} />
          ))}
      </section>
      <style jsx>{`
        section {
          display: grid;
          max-width: 320px;
          margin: 0 auto;
          height: 480px;
          overflow: scroll;
          grid-template-columns: repeat(2, 150px);
          grid-gap: 10px;
        }
        section::-webkit-scrollbar {
          width: 5px;
        }
        section::-webkit-scrollbar-thumb {
          background: ${colors.blue};
          border-radius: 10px;
        }
        @media (min-width: 768px) {
          section {
            max-width: 620px;
            grid-template-columns: repeat(3, 200px);
            grid-gap: 20px 5px;
          }
        }
        @media (min-width: 1200px) {
          section {
            max-width: 1105px;

            grid-template-columns: repeat(5, 215px);
          }
        }
      `}</style>
    </>
  );
};
