import * as ActionTypes from '../actionTypes';
const initialState = true;

const syncIndicatorReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ActionTypes.In_Sync:
            return true;
        case ActionTypes.Out_Sync:
            return false;
        default:
            return state;
    }
}

export default syncIndicatorReducer;