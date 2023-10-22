import * as ActionTypes from '../actionTypes';

export const viewTransactions = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.View_Transactions,
            payload: 1
        });
    }
}


export const viewWallets = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.View_Wallets,
            payload: 0
        });
    }
}