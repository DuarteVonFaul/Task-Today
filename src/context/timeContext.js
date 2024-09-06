import {createContext} from "react";

const TimeContext = createContext(
    { 
    time: 0,
    alterTimer: () => {}
})

export default TimeContext;