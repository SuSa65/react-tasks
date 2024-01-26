import './App.css'
import Head from './Components/Header'
import Balance from './Components/Balance'
import IncExp from './Components/IncomeExpense'
import Hist from './Components/History'
import Trans from './Components/AddTransaction'
import { GlobalProvider } from './Context/GlobalState'


function App() {

  return (
    <GlobalProvider>
      <Head/>
      <Balance/>
      <IncExp/>
      <Hist/>
      <Trans/>
    </GlobalProvider>
  )
}

export default App
