import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Expensecalc from './Calc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Expensecalc/>
    </>
  )
}

export default App
