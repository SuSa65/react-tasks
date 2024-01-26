
export default(state,action)=>{
        switch((action.type)){
                case 'DELETE_TRANS':
                        return{
                                ...state,
                                transaction:state.transaction.filter(transaction=>transaction.id!==action.payload)
                        }
        }
        return state;
}