import * as ActionTypes from '../actionTypes';

export const inSync = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.In_Sync,
        });
    }
}


export const outSync = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.Out_Sync
        });
    }
}