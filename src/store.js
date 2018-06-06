// import {createStore, applyMiddleware} from 'redux';
// import promiseMiddleware from 'redux-promise-middleware'
import { createStore, combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import reducer from "./ducks/reducer"

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  reducer,
  form: formReducer
})

const store = createStore(rootReducer)
export default store
