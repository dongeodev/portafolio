import { Button } from "components/Button";
import { SMButton } from "components/SMButton";
import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import ThemeContext from "ThemeContext";
import LengContext from "LengContext";
import { addReview, loginWithGitHub } from "../../../firebase/client";

export const FormReview = ({ user }) => {
  const COMPOSE_STATES = {
    USER_NOT_KNOWN: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,
  };
  const { leng } = useContext(LengContext);
  const { form } = leng;
  const { theme, setTheme } = useContext(ThemeContext);
  const { colors } = theme;

  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: "good",
    },
    mode: "onBlur",
  });
  const onSubmit = ({ review, type }) => {
    setStatus(COMPOSE_STATES.LOADING);
    addReview({
      avatar: user.avatar,
      userId: user.uid,
      userName: user.userName,
      content: review,
      type: type,
    })
      .then(setStatus(COMPOSE_STATES.SUCCESS))
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
    loginWithGitHub()
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const isDisabled = errors.review || status === COMPOSE_STATES.LOADING;
  // console.log(user);
  return (
    <>
      <div className="container__form">
        {user && <p className="username">{`${form.hi}, ${user.userName}`}</p>}
        <label htmlFor="review">{form.title}</label>
        {user ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <textarea
                {...register("review", { required: true, minLength: 10 })}
              />
              {(errors.review?.type === "required" || watch.review) && (
                <div>
                  <span>This field is required</span>
                </div>
              )}
              {errors.review?.type === "minLength" && (
                <div>
                  <span>Come on! Give me more</span>
                </div>
              )}

              <div className="container__radio-button">
                <input type="radio" {...register("type")} value="good" />
                <label htmlFor="type">👍</label>
              </div>
              <div className="container__radio-button">
                <input type="radio" {...register("type")} value="bad" />
                <label htmlFor="type">👎</label>
              </div>
            </div>
            <Button text={form.swing} type="submit" disabled={isDisabled} />
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
          display: inline-block;
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 4px;
        }
        form {
          display: flex;
        }
        form > div {
          max-width: 190px;
          width: 100%;
        }
        .container--errors {
          display: flex;
          flex-direction: column;
        }
        textarea {
          width: 95%;
          height: 75px;
          border-radius: 4px;
          padding: 5px 10px;
          margin-right: 10px;
        }
        span {
          display: inline-block;
          margin-bottom: 4px;
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
          color: ${colors.blue};
          background: ${colors.body};
        }
        span {
          color: ${colors.rose};
        }
      `}</style>
    </>
  );
};
