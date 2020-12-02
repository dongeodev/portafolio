import { Title } from "components/Title";

export const Resumen = ({ data, colors, resume } = {}) => {
  return (
    <>
      <section>
        <Title text={resume} />
        <ul>
          {data.map((curso) => (
            <li key={curso}>{curso}</li>
          ))}
        </ul>
      </section>
      <style jsx>{`
        section {
          max-width: 300px;
          margin: 20px auto;
        }
        ul {
          display: grid;
          margin-top: 20px;
          grid-template-columns: repeat(2, auto);
          row-gap: 5px;
        }
        li {
          font-size: 1.6rem;
          font-family: "Source Code Pro", monospace;
          color: ${colors.blue};
        }

        @media (min-width: 768px) {
          section {
            max-width: 620px;
          }
          ul {
            grid-template-columns: repeat(3, auto);
          }
          li {
            font-size: 2rem;
          }
        }
        @media (min-width: 1200px) {
          section {
            max-width: 1105px;
          }
          ul {
            grid-template-columns: repeat(5, auto);
          }
        }
      `}</style>
    </>
  );
};
