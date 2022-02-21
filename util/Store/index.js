import { createStore, applyMiddleware } from "redux";
import { HYDRATE } from 'next-redux-wrapper'
import combinedReducer from "../../store";

const bindDevtools = () => {
    if (process.env.NODE_ENV !== 'production') {
      const { composeWithDevTools } = require('redux-devtools-extension')
      return composeWithDevTools();
    }
    return;
}

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
          ...state, // use previous state
          ...action.payload, // apply delta from hydration
        }
        
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

export const getStore = () => {
    return createStore(reducer, bindDevtools())
};

export default getStore;