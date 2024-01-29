import React from 'react';
import { useState, useEffect } from 'react';
import "./gridoflight.css"
function GridOfLights() {
    const [light,setLight]=useState([0,0,0,0,0,0,0,0]);
    const [history,setHistory]=useState([])
    const onClickHandle=(id)=>{
        let newLight=[...light];
        newLight[id]=1;
        setLight(newLight);
        setHistory([...history,id])
    }
    useEffect(()=>{
        if (history.length === light.length) {
            console.log("entered");
            for(let i=history.length-1;i>=0;i--){
                setTimeout(() => {
                    setLight((prev)=>{
                        let temp = [...prev];
                        temp[history[i]]=0;
                        return temp
                    })
                },(history.length-i) * 1000)
            }
            setHistory([])
        }
    },[history,light]);
    
  return (
    <div>
        <h1>GridOfLights</h1>
        <div>
            {light.map((item,index)=>(
                <div onClick={()=>{onClickHandle(index)}} key={index} className={`light ${item==1? "on" : "off"}`} ></div>
            ))}
        </div>
    </div>
  )
}

export default GridOfLights