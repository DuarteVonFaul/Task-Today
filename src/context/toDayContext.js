import {createContext} from "react";


const ToDayContext = createContext(
    { 
    day: null ,
    setIndice: () => {},
    addTime: () => {}
})

export default ToDayContext;