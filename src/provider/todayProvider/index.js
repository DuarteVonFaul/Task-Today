import React, {useState, useEffect } from "react";
import DayContext from "../../context/dayContext";
import Day from "../../dto/Day";


function formatDate(today ){
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}



const ToDayProvider = ({ children }) => {
    const [day, setDay] = useState( new Day());
    
    useEffect(() => {
        const storedToDay = localStorage.getItem("ToDay");
        if (storedToDay) {
           if( formatDate(new Date(JSON.parse(storedToDay).Day)) === (new Date())){
                setDay(JSON.parse(storedToDay));
           }else{
                setDay(new Day());
           }
            
        }
      }, []);
  
    const setIndice = (newIndice) => {
      day.indice = newIndice
      localStorage.setItem("ToDay", JSON.stringify(day));
    };

    const addTime = (newTime) => {
        day.Times.push(newTime)
        localStorage.setItem("ToDay", JSON.stringify(day));
      };

  
    return (
     
      <DayContext.Provider value={{ day, setIndice, addTime  }}>
        {children}
      </DayContext.Provider>
    );
  };
  export default ToDayProvider;