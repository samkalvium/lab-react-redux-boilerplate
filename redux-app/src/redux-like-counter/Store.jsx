import { createStore } from 'redux'
import likesReducer from './Reducer'

const store = createStore(likesReducer)

export default store;