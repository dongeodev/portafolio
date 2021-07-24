import { useState, useEffect } from "react";
import { useContext } from "react";
import ThemeContext from "ThemeContext";
import { CardReview } from "components/CardReview";
import { FormReview } from "components/FormReview";
import { Pool } from "components/Pool";
import useNearScreen from "Hooks/useNearScreen";
import {
  fetchLatestReviews,
  onAuthStateChanged,
} from "../../../firebase/client";
import Spinner from "components/Spinner";

export const PoolReview = () => {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  const COMPOSE_STATES = {
    USER_NOT_KNOWN: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,
  };
  const { isNearScreen, fromRef } = useNearScreen("-20px");
  const [dataCard, setDataCard] = useState(null);
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
  const handleCardReview = (id) => {
    setDataCard(id);
  };
  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  useEffect(() => {
    setStatus(COMPOSE_STATES.LOADING);
    fetchLatestReviews()
      .then((res) => {
        setReviews(res);
        const data = user && res.find((item) => item.userId === user.uid);
        data && setDataCard(data);
        setStatus(COMPOSE_STATES.SUCCESS);
      })
      .catch((err) => {
        console.log(err);
        setStatus(COMPOSE_STATES.ERROR);
      });
    console.log("entre");
  }, [user]);

  const fetching = status === COMPOSE_STATES.LOADING;
  // console.log(user);
  return (
    <>
      <section ref={fromRef}>
        {isNearScreen && (
          <div className="animation">
            <Pool handleCardReview={handleCardReview} reviews={reviews} />
            {fetching ? (
              <Spinner colors={colors} />
            ) : dataCard ? (
              <CardReview
                colors={colors}
                userName={dataCard.userName}
                avatar={dataCard.avatar}
                content={dataCard.content}
                userId={dataCard.userId}
                id={dataCard.id}
                type={dataCard.type}
                createAt={dataCard.createdAt}
              />
            ) : (
              <FormReview user={user} />
            )}
          </div>
        )}
      </section>
      <style jsx>{`
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
      `}</style>
    </>
  );
};
