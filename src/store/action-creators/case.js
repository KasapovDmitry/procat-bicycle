import axios from "axios"


export const fetchCases = (page = 1, limit = 10) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'FETCH_CASES'})
            const response = await axios.get('https://sf-final-project-be.herokuapp.com/api/cases/', {
                params: {_page: page, _limit: limit},
                       })
            setTimeout(() => {
                dispatch({type: 'FETCH_CASES_SUCCSESS', payload: response.data})
            }, 600)
            
        } catch (e) {
            dispatch({type: 'FETCH_CASES_ERROR', payload: 'Произошла ошибка'})
        }
    }
}

export function setCasePage(page) {
    return {type: 'SET_CASE_PAGE', payload: page}
}