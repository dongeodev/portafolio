import { Leng } from "Leng";
import React, { useState } from "react";

const LengContext = React.createContext({});

export function LengContextProvider({ children }) {
  const [leng, setLeng] = useState(Leng.EN);

  return (
    <LengContext.Provider value={{ leng, setLeng }}>
      {children}
    </LengContext.Provider>
  );
}
export default LengContext;
