import axios from "axios"


export const fetchRegistr = (obj, url1) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'FETCH_REG'})
            console.log(obj);
            console.log(url1);
            const response = await axios.post(url1, obj)

            dispatch({type: 'FETCH_REG_SUCCSESS', payload: response.data})
         console.log(response.data);
        } catch (e) {
            dispatch({type: 'FETCH_REG_ERROR', payload: 'Произошла ошибка'})
            console.log(e);
        }
    }
}