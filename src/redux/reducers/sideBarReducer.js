import * as ActionTypes from '../actionTypes';
const initialState = 0;

const sideBarreducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ActionTypes.View_Transactions:
            return action.payload;
        case ActionTypes.View_Wallets:
            return action.payload;
        default:
            return state
    }
}

export default sideBarreducer;