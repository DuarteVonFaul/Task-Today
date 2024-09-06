import React, {useState, useEffect } from "react";
import CountTimerContext from "../../context/countTimerContext";

const TimeProvider = ({ children }) => {
    const [timer, setTimer] = useState(0);

  
    const alterTimer = (newTimer) => {
      setTimer(newTimer);
    };

  
    return (
      <CountTimerContext.Provider value={{ timer, alterTimer  }}>
        {children}
      </CountTimerContext.Provider>
    );
  };
  export default TimeProvider;