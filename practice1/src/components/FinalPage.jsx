import React from 'react'

function FinalPage({formData,handlePrev}) {
  return (
    <>
        <div>
            <h1>FinalPage</h1>
            <p>Name: {formData.firstName}</p>
            <p>Last Name:{formData.lastName}</p>
        </div>
        <div>
            <button onClick={()=>{handlePrev()}}>Back</button>
        </div>
    </>
  )
}

export default FinalPage