export const FETCH_TWEET_REQUEST = "FETCH_TWEET_REQUEST";
export const FETCH_TWEET_SUCCESS = "FETCH_TWEET_SUCCESS";
export const FETCH_TWEET_ERROR = "FETCH_TWEET_ERROR";

export const fetchTweet = (searchQuery) => async dispatch => {
    await dispatch({ type: FETCH_TWEET_REQUEST });
    try {
        const response = await fetch(
            
            //YOUR TWITTER SEARCH API QUERY
            
        ).then(res => { return res.json() });
        return dispatch({
            type: FETCH_TWEET_SUCCESS,
            payload: response
        });
    } catch (err) {
        return dispatch({ type: FETCH_TWEET_ERROR, err });
    }
};

