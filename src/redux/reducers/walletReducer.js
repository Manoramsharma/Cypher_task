import * as ActionTypes from '../actionTypes';
const initialState = [];

const walletReducer  = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ActionTypes.Add_Wallet:
            return [...state, action.payload];
        case ActionTypes.Update_Balance:
            const newWallets = state.map(
                (wallet) => wallet.name === action.payload.name ? {...wallet, balance: action.payload.balance} : wallet
            )
            return newWallets;
        case ActionTypes.Delete_Wallet:
                const updatedWallets = state.filter(
                    (wallet) => wallet.name !== action.payload
                )
                return updatedWallets;
        default:
            return state;
    }
}

export default walletReducer;