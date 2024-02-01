import React from 'react'

function Hoc(props) {
  return (
    <div style={{border:"2px solid red",width:"100vh",height:"400px",margin:"auto"}}>
        {props.children}
    </div>
  )
}

export default Hoc