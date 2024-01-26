import React from 'react'
import { useState } from 'react';
import "./rating.css"
function Rating() {
    let array=new Array(5).fill(false);
    const [rating,setRating]=useState(0);
    const handleClick=(i)=>{
        setRating(i+1)
    }
  return (
    <div>
        <h1>Rating {rating}</h1>
        <div className='rating'>
            {array.map((e,i)=>(
                <span
                    key={1}
                    onClick={()=>{handleClick(i)}}
                    className={rating>= i+1 ? 'fill' : 'unfill'}
                >
                    ★
                </span>
                ))}
        </div>
    </div>
  )
}

export default Rating