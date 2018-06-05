import {createStore, combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form'
import reducer from './ducks/reducer';
// import promiseMiddleware from 'redux-promise-middleware'

const rootReducer = combineReducers({
   
    // ...other reducers here
    // have to pass reducers under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: reducer
  })

const store = createStore(rootReducer)
export default store