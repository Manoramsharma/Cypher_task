import * as ActionTypes from '../actionTypes';
import {mnemonisToaddress} from '../../api/utils';
import {BALANCE, TRANSACTION} from '../../App';
import {getBalance, fetchTransactions} from '../../api/index'
import { bindActionCreators } from 'redux'
import { useDispatch } from "react-redux";
import { syncJobAction } from "../index";

export const addWallet = (walletDetails) => {
    const wallet = {...walletDetails, balance: 0};
    const BalanceSyncjob = {
        name: BALANCE,
        walletName: wallet.name,
        task: () => getBalance(wallet.mnemonics)
    }
    const TransactionSyncjob = {
        name: TRANSACTION,
        walletName: wallet.name,
        task: () => fetchTransactions(wallet.mnemonics)
    }

    return (dispatch) => {
        const { addJob } = bindActionCreators(syncJobAction, dispatch);
        addJob(BalanceSyncjob);
        addJob(TransactionSyncjob);
        dispatch({
            type: ActionTypes.Add_Wallet,
            payload: wallet
        });
    }
}


export const updateBalance = (name, balance) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.Update_Balance,
            payload: { name, balance}
        });
    }
}

export const deleteWallet = (walletName) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.Delete_Wallet,
            payload: walletName
        });
        dispatch({
            type: ActionTypes.Delete_Transactions,
            payload: walletName
        });
    }
}