import React from 'react'
import ClassComponent from './Components/ClassComponent'
import IconReact from './Components/IconReact'
import ClassState from './Components/State/ClassState'
import HabluSate from './Components/State/HabluState'
import IncDecState from './Components/State/functionalState/IncDec'
import TotalOrder from './Components/State/functionalState/OrderTracking'

function App() {
  return (
    <>
        <ClassComponent name= "Md Shakil Hossain" age= "18"/>
        <IconReact />
        <ClassState />
        <HabluSate />
        <IncDecState />
        <TotalOrder />
    </>
  )
}

export default App
