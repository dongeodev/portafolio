import { useState } from "react";
import { colors } from "styles";

export const DropDown = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div onClick={handleOpen}>
        <h3>{title}</h3>
        <img src="/arrow_d.svg" alt="arrow" />
      </div>
      {open && children}
      <style jsx>{`
        div {
          display: flex;
          margin-bottom: 12px;
        }
        h3 {
          font-size: 1.6rem;
          font-weight: 600;
          color: ${colors.white};
          margin-right: 4px;
          border-bottom: 2px solid ${colors.sun};
        }
        div > img {
          transition: 0.5s;
          transform: ${!open && "rotateZ(180deg)"};
        }
        @media (min-width: 768px) {
          h3 {
            font-size: 1.8rem;
          }
        }
        @media (min-width: 1024px) {
          h3 {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
};
