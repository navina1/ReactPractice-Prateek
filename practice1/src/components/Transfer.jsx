import React from 'react';
import { useState } from 'react';
import "./transfer.css"
function Transfer() {
    const [list1,setList1]=useState(["item1","item2","item3","item4"]);
    const [list2,setList2]=useState(["item5","item6","item7","item8"]);
    const transferFun=(item,source,dest)=>{
        if(source === "list1"){
            let newSource = list1.filter((value) => value !== item);
            setList1(newSource);
            let newDest=[...list2,item];
            setList2(newDest)
        }else{
            let newSource = list2.filter((value) => value !== item);
            setList2(newSource);
            let newDest=[...list1,item];
            setList1(newDest)
        }
    }
  return (
    <div  className="transfer-container">
        <div className="list-container">
            <h4>List 1:</h4>
            <ul>
                {list1.map((i,index)=>(
                    <li key={index}>
                        {i}
                        <button onClick={()=>{transferFun(i,"list1","list2")}}/>
                    </li>
                ))}
            </ul>
        </div>
        <div className="list-container">
            <h4>List 2:</h4>
            <ul>
                {list2.map((i,index)=>(
                    <li key={index}>
                        {i}
                        <button onClick={()=>{transferFun(i,"list2","list1")}}/>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Transfer