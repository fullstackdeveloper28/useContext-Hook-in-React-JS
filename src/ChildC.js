import React, { useContext } from 'react'
import {data,data1} from './App'

function ChildC() {
    const fistName=useContext(data);
    const lastName=useContext(data1);
  return (
    <div>
      <div>First Name <strong>{fistName}</strong></div>
      <div>Last Name <strong>{lastName}</strong></div>
    </div>
  )
}

export default ChildC
