import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

function IncExp(){

    const {transaction}=useContext(GlobalContext)
    const amounts = transaction.map(transaction => transaction.amount);

    const income=amounts.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    const Expense=(amounts.filter(item=>item<0).reduce((acc, item) => (acc += item),0)*-1).toFixed(2)

    return(
        <><div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" class="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money minus">-${Expense}</p>
        </div>
      </div></>
    )
}
export default IncExp