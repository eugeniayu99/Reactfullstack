import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BadCounter from './componentes/badCounter'
import CounterFunctional from './componentes/CounterFunctional'
import CounterBugExample from './componentes/CounterBugExample'
import Immuability from './componentes/Immuability'
import CounterExam from './componentes/CounterExam'
import DarkModeToggle from './componentes/DarkModeToggle'
import TwoInputs from './componentes/TwoInputs'

function App() {

  return (
    <>
      <BadCounter />
      <CounterFunctional />
      <CounterBugExample />
      <Immuability />
      <CounterExam />
      <DarkModeToggle />
      <TwoInputs />
    </>
    
  )
}

export default App
