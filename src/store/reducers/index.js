import { combineReducers } from 'redux'
import userReducer from './userReducers'

export default combineReducers({
  followers: userReducer
})