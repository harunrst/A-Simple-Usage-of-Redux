export const FETCH_TWEET_REQUEST = "FETCH_TWEET_REQUEST";
export const FETCH_TWEET_SUCCESS = "FETCH_TWEET_SUCCESS";
export const FETCH_TWEET_ERROR = "FETCH_TWEET_ERROR";

export const fetchTweet = (searchQuery) => async dispatch => {
    await dispatch({ type: FETCH_TWEET_REQUEST });
    try {
        var bearer_token = "AAAAAAAAAAAAAAAAAAAAAGlG%2FgAAAAAAr5ozIaLGhYRrq5ScuDuQMsexuhM%3D8Uo9xHbI4zDrH95tDecIObiZe1tR7dB0F87sd1ryicKhmM3Qqe";
        var bearer = 'Bearer ' + bearer_token;
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        var myApiUrl = 'https://api.twitter.com/1.1/search/tweets.json?lang=tr&count=5&q=' + searchQuery;
        const response = await fetch(
            proxyUrl + myApiUrl,
            {
                headers: {
                    'Authorization': bearer
                }
            }
        ).then(res => { return res.json() });
        return dispatch({
            type: FETCH_TWEET_SUCCESS,
            payload: response
        });
    } catch (err) {
        return dispatch({ type: FETCH_TWEET_ERROR, err });
    }
};

