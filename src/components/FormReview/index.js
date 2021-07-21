import { Button } from "components/Button";
import { SMButton } from "components/SMButton";
import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import ThemeContext from "ThemeContext";
import LengContext from "LengContext";
import { loginWithGitHub, onAuthStateChanged } from "../../../firebase/client";

export const FormReview = () => {
  const { leng } = useContext(LengContext);
  const { form } = leng;
  const { theme, setTheme } = useContext(ThemeContext);
  const { colors } = theme;

  const [user, setUser] = useState(null);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {};
  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);
  console.log(user);

  const handleClick = () => {
    loginWithGitHub()
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container__form">
        {user && <p className="username">{`${form.hi}, ${user.username}`}</p>}
        <label htmlFor="review">{form.title}</label>
        {user ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <textarea
                type="text"
                name="review"
                ref={register({ required: true, minLength: 35 })}
              />
              {errors.review && watch.review && (
                <span>This field is required</span>
              )}
              <div className="container__radio-button">
                <input type="radio" name="type" />
                <label htmlFor="type">👍</label>
              </div>
              <div className="container__radio-button">
                <input type="radio" name="type" />
                <label htmlFor="type">👎</label>
              </div>
            </div>
            <Button text={form.swing} />
          </form>
        ) : (
          <div className="container--buttons">
            <SMButton
              handleClick={handleClick}
              text={form.googleButton}
              img={"/ic_gmail.svg"}
            />
            <SMButton
              handleClick={handleClick}
              text={form.gitHubButton}
              img={"/ic_github.svg"}
              background="#000"
            />
          </div>
        )}
      </div>

      <style jsx>{`
        .container__form {
          max-width: 300px;
          width: 100%;
          margin: 0 auto;
        }
        .username {
          font-size: 1.8rem;
          margin-bottom: 4px;
        }
        label {
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
        .container--buttons {
          display: flex;
          flex-direction: column;
        }
        .container--buttons > :global(button) {
          margin-bottom: 8px;
        }
        .container__radio-button {
          display: inline;
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
          .container--buttons {
            flex-direction: row;
          }
          .container--buttons > :global(button) {
            margin-right: 8px;
          }
          .container__form {
            max-width: 1105px;
            margin: 0 auto;
          }
        }
      `}</style>
      <style jsx>{`
        p,
        label {
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
