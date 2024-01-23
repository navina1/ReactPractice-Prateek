import React from 'react';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [countHistory,setCountHistory]=useState([]);
    const [index,setIndex]=useState(0);
    const updateHistory = (newCount)=>{
        let newArr=countHistory.slice(0,index+1);
        newArr.push(newCount);
        setCountHistory(newArr);
        setIndex(countHistory.length)
    }
    const handleIncrement=()=>{
        setCount((prevCount) => {
            const newCount=prevCount + 1;
            updateHistory(newCount);
            return newCount
        });
        // setCountHistory([...countHistory, count]);
        // setIndex(countHistory.length-1);
    }
    const handleDecrement=()=>{
        setCount((prevCount) => {
            const newCount = prevCount - 1;
            updateHistory(newCount);
            return newCount;
        });
    }
    const handleUndo=()=>{
        if (index>0) {
            setIndex(index-1);
            setCount(countHistory[index-1]);
        }
    }
    const handleRedo=()=>{
        if (index < countHistory.length - 1) {
            setIndex(index+1);
            setCount(countHistory[index-1]);
        }
    }
  return (
    <div>
        <h4>{count}</h4>
        <div>
            <button onClick={()=>{handleIncrement()}}>Increment</button>
            <button onClick={()=>{handleDecrement()}}>Decrement</button>
        </div>
        <div>
            <button onClick={()=>{handleUndo()}}>Undo</button>
            <button onClick={()=>{handleRedo()}}>Redo</button>
        </div>
    </div>
  )
}

export default Counter