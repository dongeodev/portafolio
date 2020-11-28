import { useContext } from "react";
import { BarGrid } from "components/BarGrid";
import { Hero } from "components/Hero";
import { Title } from "components/Title";
import LengContext from "LengContext";
export const Main = () => {
  const { leng } = useContext(LengContext);
  const { skills } = leng;

  return (
    <>
      <main>
        <Hero />
        <div className="container__title-skills">
          <Title text={skills} />
        </div>
        <BarGrid />
      </main>
      <style jsx>{`
        .container__title-skills {
          display: flex;
          width: 100%;
          justify-content: flex-end;
          padding-right: 20px;
        }
        @media (min-width: 768px) {
          .container__title-skills {
            padding-right: 50px;
          }
        }
        @media (min-width: 1200px) {
          .container__title-skills {
            max-width: 1105px;
            padding: 0;
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  );
};
