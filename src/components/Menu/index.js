import Link from "next/link";
import { Leng } from "Leng";
import { useState, useEffect } from "react";
import { colors, themes } from "styles";

export const Menu = ({ setTheme, setLeng, leng, themeCurrent }) => {
  useEffect(() => {
    let language = null;
    if (typeof window !== "undefined") {
      // browser code
      language = window.navigator.language;
    }
    const initLang = language && language.includes("en");
    !initLang && setLeng(Leng.ES);
  }, []);
  const [open, setOpen] = useState(false);

  const { login, knowme, lang } = leng;
  const handleClick = () => {
    setOpen(!open);
  };
  const handleTheme = () => {
    themeCurrent ? setTheme(themes.dark) : setTheme(themes.light);
    setOpen(!open);
  };
  const handleLeng = () => {
    knowme === "Conóceme" ? setLeng(Leng.EN) : setLeng(Leng.ES);
    setOpen(!open);
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
              <li>
                <Link href="/knowme">
                  <a>{knowme}</a>
                </Link>
              </li>
              <li className="disable">Blog</li>
            </ul>
          </nav>
          <nav className="menu-vertical">
            <ul>
              <li onClick={handleLeng}>{lang}</li>
              <li onClick={handleTheme}>{!themeCurrent ? "🌞" : "🌙"}</li>
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
        a {
          color: ${colors.white};
          text-decoration: none;
        }
        .menu-horizontal ul .disable {
          color: ${colors.gray};
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
