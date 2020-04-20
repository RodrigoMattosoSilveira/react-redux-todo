import { combineReducers } from 'redux'
import { todo_reducer } from './todo-reducer'
import { visibility_filter_reducer } from './visibility-filter-reducer'

export default combineReducers({
  todo_reducer,
  visibility_filter_reducer
})
