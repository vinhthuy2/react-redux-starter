import * as actionTypes from '../actions'
const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.STORE_RESULT) {
        return {
            ...state,
            results: state.results.concat({
                value: action.result,
                id: Math.random() * 1000
            })
        }
    }

    if (action.type === actionTypes.DELETE_RESULT) {
        const newResults = state.results.filter(r => r.id !== action.val);
        return {
            ...state,
            results: newResults
        }
    }
    return state;
}

export default reducer