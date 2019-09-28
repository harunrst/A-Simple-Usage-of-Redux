export const FETCH_HASTAG_REQUEST = "FETCH_HASTAG_REQUEST";
export const FETCH_HASTAG_SUCCESS = "FETCH_HASTAG_SUCCESS";
export const FETCH_HASTAG_ERROR = "FETCH_HASTAG_ERROR";

export const fetchHastag = () => async dispatch => {
    await dispatch({ type: FETCH_HASTAG_REQUEST });
    try {
        const response = await fetch(
            
            //YOUR TWITTER TRENDS QUERY
            
        ).then(res => {return res.json()});
        return dispatch({
            type: FETCH_HASTAG_SUCCESS,
            payload: response[0]
        });
    } catch (err) {
        return dispatch({ type: FETCH_HASTAG_ERROR, err });
    }
};

