import React from 'react'

function Page1({ formData, handleOnchange, handleNext }) {
    return (<>
        <div>
            <h1>Page1</h1>
            <label htmlFor="firstName">Name: </label>
            <input
                name='firstName'
                value={formData.firstName}
                onChange={(e) => handleOnchange("firstName", e.target.value)}
            />
        </div>
        <div>
            <button onClick={()=>handleNext()}>Next</button>
        </div>
    </>
    )
}

export default Page1