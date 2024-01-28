import React from 'react'

function Page2({ formData, handleOnchange, handleNext,handlePrev }) {
  return (
  <>
    <div>
        <h1>Page2</h1>
        <label htmlFor='lastName'>lastName</label>
        <input
            name='lastName'
            value={formData.lastName}
            onChange={(e)=>{handleOnchange('lastName',e.target.value)}}
        />
    </div>
    <div>
        <button onClick={()=>{handlePrev()}}>Prev</button>
        <button onClick={()=>{handleNext()}}>next</button>
    </div>
  </>
  )
}

export default Page2