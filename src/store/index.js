import { createStore } from 'redux';

// Reducers
const INITIAL_STATE = ['bora', 'toma', 'uma', 'somente', 'umazinha'];

function reducer(state = INITIAL_STATE, action) {
  console.log(action);
  return state;
}

// Actions

const store = createStore(reducer);

export default store;
