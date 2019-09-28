import {
    FETCH_TWEET_REQUEST,
    FETCH_TWEET_SUCCESS,
    FETCH_TWEET_ERROR
} from "../actions/tweetActions"

const tweetReducer = (state = {}, action) => {
    switch (action.type) {
      case FETCH_TWEET_REQUEST:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_TWEET_SUCCESS:
        return {
          ...state,
          payload: action.payload,
          isLoading: false
        };
      case FETCH_TWEET_ERROR:
        return { 
          err: action.err, 
          isLoading: false
         };
      default:
        return state;
    }
  };
  
  export default tweetReducer; 