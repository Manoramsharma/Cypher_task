import * as ActionTypes from '../actionTypes';

export const openModal = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.Open_Modal,
        });
    }
}


export const closeModal = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.Close_Modal
        });
    }
}