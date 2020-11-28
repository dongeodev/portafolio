import { Leng } from "Leng";
import { useState } from "react";
import { colors, themes } from "styles";

export const Menu = ({ setTheme, setLeng, leng }) => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(false);
  const [lenguage, setLenguague] = useState(false);
  const { login, kownme } = leng;
  const handleClick = () => {
    setOpen(!open);
  };
  const handleTheme = () => {
    !mode ? setTheme(themes.dark) : setTheme(themes.light);
    setMode(!mode);
  };
  const handleLeng = () => {
    !lenguage ? setLeng(Leng.ES) : setLeng(Leng.EN);
    setLenguague(!lenguage);
  };

  return (
    <>
      <picture onClick={handleClick}>
        <img src="/menu.svg" alt="icono menu" />
      </picture>
      {open && (
        <>
          <nav className="menu-horizontal">
            <ul>
              <li>{login}</li>
              <li>{kownme}</li>
              <li>Blog</li>
            </ul>
          </nav>
          <nav className="menu-vertical">
            <ul>
              <li onClick={handleLeng}>{lenguage ? "EN" : "ES"}</li>
              <li onClick={handleTheme}>{mode ? "🌞" : "🌙"}</li>
            </ul>
          </nav>
        </>
      )}

      <style jsx>{`
        picture {
          position: absolute;
          right: 20px;
          top: 20px;
          margin: 0;
          cursor: pointer;
          width: 30px;
          height: 20px;
          z-index: 2;
        }
        .menu-horizontal {
          position: absolute;
          right: 40px;
          top: 20px;
          animation: fly-left 0.5s forwards;
        }
        .menu-horizontal ul {
          display: flex;
          align-items: center;
        }

        .menu-horizontal ul li {
          margin-right: 30px;
          font-size: 1.2rem;
          font-weight: 400;
          color: ${colors.white};
          cursor: pointer;
        }
        .menu-vertical {
          position: absolute;
          right: 20px;
          top: 60px;
          width: 30px;
          animation: fall 0.5s forwards;
        }
        .menu-vertical ul {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .menu-vertical ul li {
          margin-bottom: 15px;
          font-size: 1.2rem;
          font-weight: 400;
          color: ${colors.white};
          cursor: pointer;
        }
        @media (min-width: 1200px) {
          picture {
            width: 40px;
            height: 30px;
          }
          picture > img {
            width: 40px;
            height: 30px;
          }
          .menu-horizontal ul {
            height: 30px;
          }

          .menu-horizontal ul li {
            margin-right: 60px;
            font-size: 1.6rem;
          }
          .menu-vertical {
            top: 70px;
            width: 40px;
          }

          .menu-vertical ul li {
            margin-bottom: 20px;
            font-size: 1.6rem;
          }
        }
        @keyframes fly-left {
          0% {
            transform: translateX(200px);
          }
          50% {
            transform: translateX(-50px);
          }
          60% {
            transform: translateX(10px);
          }
        }
        @keyframes fall {
          0% {
            transform: translateY(-200px);
          }
          50% {
            transform: translateY(50px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </>
  );
};
