import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ counter: counterReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
