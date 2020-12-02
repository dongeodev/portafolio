import React from "react";

export const Certificate = ({ img, alt, link } = {}) => {
  return (
    <>
      <figure>
        <a title={`to certificate ${alt}`} href={link}></a>
        <img src={img} alt={alt} />
      </figure>
      <style jsx>{`
        figure {
          margin: 0;
        }
        img {
          max-width: 150px;
          max-height: 115px;
          border-radius: 4px;
          box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.1);
        }
        img:hover {
          transform: scale(1.1);
        }
        @media (min-width: 768px) {
          img {
            max-width: 200px;
            max-height: 150px;
          }
        }
        @media (min-width: 1200px) {
           {
            /* img {
            max-width: 215px;
            max-height: 165px;
          } */
          }
        }
      `}</style>
    </>
  );
};
