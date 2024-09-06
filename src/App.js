import logo from './logo.svg';
import './App.css';
import CountdownTimer from './components/countDownTime';
import Button from './components/button';
import TextArea from './components/textArea';
import TextField from './components/textField';
import ViewList from './components/viewList';

import TaskDTO from './dto/taskDTO.js';
import TaskVO from './vo/taskVO.js';

function App() {


  const listTask = [
    new TaskVO(new TaskDTO("Tarefa 1", "Descrição Tarefa 1")),
    new TaskVO(new TaskDTO("Tarefa 2", "Descrição Tarefa 2")),
    new TaskVO(new TaskDTO("Tarefa 3", "Descrição Tarefa 3")),
    new TaskVO(new TaskDTO("Tarefa 4", "Descrição Tarefa 4")),
    new TaskVO(new TaskDTO("Tarefa 5", "Descrição Tarefa 5")),
    new TaskVO(new TaskDTO("Tarefa 6", "Descrição Tarefa 6"))
  ]



  return (
    <div className="App">
      <header className="App-header">
        <CountdownTimer
          time={30}
        />
        <Button
        nameButton="Cadastrar Time">

        </Button>

        <TextField
        placeholder={"Username"}
        type={"text"}
        />
        <TextField
        placeholder={"Password"}
        type={"password"}
        />

        <TextArea
        placeholder={"Descrição aqui"}
        
        />

        <ViewList tasks={listTask}>
        </ViewList>

      </header>
    </div>
  );
}

export default App;
