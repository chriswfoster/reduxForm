import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'
import reducer from './ducks/reducer';
// import promiseMiddleware from 'redux-promise-middleware'

const rootReducer = combineReducers({
   
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: reducer
  })


// export default createStore(reducer, applyMiddleware(promiseMiddleware()));
const store = createStore(rootReducer)
export default store