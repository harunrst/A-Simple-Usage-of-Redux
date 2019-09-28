import {
    FETCH_HASTAG_REQUEST,
    FETCH_HASTAG_SUCCESS,
    FETCH_HASTAG_ERROR
} from "../actions/hastagActions"

const hastagReducer = (state = {}, action) => {
    switch (action.type) {
      case FETCH_HASTAG_REQUEST:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_HASTAG_SUCCESS:
        return {
          ...state,
          payload: action.payload,
          isLoading: false
        };
      case FETCH_HASTAG_ERROR:
        return { 
          err: action.err, 
          isLoading: false
         };
      default:
        return state;
    }
  };
  
  export default hastagReducer;