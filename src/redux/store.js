import {createStore, applyMiddleware} from 'redux'  
import logger from 'redux-logger'
//logger will be very nice when we will debug our code

import rootReducer from './root-reducer'

const middlewares = [logger];

const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;
