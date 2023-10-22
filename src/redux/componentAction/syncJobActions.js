import * as ActionTypes from '../actionTypes';

export const addJob = (job) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.Add_Job, payload:job });
    }
}

export const shiftJob = () => {
    return (dispatch) => {
        dispatch({type: ActionTypes.Shift_Job});
    }
}

export const setWait = (wait) => {
    return (dispatch) => {
        dispatch({type: ActionTypes.Set_Wait, payload: wait});
    }
}
