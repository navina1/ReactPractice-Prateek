import React from 'react';
import { createContext } from 'react';
import Child from './Child';
export const nameContext=createContext(null)
function Parent() {
  return (
    <div>
        <h1>Parent</h1>
        <nameContext.Provider value={"Navina"}>
            <Child/>
        </nameContext.Provider>
    </div>
  )
}

export default Parent