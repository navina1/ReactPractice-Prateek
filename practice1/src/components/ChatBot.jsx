import React, { useEffect, useState } from 'react'
import "./chatbot.css"
function ChatBot() {
    const [message,setMessage]=useState([])
    const [input,setInput]=useState();
    const [person,setPerson]=useState(false);
    const handleButton=()=>{
        let temp=[...message];
        if(person==true){
            temp.push({author:"person1",text:input});
        }else{
            temp.push({author:"person2",text:input});
        }
        setInput("");
        setPerson(!person);
        setMessage(temp);
    }
    
  return (
    <div>
        <h1>ChatBot</h1>
        <div className='chatbox'>
            {message.map((item,index)=>(
                <span className={`${item.author === "person1" ? 'me' : 'u'}`} key={index}>{item.text}</span>
                ))}
        </div>
        <div className='buttonbox'>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <button onClick={()=>handleButton()}>Send</button>
        </div>
    </div>
  )
}

export default ChatBot