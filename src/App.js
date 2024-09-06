import logo from './logo.svg';
import './App.css';
import CountdownTimer from './components/countDownTime';
import Button from './components/button';
import TextArea from './components/textArea';
import TextField from './components/textField';

function App() {



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

      </header>
    </div>
  );
}

export default App;
