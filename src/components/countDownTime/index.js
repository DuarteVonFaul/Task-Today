import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function CountdownTimer({ time, disabled }) {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    if (remainingTime <= 0 || disabled) return; // Para o contador se o tempo acabar ou estiver desabilitado

    const timerId = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId); // Limpa o intervalo quando o tempo chega a zero
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId); // Limpeza do intervalo ao desmontar o componente ou atualizar o tempo
  }, [remainingTime, disabled]); // Dependências

  // Calcula o progresso em porcentagem
  const percentage = ((time - remainingTime) / time) * 100;

  return (
    <div style={{ display: !disabled ? 'block' : 'none', width: '200px', margin: '0 auto' }}>
      <h1>Contador de Tempo</h1>
      <CircularProgressbar
        value={percentage}
        text={formatTime(remainingTime)}
        styles={buildStyles({
          textSize: '16px',
          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
          textColor: '#f88',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      />
    </div>
  );
}

export default CountdownTimer;