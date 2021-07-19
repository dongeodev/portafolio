import React, { useRef, useContext } from "react";
import { ArrowButton } from "components/ArrowButton";
import { Card } from "components/Card";
import { Title } from "components/Title";
import LengContext from "LengContext";
import useNearScreen from "Hooks/useNearScreen";

export const List = () => {
  const { isNearScreen, fromRef } = useNearScreen();
  const { leng } = useContext(LengContext);
  const { projects } = leng;
  const data = [
    {
      id: "daymercell",
      img: "/daymercell.png",
      link: "https://daymercell.netlify.app/",
    },
    {
      id: "apppodcats",
      img: "/apppodcats.png",
      link: "https://apppodcasts.herokuapp.com/",
    },
    {
      id: "alphadog",
      img: "/alphadog.png",
      link: "https://alphadog.netlify.app/",
    },
    {
      id: "lmtrimetal",
      img: "/lmtrimetal.png",
      link: "https://dongeodev.github.io/estructura/",
    },
    {
      id: "notes",
      img: "/notes.png",
      link: "https://dongeodev.github.io/notes/",
    },
    {
      id: "oldPortafolio",
      img: "/old-portafolio.png",
      link: "https://dongeodev.github.io/portfolio/",
    },
    {
      id: "ractvideo",
      img: "/reactvideo.png",
      link: "https://dongeodev.github.io/Reactvideo/",
    },
  ];
  const element = useRef();
  const handlePrev = (e) => {
    element.current.scrollLeft -= 284;
  };
  const handleNext = (e) => {
    element.current.scrollLeft += 284;
  };
  console.log(isNearScreen);
  return (
    <>
      <div className="container__title-skills">
        <Title text={projects} />
      </div>
      <section className="container " ref={fromRef}>
        {isNearScreen && (
          <div className="animation">
            <div className="container__button--left" onClick={handlePrev}>
              <ArrowButton />
            </div>
            <article className="container__cards" ref={element}>
              {Object.keys(data).map((item) => (
                <div className="container__card" key={item.id}>
                  <Card img={item.img} link={item.link} id={item.id} />
                </div>
              ))}
            </article>
            <div className="container__button--right" onClick={handleNext}>
              <ArrowButton right="true" />
            </div>
          </div>
        )}
      </section>

      <style jsx>{`
        .container__title-skills {
          display: flex;
          width: 100%;
          padding-left: 20px;
          margin-bottom: 30px;
          margin-top: 50px;
        }
        .container {
          position: relative;
          max-width: 1105px;
          width: 100%;
          margin: 0 auto 80px 20px;
          height: 100%;
        }

        .container__button--left,
        .container__button--right {
          display: none;
        }
        .container__cards {
          display: flex;
          align-items: center;
          max-width: 1105px;
          flex-wrap: nowrap;
          overflow-x: auto;
          overscroll-behavior-x: contain;
          scroll-snap-type: x proximity;
          height: 246px;
        }
        .container__card {
          margin-right: 10px;
          scroll-snap-align: center;
        }
        .animation {
          animation: 1s ascend;
        }
        @keyframes ascend {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0px);
            opacity: 1;
          }
        }
        @media (min-width: 768px) {
          .container__title-skills {
            padding-left: 50px;
            margin-top: 80px;
          }
          .container {
            margin: 0 auto 80px 50px;
          }
          .container__cards {
            height: 406px;
          }
        }
        @media (min-width: 1200px) {
          .container {
            margin: 0 auto 80px auto;
          }
          .container__button--left {
            display: block;
            position: absolute;
            z-index: 1;
            top: calc(50% - 27px);
            left: -77px;
          }
          .container__button--right {
            display: block;
            position: absolute;
            z-index: 1;
            top: calc(50% - 27px);
            right: -77px;
          }

          .container__cards {
            flex-wrap: nowrap;
            overflow-x: auto;
            scroll-behavior: smooth;
            height: 406px;
          }
          .container__cards::-webkit-scrollbar {
            display: none;
          }
          .container__card {
            margin-right: 27px;
            scroll-snap-align: initial;
          }
          .container__card:nth-last-child(1) {
            margin-right: 0px;
          }
          .container__title-skills {
            max-width: 1105px;
            padding: 0;
            margin: 100px auto 30px auto;
          }
        }
      `}</style>
    </>
  );
};
