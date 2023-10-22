import * as ActionTypes from '../actionTypes';
const initialState = {
    wait: false,
    jobs: []
};

const syncJobReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ActionTypes.Add_Job:
            return {...state,jobs:[...state.jobs,action.payload]};
        case ActionTypes.Shift_Job:
            return {...state,jobs:state.jobs.slice(1)};
        case ActionTypes.Set_Wait:
            return {...state,wait:action.payload};
        default:
            return state;
    }
}

export default syncJobReducer;
  