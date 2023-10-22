import * as ActionTypes from '../actionTypes';

export const addTransaction = (walletName, allTx) => {
    const transactions = allTx.map(tx => ({...tx, walletName}));
    return (dispatch) => {
        dispatch({
            type: ActionTypes.Add_Transaction,
            payload: transactions
        });
    }
}

export const deleteTransactions = (walletName) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.Delete_Transactions,
            payload: walletName
        });
    }
}

export const deleteAll = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.Delete_All,
        });
    }
}