import { EmptySquare } from "components/EmptySquare";
import { CardSkill } from "components/CardSkill";
import useNearScreen from "Hooks/useNearScreen";

export const BarGrid = () => {
  const { isNearScreen, fromRef } = useNearScreen();
  const render = (qty) => {
    let random = [];
    for (let i = 0; i < qty; i++) {
      random.push(Math.random());
    }
    return random;
  };
  const random = render(10);
  const random2 = render(5);
  const random3 = render(5);
  const random4 = render(10);

  return (
    <>
      <section ref={fromRef}>
        {isNearScreen && (
          <div className="container-grid">
            {random.map((item) => (
              <div key={item}>
                <EmptySquare random={item.toFixed(1)} />
              </div>
            ))}
            <div>
              <CardSkill delay={1.5} icon="/js.svg" />
            </div>
            <div>
              <CardSkill delay={2} icon="/reactjs.svg" />
            </div>
            <div>
              <CardSkill delay={2.5} icon="/git.svg" />
            </div>
            {random2.map((item) => (
              <div key={item}>
                <EmptySquare random={item.toFixed(1)} />
              </div>
            ))}
            <div>
              <CardSkill delay={2} icon="/css.svg" />
            </div>
            <div>
              <CardSkill delay={2.5} icon="/gatsbyjs.svg" />
            </div>
            <div>
              <CardSkill delay={3} icon="/webpack.svg" />
            </div>
            <div>
              <CardSkill delay={3.5} icon="/nextjs.svg" />
            </div>
            {random3.map((item) => (
              <div key={item}>
                <EmptySquare random={item.toFixed(1)} />
              </div>
            ))}
            <div>
              <CardSkill delay={2.5} icon="/redux.svg" />
            </div>
            <div>
              <CardSkill delay={3} icon="/html.svg" />
            </div>
            {random4.map((item) => (
              <div key={item}>
                <EmptySquare random={item.toFixed(1)} />
              </div>
            ))}
          </div>
        )}
      </section>

      <style jsx>{`
        section {
          display: flex;
          justify-content: center;
        }
        .container-grid {
          display: grid;
          grid-template: repeat(6, auto) / repeat(8, auto);
          grid-gap: 12px;
          transform: rotateZ(20deg);
          animation: ascend 0.5s;
        }
        @keyframes ascend {
          0% {
            transform: translateY(100px) rotateZ(20deg);
            opacity: 0;
          }
          100% {
            transform: translateY(0px) rotateZ(20deg);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};
