import { useEffect, useState } from "react";

export function useAngle() {
  const [screen, setScreen] = useState();

  useEffect(function () {
    const alphaCalc = () => {
      const alpha = Math.floor(
        Math.asin(135 / window.screen.width) * (180 / Math.PI)
      );
      setScreen(alpha);
    };
    alphaCalc();
    window.addEventListener("resize", alphaCalc);
    return () => window.removeEventListener("resize", alphaCalc);
  });
  return screen;
}
