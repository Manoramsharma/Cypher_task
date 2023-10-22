import * as ActionTypes from '../actionTypes';
const initialState = false;

const importModalreducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ActionTypes.Open_Modal:
            return true;
        case ActionTypes.Close_Modal:
            return false;
        default:
            return state;
    }
}

export default importModalreducer;