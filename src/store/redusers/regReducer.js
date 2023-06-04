const FETCH_REG = 'FETCH_REG';
const FETCH_REG_SUCCSESS = 'FETCH_REG_SUCCSESS';
const FETCH_REG_ERROR = 'FETCH_REG_ERROR';

const initialState = {
    loading: false,
    error: null,
    tokenr: null,
    values: {},
}

export const regReducer = (state, action) => {
    if (state === undefined) state = initialState;
    console.log(state) // тут всегда initialState, даже если записать что-то
    switch (action.type) {
        case FETCH_REG:
            return {loading: true, error: null, values: {}}
        case FETCH_REG_SUCCSESS: {
            return {loading: false, error: null, values: action.payload, tokenr: '' }
        }
        case FETCH_REG_ERROR:
            return {loading: false, error: action.payload, values: {}}
        default:
            return state
    }
}