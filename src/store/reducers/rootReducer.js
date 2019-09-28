import { combineReducers } from 'redux'
import hastagReducer from './hastagReducer'
import tweetReducer from './tweetReducer'

const rootReducer = combineReducers({
  hastags: hastagReducer,
  tweets: tweetReducer
});

export default rootReducer;