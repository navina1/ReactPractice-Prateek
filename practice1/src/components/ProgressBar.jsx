import React, { useEffect } from 'react';
import { useState } from 'react';
import "./progressbar.css"
function ProgressBar() {
    const [progress,setprogress]=useState(0);
    useEffect(()=>{
        const intervel=setInterval(() => {
            setprogress((prev)=>(prev < 100 ? prev+2 : prev))
        },1000);
        return () => clearInterval(intervel)

    },[progress])
  return (
    <div>
        <h1>ProgressBar</h1>
        <div className="progressbar-container">
            <div className='progress' style={{ width: `${progress}%` }}>
                <span>{progress}%</span>
            </div>
        </div>
    </div>
  )
}

export default ProgressBar