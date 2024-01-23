import React from 'react';
import { useState , useRef } from 'react';

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning,setIsRunning]=useState(false);
    const timeOutRef=useRef();
    const handleTick=()=>{
       timeOutRef.current=setTimeout(()=>{
        setTime((prev)=> prev + 1);
        handleTick();
       },1000)
    }
    const handleStart = () =>{
        setIsRunning(true);
        handleTick()
    }
    const handleStop=()=>{
        setIsRunning(false);
        clearTimeout(timeOutRef.current);
    }
    const reset=()=>{
        handleStop();
        setTime(0);
    }
  return (
    <div style={{ border: '2px solid black', padding: '10px', width: '200px', margin: 'auto' }}>
        <div>{Math.floor(time/60)} min {time%60} seconds</div>
        <div>
            <button disabled={isRunning} onClick={()=>handleStart()}>Start</button>
            <button disabled={!isRunning} onClick={()=>handleStop()}>Stop</button>
            <button onClick={()=>{reset()}}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch