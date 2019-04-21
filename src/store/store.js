import { createStore } from 'redux';

/*
 * Reducer
 */

const initialState = {
  userScale: (localStorage.userScale ? localStorage.userScale : process.env.USERSCALE),
  domain: '',
  validation: null,
  token: localStorage.token,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setEnv':
      return Object.assign({}, state, {
        domain: action.domain,
      });
    case 'setValidation':
      return Object.assign({}, state, {
        validation: action.validation,
      });
    case 'setToken':
      return Object.assign({}, state, {
        token: action.token,
      });
    default:
      return state;
  }
};

/*
 * Store
 */
const store = createStore(counterReducer);
export default store;
