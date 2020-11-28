import { useEffect, useRef, useState } from "react";

export default function useNearScreen({ distance = "1px" } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const fromRef = useRef();
  useEffect(() => {
    let observer;
    const element = fromRef.current;
    const onShow = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setIsNearScreen(true);
        observer.disconnect();
      }
    };
    Promise.resolve(
      typeof IntersectionObserver !== "undefine"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onShow, {
        rootMargin: distance,
      });
      if (element) observer.observe(element);
    });

    return () => observer && observer.disconnect();
  });
  return { isNearScreen, fromRef };
}
