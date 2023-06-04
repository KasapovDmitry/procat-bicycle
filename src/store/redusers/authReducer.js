const FETCH_AUTH = 'FETCH_AUTH';
const FETCH_AUTH_SUCCSESS = 'FETCH_AUTH_SUCCSESS';
const FETCH_AUTH_ERROR = 'FETCH_AUTH_ERROR';

const initialState = {
    loading: false,
    error: null,
    token: "",
    currentUser: {},
    values: {},
}

export const authReducer = (state, action) => {
    if (state === undefined) state = initialState;
    console.log(state) // тут всегда initialState, даже если записать что-то
    switch (action.type) {
        case FETCH_AUTH:
            return {...state, loading: true, error: null, values: action.payload}
        case FETCH_AUTH_SUCCSESS: {
            const {token, user} = action.payload.data
            return {...state, loading: false, error: null, values: {}, token: token, currentUser: user}
        }
        case FETCH_AUTH_ERROR:
            return {...state,loading: false, error: action.payload, values: {}}
        default:
            return state
    }
}
