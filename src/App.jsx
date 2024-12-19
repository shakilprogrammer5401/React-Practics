import React from 'react'
import ClassComponent from './Components/ClassComponent'
import IconReact from './Components/IconReact'
import ClassState from './Components/State/ClassState'
import HabluSate from './Components/State/HabluState'
import IncDecState from './Components/State/functionalState/IncDec'
import TotalOrder from './Components/State/functionalState/OrderTracking'
import DataState from './Components/State/functionalState/DataState'
import ObjState from './Components/State/functionalState/ObjState'

function App() {
  return (
    <>
        <ClassComponent name= "Md Shakil Hossain" age= "18"/>
        <IconReact />
        <ClassState />
        <HabluSate />
        <IncDecState />
        <TotalOrder />
        <DataState />
        <ObjState />


    </>
  )
}

export default App
