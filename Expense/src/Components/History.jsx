import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState";

function Hist(){
const {transaction}=useContext(GlobalContext);
const {deleteTransaction}=useContext(GlobalContext);


    return(
        <><h3>History</h3>
        <ul id="list" class="list">
           {/* <li class="minus"> */}
            {/* Cash <span>-$400</span><button class="delete-btn">x</button> */}
            {transaction.map(transaction=>(<li className={transaction.amount<0?'minus':'plus'}>{transaction.text}
            <span>-${transaction.amount}</span><button class="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>X</button>
            </li>))}
    
        </ul></>
    )
}
export default Hist