import * as actionTypes from "./actionsTypes";

export const deleteResult = val => {
    return {
        type: actionTypes.DELETE_RESULT,
        val: val
    };
};

export const storeResult = result => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: actionTypes.STORE_RESULT,
                result: result
            });
        }, 2000);
    };
};