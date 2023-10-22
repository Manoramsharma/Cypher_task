import * as ActionTypes from '../actionTypes';
const initialState = [];

const transactionReducer  = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ActionTypes.Add_Transaction:
            return  [...action.payload, ...state];
        case ActionTypes.Delete_Transactions:
            const updatedTxs = state.filter(
                (tx) => tx.walletName !== action.payload
            )
            return updatedTxs;
        case ActionTypes.Delete_All: 
            return []
        default:
            return state;
    }
}

export default transactionReducer;