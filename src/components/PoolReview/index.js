import { useState, useEffect } from "react";
import { useContext } from "react";
import LengContext from "LengContext";
import ThemeContext from "ThemeContext";
import { CardReview } from "components/CardReview";
import { FormReview } from "components/FormReview";
import { Pool } from "components/Pool";
import useNearScreen from "Hooks/useNearScreen";
import { fetchLatestReviews, onAuthStateChanged } from "firebase/client";
import Spinner from "components/Spinner";
import useTimeAgo from "Hooks/useTimeAgo";

export const PoolReview = () => {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  const { leng } = useContext(LengContext);
  const { pool } = leng;
  const COMPOSE_STATES = {
    USER_NOT_KNOWN: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,
  };
  const { isNearScreen, fromRef } = useNearScreen("-20px");
  const [dataCard, setDataCard] = useState(null);
  const [userReview, setUserReview] = useState(null);
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
  const [rated, setRated] = useState(null);
  const showCardReview = (data) => {
    setDataCard(data);
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
        if (data) {
          setUserReview(data);
          setDataCard(data);
        }
        setStatus(COMPOSE_STATES.SUCCESS);
      })
      .catch((err) => {
        console.log(err);
        setStatus(COMPOSE_STATES.ERROR);
      });
  }, [user, rated]);

  const fetching = status === COMPOSE_STATES.LOADING;
  const timeago = dataCard && useTimeAgo(dataCard.createdAt, pool.lang);
  // console.log(user);
  const handleCloseCard = () => {
    setDataCard(userReview ? userReview : null);
  };
  return (
    <>
      <section ref={fromRef}>
        {isNearScreen && (
          <div className="animation">
            <Pool showCardReview={showCardReview} reviews={reviews} />
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
                createAt={timeago}
                handleCloseCard={handleCloseCard}
                hiddeCloseButton={userReview && dataCard.id === userReview.id}
              />
            ) : (
              <FormReview user={user} setRated={setRated} />
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
