import { DropDown } from "components/DropDown";
import { UList, ListItem } from "components/DropDown/ListItem";
import { SMIcons } from "components/SMIcons";
import { useContext } from "react";
import ThemeContext from "ThemeContext";
import LengContext from "LengContext";

export const Footer = () => {
  const { leng } = useContext(LengContext);
  const { footer } = leng;
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  return (
    <>
      <footer>
        <section className="container__footer">
          <div className="footer__item">
            <DropDown title={footer.contact}>
              <UList />
            </DropDown>
          </div>
          <div className="footer__down">
            <DropDown title={footer.download}>
              <ListItem
                text={footer.dowdloadCV}
                link="https://drive.google.com/file/d/1a2kovi4t8EUvzg_Vm9qgw4Of-ICiS7G-/view?usp=sharing"
              />
              <ListItem
                text={footer.study}
                link="https://platzi.com/r/dongeodev/"
              />
            </DropDown>
          </div>
          <div className="footer__social">
            <SMIcons />
          </div>
          <section className="footer__copy">
            <p className="footer__phrases">{footer.verse}</p>
            <p className="footer__copy">{footer.right}</p>
          </section>
        </section>
      </footer>
      <style jsx>{`
        footer {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          width: 100%;
          height: 330px;
          clip-path: polygon(0 0, 100% 135px, 100% 100%, 0 100%);
          background: linear-gradient(${colors.gradientFooter});
          margin-top: 120px;
        }
        .container__footer {
          display: grid;
          grid-template: 115px repeat(2, 1fr) / 1fr 110px;
          grid-column-gap: 20px;
          margin-bottom: 13px;
        }
        .footer__social {
          grid-column: span 2;
          justify-self: right;
        }
        .footer__copy {
          grid-column: span 2;
          justify-self: center;
          text-align: center;
        }
        .footer__copy .footer__phrases {
          font-size: 0.8rem;
          margin-bottom: 6px;
        }
        p {
          color: ${colors.white};
        }
        @media (min-width: 768px) {
          .container__footer {
            grid-template: 115px 1fr / repeat(3, 1fr);
            grid-column-gap: 20px;
            grid-row-gap: 10px;
          }
          .footer__down {
            justify-self: center;
          }
          .footer__social {
            grid-column: initial;
            justify-self: initial;
          }
          .footer__copy {
            grid-column: span 3;
          }
        }
        @media (min-width: 1024px) {
          .container__footer {
            grid-template: 115px 1fr / repeat(3, 1fr);
            grid-column-gap: 60px;
            grid-row-gap: 10px;
          }
          .footer__social {
            grid-column: initial;
            justify-self: initial;
          }
          .footer__copy {
            grid-column: span 3;
          }
          .footer__copy .footer__phrases {
            font-size: 1rem;
            margin-bottom: 6px;
          }
        }
        @media (max-width: 320px) {
          .container__footer {
            grid-column-gap: 10px;
          }
        }
      `}</style>
    </>
  );
};
