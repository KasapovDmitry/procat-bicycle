const FETCH_CASES = 'FETCH_CASES';
const FETCH_CASES_SUCCSESS = 'FETCH_CASES_SUCCSESS';
const FETCH_CASES_ERROR = 'FETCH_CASES_ERROR';
const SET_CASE_PAGE = 'SET_CASE_PAGE';

const initialState = {
    loading: false,
    page: 1,
    limit: 10,
    error: null,
    case: [],
}


export const caseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CASES:
            return {...state, loading: true}
        case FETCH_CASES_SUCCSESS:
            return {...state, loading: false, error: null, case: action.payload}
        case FETCH_CASES_ERROR:
            return {...state, loading: false, error: action.payload, case: []}
        case SET_CASE_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}
