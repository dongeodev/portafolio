import { Button } from "components/Button";
import { SMButton } from "components/SMButton";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import ThemeContext from "ThemeContext";
import LengContext from "LengContext";

export const FormReview = () => {
  const { leng } = useContext(LengContext);
  const { form } = leng;
  const { theme, setTheme } = useContext(ThemeContext);
  const { colors } = theme;
  const [isLogin, setIsLogin] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {};

  return (
    <>
      <div className="container__form">
        <p>{form.title}</p>
        {isLogin ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <textarea
                type="text"
                name="review"
                ref={register({ required: true, minLength: 35 })}
              />
              {errors.review && <span>This field is required</span>}
            </div>
            <Button text={form.swing} />
          </form>
        ) : (
          <SMButton />
        )}
      </div>

      <style jsx>{`
        .container__form {
          max-width: 300px;
          width: 100%;
          margin: 0 auto;
        }
        p {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 14px;
        }
        form {
          display: flex;
        }
        form > div {
          max-width: 190px;
          width: 100%;
        }
        textarea {
          width: 95%;
          height: 40px;
          border-radius: 4px;
          padding: 5px 10px;
          margin-right: 10px;
        }
        @media (min-width: 768px) {
          .container__form {
            max-width: 700px;
            margin-left: 0 auto;
          }
          p {
            font-size: 1.6rem;
          }
          span {
            font-size: 1.2rem;
          }
          form > div {
            max-width: 336px;
            width: 100%;
          }
          textarea {
            height: 48px;
            border-radius: 4px;
            padding: 5px 10px;
            margin-right: 10px;
          }
          span {
          }
        }

        @media (min-width: 1200px) {
          p {
            font-size: 1.8rem;
          }

          .container__form {
            max-width: 1105px;
            margin: 0 auto;
          }
        }
      `}</style>
      <style jsx>{`
        p {
          color: ${colors.blue};
        }

        textarea {
          border: 1px solid ${colors.gray};
          color: ${colors.white};
          background: ${colors.body};
        }
        span {
          color: ${colors.rose};
        }
      `}</style>
    </>
  );
};
