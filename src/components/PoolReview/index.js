import { CardReview } from "components/CardReview";
import { FormReview } from "components/FormReview";
import { Pool } from "components/Pool";
import useNearScreen from "Hooks/useNearScreen";
import { useState } from "react";

export const PoolReview = () => {
  const { isNearScreen, fromRef } = useNearScreen("-20px");
  const [idCard, setIdCard] = useState("");
  const handleCardReview = (id) => {
    setIdCard(id);
  };

  return (
    <>
      <section ref={fromRef}>
        {isNearScreen && (
          <div className="animation">
            <Pool handleCardReview={handleCardReview} />
            {idCard ? <CardReview id={idCard} /> : <FormReview />}
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
