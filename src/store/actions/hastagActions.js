export const FETCH_HASTAG_REQUEST = "FETCH_HASTAG_REQUEST";
export const FETCH_HASTAG_SUCCESS = "FETCH_HASTAG_SUCCESS";
export const FETCH_HASTAG_ERROR = "FETCH_HASTAG_ERROR";

export const fetchHastag = () => async dispatch => {
    await dispatch({ type: FETCH_HASTAG_REQUEST });
    try {
        var bearer_token = "AAAAAAAAAAAAAAAAAAAAAGlG%2FgAAAAAAr5ozIaLGhYRrq5ScuDuQMsexuhM%3D8Uo9xHbI4zDrH95tDecIObiZe1tR7dB0F87sd1ryicKhmM3Qqe";
        var bearer = 'Bearer ' + bearer_token;
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        var woeidCountry = '2323778';
        var myApiUrl = 'https://api.twitter.com/1.1/trends/place.json?id=' + woeidCountry;
        const response = await fetch(
            proxyUrl + myApiUrl,
            {
                headers: {
                    'Authorization': bearer
                }
            }
        ).then(res => {return res.json()});
        return dispatch({
            type: FETCH_HASTAG_SUCCESS,
            payload: response[0]
        });
    } catch (err) {
        return dispatch({ type: FETCH_HASTAG_ERROR, err });
    }
};

