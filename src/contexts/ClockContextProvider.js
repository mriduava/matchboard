import React, {createContext} from 'react'
import {socket} from '../socket/socket';

export const ClockContext = createContext()

const ClockContextProvider = (props) => {
  const $ = x => document.querySelector(x);
  let timePaused = 0;
  let timeStarted = 0;
  let timePausedSum = 0;
  let timeTotal = 90 * 60 * 1000;

  let timeLeft = () => {
    let timeElapsed = timeStarted ?
      Date.now() - timeStarted : 0;
      timeElapsed -= timePausedSum;
      timeElapsed -= timePaused ?
      Date.now() - timePaused : 0;
    return timeTotal - timeElapsed;
  }

  let timeFormatted = () => {
    let tl = timeLeft();
    let minutes = Math.floor(tl / 60 / 1000);
    let seconds = Math.floor(tl / 1000) - minutes * 60;
    return (minutes + '').padStart(2, '0') + ':'
      + (seconds + '').padStart(2, 0);
  }

  let startClock = () => {
    if (!timeStarted) {
      timeStarted = Date.now();      
    }
    else if (!timePaused) {
      return;
    }
    else {
      timePausedSum += Date.now() - timePaused;
      timePaused = 0;
    }
  }

  let stopClock = () => {
    if (!timeStarted) { return; }
    timePaused = Date.now();
  }

  let sleep = (ms) => {
    return new Promise(res => setTimeout(res, ms));
  }

  let showClock = () => {
    startClock()
    $('.clock').innerHTML = timeFormatted();
    sleep(500);
  }

  let clockStarted;
  let startTime = () => {  
    clockStarted = setInterval(showClock, 100)
    let timeInfo = {
      timeStarted: timeStarted,
      timeLeft: timeLeft()
    }
    socket.emit('timeInfo', timeInfo)
  }

  let stopTime = () =>{
    stopClock()
    clearInterval(clockStarted)
    let stopInfo = {
      timeStarted: null
    }
    socket.emit('stopInfo', stopInfo)
  }

  const values={
    timeStarted,
    timeLeft,
    timeFormatted,
    startClock,
    stopClock,
    sleep,
    startTime,
    stopTime
  }
  return (
    <ClockContext.Provider value={values}>
      {props.children}
    </ClockContext.Provider>
  )
}

export default ClockContextProvider