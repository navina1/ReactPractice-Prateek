import React from 'react'
import { useContext } from 'react';
import {nameContext} from "./Parent"
function Child() {
    const name=useContext(nameContext)
  return (
    <div>{name}</div>
  )
}

export default Child