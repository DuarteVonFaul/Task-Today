function formateDate(today ){
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};
class TimerVO{

    constructor(Timer){
        this.toString = "Data: "   + formateDate(new Date(Timer.date))
        + "<br>Tempo: "            + formatTime(Timer.time)
        + "<br>Task: "             + Timer.task.title
        + "<br>Task description: " + Timer.task.description
        + "<br>Atividade Feita: "  + Timer.description
    }
    
}

export default TimerVO;