import React from 'react';
import { useState, useEffect } from 'react';
import "./cardgame.css"
function CardGame() {
    const symbols=['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🦁', '🐯', '🐮', '🐷'];
    const totalPair=symbols.length;
    
    const [card,setCard]=useState([]);
    const [flippedIndex,setFlippedIndex]=useState([]);
    const [matchedPair,setMatchedPair]=useState(0);

    useEffect(()=>{
        const shuffledSymbols=[...symbols,...symbols].sort(()=>Math.random()-0.5);
        setCard(shuffledSymbols.map((card,index)=>({id:index,symbol:card,flipped:false}))); 
    },[]);
    const handleClick =(i)=>{
        if(flippedIndex.length==2){
            return
        }
        setCard((prev)=>
            prev.map((card,index)=> index ==i ? {...card,flipped:true} : card)
        )
        setFlippedIndex([...flippedIndex,i])
    }
    useEffect(()=>{
        if(flippedIndex.length==2){
            const [index1,index2]=flippedIndex;
            const card1 = card[index1];
            const card2 = card[index2];
            if(card1.symbol == card2.symbol){
                setMatchedPair((prev)=>prev+1);
                setFlippedIndex([])
            }else{
                const timeout=setTimeout(()=>{
                    setCard((prev)=>
                        prev.map((card,i)=> i==index1 || i==index2 ? {...card,flipped:false} : card)
                    )
                    setFlippedIndex([])
                },1000);
                return ()=>clearTimeout(timeout)
            }
        }
    },[flippedIndex,card])
  return (
    <div className='main'>
        <h1>CardGame</h1>
        {console.log(totalPair,matchedPair)}
        {(matchedPair == totalPair) ?
            (<h4>Congrats you have matched all pairs</h4>)
            : (<>
                    <h4>Click on a card to flip it over.</h4>
                    <div className='card-grid'>
                        {card.map((item,index)=>(
                            <div className={`card ${item.flipped ? 'open' : ''}`} key={item.id} item={item} onClick={()=>handleClick(index)}>
                                {item.flipped ? item.symbol : '👀'}
                            </div>
                        ))}
                    </div>
               </>
             )
        }

    </div>
  )
}

export default CardGame