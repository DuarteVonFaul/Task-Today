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

class TimerDTO {

    constructor(indide,time, task){
        this.indice = indide;
        this.date = new Date();
        this.time = time;
        this.task = task;
        this.description = "";

        }
}




export default TimerDTO;