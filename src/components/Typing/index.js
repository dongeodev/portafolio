import Typical from "react-typical";
export const Typing = ({ steps, colors, loop }) => {
  return (
    <>
      <li>
        <Typical steps={steps} loop={loop} wrapper="p" />
      </li>
      <style jsx>{`
        li {
          margin-bottom: 16px;
          font-size: 1.6rem;
          font-family: "Source Code Pro", monospace;
        }

        @media (min-width: 768px) {
          li {
            font-size: 2rem;
          }
        }
        @media (min-width: 1200px) {
          li {
            font-size: 2rem;
          }
        }
      `}</style>
      <style jsx>{`
        li {
          color: ${colors.rose};
        }
      `}</style>
    </>
  );
};
{
  /* <li>
<Typical
  steps={[
    "Copiar Plantillas",
    2000,
    "copiar y pegar cualquier codigo",
    4000,
    "no estudiar mas",
    3000,
    "lanzar otroo sitio web mas",
    4000,
  ]}
  loop={Infinity}
  wrapper="p"
/>
</li> */
}
