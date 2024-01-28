import React from 'react'
import { useState ,useEffect} from 'react';
import "./molegame.css"
function MoleGame() {
    const [moles,setMoles]=useState(Array(25).fill(false));
    const [score,setScore]=useState(0);
    useEffect(() => {
        let interval = setInterval(() => {
          let random = Math.floor(Math.random() * 25);
          setMoles((prev) => {
            const newMoles = Array(25).fill(false);
            newMoles[random] = true;
            return newMoles;
          });
        }, 1000);
      
        return () => clearInterval(interval);
      }, []);
      
    const handleScore=(index)=>{
        if(moles[index]){
            setScore((prev)=>prev+1);
            setMoles((prev)=>prev.map((mole,i)=>(i==index ? false : mole)))
        }
    }
  return (
    <div className='mole-game-container'>
        <h1>MoleGame</h1>
        <h4>Score: {score}</h4>
        <div className='board'>
            {moles.map((mole,index)=>(
                <div key={index} onClick={()=>handleScore(index)} className={`cell ${mole ? 'up' : ""}`}/>
                ))}
        </div>
    </div>
  )
}

export default MoleGame